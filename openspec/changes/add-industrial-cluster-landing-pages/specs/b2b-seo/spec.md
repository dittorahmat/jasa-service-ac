## MODIFIED Requirements

### Requirement: Search Engine Crawling and Indexing Foundation
Sistem website SHALL menyediakan file `robots.txt` dan `sitemap.xml` di root domain untuk memandu perayapan mesin pencari (Googlebot) dan memastikan seluruh halaman utama dan klaster industri terindeks dengan prioritas yang tepat.

#### Scenario: Search engine bot requests robots.txt
- **WHEN** bot mesin pencari mengakses `/robots.txt`
- **THEN** sistem mengembalikan instruksi `User-agent: *`, mengizinkan akses ke seluruh aset publik, dan menyertakan URL absolut `Sitemap: https://jasa-service-ac.tech1solusi.workers.dev/sitemap.xml`

#### Scenario: Search engine bot requests sitemap.xml
- **WHEN** bot mesin pencari mengakses `/sitemap.xml`
- **THEN** sistem mengembalikan XML sitemap yang valid dengan daftar URL canonical, menyertakan halaman B2B (`/`) dengan prioritas 1.0, halaman klaster industri terdedikasi (MM2100, Jababeka, KIIC, EJIP, Suryacipta, Delta Silicon, GIIC) dengan prioritas 0.9, dan halaman B2C (`/b2c.html`) dengan prioritas 0.8 serta tanggal lastmod terbaru.

## ADDED Requirements

### Requirement: Cluster Cross-Linking and Regional Silo
Halaman navigasi B2B utama (`index.html`) dan agregator kawasan regional (`kawasan-industri-cikarang.html`, `kawasan-industri-karawang.html`) SHALL menyediakan tautan navigasi kontekstual (internal linking) ke halaman klaster Suryacipta, Delta Silicon, dan GIIC Deltamas.

#### Scenario: Googlebot traverses B2B cluster links
- **WHEN** perayap menelusuri link footer atau grid kawasan pada halaman regional
- **THEN** ditemukan hyperlink internal yang valid menuju `/hvac-suryacipta.html`, `/hvac-deltasilicon.html`, dan `/hvac-giic-deltamas.html` dengan anchor text informatif dan relevan.
