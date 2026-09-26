## Purpose

Menyediakan standar alur kerja pelacakan konversi offline (Offline Conversion Tracking) Google Ads dari percakapan WhatsApp admin hingga pencatatan transaksi deal kontrak HVAC ke dalam Google Ads dashboard.

## ADDED Requirements

### Requirement: Standar Operasional Ekstraksi Atribusi WhatsApp Admin
Tim admin WhatsApp CS SHALL dapat mengidentifikasi, mengekstrak, dan mencatat parameter atribusi iklan (`GCLID`, `utm_campaign`, `utm_term`) dari format pesan masuk otomatis calon pelanggan tanpa membutuhkan pengetahuan koding teknis.

#### Scenario: Admin menerima pesan dengan parameter iklan
- **WHEN** Calon pelanggan mengirim pesan WhatsApp yang memuat tag `[Ref Iklan: ... | GCLID: ...]`
- **THEN** Admin menyalin nilai GCLID dan memasukkannya ke spreadsheet pelacak prospek bersama data nama PIC dan estimasi unit.

#### Scenario: Calon pelanggan menghapus tag atribusi otomatis
- **WHEN** Calon pelanggan menghapus teks referensi sebelum mengirim pesan pertama
- **THEN** Admin menjalankan SOP fallback kualifikasi asal sumber dengan menanyakan referensi pencarian Google dan menandai status atribusi sebagai direct WhatsApp query.

### Requirement: Struktur Multi-Stage Offline Conversion Action
Sistem pelacakan konversi offline Google Ads SHALL mendukung minimal dua tingkatan konversi bernilai: kualifikasi survey lapangan terkonfirmasi (`B2B_Survey_Onsite`) dan kesepakatan kontrak pemeliharaan final (`Kontrak_HVAC_Deal`).

#### Scenario: Pelanggan menyetujui jadwal survey onsite
- **WHEN** Calon klien B2B mengonfirmasi kesediaan waktu dan lokasi untuk technical site visit
- **THEN** Admin mencatat event konversi `B2B_Survey_Onsite` dengan timestamp terstandarisasi dan bobot nilai konversi kualifikasi.

#### Scenario: Kontrak maintenance atau SPK disetujui
- **WHEN** Dokumen SPK atau Purchase Order ditandatangani oleh klien industri
- **THEN** Admin mencatat event konversi `Kontrak_HVAC_Deal` dengan nominal riil nilai kontrak dalam mata uang IDR.

### Requirement: Standarisasi Format Berkas Unggah Google Ads Offline Conversion
Berkas keluaran pelacak konversi SHALL mematuhi spesifikasi resmi Google Ads Click Conversions Upload (kolom `Google Click ID`, `Conversion Name`, `Conversion Time`, `Conversion Value`, `Conversion Currency`) dengan zona waktu ISO `+07:00`.

#### Scenario: Ekspor dan validasi berkas unggahan
- **WHEN** Pengguna mengunduh data konversi dari spreadsheet untuk diunggah ke Google Ads
- **THEN** Format kolom, format penulisan waktu, dan nama tindakan konversi persis cocok dengan pengaturan conversion actions di dashboard Google Ads tanpa error format.
