## Purpose

Menyediakan halaman arahan (landing pages) khusus kawasan industri manufaktur di Cikarang dan Karawang untuk mendominasi pencarian Google B2B lokal dan menangkap leads General Affairs / Engineering pabrik.

## ADDED Requirements

### Requirement: Dedicated Cikarang Industrial Cluster Landing Page
Sistem SHALL menyediakan file `kawasan-industri-cikarang.html` yang dioptimasi untuk kawasan industri MM2100 Cibitung, Jababeka I-VI, EJIP, GIIC Deltamas, dan Delta Silicon.

#### Scenario: User visits Cikarang industrial page
- **WHEN** pengunjung atau bot mengakses `/kawasan-industri-cikarang.html`
- **THEN** halaman menyajikan konten B2B lengkap dengan heading spesifik kawasan Cikarang, informasi respon teknisi, kepatuhan K3, form survey SPH, metadata SEO yang teroptimasi, serta schema JSON-LD `HVACBusiness`.

### Requirement: Dedicated Karawang Industrial Cluster Landing Page
Sistem SHALL menyediakan file `kawasan-industri-karawang.html` yang dioptimasi untuk kawasan industri KIIC Karawang Barat, Surya Cipta Karawang Timur, dan KIM.

#### Scenario: User visits Karawang industrial page
- **WHEN** pengunjung atau bot mengakses `/kawasan-industri-karawang.html`
- **THEN** halaman menyajikan konten B2B terfokus pada kawasan Karawang, keunggulan workshop lokal Karawang Barat, kepatuhan safety induction pabrik otomotif/elektronik, metadata SEO yang teroptimasi, serta schema JSON-LD `HVACBusiness`.

### Requirement: Cross-linking and Sitemap Registration
Sistem SHALL mengintegrasikan tautan silang antara halaman beranda B2B (`index.html`) dengan kedua halaman kawasan industri baru, serta mendaftarkannya pada `sitemap.xml`.

#### Scenario: Crawler reads sitemap.xml
- **WHEN** crawler mengunduh `sitemap.xml`
- **THEN** URL untuk `kawasan-industri-cikarang.html` dan `kawasan-industri-karawang.html` terdaftar dengan prioritas 0.9.
