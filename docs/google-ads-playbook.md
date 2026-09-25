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
7. [Membaca Atribusi Lead Otomatis di WhatsApp](#7-membaca-atribusi-lead-otomatis-di-whatsapp)
8. [Roadmap Bidding & Optimasi Konversi (Smart Bidding)](#8-roadmap-bidding--optimasi-konversi-smart-bidding)
9. [Panduan Integrasi Conversion Tracking (Google Tag)](#9-panduan-integrasi-conversion-tracking-google-tag)

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

### Pemetaan Ad Groups B2B (STAG):
1. **AG - MM2100 Cibitung** &rarr; URL: `hvac-mm2100.html` (Fokus otomotif, logistik, toleransi downtime ketat).
2. **AG - Jababeka Cikarang** &rarr; URL: `hvac-jababeka.html` (Fokus cleanroom, HEPA filter, F&B, Jababeka 1-6).
3. **AG - KIIC Karawang Barat** &rarr; URL: `hvac-kiic.html` (Fokus industri berat, chiller 50-300 TR, standar PMA Jepang).
4. **AG - EJIP Cikarang Selatan** &rarr; URL: `hvac-ejip.html` (Fokus industri presisi, sistem VRV/VRF, kontrol kelembapan).
5. **AG - Diagnostic Kode Error** &rarr; URL: `panduan-kode-error-ac-industri.html` (Fokus pencarian darurat alarm Daikin, York, dll).
6. **AG - Chiller Industri** &rarr; URL: `service-chiller-industri.html` (Fokus overhaul kompresor screw/centrifugal, descaling kondensor kimia & mechanical).
7. **AG - AHU Cleanroom** &rarr; URL: `maintenance-ahu-cleanroom.html` (Fokus tata udara CPOB farmasi, penggantian filter HEPA H14, airflow balancing).
8. **AG - AC VRV VRF** &rarr; URL: `service-ac-vrv-vrf.html` (Fokus multi-split inverter Daikin VRV / Mitsubishi City Multi, tracing kebocoran refnet).

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
* **Descriptions:**
  1. `Temukan arti kode error AC pabrik Anda & panggil teknisi darurat bersertifikat K3 sekarang.`
  2. `Penanganan cepat alarm high pressure, trip kompresor inverter, & kebocoran sistem pendingin.`
  3. `Teknisi standby siap meluncur ke kawasan industri Bekasi, Cikarang, dan Karawang.`

---

## 5. Ekstensi Iklan (Ad Assets) yang Wajib Diaktifkan

Mengaktifkan ekstensi memperbesar ukuran iklan di hasil pencarian dan **meningkatkan CTR hingga 15–20%**:

1. **Call Asset (Nomor Telepon)**: Hubungkan nomor `0813-8580-8284` agar tombol panggilan telepon muncul langsung pada pencarian mobile.
2. **Sitelink Assets**:
   - *Sitelink 1*: "Kontrak Maintenance B2B" (URL: `index.html#alur-pengadaan`)
   - *Sitelink 2*: "Kawasan Industri MM2100" (URL: `hvac-mm2100.html`)
   - *Sitelink 3*: "Kawasan Industri KIIC" (URL: `hvac-kiic.html`)
   - *Sitelink 4*: "Panduan Kode Error AC" (URL: `panduan-kode-error-ac-industri.html`)
3. **Callout Assets**:
   - `Legalitas OSS Terdaftar` &bull; `Penerbit e-Faktur PPN` &bull; `Teknisi Sertifikasi K3` &bull; `Respon Cepat Pintu Tol` &bull; `Survey Lokasi Gratis` &bull; `Workshop Bekasi & Karawang`

---

## 6. Master Negative Keywords List (Proteksi Anti-Boncos)

Daftar ini sudah terangkum dalam `docs/google-ads-bulk-negative-keywords.csv`. Kata kunci berikut **wajib diblokir** agar budget klik Anda tidak habis untuk pencari loker, mahasiswa, atau barang rumah tangga:

* **Lowongan & Karir**: `lowongan`, `lowongan kerja`, `loker`, `info loker`, `gaji`, `gaji teknisi`, `magang`, `internship`, `karir`, `recruitment`, `lamaran`.
* **Materi Belajar & DIY**: `cara memperbaiki`, `cara servis sendiri`, `tutorial`, `belajar`, `kursus`, `skema`, `skema kelistrikan`, `diagram`, `wiring diagram`, `makalah`, `skripsi`, `buku`, `pdf`, `youtube`, `video`.
* **E-Commerce & Barang Bekas**: `tokopedia`, `shopee`, `bukalapak`, `lazada`, `olx`, `harga remote ac`, `kapasitor 15 uf`, `modul ac bekas`, `jual beli bekas`.
* **Non-HVAC Gedung**: `ac mobil`, `service ac mobil terdekat`, `bengkel ac mobil`, `kulkas`, `mesin cuci`, `dispenser`, `freezer daging rumahan`, `kipas angin`, `air cooler mini`.

---

## 7. Membaca Atribusi Lead Otomatis di WhatsApp

Website ini sudah ditanami engine **Session-Preserved UTM Capture** di file `assets/js/tracking.js`.

Setiap calon klien yang datang dari iklan Google Ads (baik langsung klik maupun membuka sub-halaman lain terlebih dahulu), saat menekan tombol WhatsApp akan menghasilkan pesan otomatis dengan lampiran atribusi di baris paling bawah:

```
Halo CV Rifqi AC, saya dari perusahaan di Kawasan Industri MM2100 Cikarang Barat...
- Nama Perusahaan: PT Nippon Komponen Indonesia
- Kebutuhan: Kontrak Maintenance Chiller & AHU

[Ref Iklan: google | b2b-mm2100 | KW: service chiller cikarang]
```

### Tindakan Cerdas Pengiklan:
1. **Analisis Keyword Jawara**: Jika kata kunci `service chiller cikarang` menghasilkan banyak closing proyek puluhan juta rupiah, naikkan budget klik untuk kata kunci tersebut.
2. **Eliminasi Keyword Tidak Efektif**: Jika ada kata kunci yang menghabiskan puluhan klik tanpa ada chat masuk, segera pause atau turunkan Max CPC-nya.

---

## 8. Roadmap Bidding & Optimasi Konversi (Smart Bidding)

Untuk mendapatkan hasil maksimal dengan budget efisien, gunakan roadmap 3 tahap:

```
[ Minggu 1 - 2 ]                 [ Minggu 3 - 4 ]                 [ Bulan ke-2 dst ]
FASE 1: KUMPUL DATA             FASE 2: SMART BIDDING            FASE 3: TARGET CPA (SCALE)
====================             =====================            ==========================
Strategi: Maximize Clicks        Strategi: Maximize Conversions   Strategi: Target CPA
Set: Max CPC Cap (Rp 6.000)      Syarat: Min. 30 konversi WA      Tentukan target biaya per lead
Tujuan: Mengalirkan traffic      Tujuan: AI Google mencari calon  Tujuan: Skalakan volume closing
        relevan ke landing page.         pembeli ber-intent kuat.         secara konsisten & terukur.
```

---

## 9. Panduan Integrasi Conversion Tracking (Google Tag)

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
