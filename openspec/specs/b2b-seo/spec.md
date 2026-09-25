# b2b-seo Specification

## Purpose
Menyediakan standar teknis indexing search engine, standarisasi metadata SEO on-page, dan pengayaan JSON-LD Structured Data untuk meningkatkan visibilitas dan konversi leads B2B HVAC (Pabrik & Kawasan Industri).

## Requirements

### Requirement: Search Engine Crawling and Indexing Foundation
Sistem website SHALL menyediakan file `robots.txt` dan `sitemap.xml` di root domain untuk memandu perayapan mesin pencari (Googlebot) dan memastikan seluruh halaman utama terindeks dengan prioritas yang tepat.

#### Scenario: Search engine bot requests robots.txt
- **WHEN** bot mesin pencari mengakses `/robots.txt`
- **THEN** sistem mengembalikan instruksi `User-agent: *`, mengizinkan akses ke seluruh aset publik, dan menyertakan URL absolut `Sitemap: https://jasa-service-ac.tech1solusi.workers.dev/sitemap.xml`

#### Scenario: Search engine bot requests sitemap.xml
- **WHEN** bot mesin pencari mengakses `/sitemap.xml`
- **THEN** sistem mengembalikan XML sitemap yang valid dengan daftar URL canonical, menyertakan halaman B2B (`/`) dengan prioritas 1.0 dan halaman B2C (`/b2c.html`) dengan prioritas 0.8 serta tanggal lastmod terbaru.

### Requirement: B2B On-Page SEO and Social Sharing Metadata
Halaman utama B2B (`index.html`) SHALL memiliki metadata yang dioptimalkan untuk kata kunci transaksional B2B (HVAC Pabrik, Kawasan Industri Bekasi, Cikarang, Karawang) serta tag OpenGraph/Twitter lengkap.

#### Scenario: Google crawler inspects index.html metadata
- **WHEN** perayap Google memeriksa tag `<head>` pada `index.html`
- **THEN** ditemukan tag `<title>` deskriptif spesifik vendor HVAC industri, `<meta name="description">` dengan kata kunci transaksional B2B berizin resmi & K3, tag `<link rel="canonical">` menunjuk ke URL resmi, serta tag OpenGraph (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`).

### Requirement: B2B HVAC Schema.org Structured Data
Halaman utama B2B SHALL menyertakan data terstruktur JSON-LD bertipe `HVACBusiness` yang diperkaya dengan cakupan kawasan industri spesifik dan informasi kredibilitas procurement.

#### Scenario: Google Rich Results test parses JSON-LD
- **WHEN** validator schema mengurai script JSON-LD pada `index.html`
- **THEN** terdeteksi entitas `HVACBusiness` lengkap dengan `name`, `alternateName`, `areaServed` (mencakup Bekasi, Cikarang, Karawang, MM2100, Jababeka, KIIC, EJIP), koordinat `geo`, jam kerja 24/7 untuk emergency pabrik, dan FAQPage yang valid.
