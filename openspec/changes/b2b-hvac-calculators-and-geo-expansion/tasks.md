## 1. AI Citation Layer & Machine-Readable Context

- [x] 1.1 Buat berkas `llms.txt` dan `llms-full.txt` di root domain yang mematuhi standar llmstxt.org, menyajikan profil entitas legalitas, kapabilitas teknis (Chiller, AHU, VRV), formula kalkulator, dan rujukan klaster industri.
- [x] 1.2 Perbarui `robots.txt` untuk menambahkan deklarasi izin perayapan bagi crawler AI pencarian (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Google-Extended`, `Claude-Web`) dan rujukan lokasi `llms.txt`.

## 2. Interactive B2B Engineering Calculators

- [x] 2.1 Bangun halaman `kalkulator-hvac-industri.html` lengkap dengan kalkulator Tonase Chiller (TR, kW, BTU) dan kalkulator Cleanroom Air Changes per Hour (ACH & CFM).
- [x] 2.2 Integrasikan formula perhitungan interaktif client-side murni dengan tombol CTA dinamis yang mem-prefill ringkasan hasil kalkulasi langsung ke tautan WhatsApp CV Rifqi AC.
- [x] 2.3 Tambahkan JSON-LD structured data bertipe `WebApplication` dan `TechArticle` pada `kalkulator-hvac-industri.html`.

## 3. Ekspansi Klaster Kawasan Industri Baru

- [x] 3.1 Buat landing page `hvac-knic-karawang.html` (Karawang New Industry City - EV Battery & High-Tech) dengan standar `design-taste-frontend`, metadata SEO, dan schema `HVACBusiness`.
- [x] 3.2 Buat landing page `hvac-artha-industrial-hill.html` (Artha Industrial Hill Karawang Barat - Industri Berat & Farmasi) dengan standar anti-slop dan e-Faktur PPN messaging.
- [x] 3.3 Buat landing page `hvac-sentul-bogor.html` (Sentul Industrial Estate - F&B, Packaging & Logistik) dengan standar responsive layout dan K3 messaging.
- [x] 3.4 Buat landing page `hvac-modern-cikande.html` (Kawasan Industri Modern Cikande Serang - Kimia, Baja & Food Processing Koridor Barat) dengan SLA response time gerbang tol.

## 4. Integrasi DTR, Tracking & Sitemap

- [x] 4.1 Perbarui `assets/js/tracking.js` dengan menambahkan kamus kawasan baru (`knic`, `aih`, `sentul`, `cikande`) pada `DTR_DICTIONARY` dan pesan template WhatsApp baru.
- [x] 4.2 Daftarkan seluruh URL baru (`kalkulator-hvac-industri.html`, 4 klaster kawasan baru) ke dalam `sitemap.xml` dengan tanggal lastmod terbaru.
- [x] 4.3 Jalankan kompilasi CSS Tailwind (`npm run build:css`) dan lakukan verifikasi tampilan serta fungsionalitas kalkulator dan tracking.

## 5. Pembaruan Google Ads Playbook & Bulk Upload CSV

- [x] 5.1 Perbarui `docs/google-ads-playbook.md` dengan menambahkan pemetaan Ad Groups baru (KNIC, Artha Industrial Hill, Sentul, Modern Cikande, dan Kalkulator HVAC) lengkap dengan Final URL ber-DTR & UTM.
- [x] 5.2 Perbarui `docs/bulk-b2b-keywords.csv` dengan baris keyword penargetan baru untuk masing-masing klaster kawasan dan kata kunci kalkulator engineering B2B.
- [x] 5.3 Perbarui `docs/bulk-b2b-ads.csv` dengan baris teks iklan Responsive Search Ads (RSA) baru yang disesuaikan dengan profil spesifik masing-masing kawasan baru dan fitur kalkulator.
