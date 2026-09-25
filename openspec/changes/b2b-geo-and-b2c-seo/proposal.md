## Why

Untuk memperluas aliran leads organik ke tingkat maksimal, CV Rifqi AC membutuhkan dua mesin pertumbuhan SEO:
1. **Mesin B2B (Target Kawasan Industri):** Pencarian B2B di Google sangat dipengaruhi oleh relevansi lokasi spesifik (*geo-relevance*). Manajer GA dan Engineering mencari vendor dengan query berbasis kawasan industri (misal: *"maintenance ac pabrik jababeka cikarang"* atau *"vendor hvac kiic karawang"*). Membuat landing page khusus untuk klaster industri Cikarang dan Karawang akan mendominasi pencarian lokal ini.
2. **Mesin B2C (Target Residensial & Perumahan):** Halaman `b2c.html` yang sudah ada belum memiliki kelengkapan teknis SEO on-page (canonical tag, meta OpenGraph/Twitter cards, dan pengayaan JSON-LD residential) untuk bersaing memperebutkan ranking service AC rumah di area Bekasi, Tambun, Cikarang, dan Depok.

## What Changes

- **Halaman Klaster Industri B2B Baru:**
  - `kawasan-industri-cikarang.html`: Landing page B2B terfokus untuk Kawasan Industri Jababeka, MM2100, EJIP, GIIC Deltamas, dan Delta Silicon.
  - `kawasan-industri-karawang.html`: Landing page B2B terfokus untuk Kawasan Industri KIIC, Surya Cipta, dan KIM Karawang.
  - Mengintegrasikan internal linking silang antara `index.html` dan halaman kawasan industri baru.
- **Pembaruan Sitemap:**
  - Mendaftarkan URL kedua halaman kawasan industri baru ke dalam `sitemap.xml`.
- **Optimasi On-Page SEO B2C (`b2c.html`):**
  - Menambahkan `<link rel="canonical" href="https://jasa-service-ac.tech1solusi.workers.dev/b2c.html">`.
  - Melengkapi meta tag OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`) dan Twitter card.
  - Memperkaya skema JSON-LD `HVACBusiness` khusus residential (garansi servis 30 hari, tanpa DP, cover pelindung dinding) dan FAQPage.

## Capabilities

### New Capabilities
- `b2c-seo`: Standarisasi metadata SEO on-page, canonical link, social sharing, dan skema JSON-LD untuk landing page residential B2C.
- `industrial-cluster-pages`: Pembuatan dan integrasi halaman arahan (landing pages) khusus klaster kawasan industri manufaktur (Cikarang & Karawang) dengan kepatuhan K3 dan SLA respon lokal.

### Modified Capabilities
<!-- None -->

## Impact

- **File Baru:** `kawasan-industri-cikarang.html`, `kawasan-industri-karawang.html`.
- **File Termodifikasi:** `b2c.html`, `index.html`, `sitemap.xml`.
- **Dependensi/Desain:** Menggunakan token Tailwind CSS (`corporate` & `handy`) dan layout berstandar `design-taste-frontend` serta mematuhi `AGENTS.md`.
