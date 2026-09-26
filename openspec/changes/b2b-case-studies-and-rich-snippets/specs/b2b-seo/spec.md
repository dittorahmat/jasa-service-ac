## ADDED Requirements

### Requirement: HowTo Structured Data for Industrial HVAC Troubleshooting
Halaman panduan penanganan masalah teknis dan pemeliharaan spesialis B2B SHALL menyertakan markah JSON-LD bertipe `HowTo` yang valid untuk memandu langkah penyelesaian masalah teknis dan memicu Google Rich Results.

#### Scenario: Google Rich Results validates chiller troubleshooting HowTo
- **WHEN** crawler Google memeriksa skema JSON-LD pada `solusi-chiller-overheat-trip.html`
- **THEN** ditemukan objek bertipe `HowTo` dengan `name` diagnosa chiller trip HP, `step` berurutan yang memuat rincian inspeksi delta T, descaling kerak kondensor, dan pengecekan proteksi kompresor.

#### Scenario: Google Rich Results validates cleanroom validation HowTo
- **WHEN** crawler Google memeriksa skema JSON-LD pada `maintenance-ahu-cleanroom.html`
- **THEN** ditemukan objek bertipe `HowTo` dengan `name` prosedur kualifikasi dan pemeliharaan AHU cleanroom, mencakup langkah inspeksi pre-filter, pengujian kebocoran HEPA, hingga penyeimbangan tekanan statis ruang.
