## ADDED Requirements

### Requirement: BreadcrumbList Structured Data for Technical Silos
Sistem website SHALL mengimplementasikan JSON-LD `BreadcrumbList` pada halaman pemecahan masalah dan kluster teknis untuk menyajikan jalur hierarki jelas bagi mesin pencari (Home > Solusi Industri > Topik).

#### Scenario: Search engine parses breadcrumb schema on high-intent pages
- **WHEN** perayap web membaca tag schema di `hvac-ruang-server-datacenter.html` atau `solusi-chiller-overheat-trip.html`
- **THEN** ditemukan struktur `@type: BreadcrumbList` yang valid dengan item list terurut merepresentasikan posisi hierarkis halaman.

### Requirement: Search Engine Indexing for Problem-Solving Pages in Sitemap
Sistem website SHALL mendaftarkan URL baru `hvac-ruang-server-datacenter.html` dan `solusi-chiller-overheat-trip.html` pada `sitemap.xml` dengan prioritas crawl 0.85 dan frekuensi pembaruan mingguan.

#### Scenario: Search engine crawler inspects sitemap.xml for new solution pages
- **WHEN** perayap bot membaca file `/sitemap.xml`
- **THEN** kedua URL halaman solusi pemecahan masalah teknis ditemukan dengan tag `<loc>`, `<lastmod>`, dan `<priority>` 0.85.
