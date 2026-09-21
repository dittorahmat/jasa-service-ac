## Purpose

Menyediakan optimasi tingkat konversi (CRO) berfriksi rendah, penjaminan SLA waktu respons verifikasi survey pabrik, komponen FAQ terstruktur, dan penanaman data terstruktur Schema.org (HVACBusiness & FAQPage) untuk meningkatkan skor kualitas iklan serta hasil penelusuran organik.

## ADDED Requirements

### Requirement: B2C Micro-Copy Friction Reducer
Halaman B2C SHALL menampilkan micro-copy penenang psikologis di bawah tombol utama booking WhatsApp untuk menghapus keraguan transaksi di awal.

#### Scenario: User sees payment and warranty reassurance
- **WHEN** calon pelanggan melihat area hero pada `b2c.html`
- **THEN** sistem menampilkan teks mikro bergaransi dingin 30 hari, tanpa uang muka, dan pembayaran pasca pengerjaan

### Requirement: B2C Popular Pricing Badge
Halaman B2C SHALL menampilkan penanda visual jelas pada paket layanan yang paling sering dipesan di dalam tabel harga.

#### Scenario: User views transparent pricing table
- **WHEN** pengguna membuka section `#harga` di `b2c.html`
- **THEN** baris Cuci AC Split 0.5 - 1 PK memuat badge penanda "PALING POPULER" dengan kontras tinggi

### Requirement: B2B Survey Verification SLA
Formulir permintaan survey B2B SHALL mencantumkan estimasi waktu tanggap verifikasi oleh tim engineer operasional.

#### Scenario: Procurement or GA manager reviews survey ticket form
- **WHEN** manajer pabrik atau PIC procurement melihat form `#form-survey` di `index.html`
- **THEN** terdapat klausul SLA verifikasi cepat di bawah 15 menit pada jam kerja

### Requirement: Structured Data Schema.org JSON-LD
Kedua halaman landing (`index.html` dan `b2c.html`) SHALL memuat structured data berbasis Schema.org bertipe `HVACBusiness` dan `FAQPage`.

#### Scenario: Search engine crawler inspects landing pages
- **WHEN** Googlebot atau crawler mesin pencari membaca file HTML
- **THEN** ditemukan blok `<script type="application/ld+json">` yang valid mendeskripsikan layanan HVAC lokal, kontak, area cakupan, dan pertanyaan yang sering diajukan

### Requirement: Native Accessible FAQ Accordion
Halaman landing B2B dan B2C SHALL menyediakan komponen FAQ berbasis elemen `<details>` dan `<summary>` yang dapat dibuka-tutup tanpa dependensi JavaScript eksternal.

#### Scenario: User toggles FAQ item
- **WHEN** pengguna mengklik judul pertanyaan pada bagian FAQ
- **THEN** jawaban terkait terbuka secara mulus dan ramah aksesibilitas keyboard/screen reader
