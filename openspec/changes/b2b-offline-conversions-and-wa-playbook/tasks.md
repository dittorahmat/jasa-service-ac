## 1. Dokumentasi Google Sheet Tracker & Formula Ekspor

- [x] 1.1 Buat panduan dan arsitektur template Google Sheet `docs/google-sheet-lead-tracker-template.md` mencakup skema kolom `Leads_Masuk`, formula regex GCLID, dan formula pembentukan tab `GoogleAds_Upload`. Verifikasi file berhasil dibuat dan valid.
- [x] 1.2 Perbarui `docs/template-offline-conversions.csv` agar mencakup multi-stage conversion events (`B2B Survey Teknis Terjadwal` dan `Kontrak Maintenance B2B Deal`) beserta contoh data realistik. Verifikasi format CSV valid.

## 2. Pembaruan Playbook Google Ads & SOP Admin WhatsApp

- [x] 2.1 Perbarui `docs/google-ads-playbook.md` dengan SOP Operasional Admin WhatsApp CS (ekstraksi GCLID, penanganan pesan tanpa tag, klasifikasi B2B vs B2C).
- [x] 2.2 Tambahkan panduan konfigurasi Multi-Stage Offline Conversion Action dan Sinkronisasi Terjadwal (Scheduled Upload Google Sheets) pada `docs/google-ads-playbook.md`.
- [x] 2.3 Perbarui matriks sitelink dan ad extensions dengan integrasi halaman kalkulator teknikal dan error hub.

## 3. Validasi & Finalisasi

- [x] 3.1 Validasi seluruh dokumen Markdown dan berkas CSV menggunakan script lint/view, serta pastikan tidak ada tautan rusak atau inkonsistensi nama aksi konversi.
- [x] 3.2 Jalankan `openspec status --change "b2b-offline-conversions-and-wa-playbook"` untuk memastikan seluruh artefak spesifikasi lengkap dan valid.

