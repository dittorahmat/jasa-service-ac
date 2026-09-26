## MODIFIED Requirements

### Requirement: Search Engine Crawling and Indexing Foundation
Sistem website SHALL menyediakan file `robots.txt` dan `sitemap.xml` di root domain untuk memandu perayapan mesin pencari (Googlebot) dan memastikan seluruh halaman utama terindeks dengan prioritas yang tepat.

#### Scenario: Search engine bot requests robots.txt
- **WHEN** bot mesin pencari mengakses `/robots.txt`
- **THEN** sistem mengembalikan instruksi `User-agent: *`, mengizinkan akses ke seluruh aset publik, menyertakan arahan izin perayapan untuk crawler AI pencarian (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Google-Extended`, `Claude-Web`), dan menyertakan URL absolut `Sitemap: https://jasa-service-ac.tech1solusi.workers.dev/sitemap.xml` serta rujukan `llms.txt`.

#### Scenario: Search engine bot requests sitemap.xml
- **WHEN** bot mesin pencari mengakses `/sitemap.xml`
- **THEN** sistem mengembalikan XML sitemap yang valid dengan daftar URL canonical, menyertakan halaman kalkulator teknis, 4 klaster kawasan baru (KNIC, Artha Industrial Hill, Sentul, Modern Cikande), halaman B2B (`/`) dengan prioritas 1.0 dan halaman B2C (`/b2c.html`) dengan prioritas 0.8 serta tanggal lastmod terbaru.

## ADDED Requirements

### Requirement: Engineering Calculator Structured Data
Halaman kalkulator B2B SHALL menyertakan data terstruktur JSON-LD bertipe `WebApplication` dan `TechArticle` yang mendeskripsikan utilitas perhitungan beban pendingin industri.

#### Scenario: Rich results validator inspects calculator page
- **WHEN** validator schema mengurai `kalkulator-hvac-industri.html`
- **THEN** ditemukan schema `WebApplication` dengan `applicationCategory: BusinessApplication`, detail parameter input/output, dan entitas author/publisher CV Rifqi AC.
