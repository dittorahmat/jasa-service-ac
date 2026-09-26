## ADDED Requirements

### Requirement: Server Room and PAC Emergency Troubleshooting Page
Sistem website SHALL menyediakan landing page panduan penanganan darurat ruang server / data center (`solusi-server-room-overheat-pac.html`) yang menyajikan diagnosa kenaikan temperatur, kegagalan unit PAC (Precision Air Conditioner), kontrol kelembapan (RH), dan alarm umum (Liebert, Stulz, Daikin).

#### Scenario: User visits server room overheat page
- **WHEN** pengguna atau perayap mesin pencari mengakses `/solusi-server-room-overheat-pac.html`
- **THEN** halaman menyajikan konten teknis komprehensif, Structured Data JSON-LD (`HowTo`, `TechArticle`, `FAQPage`), nomor darurat/WhatsApp dengan atribut tracking konversi, dan link canonical yang valid.

### Requirement: Peak Hour Chiller Trip Emergency Troubleshooting Page
Sistem website SHALL menyediakan landing page panduan teknis penanganan chiller industri trip High Pressure saat cuaca terik siang hari (`solusi-chiller-trip-siang-hari.html`) yang menganalisa kenaikan approach temperature, penurunan efisiensi cooling tower, dan prosedur mitigasi pembersihan kondensor berstandar K3.

#### Scenario: User visits peak hour chiller trip page
- **WHEN** pengguna atau perayap mesin pencari mengakses `/solusi-chiller-trip-siang-hari.html`
- **THEN** halaman menampilkan analisis teknis jam operasional kritis (11.00 - 14.30), panduan langkah darurat terstruktur dalam format schema `HowTo`, atribusi author E-E-A-T, dan tombol panggilan teknisi darurat 2-4 jam SLA.

### Requirement: Emergency Diagnostic XML Sitemap Registration
File `sitemap.xml` SHALL memuat URL canonical untuk kedua halaman panduan darurat baru dengan prioritas minimum 0.8 dan update lastmod terbaru.

#### Scenario: Search engine crawler parses sitemap.xml for emergency pages
- **WHEN** mesin pencari membaca `/sitemap.xml`
- **THEN** URL `/solusi-server-room-overheat-pac.html` dan `/solusi-chiller-trip-siang-hari.html` ditemukan terdaftar dengan format XML yang valid.
