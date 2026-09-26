## Purpose

Menyediakan alat bantu hitung interaktif berbasis browser bagi engineer dan pengadaan pabrik untuk memperkirakan kebutuhan kapasitas pendinginan (Chiller TR) dan sirkulasi tata udara bersih (Cleanroom ACH), lengkap dengan rujukan formula teknis dan konversi prospek WhatsApp.

## ADDED Requirements

### Requirement: Industrial Chiller Tonnage Calculation
Sistem SHALL menyediakan antarmuka kalkulator interaktif untuk menghitung estimasi tonase pendingin Chiller (Tons of Refrigeration / TR, kW, dan BTU/hr) dengan opsi perhitungan berbasis parameter fluida (Water Flow GPM & Delta T) maupun estimasi beban ruang produksi.

#### Scenario: User calculates chiller capacity via flow rate and delta T
- **WHEN** pengguna memasukkan debit sirkulasi air chilled water (GPM) dan perbedaan suhu masuk-keluar evaporator (Delta T dalam Fahrenheit/Celsius)
- **THEN** sistem secara instan menampilkan hasil estimasi tonase Chiller (TR = GPM * Delta T / 24) beserta ekivalensi dalam kW pendinginan dan estimasi konsumsi daya listrik.

#### Scenario: User validates calculation via WhatsApp consultation
- **WHEN** pengguna menekan tombol "Konsultasikan Hasil Hitung & Jadwal Survey" pada kartu hasil kalkulator Chiller
- **THEN** sistem mengarahkan pengguna ke tautan WhatsApp dengan pesan terformat rapi yang menyertakan data input (debit, delta T, estimasi TR) dan meminta penawaran verifikasi lapangan dari CV Rifqi AC.

### Requirement: Cleanroom Air Changes per Hour (ACH) & Airflow Sizing
Sistem SHALL menyediakan antarmuka kalkulator sirkulasi udara bersih untuk menentukan kebutuhan airflow (CFM / CMH) dan konfigurasi tahapan filtrasi berdasarkan volume ruangan dan standar klasifikasi ISO 14644 / CPOB BPOM.

#### Scenario: User calculates cleanroom airflow requirements
- **WHEN** pengguna memasukkan dimensi ruangan (Panjang, Lebar, Tinggi dalam meter/kaki) dan memilih kelas kebersihan (ISO Class 5 s/d 8 / Ruang Kelas A-D CPOB)
- **THEN** sistem menampilkan rentang rekomendasi ACH, total kapasitas hembusan udara yang dibutuhkan (CFM dan m³/jam), serta konfigurasi minimum filter (Pre-Filter G4, Medium F8, HEPA H14).
