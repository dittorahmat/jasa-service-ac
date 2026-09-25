## Why

Sektor industri Farmasi (CPOB / ISO 14644) dan Makanan & Minuman (F&B / HACCP / FSSC 22000) di kawasan industri Cikarang (Delta Silicon, Jababeka) dan Karawang (KIIC, Suryacipta) memiliki standar tata udara ketat dan nilai kontrak pemeliharaan berkala (LTV) yang tinggi. Saat ini website CV Rifqi AC belum memiliki landing page khusus sektor industri ini yang memenuhi standar pesan kepatuhan audit BPOM & sanitasi, serta Google Ads playbook belum memiliki Ad Group khusus untuk menangkap keyword bertarget tinggi ini.

## What Changes

- **Halaman Baru 1: `hvac-industri-farmasi-cleanroom.html`**: Landing page khusus tata udara farmasi, cleanroom class 100 - 100k, pressure cascade, penggantian filter HEPA H13/H14, dan dokumen laporan kualifikasi HVAC siap audit BPOM.
- **Halaman Baru 2: `hvac-industri-makanan-minuman.html`**: Landing page HVAC pabrik makanan & minuman, mitigasi kondensasi/jamur di ruang kemas, kontrol kelembaban ruang bubuk, pembersihan koil pendingin food-grade safe, dan kepatuhan HACCP.
- **Pembaruan Aset Google Ads**:
  - Update `docs/google-ads-playbook.md` dengan 2 Ad Group baru (STAG): *AG - HVAC Industri Farmasi* dan *AG - HVAC Pabrik Makanan & Minuman*.
  - Update `docs/bulk-b2b-keywords.csv` dengan kata kunci frase & exact untuk Farmasi & F&B.
  - Update `docs/bulk-b2b-ads.csv` dengan teks iklan RSA berfokus pada kepatuhan audit BPOM, HACCP, e-Faktur PPN, dan teknisi bersertifikat K3.
- **Pembaruan Technical SEO**:
  - Penambahan Schema `HVACBusiness`, `BreadcrumbList`, dan `FAQPage` di kedua halaman baru.
  - Pendaftaran kedua URL baru ke `sitemap.xml`.
  - Penambahan tautan silang internal linking di halaman kawasan terkait.

## Capabilities

### New Capabilities
- `industry-sector-solutions`: Landing page spesifik vertikal industri manufaktur Farmasi (CPOB) dan Makanan & Minuman (HACCP) dengan standar kepatuhan audit.

### Modified Capabilities
- `b2b-seo`: Penambahan entitas schema dan indexing halaman sektor industri ke dalam sitemap.

## Impact

- Penambahan file: `hvac-industri-farmasi-cleanroom.html`, `hvac-industri-makanan-minuman.html`.
- Pembaruan berkas: `sitemap.xml`, `docs/google-ads-playbook.md`, `docs/bulk-b2b-keywords.csv`, `docs/bulk-b2b-ads.csv`.
- Rebuild Tailwind CSS (`npm run build:css`).
