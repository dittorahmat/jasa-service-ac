## Why

Pencarian B2B di sektor industri (Bekasi, Cikarang, Karawang) didominasi oleh dua jalur: (1) kebutuhan darurat pemecahan masalah teknis mesin/pendingin yang mengganggu operasional pabrik (chiller trip/overheat, ruang server panas yang mengancam uptime server), dan (2) kebutuhan kepatuhan audit & procurement.

Saat ini website CV Rifqi AC sudah memiliki landing page kawasan dan sistem chiller/AHU umum, namun belum memiliki halaman pemecahan masalah spesifik dengan search intent transaksional tinggi (*problem-solving cluster*) untuk Ruang Server/Data Center serta Troubleshooting Chiller Overheat/Trip. Selain itu, arsitektur teknis membutuhkan Breadcrumb Schema (`BreadcrumbList`), tautan silang kontekstual (*internal linking mesh*) dari halaman kawasan industri ke panduan pemecahan masalah teknis, serta registrasi lengkap pada `sitemap.xml` untuk mempercepat perayapan Googlebot.

## What Changes

- **Halaman Baru 1: `hvac-ruang-server-datacenter.html`**: Halaman pemecahan masalah pendingin ruang server, presisi suhu 18–22°C, mitigasi kelembaban (humidity control 45–60%), redundansi N+1, dan emergency call 24/7.
- **Halaman Baru 2: `solusi-chiller-overheat-trip.html`**: Halaman panduan audit & perbaikan chiller industri trip/overheat, masalah *high pressure cut-out*, scaling kondensor, chemical flushing, dan pemeliharaan berkala kompresor.
- **Peningkatan Technical SEO & Structured Data**:
  - Penambahan Schema.org `BreadcrumbList` pada halaman baru dan halaman teknis/kawasan.
  - Penambahan Schema.org `FAQPage` & `HVACBusiness` yang relevan pada kedua halaman baru.
  - Pembaruan `sitemap.xml` untuk mendaftarkan URL baru dengan prioritas crawl yang sesuai.
- **Internal Linking Mesh**: Menambahkan tautan kontekstual antara halaman kawasan industri (MM2100, Jababeka, KIIC, dll.) dengan halaman pemecahan masalah teknis ini.

## Capabilities

### New Capabilities
- `high-intent-solutions`: Halaman landing spesifik solusi teknis kritis (Ruang Server & Chiller Overheat) dengan schema data terstruktur dan konversi darurat.

### Modified Capabilities
- `b2b-seo`: Penambahan persyaratan Schema BreadcrumbList dan indexing halaman problem-solving ke sitemap.xml.

## Impact

- Penambahan file HTML: `hvac-ruang-server-datacenter.html` dan `solusi-chiller-overheat-trip.html`.
- Modifikasi file: `sitemap.xml`, serta modul/section rekomendasi kontekstual pada halaman terkait.
- Tidak ada breaking changes pada sistem pelacakan Google Ads (`tracking.js`) maupun stylesheet Tailwind CSS.
