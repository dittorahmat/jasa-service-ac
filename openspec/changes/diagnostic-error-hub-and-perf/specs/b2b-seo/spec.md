## MODIFIED Requirements

### Requirement: Search Engine Crawling and Indexing Foundation
Sistem website SHALL menyediakan file `robots.txt` dan `sitemap.xml` di root domain untuk memandu perayapan mesin pencari (Googlebot) dan memastikan seluruh halaman utama terindeks dengan prioritas yang tepat.

#### Scenario: Search engine bot requests sitemap.xml
- **WHEN** bot mesin pencari mengakses `/sitemap.xml`
- **THEN** sistem mengembalikan XML sitemap yang valid dengan daftar URL canonical, menyertakan halaman B2B (`/`), halaman kawasan industri, halaman B2C, serta halaman panduan teknis (`/panduan-kode-error-ac-industri.html`) dengan prioritas 0.85 dan lastmod terbaru.

## ADDED Requirements

### Requirement: Technical Problem-Solving Internal Linking
Halaman utama B2B (`index.html`) SHALL menyediakan tautan rujuk cepat ke halaman panduan kode error industri pada bagian navigasi atau footer untuk memfasilitasi user yang membutuhkan panduan penanganan masalah.

#### Scenario: User encounters error and looks for technical guide
- **WHEN** pengunjung mencari referensi troubleshooting pada `index.html`
- **THEN** tersedia tautan yang mengarahkan langsung ke `/panduan-kode-error-ac-industri.html`.
