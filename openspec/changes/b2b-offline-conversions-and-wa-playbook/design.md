## Context

Lihat `proposal.md` untuk latar belakang dan motivasi. Saat ini pelacakan klik, GCLID, dan pengiriman pesan WhatsApp sudah berjalan otomatis melalui `assets/js/tracking.js`. Desain ini merinci arsitektur alur data dari penerimaan pesan di WhatsApp oleh admin, pencatatan di Google Sheets operasional, hingga sinkronisasi otomatis/manual ke Google Ads Offline Conversions.

## Goals / Non-Goals

**Goals:**
- Menyediakan arsitektur spreadsheet Google Sheets yang memisahkan tab operasional admin (human-friendly) dengan tab ekspor Google Ads (machine-ready).
- Menyediakan formula siap pakai untuk parsing otomatis GCLID dan format tanggal waktu ISO `+07:00`.
- Memperbarui playbook strategi Google Ads dengan SOP operasional, call assets, sitelink matrix, dan konfigurasi scheduled upload.

**Non-Goals:**
- Membangun backend database kustom atau integrasi REST API berbayar (tetap mengutamakan solusi Google Sheets native + CSV yang 0 biaya langganan).
- Mengubah alur DOM atau JavaScript pelacakan di frontend.

## Decisions

### 1. Desain Arsitektur Two-Sheet Pattern (Google Sheets)
- **Keputusan**: Menggunakan 2 tab di Google Sheets:
  - Tab 1: `Leads_Masuk` (Kolom: Tanggal, Nama PIC, Nama Perusahaan, Lokasi/Kawasan, Nomor WA, Kebutuhan Layanan, Raw Pesan WA / GCLID, Status Prospek, Nilai Kontrak).
  - Tab 2: `GoogleAds_Upload` (Kolom resmi: `Google Click ID`, `Conversion Name`, `Conversion Time`, `Conversion Value`, `Conversion Currency`).
- **Alasan**: Admin CS tidak boleh dibebani dengan format ISO time atau penulisan nama konversi yang kaku. Tab 2 menggunakan formula (`QUERY` / `ARRAYFORMULA`) yang otomatis memfilter hanya baris yang berstatus `Survey Terjadwal` atau `Deal Kontrak`.
- **Alternatif yang Dipertimbangkan**: Mengisi CSV manual baris per baris. Ditolak karena rawan typo dan human error format tanggal.

### 2. Multi-Stage Conversion Action
- **Keputusan**: Mendaftarkan 2 konversi offline di Google Ads:
  1. `B2B Survey Teknis Terjadwal` (Default value: Rp 500.000, indikasi lead qualified).
  2. `Kontrak Maintenance B2B Deal` (Value dinamis sesuai nilai SPK riil, misal Rp 45.000.000).
- **Alasan**: Siklus tender B2B HVAC membutuhkan waktu 2–6 minggu. Jika hanya mengandalkan deal final, volume data terlalu lambat untuk mengaktifkan smart bidding algoritma Google. Dengan adanya stage survey teknis, algoritma Google mendapatkan feedback cepat dalam 24–48 jam setelah lead masuk.

### 3. Sinkronisasi Google Sheets Terjadwal (Scheduled Upload)
- **Keputusan**: Mendokumentasikan fitur bawaan Google Ads *Schedules* yang membaca URL Google Sheet (ekspor CSV) setiap 24 jam.
- **Alasan**: Mengeliminasi kebutuhan admin melakukan upload manual berkala. Setelah admin mengubah status lead di sheet, Google Ads otomatis mengambil data pada jadwal harian.

## Risks / Trade-offs

- **[Risk] Calon pelanggan menghapus tag `[Ref Iklan: ...]` sebelum klik kirim WA**
  &rarr; **Mitigasi**: Sediakan SOP bagi admin untuk melakukan kualifikasi sumber secara natural saat menyapa pelanggan, dan jelaskan bahwa sistem web juga menyimpan cookie fallback jika user mengirim RFQ lewat form web.
- **[Risk] GCLID kedaluwarsa jika siklus tender melebihi 90 hari**
  &rarr; **Mitigasi**: Stage `B2B Survey Teknis Terjadwal` memastikan konversi pertama ter-upload dalam rentang 1–7 hari (jauh di bawah batas 90 hari Google Ads click attribution window).
