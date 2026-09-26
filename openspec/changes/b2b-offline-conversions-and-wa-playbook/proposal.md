## Why

Saat ini seluruh lead masuk ditangani 100% via WhatsApp Admin CS. Website sudah menangkap parameter atribusi iklan (`GCLID`, `utm_campaign`, `utm_term`, `privacy IDs`), namun admin operasional belum memiliki SOP praktis non-teknis untuk mengekstrak dan mencatat GCLID tersebut ke format spreadsheet yang terstandarisasi. Akibatnya, Google Ads beroperasi secara "blind" tanpa data offline conversion, memperlakukan lead receh/junk sama dengan kontrak B2B deal bernilai puluhan juta rupiah.

Perubahan ini diperlukan untuk menutup siklus (closed-loop) antara chat WhatsApp admin dengan Google Ads Offline Conversion Tracking (OCT) melalui sistem pencatatan Google Sheets terstandarisasi dan playbook operasional yang mudah dijalankan tim sales/admin.

## What Changes

- **Pembaruan Panduan Google Ads Playbook (`docs/google-ads-playbook.md`)**:
  - Penambahan Bagian SOP Operasional WhatsApp Admin: panduan 1 menit menyalin parameter atribusi iklan, cara menangani lead jika calon klien menghapus teks `[Ref Iklan: ...]`, serta kualifikasi lead B2B vs B2C.
  - Multi-Stage Offline Conversion Action Matrix: pemisahan konversi antara `B2B_Survey_Onsite` (Closing survey pabrik / micro-conversion) dan `Kontrak_HVAC_Deal` (PO / SPK ditandatangani dengan nilai nominal kontrak).
  - Panduan Sinkronisasi Terjadwal (Scheduled Upload via Google Sheets) langsung ke Google Ads Uploads tanpa perlu unggah CSV manual harian.
- **Pembaruan Template CSV Impor Konversi (`docs/template-offline-conversions.csv`)**:
  - Contoh data multi-stage konversi (`B2B_Survey_Onsite` dan `Kontrak_HVAC_Deal`) lengkap dengan nilai bobot dan format waktu ISO `yyyy-MM-dd HH:mm:ss+07:00`.
- **Pembuatan Panduan & Template Google Sheet Lead Tracker (`docs/google-sheet-lead-tracker-template.md`)**:
  - Desain tabel spreadsheet operasional admin dengan formula otomatis regex ekstrak GCLID dari teks chat WA dan formatting tanggal otomatis yang siap dihubungkan langsung ke Google Ads Scheduled Uploads.

## Capabilities

### New Capabilities
- `offline-conversion-pipeline`: Dokumentasi, template sheet, dan prosedur operasional standar untuk closed-loop tracking offline conversion Google Ads dari WhatsApp admin ke Google Ads.

### Modified Capabilities
None.

## Impact

- Mempengaruhi dokumentasi operasional bisnis dan Google Ads di `docs/`.
- Memperjelas SOP admin WhatsApp tanpa mengubah runtime tracking yang sudah stabil di `assets/js/tracking.js`.
- Tidak ada breaking changes pada kode frontend.
