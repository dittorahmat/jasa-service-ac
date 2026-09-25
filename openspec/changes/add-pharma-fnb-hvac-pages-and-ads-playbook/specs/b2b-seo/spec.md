## ADDED Requirements

### Requirement: Industry Sector Pages Indexing & Schema
Sistem website SHALL mendaftarkan `hvac-industri-farmasi-cleanroom.html` dan `hvac-industri-makanan-minuman.html` pada `sitemap.xml` dengan prioritas 0.85 serta melengkapinya dengan schema JSON-LD `BreadcrumbList`, `FAQPage`, dan `HVACBusiness`.

#### Scenario: Search engine bot crawls industry sector pages
- **WHEN** bot mesin pencari menginspeksi halaman vertikal sektor industri baru
- **THEN** URL ditemukan di sitemap.xml dan validasi schema mengonfirmasi struktur navigasi hierarki serta FAQ yang valid.
