## Purpose

Menyediakan standar antarmuka dan penyajian bukti rekayasa lapangan (field engineering case studies) pada halaman layanan teknis B2B untuk membuktikan kompetensi teknis, metodologi K3/CSMS, dan hasil terukur kepada manajer engineering dan procurement pabrik.

## ADDED Requirements

### Requirement: Modular Engineering Case Study Component
Halaman layanan teknis B2B spesialis SHALL menyajikan section studi kasus rekayasa lapangan yang menampilkan konteks fasilitas pabrik, tantangan teknis, metodologi perbaikan, parameter hasil sebelum/sesudah, dan aksi konversi RFQ langsung.

#### Scenario: Buyer evaluates field competence on chiller service page
- **WHEN** pengunjung mengakses `service-chiller-industri.html` dan menggulir ke bagian studi kasus
- **THEN** sistem menampilkan studi kasus rekayasa nyata (Chiller Sentrifugal Water-Cooled di MM2100 Cikarang), parameter penurunan konsumsi daya / approach temperature, kepatuhan K3/CSMS, serta tombol konsultasi langsung yang terhubung ke alur RFQ resmi.

#### Scenario: Buyer evaluates cleanroom recovery on AHU maintenance page
- **WHEN** pengunjung industri farmasi/elektronik mengakses `maintenance-ahu-cleanroom.html`
- **THEN** sistem menampilkan studi kasus pemulihan kamar bersih (Cleanroom Farmasi Kelas C CPOB di Jababeka), tahapan smoke visualization test, penggantian HEPA gel-seal, sertifikasi pengujian partikulat, serta tombol order survey.
