## MODIFIED Requirements

### Requirement: Search Engine Crawling and Indexing Foundation
Sistem website SHALL menyediakan file `robots.txt` dan `sitemap.xml` di root domain untuk memandu perayapan mesin pencari (Googlebot) dan memastikan seluruh halaman utama terindeks dengan prioritas yang tepat.

#### Scenario: Search engine bot requests robots.txt
- **WHEN** bot mesin pencari mengakses `/robots.txt`
- **THEN** sistem mengembalikan instruksi `User-agent: *`, mengizinkan akses ke seluruh aset publik, dan menyertakan URL absolut `Sitemap: https://jasa-service-ac.tech1solusi.workers.dev/sitemap.xml`

#### Scenario: Search engine bot requests sitemap.xml
- **WHEN** bot mesin pencari mengakses `/sitemap.xml`
- **THEN** sistem mengembalikan XML sitemap yang valid dengan daftar URL canonical, menyertakan halaman B2B (`/`) dengan prioritas 1.0, halaman B2C (`/b2c.html`) dengan prioritas 0.8, serta halaman kawasan industri (`/hvac-mm2100.html`, `/hvac-jababeka.html`, `/hvac-kiic.html`, `/hvac-ejip.html`) dengan prioritas 0.9 dan tanggal lastmod terbaru.

## ADDED Requirements

### Requirement: Industrial Hub-and-Spoke Internal Linking
Halaman utama B2B (`index.html`) SHALL menyediakan navigasi internal linking yang terhubung secara eksplisit ke seluruh halaman pendaratan kawasan industri (MM2100, Jababeka, KIIC, EJIP) untuk memperkuat otoritas topikal dan distribusi PageRank.

#### Scenario: User or crawler navigates index.html coverage section
- **WHEN** pengunjung atau crawler memeriksa section cakupan wilayah pada `index.html`
- **THEN** badge atau kartu kawasan industri dapat diklik dan mengarahkan pengguna ke halaman spesifik kawasan terkait.
