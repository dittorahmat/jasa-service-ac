## 1. Tracking Engine & Pre-filled Messages

- [x] 1.1 Perbarui `assets/js/tracking.js` untuk menambahkan dictionary pesan WhatsApp baru (`b2bChiller`, `b2bAHU`, `b2bVRV`, `b2cGrandWisata`, `b2cHarapanIndah`, `b2cSummarecon`) dan verifikasi script berjalan tanpa sintaks error.

## 2. B2B Industrial System Landing Pages

- [x] 2.1 Buat halaman `service-chiller-industri.html` lengkap dengan hero section anti-slop, technical breakdown (descaling kondensor, oil & freon recovery, vibration analysis), trust badge K3/OSS, schema markup `HVACBusiness`, dan data-wa-type `b2bChiller`.
- [x] 2.2 Buat halaman `maintenance-ahu-cleanroom.html` dengan konten spesialisasi HVAC CPOB, uji filter HEPA, air balancing, sertifikasi K3, schema markup, dan data-wa-type `b2bAHU`.
- [x] 2.3 Buat halaman `service-ac-vrv-vrf.html` dengan konten multi-split inverter gedung, diagnostik alarm Daikin/Mitsubishi, schema markup, dan data-wa-type `b2bVRV`.

## 3. B2C Residential Micro-Location Landing Pages

- [x] 3.1 Buat halaman `cuci-ac-grand-wisata.html` dengan visual Handy Blue/Emerald, garansi dingin 30 hari, tanpa DP, SOP cover pelindung dinding, schema `HVACBusiness`, dan data-wa-type `b2cGrandWisata`.
- [x] 3.2 Buat halaman `service-ac-harapan-indah.html` dengan konten mikro-lokasi Harapan Indah & Medan Satria, tarif transparan, schema `HVACBusiness`, dan data-wa-type `b2cHarapanIndah`.
- [x] 3.3 Buat halaman `service-ac-summarecon-bekasi.html` dengan konten hunian modern & ruko Summarecon Bekasi, jaminan teknisi sopan, schema `HVACBusiness`, dan data-wa-type `b2cSummarecon`.

## 4. CSS Compilation & Sitemap Update

- [x] 4.1 Jalankan `npm run build:css` dan pastikan seluruh utility class Tailwind dari 6 file HTML baru terkompilasi ke `assets/css/style.css`.
- [x] 4.2 Perbarui `sitemap.xml` untuk mendaftarkan 6 URL baru dengan canonical link dan lastmod yang valid.

## 5. Google Ads Playbook & Bulk CSV Synchronization

- [x] 5.1 Perbarui `docs/google-ads-playbook.md` dengan menambahkan pemetaan arsitektur Ad Groups baru untuk Chiller, AHU, VRV/VRF, Grand Wisata, Harapan Indah, dan Summarecon.
- [x] 5.2 Perbarui `docs/bulk-b2b-keywords.csv` dan `docs/bulk-b2b-ads.csv` dengan baris keyword & RSA copy baru yang relevan dengan 3 sistem industri.
- [x] 5.3 Perbarui `docs/bulk-b2c-keywords.csv` dan `docs/bulk-b2c-ads.csv` dengan baris keyword & RSA copy baru yang relevan dengan 3 perumahan residensial.
