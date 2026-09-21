## Purpose

Menyediakan mekanisme pelacakan konversi klik interaksi (WhatsApp dan Telepon) ke platform Google Ads dan analitik.

## ADDED Requirements

### Requirement: Click-to-WhatsApp and Call Conversion Event Dispatch
Sistem SHALL memicu fungsi JavaScript pelacak event (`gtag_report_conversion` atau push ke `dataLayer`) setiap kali pengguna mengklik tombol Call-to-Action WhatsApp atau panggilan telepon di halaman B2B maupun B2C.

#### Scenario: User clicks WhatsApp button triggers conversion
- **WHEN** pengguna mengklik tautan atau tombol WhatsApp pada landing page
- **THEN** sistem mengeksekusi script pelacakan konversi ke Google Ads sebelum mengarahkan pengguna ke aplikasi WhatsApp.

### Requirement: Pre-filled Dynamic WhatsApp URL Generation
Sistem SHALL menyediakan tautan WhatsApp (`https://wa.me/...`) yang memuat pesan awalan terstruktur secara otomatis berdasarkan halaman dan tombol yang diklik.

#### Scenario: B2B user clicks quotation button
- **WHEN** pengunjung mengklik tombol pengajuan survey B2B
- **THEN** tautan WhatsApp memuat teks otomatis berformat rapi yang menyebutkan nama perusahaan, lokasi kawasan/kantor, dan kebutuhan jenis unit AC.
