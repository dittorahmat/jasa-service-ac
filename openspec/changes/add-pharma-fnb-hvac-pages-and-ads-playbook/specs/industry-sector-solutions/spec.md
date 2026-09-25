## Purpose

Menyediakan solusi tata udara spesifik industri berstandar regulasi ketat (Farmasi CPOB / ISO 14644 dan Makanan & Minuman HACCP) untuk memenuhi persyaratan audit QA/QC dan procurement pabrik.

## ADDED Requirements

### Requirement: Pharma & Cleanroom HVAC Landing Page
Sistem website SHALL menyediakan halaman `hvac-industri-farmasi-cleanroom.html` yang merinci standar tata udara ruang bersih (Class 100 s/d 100k), pressure cascade interlocked, penggantian HEPA H13/H14, dan audit-ready logsheet CPOB.

#### Scenario: QA Manager or Facility Engineer visits pharma HVAC page
- **WHEN** pengunjung mengakses `/hvac-industri-farmasi-cleanroom.html`
- **THEN** ditampilkan parameter cleanroom class A-D, alur integritas pengujian filter HEPA, form permintaan survei kualifikasi HVAC, dan nomor WhatsApp teknisi K3.

### Requirement: Food & Beverage HVAC Hygiene Landing Page
Sistem website SHALL menyediakan halaman `hvac-industri-makanan-minuman.html` yang merinci pencegahan kondensasi tetesan air di ruang kemas, kontrol kelembaban ruang formulasi, sanitasi coil pendingin food-grade safe, dan pemenuhan standar HACCP / FSSC 22000.

#### Scenario: Plant Manager F&B visits food hygiene HVAC page
- **WHEN** pengunjung mengakses `/hvac-industri-makanan-minuman.html`
- **THEN** ditampilkan solusi anti-jamur ducting, isolasi termal closed-cell food grade, mitigasi uap panas proses memasak, dan CTA survei teknis bebas biaya.
