## MODIFIED Requirements

### Requirement: Search Engine Crawling and Indexing Foundation
Sistem website SHALL menyediakan file `robots.txt` dan `sitemap.xml` di root domain untuk memandu perayapan mesin pencari (Googlebot) dan memastikan seluruh halaman utama, kluster kawasan, kluster sistem HVAC industri, dan kluster mikro-lokasi residensial terindeks dengan prioritas yang tepat.

#### Scenario: Search engine bot requests robots.txt
- **WHEN** bot mesin pencari mengakses `/robots.txt`
- **THEN** sistem mengembalikan instruksi `User-agent: *`, mengizinkan akses ke seluruh aset publik, dan menyertakan URL absolut `Sitemap: https://jasa-service-ac.tech1solusi.workers.dev/sitemap.xml`

#### Scenario: Search engine bot requests sitemap.xml
- **WHEN** bot mesin pencari mengakses `/sitemap.xml`
- **THEN** sistem mengembalikan XML sitemap yang valid dengan daftar URL canonical, menyertakan halaman B2B (`/`), halaman B2C (`/b2c.html`), kluster kawasan industri, halaman sistem industri (`/service-chiller-industri.html`, `/maintenance-ahu-cleanroom.html`, `/service-ac-vrv-vrf.html`), serta mikro-lokasi residensial (`/cuci-ac-grand-wisata.html`, `/service-ac-harapan-indah.html`, `/service-ac-summarecon-bekasi.html`) dengan prioritas dan lastmod yang konsisten.
