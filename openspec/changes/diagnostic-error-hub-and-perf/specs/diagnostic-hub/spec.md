## Purpose

Menyediakan panduan interaktif diagnosis kode error dan penanganan darurat sistem tata udara industri (Chiller, AHU, VRV/VRF, Cassette) untuk membantu tim operasional pabrik sekaligus mengarahkan permintaan perbaikan darurat ke teknisi CV Rifqi AC.

## ADDED Requirements

### Requirement: Interactive Error Code & Diagnostic Search Hub
Sistem website SHALL menyediakan antarmuka pencarian dan filter cepat kode error (`panduan-kode-error-ac-industri.html`) yang memungkinkan pengguna mencari berdasarkan kode (misal "U4", "E3", "A3") atau menyaring berdasarkan merek sistem (Daikin, York, Panasonic/Mitsubishi).

#### Scenario: User searches for error code
- **WHEN** pengguna mengetik "U4" pada kolom pencarian atau mengklik tab "Daikin VRV"
- **THEN** sistem langsung menampilkan kartu penjelasan kode "U4: Kegagalan Transmisi Indoor-Outdoor", kemungkinan penyebab teknis, langkah pencegahan awal, dan tombol darurat panggil teknisi.

### Requirement: Emergency Dispatch Direct Pre-fill Action
Setiap kartu kode error pada diagnostic hub SHALL menyediakan tombol aksi WhatsApp yang memuat konteks kode yang bermasalah secara otomatis ke dalam template chat.

#### Scenario: User clicks dispatch button on specific error card
- **WHEN** pengguna mengklik tombol "Panggil Teknisi untuk Error Ini" pada kartu error E3
- **THEN** sistem membuka aplikasi WhatsApp dengan pesan terformat: mencantumkan nama kode error (E3 High Pressure), meminta nama pabrik/kawasan, dan memicu pelacakan konversi analitik.

### Requirement: Diagnostic Structured Data Rich Snippets
Halaman diagnostic hub SHALL menyertakan data terstruktur JSON-LD bertipe `TechArticle` dan `FAQPage` yang memuat pertanyaan dan jawaban penanganan masalah HVAC industri.

#### Scenario: Google Rich Results validator parses diagnostic page
- **WHEN** mesin pencari mengurai script JSON-LD pada halaman panduan
- **THEN** ditemukan schema `FAQPage` dengan daftar entitas Question-Answer yang valid untuk kode-kode error utama.
