## 1. Fondasi Pelacakan & Konfigurasi

- [x] 1.1 Buat direktori aset dan file konfigurasi pelacakan `assets/js/tracking.js` dengan fungsi pembungkus konversi Google Tag (`gtag_report_conversion`), handler klik WhatsApp & telepon, serta verifikasi skrip berjalan tanpa error di console browser
- [x] 1.2 Konfigurasi nomor WhatsApp dan template pesan dinamis terpisah untuk B2B dan B2C pada `assets/js/tracking.js` dan verifikasi format URL WhatsApp `wa.me` ter-generate dengan benar

## 2. Implementasi Landing Page B2B (Komersil & Pabrik)

- [x] 2.1 Buat `index.html` dengan struktur Hero B2B, penekanan legalitas CV, sertifikasi APD/K3, dan area cakupan industri (Bekasi & Karawang) dan verifikasi tampilan responsif desktop & mobile
- [x] 2.2 Tambahkan section kapabilitas unit (Cassette, Standing, VRV/VRF, Ducting), skema kontrak berkala vs on-call, dan alur survey lokasi gratis pada `index.html`
- [x] 2.3 Tambahkan section transparansi administrasi (Faktur Pajak, PO, SPK, BAST, invoice resmi) serta FAQ pengadaan korporat pada `index.html`
- [x] 2.4 Pasang sticky header, floating action button WhatsApp B2B, dan link menuju versi B2C pada `index.html`, lalu verifikasi tombol berfungsi dan memicu event tracking

## 3. Implementasi Landing Page B2C (Residensial & Darurat)

- [x] 3.1 Buat `b2c.html` dengan fokus solusi masalah darurat (AC bocor, tidak dingin, bau), respon cepat teknisi, dan jangkauan area Bekasi, Depok, dan Karawang
- [x] 3.2 Tambahkan tabel estimasi harga transparan (cuci AC, tambah freon, perbaikan komponen), badge garansi 30 hari, dan SOP pengerjaan bersih (cover plastik dinding) pada `b2c.html`
- [x] 3.3 Pasang sticky header, floating action button WhatsApp B2C, dan link menuju versi B2B pada `b2c.html`, lalu verifikasi pengalihan dan pesan otomatis WhatsApp

## 4. Google Ads Search Campaign Blueprint

- [x] 4.1 Buat playbook strategi iklan `docs/adwords-playbook.md` yang memuat struktur Campaign B2B dan Campaign B2C beserta pengaturan lokasi (radius industri Karawang/Bekasi vs residensial Depok/Bekasi)
- [x] 4.2 Tambahkan daftar kata kunci berniat beli tinggi (Exact & Phrase match) untuk masing-masing Ad Group B2B dan B2C pada `docs/adwords-playbook.md`
- [x] 4.3 Tambahkan daftar negative keywords universal anti-boncos (loker, tutorial, skripsi, dll) pada `docs/adwords-playbook.md`
- [x] 4.4 Tulis 15 Responsive Search Ad Headlines dan 4 Descriptions berstandar CTR tinggi untuk masing-masing ad group pada `docs/adwords-playbook.md`
- [x] 4.5 Tulis panduan tahapan strategi bidding cerdas (Fase 1: Maximize Clicks -> Fase 2: Maximize Conversions -> Fase 3: Target CPA) beserta estimasi budget harian pada `docs/adwords-playbook.md`
