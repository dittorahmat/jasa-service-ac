## Why

Setelah mengamankan klaster kawasan industri inti (MM2100, Jababeka, KIIC, EJIP, Suryacipta, Delta Silicon, GIIC) dan sistem konversi iklan (DTR + RFQ Desktop Modal), langkah pertumbuhan berikutnya membutuhkan terobosan pada dua pilar utama:
1. **Topical Authority & Utilitas Teknis (GEO / AI Search Engine Optimization):** Search engine masa kini (Google Gemini, Perplexity, ChatGPT Search) memprioritaskan entitas bisnis yang menyediakan alat utilitas interaktif serta konteks mesin terstruktur (`llms.txt`). Engineer dan GA pabrik membutuhkan kalkulator estimasi cepat (Tonase Chiller TR & Cleanroom Air Changes per Hour / ACH) sebelum memutuskan mengundang vendor untuk survei lapangan.
2. **Ekspansi Koridor Industri Baru:** Fasilitas manufaktur di koridor Karawang New Industry City (KNIC), Artha Industrial Hill (AIH), Sentul Industrial Estate (Bogor), dan Kawasan Industri Modern Cikande (Serang) merupakan pasar potensial berdaya beli tinggi (ekosistem baterai EV, data center, farmasi, F&B, dan kimia) yang membutuhkan kontraktor HVAC ber-K3 dan PKP resmi.

Menggabungkan kedua pilar ini menciptakan ekosistem B2B yang komprehensif: engineer mendapatkan alat estimasi instan, LLM mengutip CV Rifqi AC sebagai rujukan teknis, dan landing page klaster baru langsung menangkap permintaan survei dan penawaran resmi.

## What Changes

- **B2B Engineering Interactive Calculators (`kalkulator-hvac-industri.html`):**
  - Kalkulator Tonase Chiller (TR / kW / BTU) berbasis debit air (GPM / m³/h) dan Delta T (°C / °F), atau estimasi volume ruangan & beban thermal mesin.
  - Kalkulator Air Changes per Hour (ACH) & Airflow (CFM / CMH) untuk ruang bersih/cleanroom berdasarkan klasifikasi ISO 14644 / CPOB BPOM (ISO 5 s/d ISO 8).
  - Tombol CTA dinamis: *"Kirim Hasil Perhitungan ke WhatsApp Tim Engineering"* untuk verifikasi survei lapangan secara otomatis.
- **Ekspansi Landing Page Klaster Kawasan Industri Baru:**
  - `hvac-knic-karawang.html` (Karawang New Industry City - EV battery & high-tech manufacturing).
  - `hvac-artha-industrial-hill.html` (Artha Industrial Hill Karawang Barat - heavy industry & pharmaceutical).
  - `hvac-sentul-bogor.html` (Sentul Industrial Estate - F&B, packaging, logistics & light industry).
  - `hvac-modern-cikande.html` (Kawasan Industri Modern Cikande Serang - chemical, steel, food processing).
- **AI Citation & Machine-Readable Context Layer:**
  - Pembuatan file `llms.txt` di root domain yang merangkum entitas resmi CV Rifqi AC, standar kepatuhan K3/CSMS/e-Faktur, kapabilitas teknis (Chiller, AHU, VRV, Cleanroom), dan direktori tautan ke kalkulator serta klaster kawasan.
  - Implementasi schema `WebApplication` / `SoftwareApplication` dan `TechArticle` pada halaman kalkulator.
- **Integrasi Tracking & DTR:**
  - Penambahan kamus kawasan baru (`knic`, `aih`, `sentul`, `cikande`) ke `DTR_DICTIONARY` di `assets/js/tracking.js`.
  - Penambahan template pesan WhatsApp baru untuk masing-masing klaster dan kalkulator.
  - Pembaruan `sitemap.xml` dengan URL kalkulator dan 4 klaster baru.
- **Sinkronisasi Google Ads Playbook & Bulk Upload (CSV):**
  - Pembaruan `docs/google-ads-playbook.md` dengan pemetaan Ad Groups baru (KNIC, Artha Industrial Hill, Sentul, Modern Cikande, dan Kalkulator HVAC) lengkap dengan Final URL ber-DTR & UTM.
  - Pembaruan `docs/bulk-b2b-keywords.csv` dan `docs/bulk-b2b-ads.csv` dengan baris keyword & teks iklan RSA baru siap upload ke Google Ads Editor / antarmuka web.

## Capabilities

### New Capabilities
- `b2b-engineering-calculators`: Menyediakan halaman alat bantu hitung beban pendinginan (Chiller TR) dan sirkulasi tata udara bersih (Cleanroom ACH) interaktif berbasis browser dengan integrasi lead generation WhatsApp.
- `b2b-geo-expansion-new-clusters`: Menyediakan landing page hiper-lokal berstandar agensi anti-slop untuk kawasan industri KNIC Karawang, Artha Industrial Hill, Sentul Bogor, dan Modern Cikande Serang.
- `ai-engine-citation-layer`: Menyediakan endpoint machine-readable `llms.txt` dan schema data terstruktur untuk optimalisasi citasi AI Search Engine (Google Gemini, Perplexity, ChatGPT).

### Modified Capabilities
- `b2b-seo`: Memperluas cakupan area terlayani (`areaServed`) di JSON-LD dan sitemap XML untuk menyertakan kawasan industri baru dan halaman kalkulator teknis.

## Impact

- **Frontend & Pages:** Penambahan 5 file HTML baru (`kalkulator-hvac-industri.html`, `hvac-knic-karawang.html`, `hvac-artha-industrial-hill.html`, `hvac-sentul-bogor.html`, `hvac-modern-cikande.html`).
- **SEO & Root Assets:** Penambahan `llms.txt`, pembaruan `sitemap.xml`.
- **Scripts:** Penambahan kamus DTR dan preset pesan WhatsApp pada `assets/js/tracking.js`.
- **Google Ads Assets:** Penambahan entri Ad Groups, keywords, dan RSA di `docs/google-ads-playbook.md`, `docs/bulk-b2b-keywords.csv`, dan `docs/bulk-b2b-ads.csv`.
- **Styling:** Menjalankan `npm run build:css` untuk mengompilasi utility class baru pada formulir kalkulator dan komponen kartu klaster baru.
- **Non-breaking:** Semua fungsionalitas tracking konversi dan landing page lama tetap berjalan tanpa gangguan.
