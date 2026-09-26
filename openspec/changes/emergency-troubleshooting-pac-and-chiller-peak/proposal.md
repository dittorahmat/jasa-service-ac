## Why

Saat terjadi insiden kritis pada sistem pendingin gedung atau pabrik di kawasan industri Bekasi, Cikarang, dan Karawang, pencarian darurat dilakukan dengan kata kunci gejala yang sangat spesifik. Dua insiden paling sering dan berisiko kerugian tertinggi adalah:
1. **Ruang Server / Data Center Overheating**: Suhu melonjak di atas 24°C atau kelembapan tinggi akibat alarm unit Precision Air Conditioning (PAC) mati, mengancam server down.
2. **Chiller High Pressure Cut-Out Saat Jam Beban Puncak (11.00 - 14.30)**: Chiller pabrik trip mati mendadak saat cuaca terik akibat penumpukan kerak kondensor atau laju sirkulasi air cooling tower tersendat, menghentikan jalur produksi.

Penyediaan dua landing page diagnostik darurat ini menangkap traffic organik intensi tinggi (search intent "emergency troubleshooting") dan mengonversinya langsung menjadi panggilan darurat / panggilan survei ber-SLA 2-4 jam.

## What Changes

1. **Pembuatan Halaman Diagnostik Server Room Overheat (`solusi-server-room-overheat-pac.html`)**:
   - Diagnosa kenaikan suhu server >24°C, kegagalan unit PAC primer-sekunder (N+1 redundancy failover), dan kontrol kelembapan (RH).
   - Penjelasan alarm umum unit PAC (Liebert Vertiv, Stulz, Daikin).
   - Schema JSON-LD: `HowTo` (Mitigasi darurat sebelum teknisi tiba), `TechArticle` (E-E-A-T HVAC Engineering Team), dan `FAQPage`.
   - CTAs: Hotline darurat 24 jam & WhatsApp dispatch ber-SLA respons 2 jam di koridor industri.

2. **Pembuatan Halaman Diagnostik Chiller Trip Siang Hari (`solusi-chiller-trip-siang-hari.html`)**:
   - Analisa mendalam kenapa chiller beroperasi normal di pagi hari namun trip alarm High Pressure (HP) tepat antara pukul 11.00 hingga 14.30.
   - Pembedahan faktor approach temperature, penurunan efisiensi cooling tower di wet-bulb tinggi, sirip kondensor terdebu, dan beban puncak pabrik.
   - Schema JSON-LD: `HowTo` (Langkah pengecekan lapangan aman tanpa merusak kompresor), `TechArticle`, dan `FAQPage`.
   - CTAs: Request tim teknisi darurat untuk penanganan scaling/flushing kondensor dan balancing aliran air.

3. **Integrasi Sitemap & Navigasi**:
   - Mendaftarkan kedua URL baru ke `sitemap.xml` dengan prioritas 0.9.
   - Menyertakan link silang kontekstual ke `kalkulator-hvac-industri.html`, `panduan-kode-error-ac-industri.html`, dan `index.html`.

## Capabilities

### Modified Capabilities
- `b2b-seo`: Menambahkan requirement spesifik untuk halaman emergency troubleshooting cluster (PAC Ruang Server & Chiller Peak Hour Trip) dengan integrasi Rich Snippets dan sitemap.

## Impact

- Penambahan 2 file HTML baru:
  - `solusi-server-room-overheat-pac.html`
  - `solusi-chiller-trip-siang-hari.html`
- Pembaruan `sitemap.xml` untuk mendaftarkan URL canonical baru.
- Penambahan tautan internal yang memperkuat semantic cluster SEO B2B di koridor industri inti.
