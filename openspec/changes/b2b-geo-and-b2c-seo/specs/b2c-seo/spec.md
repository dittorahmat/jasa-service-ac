## Purpose

Menyediakan standarisasi metadata SEO, canonical link, social sharing, dan pengayaan JSON-LD schema untuk layanan residential AC rumah (B2C) guna meningkatkan peringkat pencarian lokal perumahan.

## ADDED Requirements

### Requirement: B2C On-Page SEO and Social Sharing Metadata
Halaman B2C (`b2c.html`) SHALL memiliki metadata yang lengkap dan relevan dengan pencarian residential AC service di kawasan perumahan Bekasi, Tambun, Cikarang, dan Depok.

#### Scenario: Crawler inspects b2c.html head metadata
- **WHEN** crawler mesin pencari memeriksa tag `<head>` pada `b2c.html`
- **THEN** ditemukan tag `<title>` relevan dengan garansi dingin 30 hari, `<meta name="description">` dengan proposisi SOP bersih & tanpa DP, `<link rel="canonical" href="https://jasa-service-ac.tech1solusi.workers.dev/b2c.html">`, serta meta tags OpenGraph dan Twitter Card yang valid.

### Requirement: B2C Residential Schema.org JSON-LD
Halaman B2C SHALL menyertakan data terstruktur JSON-LD bertipe `HVACBusiness` yang dikalibrasi untuk kebutuhan residential homeowner.

#### Scenario: Schema validation on b2c.html
- **WHEN** schema validator mengurai JSON-LD pada `b2c.html`
- **THEN** ditemukan entitas `HVACBusiness` yang mendeklarasikan `priceRange` ("$"), penawaran garansi 30 hari, area layanan kota spesifik, serta FAQPage yang valid.
