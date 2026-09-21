## Purpose

Menyediakan halaman web berkonversi tinggi yang dioptimalkan untuk Google Ads, memisahkan kebutuhan komersil/industri (B2B) dan perumahan/ruko (B2C) untuk CV Rifqi AC.

## ADDED Requirements

### Requirement: B2B Commercial & Industrial Landing Page
Sistem SHALL menyediakan landing page B2B di `index.html` yang difokuskan pada pengadaan jasa perawatan, perbaikan, dan kontrak service AC untuk kantor, ruko, gedung, dan fasilitas pabrik di kawasan industri Bekasi dan Karawang.

#### Scenario: B2B visitor evaluates credibility and requests survey
- **WHEN** pengunjung dari kampanye iklan B2B mengakses `index.html`
- **THEN** sistem menampilkan identitas legalitas CV resmi, penawaran kontrak perawatan berkala, informasi ketersediaan faktur pajak/SPK/BAST, standar teknisi APD/K3 pabrik, jenis unit komersil (Cassette, Standing, Ducting, VRV), dan tombol Call-to-Action WhatsApp dengan pesan otomatis permohonan survey lokasi.

### Requirement: B2C Residential Landing Page
Sistem SHALL menyediakan landing page B2C di `b2c.html` yang difokuskan pada pemilik rumah dan ruko di area Bekasi, Depok, dan Karawang yang membutuhkan servis atau cuci AC cepat.

#### Scenario: B2C visitor books residential service
- **WHEN** pengunjung dari kampanye iklan B2C mengakses `b2c.html`
- **THEN** sistem menampilkan penanganan masalah darurat (AC bocor, tidak dingin, berisik), daftar harga transparan, jaminan garansi 30 hari, SOP teknisi bersih rapi, dan tombol Call-to-Action WhatsApp dengan pesan otomatis pemesanan teknisi ke rumah.

### Requirement: Mobile Sticky & Floating Call-To-Action
Sistem SHALL menyediakan elemen navigasi tetap (sticky header dan floating action button) pada kedua halaman agar pengguna seluler dapat menghubungi WhatsApp atau telepon dengan satu ketukan.

#### Scenario: Mobile user clicks floating WhatsApp
- **WHEN** pengguna membuka landing page melalui perangkat mobile dan menggulir ke bagian mana pun
- **THEN** tombol WhatsApp melayang tetap terlihat di sudut kanan/bawah layar dan membuka chat WhatsApp dengan teks template yang sesuai tanpa menghalangi konten utama.
