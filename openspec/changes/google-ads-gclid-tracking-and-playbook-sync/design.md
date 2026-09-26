## Context

Lihat `proposal.md` untuk latar belakang dan motivasi.
Website CV Rifqi AC menggunakan script client-side murni di `assets/js/tracking.js` untuk mengelola event konversi Google Ads dan memformat parameter URL WhatsApp. Kita perlu meningkatkan keandalan atribusi lead dengan menangkap Google Click ID (`gclid`, `wbraid`, `gbraid`), menampilkannya secara ringkas di WhatsApp, serta menyinkronkan seluruh dokumen periklanan dan template impor konversi offline.

## Goals / Non-Goals

**Goals:**
- Menyediakan fungsi penyimpanan parameter kampanye dan click ID yang persisten melintasi navigasi tab dan sesi peramban (`sessionStorage` + Cookie 30 hari).
- Menyusun format teks atribusi WhatsApp yang ringkas, rapi, dan mudah dibaca oleh admin/sales serta memuat GCLID/BRAID.
- Melampirkan GCLID pada pengiriman formulir RFQ Desktop Modal.
- Menyinkronkan materi iklan Responsive Search Ads (RSA) untuk 10 Ad Group B2B baru ke dalam `docs/google-ads-playbook.md`.
- Menyediakan format CSV impor konversi offline Google Ads (`docs/template-offline-conversions.csv`) beserta SOP operasionalnya.

**Non-Goals:**
- Membangun backend CRM atau database server-side baru (penyimpanan lead tetap mengandalkan penerimaan langsung via WhatsApp & RFQ modal webhook/email fallback).
- Menggantikan Google Tag Manager atau analitik pihak ketiga yang kompleks.

## Decisions

### 1. Dual-Storage Strategy (sessionStorage + Cookie Fallback)
- **Keputusan**: Menyimpan parameter kampanye di `sessionStorage` (untuk isolasi tab) dan cookie dengan `max-age=2592000` (30 hari, SameSite=Lax).
- **Rasional**: Pengunjung B2B sering membuka website di pagi hari, menyimpan URL, lalu baru menghubungi sore atau keesokan harinya setelah rapat internal manajemen. Cookie memastikan GCLID tidak hilang saat sesi browser ditutup.
- **Alternatif yang ditolak**: Hanya `sessionStorage` (hilang saat tab ditutup) atau hanya `localStorage` (kurang kompatibel dengan beberapa mode iframe/webview).

### 2. Formatted GCLID Display on WhatsApp
- **Keputusan**: Memotong panjang GCLID jika terlalu panjang atau menampilkannya secara elegan di baris referensi WhatsApp:
  `[Ref Iklan: google | b2b-mm2100 | KW: service chiller | GCLID: EAIa...8kQ]`
- **Rasional**: GCLID lengkap bisa mencapai 100 karakter yang membuat pesan WA terlihat berantakan bagi calon klien. Menampilkan format ringkas atau ID lengkap terstruktur menjaga estetika sembari tetap dapat diverifikasi. Namun untuk offline import, simpan nilai penuh di RFQ payload dan sediakan GCLID penuh jika disalin.

### 3. Google Ads Playbook & Offline Conversion Template Sync
- **Keputusan**: Menambahkan Bab Khusus di `docs/google-ads-playbook.md` mengenai alur Offline Conversion Tracking (OCT), ditambah berkas `docs/template-offline-conversions.csv` sesuai standar Google Ads Conversions Upload (Timezone, Date format yyyy-mm-dd hh:mm:ss, Value, Currency).
- **Rasional**: Memudahkan pemilik bisnis atau staf admin CV Rifqi AC untuk langsung mengunggah data deal tanpa harus mempelajari dokumentasi teknis Google Ads yang rumit.

## Risks / Trade-offs

- **[Risk] Ad-blocker / Safari ITP membatasi cookie pihak pertama** → **Mitigasi**: Gunakan `sessionStorage` sebagai jalur utama saat navigasi sesi aktif, cookie hanya sebagai fallback.
- **[Risk] Pesan WhatsApp terasa terlalu teknis jika GCLID dicantumkan penuh** → **Mitigasi**: Cantumkan di baris paling akhir setelah pesan utama kebutuhan klien dengan label `[Ref Iklan: ...]` yang rapi.
