## ADDED Requirements

### Requirement: Interactive Engineering Tool SoftwareApplication Schema
Halaman utilitas kalkulator industri (`kalkulator-hvac-industri.html`) SHALL menyediakan Structured Data JSON-LD bertipe `SoftwareApplication` / `WebApplication` yang valid untuk meningkatkan pemahaman mesin pencari terhadap kapabilitas interaktif tools engineering.

#### Scenario: Crawler inspects kalkulator-hvac-industri.html structured data
- **WHEN** perayap mesin pencari atau validator Rich Results mengurai `kalkulator-hvac-industri.html`
- **THEN** ditemukan JSON-LD `SoftwareApplication` dengan properti `name`, `applicationCategory`, `operatingSystem`, `browserRequirements`, `offers` (free), dan `featureList` yang mencakup perhitungan TR Chiller & ACH Cleanroom CPOB.

### Requirement: Emergency Troubleshooting HowTo Structured Data
Halaman panduan darurat teknis pendingin (`solusi-chiller-overheat-trip.html`) SHALL menyediakan Structured Data JSON-LD bertipe `HowTo` yang memetakan langkah-langkah diagnostik dan mitigasi terurut.

#### Scenario: Google Rich Results validates HowTo schema on chiller trip guide
- **WHEN** validator mengurai JSON-LD pada `solusi-chiller-overheat-trip.html`
- **THEN** ditemukan entitas `HowTo` lengkap dengan `name`, `description`, `totalTime`, serta elemen `step` berurutan yang masing-masing memiliki `name`, `text`, dan `url` hash yang valid.

### Requirement: Technical Article E-E-A-T Attribution
Halaman panduan troubleshooting dan tabel kode error (`solusi-chiller-overheat-trip.html` dan `panduan-kode-error-ac-industri.html`) SHALL menyertakan atribusi `TechArticle` dengan author kredibel dan publisher resmi CV Rifqi AC untuk memenuhi standar Google E-E-A-T.

#### Scenario: Crawler verifies author and publisher entity on technical guides
- **WHEN** bot pencari membaca metadata artikel teknis
- **THEN** terdeteksi entitas `author` dengan tipe `Organization` / `Person` spesialis HVAC serta `publisher` terhubung ke entitas `HVACBusiness` resmi CV Rifqi AC.
