# PANDUAN LENGKAP & PLAYBOOK STRATEGI GOOGLE ADS
## CV RIFQI AC — BEKASI, CIKARANG, KARAWANG & DEPOK
**Target Pasar:** B2B Kawasan Industri & B2C Residensial  
**Tujuan Kampanye:** Lead Generation Berkualitas Tinggi (Klik WhatsApp & Panggilan Telepon)  
**Estimasi Quality Score:** 9–10/10 (Relevansi Landing Page Hiper-Lokal)

---

## DAFTAR ISI
1. [Arsitektur Struktur Kampanye (B2B Industri & B2C Residensial)](#1-arsitektur-struktur-kampanye)
2. [Panduan Praktis Cara Pakai Fitur Bulk Upload (CSV)](#2-panduan-praktis-cara-pakai-fitur-bulk-upload-csv)
3. [Targeting Wilayah Geografis & Jadwal Iklan](#3-targeting-wilayah-geografis--jadwal-iklan)
4. [Materi Iklan Responsive Search Ads (RSA Copywriting)](#4-materi-iklan-responsive-search-ads-rsa-copywriting)
5. [Ekstensi Iklan (Ad Assets) yang Wajib Diaktifkan](#5-ekstensi-iklan-ad-assets-yang-wajib-diaktifkan)
6. [Master Negative Keywords List (Proteksi Anti-Boncos)](#6-master-negative-keywords-list-proteksi-anti-boncos)
7. [Membaca Atribusi Lead Otomatis di WhatsApp & SOP 1 Menit Admin CS](#7-membaca-atribusi-lead-otomatis-di-whatsapp--sop-1-menit-admin-cs)
8. [Multi-Stage Offline Conversion Tracking (OCT) & Scheduled Uploads](#8-multi-stage-offline-conversion-tracking-oct--scheduled-uploads)
9. [Roadmap Bidding & Optimasi Konversi (Smart Bidding)](#9-roadmap-bidding--optimasi-konversi-smart-bidding)
10. [Panduan Integrasi Conversion Tracking (Google Tag)](#10-panduan-integrasi-conversion-tracking-google-tag)

---

## 1. Arsitektur Struktur Kampanye

Pisahkan kampanye B2B (Pabrik & Kantor) dan B2C (Perumahan) secara total untuk menjaga relevansi skor kualitas iklan dan penargetan anggaran:

```
                            [ AKUN GOOGLE ADS ]
                                     |
           +-------------------------+-------------------------+
           |                                                   |
           v                                                   v
[ CAMPAIGN 1: B2B HVAC KAWASAN INDUSTRI ]    [ CAMPAIGN 2: B2C SERVICE AC RUMAH ]
Target: GA, Facility Manager, Procurement    Target: Pemilik Rumah, Ruko, Penghuni
Landing: Hub Kawasan & Beranda B2B           Landing: https://domain.com/b2c.html
Struktur: Single Theme Ad Groups (STAG)      Struktur: Geografis & Layanan Cepat
```

### Pemetaan Ad Groups B2B (STAG & DTR Enabled):
1. **AG - MM2100 Cibitung** &rarr; URL: `hvac-mm2100.html?area=MM2100&service=Maintenance` (Fokus otomotif, logistik, toleransi downtime ketat).
2. **AG - Jababeka Cikarang** &rarr; URL: `hvac-jababeka.html?area=Jababeka&service=Maintenance` (Fokus cleanroom, HEPA filter, F&B, Jababeka 1-6).
3. **AG - KIIC Karawang Barat** &rarr; URL: `hvac-kiic.html?area=KIIC&service=Maintenance` (Fokus industri berat, chiller 50-300 TR, standar PMA Jepang).
4. **AG - EJIP Cikarang Selatan** &rarr; URL: `hvac-ejip.html?area=EJIP&service=VRV` (Fokus industri presisi, sistem VRV/VRF, kontrol kelembapan).
5. **AG - Diagnostic Kode Error** &rarr; URL: `panduan-kode-error-ac-industri.html` (Fokus pencarian darurat alarm Daikin, York, dll).
6. **AG - Chiller Industri** &rarr; URL: `service-chiller-industri.html?service=Chiller` (Fokus overhaul kompresor screw/centrifugal, descaling kondensor kimia & mechanical).
7. **AG - AHU Cleanroom** &rarr; URL: `maintenance-ahu-cleanroom.html?service=AHU` (Fokus tata udara CPOB farmasi, penggantian filter HEPA H14, airflow balancing).
8. **AG - AC VRV VRF** &rarr; URL: `service-ac-vrv-vrf.html?service=VRV` (Fokus multi-split inverter Daikin VRV / Mitsubishi City Multi, tracing kebocoran refnet).
9. **AG - HVAC Industri Farmasi** &rarr; URL: `hvac-industri-farmasi-cleanroom.html?service=Pharma` (Fokus ruang bersih CPOB Class A-D, DOP test HEPA H14, pressure cascade, siap audit BPOM).
10. **AG - HVAC Pabrik Makanan & Minuman** &rarr; URL: `hvac-industri-makanan-minuman.html?service=FNB` (Fokus kepatuhan HACCP/FSSC 22000, anti-kondensasi plafon ruang kemas, sanitasi food-safe coil cleaner).
11. **AG - KNIC Karawang** &rarr; URL: `hvac-knic-karawang.html?area=KNIC&service=Maintenance` (Fokus ekosistem baterai EV, high-tech cleanroom, chiller pabrik cerdas).
12. **AG - Artha Industrial Hill** &rarr; URL: `hvac-artha-industrial-hill.html?area=AIH&service=Maintenance` (Fokus industri manufaktur berat, kimia, dan farmasi koridor Telukjambe Barat).
13. **AG - Sentul Bogor** &rarr; URL: `hvac-sentul-bogor.html?area=Sentul&service=Maintenance` (Fokus pabrik makanan/minuman, farmasi, pergudangan dingin/cold storage Sentul).
14. **AG - Modern Cikande** &rarr; URL: `hvac-modern-cikande.html?area=Cikande&service=Maintenance` (Fokus pabrik baja, kimia, pakan ternak, dan manufaktur koridor Tol Jakarta-Merak).
15. **AG - Kalkulator HVAC B2B** &rarr; URL: `kalkulator-hvac-industri.html` (Fokus kueri riset engineering: hitung tonase chiller, rumus TR, kalkulator ACH cleanroom CPOB).

### Pemetaan Ad Groups B2C (Hiper-Lokal & Layanan Cepat):
1. **AG - Cuci AC Panggilan** &rarr; URL: `b2c.html` (Fokus umum Bekasi, Depok, Karawang).
2. **AG - AC Bocor & Tidak Dingin** &rarr; URL: `b2c.html` (Fokus perbaikan darurat air menetes & modul).
3. **AG - Isi Freon & Bongkar Pasang** &rarr; URL: `b2c.html` (Fokus tambah freon R32/R410 & relokasi unit).
4. **AG - Grand Wisata Tambun** &rarr; URL: `cuci-ac-grand-wisata.html` (Fokus cluster Grand Wisata Tambun, garansi 30 hari).
5. **AG - Harapan Indah Bekasi** &rarr; URL: `service-ac-harapan-indah.html` (Fokus cluster Kota Harapan Indah & Medan Satria).
6. **AG - Summarecon Bekasi** &rarr; URL: `service-ac-summarecon-bekasi.html` (Fokus cluster & ruko Summarecon Bekasi Utara).

---

## 2. Panduan Praktis Cara Pakai Fitur Bulk Upload (CSV)

Berkas CSV telah **dipisahkan menjadi 2 paket kampanye independen** agar Anda dapat mengaktifkan atau menjadwalkan iklan B2B dan B2C pada waktu yang berbeda sesuai kebutuhan operasional.

### Berkas yang Tersedia di Folder `docs/`:

#### A. Paket Kampanye B2B (Industri & Kawasan Pabrik)
1. `docs/bulk-b2b-keywords.csv` — Kampanye: **`B2B HVAC Industri`** (Ad Groups: MM2100, Jababeka, KIIC, EJIP, Diagnostic Kode Error), lengkap dengan Max CPC dan Final URL ber-UTM.
2. `docs/bulk-b2b-ads.csv` — Iklan Responsive Search Ads (RSA) B2B berfokus pada izin K3, e-Faktur PPN, legalitas OSS, dan respon cepat via gerbang tol.

#### B. Paket Kampanye B2C (Servis & Cuci AC Rumah)
1. `docs/bulk-b2c-keywords.csv` — Kampanye: **`B2C Service AC Rumah`** (Ad Groups: Cuci AC Panggilan, AC Bocor & Panas, Isi Freon / Bongkar Pasang di Depok, Bekasi, Karawang).
2. `docs/bulk-b2c-ads.csv` — Iklan Responsive Search Ads (RSA) B2C berfokus pada garansi 30 hari, cuci rapi cover plastik anti-ciprat, dan harga jujur tanpa trik freon.

#### C. Proteksi Akun (Negative Keywords)
1. `docs/bulk-negative-keywords.csv` — Daftar kata kunci negatif yang memblokir klik boros (loker, gaji teknisi, tutorial DIY, ac mobil, dll) untuk kedua kampanye.

---

### Langkah-Langkah Upload di Google Ads (Hanya 3 Menit):

```
+-------------------------------------------------------------------------------+
|                    LANGKAH IMPORT BULK CSV DI GOOGLE ADS                      |
+-------------------------------------------------------------------------------+
 1. Buka dashboard Google Ads (https://ads.google.com).
 2. Di menu navigasi atas/kiri, klik menu "Tools and Settings" (Alat & Setelan).
 3. Pada kolom "Bulk Actions" (Tindakan Massal), pilih "Uploads" (Upload).
 4. Klik tombol lingkaran biru (+) untuk membuat upload baru.
 5. Pada pilihan Source, pilih "Upload a file".
 
 [ Jika Ingin Memulai Kampanye B2B Pabrik Dulu ]:
    a. Upload 'docs/bulk-b2b-keywords.csv' -> Klik "Preview", lalu "Apply".
    b. Upload 'docs/bulk-b2b-ads.csv'      -> Klik "Preview", lalu "Apply".
    c. Upload 'docs/bulk-negative-keywords.csv' -> Klik "Apply".
 
 [ Jika Ingin Memulai Kampanye B2C Residensial Rumah ]:
    a. Upload 'docs/bulk-b2c-keywords.csv' -> Klik "Preview", lalu "Apply".
    b. Upload 'docs/bulk-b2c-ads.csv'      -> Klik "Preview", lalu "Apply".
    c. Upload 'docs/bulk-negative-keywords.csv' -> Klik "Apply".
 
 6. Selesai! Kampanye yang Anda pilih langsung aktif terpasang secara instan.
```

*(Catatan: Anda juga dapat membuka file-file ini di aplikasi **Google Ads Editor** jika lebih suka mengelola kampanye secara offline lalu mengklik tombol Post/Sinkronkan).*

---

## 3. Targeting Wilayah Geografis & Jadwal Iklan

### Campaign B2B (Industri & Komersial)
* **Target Geografis:**
  - **Kabupaten Bekasi & Cikarang**: Radius Kawasan MM2100 Cibitung, Jababeka (I-VI), GIIC Deltamas, EJIP Cikarang Selatan.
  - **Kabupaten Karawang**: Radius Kawasan KIIC (Karawang Barat), Surya Cipta (Karawang Timur), KIM (Mitrakarawang).
  - **Kota Bekasi & Depok**: Gedung perkantoran, ruko bisnis, rumah sakit, dan server room IT.
* **Jadwal Tayang (Ad Schedule):**
  - **Senin s/d Jumat (07.30 - 18.00 WIB)**: Jam kerja aktif purchasing & facility engineering pabrik.
  - *Sabtu*: 08.00 - 14.00 WIB (Pabrik dengan jadwal shift maintenance).
  - *Minggu*: Nonaktifkan atau pasang bid darurat untuk Ad Group Diagnostic Kode Error saja.
* **Device Targeting:** Desktop & Mobile (40% pencarian B2B dilakukan lewat laptop/PC kantor).

### Campaign B2C (Residensial Rumah & Ruko)
* **Target Geografis:** Perumahan di Depok, Bekasi Kota/Kabupaten, dan Karawang Barat (Galuh Mas, Resinda).
* **Jadwal Tayang:** Setiap hari (07.00 - 21.00 WIB). Peak hours: 11.00 - 14.00 (cuaca terik) dan 18.00 - 21.00 (pulang kerja).
* **Device Targeting:** Mobile Only (+20% bid adjustment smartphone).

---

## 4. Materi Iklan Responsive Search Ads (RSA Copywriting)

### A. Ad Group: MM2100 Cibitung Cikarang
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/hvac-mm2100.html?utm_source=google&utm_medium=cpc&utm_campaign=b2b-mm2100&utm_term={keyword}`
* **Headlines:**
  1. `Vendor HVAC Pabrik MM2100` (Pin 1)
  2. `Service AC Kawasan MM2100`
  3. `Maintenance Chiller & AHU`
  4. `Respon Cepat Tol Cibitung`
  5. `Teknisi Sertifikasi K3`
  6. `Penerbit Resmi e-Faktur PPN`
  7. `Mitra Manufaktur Otomotif`
* **Descriptions:**
  1. `Kontraktor resmi HVAC pabrik kawasan MM2100 Cibitung. Izin kerja K3, JSA, & e-Faktur Pajak PPN.`
  2. `Mitra terpercaya perawatan chiller mesin & AC kantor MM2100. Respon cepat 20 menit dari tol.`
  3. `Cegah downtime mesin pabrik dengan pemeliharaan rutin. Konsultasi & survey gratis via WA.`

### B. Ad Group: Jababeka Cikarang (Fase I - VI)
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/hvac-jababeka.html?utm_source=google&utm_medium=cpc&utm_campaign=b2b-jababeka&utm_term={keyword}`
* **Headlines:**
  1. `Vendor HVAC Pabrik Jababeka` (Pin 1)
  2. `Service AC Kawasan Jababeka`
  3. `Spesialis Cleanroom & AHU`
  4. `Perawatan Chiller Industri`
  5. `Coverage Jababeka Fase 1-6`
  6. `Legalitas OSS & e-Faktur PPN`
  7. `Layanan Weekend Maintenance`
* **Descriptions:**
  1. `Vendor resmi pemeliharaan HVAC farmasi, F&B, & manufaktur di Kawasan Jababeka I-VI Cikarang.`
  2. `Sistem filtrasi HEPA Cleanroom, overhaul chiller, & AC Cassette pabrik. K3 & PPN resmi.`
  3. `Inspeksi berkala dan respon darurat teknisi onsite dekat Cikarang Dry Port. Hubungi kami.`

### C. Ad Group: KIIC Karawang Barat
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/hvac-kiic.html?utm_source=google&utm_medium=cpc&utm_campaign=b2b-kiic&utm_term={keyword}`
* **Headlines:**
  1. `Vendor HVAC Pabrik KIIC` (Pin 1)
  2. `Service AC Karawang Barat`
  3. `Overhaul Chiller 50-300 TR`
  4. `Workshop Karawang Barat`
  5. `Standar Kontraktor PMA`
  6. `Dokumen K3 & JSA Lengkap`
  7. `Faktur Pajak PPN Resmi`
* **Descriptions:**
  1. `Kontraktor HVAC resmi untuk pabrik manufaktur berat & perakitan di Kawasan KIIC Karawang.`
  2. `Overhaul kompresor screw/centrifugal, descaling tube chiller, & AC kantor. Tim K3 bersertifikat.`
  3. `Penerbitan e-Faktur Pajak PPN resmi, SPK, BAST, & respon cepat dari Gerbang Tol Karawang Barat.`

### D. Ad Group: EJIP Cikarang Selatan
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/hvac-ejip.html?utm_source=google&utm_medium=cpc&utm_campaign=b2b-ejip&utm_term={keyword}`
* **Headlines:**
  1. `Vendor HVAC Pabrik EJIP` (Pin 1)
  2. `Service AC Kawasan EJIP`
  3. `Kontrak AC Central VRV/VRF`
  4. `Kontrol Kelembapan Presisi`
  5. `Standar Vendor PMA Jepang`
  6. `Legalitas OSS & e-Faktur`
  7. `SLA Respon Pintu Tol Cikarang`
* **Descriptions:**
  1. `Mitra kontraktor spesialis pabrik manufaktur presisi & teknologi tinggi di Kawasan EJIP.`
  2. `Perawatan sistem multi-split VRV inverter, chiller, & stabilisasi suhu ruang produksi.`
  3. `Tertib administrasi e-Faktur PPN, dokumen izin kerja K3, & survey lokasi awal tanpa biaya.`

### E. Ad Group: Diagnostic Kode Error & Darurat
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/panduan-kode-error-ac-industri.html?utm_source=google&utm_medium=cpc&utm_campaign=b2b-diagnostic&utm_term={keyword}`
* **Headlines:**
  1. `AC / Chiller Pabrik Error?` (Pin 1)
  2. `Teknisi HVAC Onsite Darurat`
  3. `Diagnosa Kode Error VRV`
  4. `Penyebab Error U4 E3 FL`
  5. `Respon Darurat Bekasi-Kwg`
  6. `Standar Keselamatan K3`
  7. `Hubungi Teknisi Spesialis`
* **Descriptions:**
  1. `Temukan arti kode error AC pabrik Anda & panggil teknisi darurat bersertifikat K3 sekarang.`
  2. `Penanganan cepat alarm high pressure, trip kompresor inverter, & kebocoran sistem pendingin.`
  3. `Teknisi standby siap meluncur ke kawasan industri Bekasi, Cikarang, dan Karawang.`

### F. Ad Group: Chiller Industri & Overhaul
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/service-chiller-industri.html?service=Chiller&utm_source=google&utm_medium=cpc&utm_campaign=b2b-chiller&utm_term={keyword}`
* **Headlines:**
  1. `Service Chiller Industri` (Pin 1)
  2. `Overhaul Kompresor Chiller`
  3. `Descaling Kondensor Chiller`
  4. `Teknisi Chiller K3 Pabrik`
  5. `Water & Air Cooled Chiller`
  6. `Faktur Pajak PPN Resmi`
  7. `Emergency Chiller 24 Jam`
* **Descriptions:**
  1. `Kontraktor spesialis service & overhaul kompresor chiller industri screw/scroll/centrifugal.`
  2. `Descaling kimia aman & mechanical tube cleaning kembalikan COP efisiensi pendinginan.`
  3. `Mitra resmi pabrik MM2100, KIIC, Jababeka. Tim K3 bersertifikat & survey awal gratis via WA.`

### G. Ad Group: AHU Cleanroom & Tata Udara
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/maintenance-ahu-cleanroom.html?service=AHU&utm_source=google&utm_medium=cpc&utm_campaign=b2b-ahu&utm_term={keyword}`
* **Headlines:**
  1. `Maintenance AHU Cleanroom` (Pin 1)
  2. `Service AHU Pabrik Farmasi`
  3. `Supply Filter HEPA H14`
  4. `Airflow Balancing CPOB`
  5. `Kontraktor Tata Udara Cikarang`
  6. `Teknisi HVAC K3 Berizin`
  7. `Sertifikasi CPOB Ready`
* **Descriptions:**
  1. `Spesialis maintenance AHU ruang bersih CPOB farmasi, F&B, & perakitan presisi Cikarang-Karawang.`
  2. `Pembersihan cooling coil, disinfeksi, & penggantian filter udara pre-medium-HEPA H14.`
  3. `Laporan teknis lengkap diferensial tekanan, BAST, & penerbitan e-Faktur Pajak PPN resmi.`

### H. Ad Group: AC VRV / VRF Inverter Gedung & Pabrik
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/service-ac-vrv-vrf.html?service=VRV&utm_source=google&utm_medium=cpc&utm_campaign=b2b-vrv&utm_term={keyword}`
* **Headlines:**
  1. `Service AC VRV VRF Gedung` (Pin 1)
  2. `Spesialis Daikin VRV & VRF`
  3. `Perbaikan Inverter VRV Pabrik`
  4. `Tracing Kebocoran Refnet`
  5. `Diagnosa Error U4 LC E3`
  6. `Penerbit e-Faktur PPN Resmi`
  7. `Kontraktor VRV Bergaransi`
* **Descriptions:**
  1. `Solusi perbaikan & kontrak maintenance AC multi-split VRV / VRF gedung kantor & fasilitas pabrik.`
  2. `Diagnostik modul inverter PCB, penanganan kebocoran refnet branch, & cuci indoor cassette rapi.`
  3. `Mitra terpercaya kawasan industri EJIP, MM2100, Jababeka, & KIIC. Jadwalkan survey via WA.`

### I. Ad Group: HVAC Industri Farmasi & Cleanroom CPOB
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/hvac-industri-farmasi-cleanroom.html?service=Pharma&utm_source=google&utm_medium=cpc&utm_campaign=b2b-pharma&utm_term={keyword}`
* **Headlines:**
  1. `HVAC Industri Farmasi CPOB` (Pin 1)
  2. `Kontraktor Cleanroom Cikarang`
  3. `Ganti Filter HEPA H14`
  4. `DOP Test & Integrity Test`
  5. `Sertifikasi CPOB Ready`
  6. `Izin K3 & Faktur Pajak PPN`
  7. `Teknisi Cleanroom Berizin`
* **Descriptions:**
  1. `Kontraktor HVAC ruang bersih farmasi & kosmetik berstandar CPOB / ISO 14644 Class A-D.`
  2. `Penggantian filter HEPA H14 bersertifikat DOP test, pressure cascade, & airflow balancing.`
  3. `Laporan kualifikasi DQ/IQ/OQ/PQ siap audit BPOM. Konsultasi & survey lokasi via WhatsApp.`

### J. Ad Group: HVAC Pabrik Makanan & Minuman (HACCP)
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/hvac-industri-makanan-minuman.html?service=FNB&utm_source=google&utm_medium=cpc&utm_campaign=b2b-fnb&utm_term={keyword}`
* **Headlines:**
  1. `HVAC Pabrik Makanan F&B` (Pin 1)
  2. `Tata Udara Higienis HACCP`
  3. `Solusi Kondensasi Plafon`
  4. `Sanitasi Koil Food-Safe`
  5. `Kontrol Kelembaban Ruang Kemas`
  6. `Teknisi K3 Manufaktur`
  7. `Faktur Pajak PPN Resmi`
* **Descriptions:**
  1. `Sistem tata udara higienis pabrik makanan & minuman berstandar kepatuhan audit HACCP.`
  2. `Atasi tetesan kondensasi ruang kemas & sanitasi koil pendingin aman bebas racun.`
  3. `Mitra pabrik F&B di MM2100, Suryacipta, & Jababeka. Jadwalkan inspeksi teknis via WA.`

### K. Ad Group: KNIC Karawang (EV Battery & High-Tech)
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/hvac-knic-karawang.html?area=KNIC&service=Maintenance&utm_source=google&utm_medium=cpc&utm_campaign=b2b-knic&utm_term={keyword}`
* **Headlines:**
  1. `Vendor HVAC Pabrik KNIC` (Pin 1)
  2. `Service AC Kawasan KNIC`
  3. `Chiller Pabrik EV Battery`
  4. `Cleanroom Presisi Tinggi`
  5. `Legalitas OSS & e-Faktur`
  6. `Teknisi K3 Manufaktur`
  7. `Akses Cepat Tol Karawang`
* **Descriptions:**
  1. `Kontraktor resmi HVAC pabrik baterai EV & industri cerdas di Kawasan KNIC Karawang Barat.`
  2. `Overhaul chiller kapasitas besar, AHU cleanroom, & kontrak maintenance rutin berizin K3.`
  3. `Penerbitan e-Faktur PPN resmi, SPK, BAST, & survey teknisi siap jadwalkan via WhatsApp.`

### L. Ad Group: Artha Industrial Hill Karawang
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/hvac-artha-industrial-hill.html?area=AIH&service=Maintenance&utm_source=google&utm_medium=cpc&utm_campaign=b2b-aih&utm_term={keyword}`
* **Headlines:**
  1. `Vendor HVAC Artha Hill` (Pin 1)
  2. `Service AC Kawasan AIH`
  3. `Overhaul Chiller Telukjambe`
  4. `Tata Udara Farmasi & Baja`
  5. `Sertifikasi CSMS & K3`
  6. `Penerbit e-Faktur PPN`
  7. `Respon Cepat Karawang Barat`
* **Descriptions:**
  1. `Vendor spesialis sistem HVAC pabrik manufaktur berat & farmasi di Artha Industrial Hill Karawang.`
  2. `Perawatan berkala chiller sentrifugal/screw, AHU ducting, & AC Cassette kantor pabrik.`
  3. `Administrasi legalitas lengkap, JSA, & penawaran resmi langsung oleh tim engineering.`

### M. Ad Group: Sentul Industrial Estate Bogor
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/hvac-sentul-bogor.html?area=Sentul&service=Maintenance&utm_source=google&utm_medium=cpc&utm_campaign=b2b-sentul&utm_term={keyword}`
* **Headlines:**
  1. `Vendor HVAC Pabrik Sentul` (Pin 1)
  2. `Service AC Sentul Estate`
  3. `Chiller Pabrik F&B Sentul`
  4. `Cold Storage Tata Udara`
  5. `Teknisi Sertifikasi K3`
  6. `Faktur Pajak PPN Resmi`
  7. `Exit Tol Sirkuit Sentul`
* **Descriptions:**
  1. `Kontraktor HVAC resmi pabrik makanan, farmasi, & pergudangan dingin di Sentul Bogor.`
  2. `Maintenance chiller industri, AHU higienis, & AC komersial gedung. Tim K3 bersertifikat.`
  3. `Respon cepat teknisi regional koridor Tol Jagorawi. Konsultasikan jadwal survey via WA.`

### N. Ad Group: Modern Cikande Serang Banten
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/hvac-modern-cikande.html?area=Cikande&service=Maintenance&utm_source=google&utm_medium=cpc&utm_campaign=b2b-cikande&utm_term={keyword}`
* **Headlines:**
  1. `Vendor HVAC Modern Cikande` (Pin 1)
  2. `Service AC Pabrik Cikande`
  3. `Overhaul Chiller Serang`
  4. `Tata Udara Pabrik Kimia`
  5. `Standar K3 Industri Berat`
  6. `e-Faktur PPN Resmi`
  7. `Gerbang Tol Cikande KM 52`
* **Descriptions:**
  1. `Mitra kontraktor HVAC pabrik kimia, baja, & manufaktur di Kawasan Industri Modern Cikande Serang.`
  2. `Penanganan chiller kapasitas besar, descaling kondensor kimia, & AC cassette gedung.`
  3. `Dukungan tim teknisi siaga koridor Tol Jakarta-Merak. Hubungi kami untuk jadwal survey resmi.`

### O. Ad Group: Kalkulator HVAC Industri (High-Intent Engineering Research)
* **Final URL:** `https://jasa-service-ac.tech1solusi.workers.dev/kalkulator-hvac-industri.html?utm_source=google&utm_medium=cpc&utm_campaign=b2b-calculator&utm_term={keyword}`
* **Headlines:**
  1. `Kalkulator HVAC Industri` (Pin 1)
  2. `Hitung Tonase Chiller TR`
  3. `Kalkulator ACH Cleanroom`
  4. `Estimasi CFM Filter HEPA`
  5. `Engineering Tools B2B`
  6. `Validasi Audit Insinyur`
  7. `CV Rifqi AC Spesialis`
* **Descriptions:**
  1. `Hitung estimasi tonase chiller (TR/kW) & kebutuhan airflow cleanroom pabrik secara instan.`
  2. `Alat rekayasa teknis berbasis debit air GPM, Delta T, dan volume ruang bersih CPOB.`
  3. `Konsultasikan hasil perhitungan Anda dengan tim engineering ber-K3 CV Rifqi AC via WA.`

---

## 5. Ekstensi Iklan (Ad Assets) yang Wajib Diaktifkan

Mengaktifkan ekstensi memperbesar ukuran iklan di hasil pencarian dan **meningkatkan CTR hingga 15–25%**:

1. **Call Asset (Nomor Telepon)**: Hubungkan nomor `0813-8580-8284` agar tombol panggilan telepon muncul langsung pada pencarian mobile.
2. **Sitelink Assets (Pilihan Terbaik)**:
   - *Sitelink 1*: "Kalkulator HVAC & Chiller" (URL: `kalkulator-hvac-industri.html`)
     - Deskripsi 1: `Hitung estimasi tonase TR & ACH`
     - Deskripsi 2: `Validasi audit teknisi bersertifikat`
   - *Sitelink 2*: "Service Chiller & Overhaul" (URL: `service-chiller-industri.html`)
     - Deskripsi 1: `Descaling tube & kompresor screw`
     - Deskripsi 2: `Siaga darurat kawasan industri 24 jam`
   - *Sitelink 3*: "Pemeliharaan AHU Cleanroom" (URL: `maintenance-ahu-cleanroom.html`)
     - Deskripsi 1: `Penggantian filter HEPA H14 CPOB`
     - Deskripsi 2: `Uji integritas & sertifikasi resmi`
   - *Sitelink 4*: "Kawasan Baterai EV & High-Tech" (URL: `hvac-knic-karawang.html`)
     - Deskripsi 1: `Coverage resmi KNIC Karawang Barat`
     - Deskripsi 2: `Izin K3 & Faktur Pajak PPN lengkap`
   - *Sitelink 5*: "Kawasan Industri MM2100 & KIIC" (URL: `kawasan-industri-cikarang.html`)
     - Deskripsi 1: `Respon cepat dari pintu gerbang tol`
     - Deskripsi 2: `Jadwal inspeksi & survey lokasi gratis`
   - *Sitelink 6*: "Panduan Kode Error AC Industri" (URL: `panduan-kode-error-ac-industri.html`)
     - Deskripsi 1: `Arti alarm Daikin, York, Trane`
     - Deskripsi 2: `Panggilan teknisi darurat onsite`
3. **Callout Assets**:
   - `Legalitas OSS Terdaftar` &bull; `Penerbit e-Faktur PPN` &bull; `Teknisi Sertifikasi K3` &bull; `Respon Cepat Pintu Tol` &bull; `Survey Lokasi Gratis` &bull; `Workshop Bekasi & Karawang` &bull; `Garansi Pekerjaan 90 Hari` &bull; `Kepatuhan Audit CPOB & HACCP`
4. **Structured Snippet Assets**:
   - Header: **Jenis Layanan**: `Chiller Centrifugal`, `AHU Cleanroom CPOB`, `AC VRV Inverter`, `Precision PAC Server`, `Ducting & Airflow Balancing`
   - Header: **Cakupan Wilayah**: `MM2100 Cibitung`, `Jababeka Cikarang`, `KIIC Karawang`, `EJIP Cikarang`, `KNIC Karawang`, `Modern Cikande Serang`

---

## 6. Master Negative Keywords List (Proteksi Anti-Boncos)

Daftar ini sudah diperbarui secara lengkap dalam `docs/bulk-negative-keywords.csv` dan panduan mendalam di `docs/google-ads-negative-keywords.md`. Kata kunci berikut **wajib diblokir** agar budget klik Anda terlindungi dari klik yang tidak relevan:

* **Kampanye B2B Industri (Anti-Residential Leakage)**:
  - `rumah`, `perumahan`, `kontrakan`, `kost`, `kos-kosan`, `kosan`, `apartemen`, `kamar`, `rumahan`.
  - `1/2 pk`, `0.5 pk`, `1/2pk`, `3/4 pk`, `0.75 pk`, `1 pk`, `1pk`.
  - `kulkas`, `mesin cuci`, `dispenser`, `freezer daging rumahan`, `kipas angin`, `air cooler mini`, `ac mobil`.
* **Kampanye B2C Residensial (Anti-Industrial Overload)**:
  - `chiller`, `ahu`, `cleanroom`, `cooling tower`, `cpob`, `hepa filter`, `pabrik`, `kawasan industri`, `mm2100`, `kiic`, `ejip`, `jababeka`, `suryacipta`, `csms`, `e-faktur pabrik`.
* **Query Non-Komersial & Lowongan (Keduanya)**:
  - `lowongan`, `lowongan kerja`, `loker`, `info loker`, `gaji`, `gaji teknisi`, `magang`, `internship`, `karir`.
  - `cara memperbaiki`, `cara servis sendiri`, `tutorial`, `belajar`, `kursus`, `skema`, `diagram`, `wiring diagram`, `youtube`, `pdf`.
  - `tokopedia`, `shopee`, `bukalapak`, `lazada`, `olx`, `harga remote ac`, `kapasitor 15 uf`, `modul ac bekas`, `jual beli bekas`.

---

## 7. Membaca Atribusi Lead Otomatis di WhatsApp & SOP 1 Menit Admin CS

Website ini sudah ditanami engine **Dual-Storage Attribution Engine (sessionStorage + Cookie 30 Hari)** di file `assets/js/tracking.js`.

Setiap calon klien yang datang dari iklan Google Ads (baik langsung klik maupun membuka sub-halaman lain terlebih dahulu), saat menekan tombol WhatsApp atau mengirimkan formulir RFQ Desktop akan menghasilkan catatan atribusi lengkap:

### Contoh Pesan Masuk WhatsApp:
```
Halo CV Rifqi AC, saya dari perusahaan di Kawasan Industri MM2100 Cikarang Barat...
- Nama Perusahaan: PT Nippon Komponen Indonesia
- Kebutuhan: Kontrak Maintenance Chiller & AHU

[Ref Iklan: google | b2b-mm2100 | KW: service chiller cikarang | GCLID: EAIaIQobChMIr9Xy3_7x_QIVlZpmAh3_8wEWEAAYASAAEgK1ffD_BwE]
```

### SOP 1 Menit Bagi Admin WhatsApp (Praktis Non-Teknis):
1. **Identifikasi Baris Terakhir**:
   * Lihat apakah di akhir pesan ada baris dalam tanda kurung siku `[Ref Iklan: ...]`.
2. **Salin ke Spreadsheet Pelacak Prospek**:
   * Buka spreadsheet Google Sheets operasional (lihat panduan `docs/google-sheet-lead-tracker-template.md`).
   * Salin seluruh baris `[Ref Iklan: ...]` atau kode setelah `GCLID: ` ke Kolom **G (Raw Pesan WA / GCLID)**.
   * Catat Nama PIC, Nama PT/Pabrik, Nomor Kontak, dan Kawasan Industri.
3. **Jika Calon Klien Menghapus Teks Referensi**:
   * Jangan khawatir! Tanyakan secara ramah saat pembuka obrolan: *"Selamat pagi/siang Bapak/Ibu, salam kenal dari CV Rifqi AC. Boleh kami tahu sebelumnya mendapatkan informasi kami dari Google atau rekomendasi rekanan?"*
   * Jika dijawab "cari di Google", tandai sumber sebagai *Google Direct* di catatan internal.
4. **Update Status Prospek Saat Ada Kemajuan**:
   * Jika klien setuju jadwal survey teknisi onsite $\rightarrow$ ubah status ke **`2. Konsultasi / Survey Terjadwal`**.
   * Jika SPK / PO diterbitkan & disepakati $\rightarrow$ ubah status ke **`4. SPK / Deal Kontrak`** dan masukkan nominal kontrak riil (misal Rp 45.000.000).

---

## 8. Multi-Stage Offline Conversion Tracking (OCT) & Scheduled Uploads

Dalam bisnis B2B HVAC industri, nilai transaksi per klien berkisar antara **Rp 15.000.000 hingga Rp 300.000.000+** per tahun dengan siklus closing 2 s/d 6 minggu. Mengoptimalkan iklan hanya berdasarkan "klik chat WhatsApp" berisiko membuat Google mencari orang yang hanya sekadar tanya harga receh.

Untuk itu, gunakan **Multi-Stage Conversion Pipeline**:
1. **Stage 1: `B2B Survey Teknis Terjadwal`** (Lead Qualified — Bobot Nilai: Rp 500.000). Mengirimkan sinyal cepat ke Google Ads dalam 24–48 jam bahwa klik tersebut adalah akun industri nyata yang mengundang survey lapangan.
2. **Stage 2: `Kontrak Maintenance B2B Deal`** (Final Won PO — Nilai Riil IDR Kontrak). Memberikan data ROI presisi agar algoritma Smart Bidding memprioritaskan kata kunci bernilai kontrak tertinggi.

```
+-----------------------------------------------------------------------------------------+
|                  ALUR SINKRONISASI CLOSED-LOOP GOOGLE ADS LENGKAP                       |
+-----------------------------------------------------------------------------------------+

 [1. Chat WA Masuk] ---> [2. Input ke Tab 'Leads_Masuk'] ---> [3. Tab 'GoogleAds_Upload']
   (Admin terima pesan     (Admin update status deal            (Formula otomatis parsing
    berisi GCLID)           di Google Sheets)                    GCLID & format ISO time)
                                                                            |
                                                                            v
 [5. Google Ads Smart Bidding] <----------------------------- [4. Scheduled Upload 24 Jam]
   (Algoritma belajar memburu                                  (Google Ads otomatis baca URL
    prospek pabrik bernilai tinggi)                             Google Sheet tiap jam 03.00 pagi)
```

### Setup 2 Conversion Actions di Google Ads (Hanya Sekali):
1. Masuk ke **Tools and settings** &rarr; **Conversions** &rarr; **New conversion action**.
2. Pilih sumber: **Import** &rarr; **CRMs, files, or other data sources** &rarr; **Track conversions from clicks**.
3. Daftarkan **Action Pertama**:
   - Nama Konversi: `B2B Survey Teknis Terjadwal`
   - Goal category: **Qualified lead**
   - Value: Gunakan nilai tetap `Rp 500.000` (atau bobot kualifikasi internal).
   - Count: **One**.
4. Daftarkan **Action Kedua**:
   - Nama Konversi: `Kontrak Maintenance B2B Deal`
   - Goal category: **Converted lead / Purchase**
   - Value: **Use different values for each conversion** (default IDR 0).
   - Count: **One**.
   - Attribution Model: **Data-driven**.

### Cara Setup Sinkronisasi Otomatis Google Sheets (Scheduled Uploads):
1. Buka spreadsheet Google Sheets pelacak Anda (sesuai `docs/google-sheet-lead-tracker-template.md`).
2. Klik **File** &rarr; **Share** &rarr; **Publish to web**.
3. Pilih hanya tab **`GoogleAds_Upload`** dan format **CSV**. Klik **Publish** lalu salin link URL-nya.
4. Di Google Ads, buka **Tools and settings** &rarr; **Conversions** &rarr; **Uploads** &rarr; **Schedules**.
5. Klik **(+) Tambah Jadwal**:
   - Source: **HTTPS** (masukkan URL link CSV dari Google Sheets di atas).
   - Frequency: **Daily** (Pukul 03:00 WIB).
6. Klik **Save & preview**. Kini Google Ads tersinkronisasi otomatis setiap malam tanpa perlu unggah CSV manual!

*(Catatan: Anda juga tetap dapat mengunggah file CSV secara manual sewaktu-waktu menggunakan template `docs/template-offline-conversions.csv`).*

---

## 9. Roadmap Bidding & Optimasi Konversi (Smart Bidding)

Untuk mendapatkan hasil maksimal dengan budget efisien, gunakan roadmap 3 tahap:

```
[ Minggu 1 - 2 ]                 [ Minggu 3 - 4 ]                 [ Bulan ke-2 dst ]
FASE 1: KUMPUL DATA             FASE 2: SMART BIDDING            FASE 3: VALUE-BASED BIDDING (tROAS)
====================             =====================            ===================================
Strategi: Maximize Clicks        Strategi: Maximize Conversions   Strategi: Maximize Conversion Value
Set: Max CPC Cap (Rp 6.000)      Syarat: Min. 30 event WA         Syarat: Min. 15 transaksi offline diimpor
Tujuan: Mengalirkan traffic      Tujuan: AI mencari akun yang     Tujuan: Memaksimalkan nilai omzet kontrak
        relevan industri.                mengirimkan survey & WA.          pabrik, bukan sekadar jumlah klik.
```

---

## 10. Panduan Integrasi Conversion Tracking (Google Tag)

Landing page sudah dilengkapi event tracker. Ketika akun Google Ads Anda sudah aktif, tautkan ID konversi dengan langkah berikut:

1. Di Google Ads, buka **Tools and settings** &rarr; **Conversions** &rarr; **Summary** &rarr; **New conversion action**.
2. Pilih **Website** &rarr; Masukkan URL website Anda.
3. Buat conversion action manual:
   - Category: **Submit lead form** atau **Contact**.
   - Conversion name: `Klik WhatsApp CV Rifqi AC`.
   - Value: Tidak menggunakan nilai (atau set estimasi nilai per lead B2B, misal Rp 100.000).
   - Count: **One** (satu konversi per interaksi).
4. Dapatkan **Conversion ID** dan **Conversion Label** dari Google (misal: `AW-123456789/AbCdEfGhIjK`).
5. Buka berkas `assets/js/tracking.js` di proyek ini:
   - Perbarui baris:
     ```javascript
     googleAdsId: "AW-123456789",
     googleAdsSendTo: "AW-123456789/AbCdEfGhIjK",
     ```
6. Pasang Google Tag snippet resmi pada bagian `<head>` berkas HTML Anda.


