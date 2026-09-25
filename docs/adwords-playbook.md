# PLAYBOOK STRATEGI GOOGLE ADS (SEARCH CAMPAIGN)
## CV RIFQI AC - BEKASI, CIKARANG, KARAWANG & DEPOK

Panduan operasional teknis untuk menjalankan iklan Google Ads Search (AdWords) berkonversi tinggi, mengoptimalkan biaya per perolehan prospek (CPA semurah mungkin), dan mencegah anggaran iklan terbuang sia-sia.

---

## DAFTAR ISI
1. [Arsitektur Struktur Akun & Kampanye](#1-arsitektur-struktur-akun--kampanye)
2. [Targeting Lokasi & Jadwal Iklan](#2-targeting-lokasi--jadwal-iklan)
3. [Riset Kata Kunci (Keywords) per Ad Group](#3-riset-kata-kunci-keywords-per-ad-group)
4. [Daftar Negative Keywords (Wajib Pasang Anti-Boncos)](#4-daftar-negative-keywords-wajib-pasang-anti-boncos)
5. [Materi Iklan Responsive Search Ads (RSA Copywriting)](#5-materi-iklan-responsive-search-ads-rsa-copywriting)
6. [Ekstensi Iklan (Ad Assets) yang Wajib Diaktifkan](#6-ekstensi-iklan-ad-assets-yang-wajib-diaktifkan)
7. [Roadmap Bidding & Optimasi Konversi (CRO & Smart Bidding)](#7-roadmap-bidding--optimasi-konversi)
8. [Panduan Integrasi Conversion Tracking (Google Tag)](#8-panduan-integrasi-conversion-tracking-google-tag)
9. [Prioritas Eksperimen CRO (Conversion Rate Optimization Backlog)](#9-prioritas-eksperimen-cro-conversion-rate-optimization-backlog)

---

## 1. Arsitektur Struktur Akun & Kampanye

Pisahkan kampanye B2B dan B2C secara total. Jangan pernah mencampurnya dalam satu kampanye.

```
                           [ AKUN GOOGLE ADS ]
                                    |
          +-------------------------+-------------------------+
          |                                                   |
          v                                                   v
[ CAMPAIGN 1: B2B KOMERSIL & PABRIK ]       [ CAMPAIGN 2: B2C RESIDENSIAL & DARURAT ]
Final URL: https://domain.com/index.html    Final URL: https://domain.com/b2c.html
Tujuan: Leads (Survey & Kontrak)            Tujuan: Leads (Panggilan Servis Rumah)
Bidding: Target CPA / Max Conversions       Bidding: Target CPA / Max Conversions
```

---

## 2. Targeting Lokasi & Jadwal Iklan

### Campaign 1 (B2B - Industri & Komersil)
* **Target Geografis:**
  - **Kabupaten Bekasi & Cikarang**: Radius fokus kawasan industri MM2100 Cibitung, Jababeka (Cikarang Utara/Pusat), GIIC / Deltamas (Cikarang Pusat), Delta Silicon (Cikarang Selatan), EJIP.
  - **Kabupaten Karawang**: Radius fokus KIIC (Karawang Barat), Kawasan Industri Surya Cipta, KIM (Kawasan Industri Mitrakarawang), Telukjambe, Kosambi, Cikampek.
  - **Kota Depok & Kota Bekasi**: Penargetan area perkantoran, ruko komersial, rumah sakit, klinik, perbankan, dan server room.
* **Jadwal Tayang (Ad Schedule):**
  - **Senin s/d Jumat**: Pukul 07.30 - 18.00 WIB (Jam kerja Staff GA, Procurement, dan Manager Pabrik mencari vendor).
  - *Sabtu & Minggu*: Nonaktifkan atau turunkan bid -50% (Kecuali Anda menargetkan pabrik dengan shift 24/7).
* **Device Targeting:** Desktop & Mobile (di B2B, persentase pencarian via Laptop/PC kantor mencapai 40-50%).

### Campaign 2 (B2C - Residensial & Panggilan Rumah)
* **Target Geografis:**
  - **Kota & Kabupaten Depok**: Seluruh kecamatan (Margonda, Beji, Pancoran Mas, Cimanggis, Sukmajaya, Sawangan, Cinere, Cibubur).
  - **Kota & Kabupaten Bekasi**: Bekasi Barat, Timur, Selatan, Utara, Rawalumbu, Galaxy, Mustika Jaya, Tambun Selatan, Cikarang Kota.
  - **Kabupaten Karawang**: Kawasan hunian Karawang Kota, Galuh Mas, Telukjambe Timur, Resinda, Klari.
* **Jadwal Tayang (Ad Schedule):**
  - **Setiap Hari (Senin - Minggu)**: Pukul 06.30 - 21.00 WIB.
  - *Peak Hours*: Pukul 11.00 - 14.00 (saat cuaca terpanas) dan 18.00 - 21.00 (saat orang pulang kerja mendapati AC kamar tidak dingin).
* **Device Targeting:** Mobile Only (+20% bid adjustment pada Smartphone, karena orang yang AC-nya rusak langsung meraih HP).

---

## 3. Riset Kata Kunci (Keywords) per Ad Group

> **PENTING**: Gunakan format **"Phrase Match"** (tanda kutip) dan **[Exact Match]** (kurung siku). **HINDARI BROAD MATCH** (tanpa tanda) di awal karena akan menghabiskan budget untuk pencarian yang tidak relevan.

### CAMPAIGN 1: B2B KOMERSIL & PABRIK

#### Ad Group 1: Pabrik & Kawasan Industri
- `"service ac pabrik"`
- `"service ac industri"`
- `"vendor service ac karawang"`
- `"kontrak service ac pabrik"`
- `"service ac kawasan kiic"`
- `"service ac mm2100"`
- `"service ac cikarang pabrik"`
- `[service ac pabrik karawang]`
- `[service ac pabrik bekasi]`

#### Ad Group 2: Kantor & Gedung Komersil
- `"service ac kantor bekasi"`
- `"maintenance ac gedung"`
- `"kontrak perawatan ac kantor"`
- `"jasa service ac kantor cikarang"`
- `"vendor ac kantor depok"`
- `"service ac ruko bekasi"`
- `[kontrak service ac kantor]`
- `[vendor ac kantor]`

#### Ad Group 3: Unit Khusus Komersil (High Value)
- `"service ac cassette kantor"`
- `"service ac standing floor"`
- `"maintenance ac vrv"`
- `"service ac ducting bekasi"`
- `"cuci ac cassette karawang"`
- `[service ac cassette]`
- `[service ac standing]`

---

### CAMPAIGN 2: B2C RESIDENSIAL & DARURAT

#### Ad Group 1: Cuci AC Rutin & Cepat
- `"jasa cuci ac bekasi"`
- `"cuci ac depok terdekat"`
- `"cuci ac rumah karawang"`
- `"biaya cuci ac rumah"`
- `"tukang cuci ac panggilan"`
- `[cuci ac bekasi]`
- `[cuci ac depok]`
- `[jasa cuci ac terdekat]`

#### Ad Group 2: Masalah Darurat (AC Rusak / Bocor / Panas)
- `"service ac bocor air"`
- `"service ac tidak dingin bekasi"`
- `"service ac mati depok"`
- `"tukang service ac terdekat panggil"`
- `"service ac panggilan hari ini"`
- `"ac netes air panggil teknisi"`
- `[service ac bekasi]`
- `[service ac depok]`

#### Ad Group 3: Freon & Bongkar Pasang
- `"isi freon ac rumah bekasi"`
- `"biaya isi freon r32 depok"`
- `"tambah freon ac r410a"`
- `"bongkar pasang ac bekasi"`
- `"jasa pasang ac depok"`

---

## 4. Daftar Negative Keywords (Wajib Pasang Anti-Boncos)

Buat satu **Negative Keyword List** di tingkat akun (*Account-Level Negative Keyword List*) dan terapkan ke seluruh kampanye. Ini menghemat 30% - 50% biaya klik yang terbuang percuma!

```text
# Lowongan Kerja & Karir
loker
lowongan
lowongan kerja
gaji
karir
magang
recruitment
job
pekerjaan

# Edukasi & DIY (Do It Yourself)
cara
tutorial
belajar
skripsi
makalah
kursus
training
buku
pdf
youtube
rangkaian
skema
wiring
diagram
jalur kabel
modul error code

# Barang Bekas / Jual Beli Unit Baru
ac bekas
harga ac baru
toko ac
jual ac
olx
tokopedia
shopee
lazada
bukalapak
katalog
distributor
sparepart bekas

# Hiburan / Game / Lainnya
game
film
chord
lirik
artinya
adalah
wikipedia
```

---

## 5. Materi Iklan Responsive Search Ads (RSA Copywriting)

Google mengizinkan hingga 15 Headlines (maksimal 30 karakter) dan 4 Descriptions (maksimal 90 karakter).

### RSA Copy: Campaign B2B (Pabrik & Kantor)
**Final URL**: `https://jasa-service-ac.tech1solusi.workers.dev/`  
**Display Path**: `cv-rifqi-ac` / `b2b-industri`

#### Headlines (Pilih & masukkan seluruh variasi):
1. `CV Rifqi AC - Vendor Resmi` (Pin di Posisi 1)
2. `Service AC Pabrik & Kantor`
3. `Mitra HVAC Bekasi & Karawang`
4. `Penerbit e-Faktur Pajak PPN` (Pin di Posisi 2)
5. `Kontrak Perawatan AC Gedung`
6. `Teknisi Standar APD & K3 SNI`
7. `Free Survey Lokasi Pabrik`
8. `AC Cassette, VRV & Standing`
9. `Pengerjaan Weekend / Malam`
10. `Layanan Cikarang & KIIC`
11. `Laporan BAST & Foto Lengkap`
12. `SLA Respon < 3 Jam Server`
13. `Harga Transparan SPH Resmi`
14. `Jasa Maintenance AC Depok`
15. `Jadwalkan Survey Hari Ini`

#### Descriptions:
1. `Mitra resmi service & kontrak AC kantor, pabrik & ruko. Legalitas CV terdaftar & e-Faktur Pajak.`
2. `Teknisi disiplin APD & K3 SNI. Siaga shift malam & weekend tanpa ganggu produksi pabrik.`
3. `Jangkauan KIIC Karawang, MM2100, Jababeka, Bekasi & Depok. Survey lokasi gratis, hubungi kami!`
4. `Penerbitan SPH resmi, SPK, BAST pengerjaan lengkap, & Term of Payment fleksibel korporat.`

---

### RSA Copy: Campaign B2C (Rumah & Ruko)
**Final URL**: `https://jasa-service-ac.tech1solusi.workers.dev/b2c.html`  
**Display Path**: `rifqi-ac` / `service-rumah`

#### Headlines:
1. `Jasa Service AC Datang Hari Ini` (Pin di Posisi 1)
2. `Cuci AC Bersih & Bergaransi`
3. `AC Bocor / Tidak Dingin?`
4. `Teknisi Siaga Datang Cepat` (Pin di Posisi 2)
5. `Garansi Dingin 30 Hari Penuh`
6. `Cuci AC Mulai Rp 60 Ribu`
7. `Panggilan Bekasi, Depok, Krw`
8. `SOP Cover Plastik Bersih`
9. `Cek Freon Akurat di Tempat`
10. `Teknisi Sopan & Berpengalaman`
11. `Service AC Panggilan Terdekat`
12. `Booking Mudah Dalam 60 Detik`
13. `Bongkar Pasang AC Cepat`
14. `Harga Jujur Tanpa Trik Freon`
15. `Chat WhatsApp Respons Cepat`

#### Descriptions:
1. `AC bocor menetes atau tidak dingin? Teknisi CV Rifqi AC siap datang hari ini garansi 30 hari!`
2. `Pengerjaan bersih cover plastik anti-ciprat kasur & dinding. Cuci AC split mulai 60rb via WA!`
3. `Melayani perumahan Bekasi, Depok, dan Karawang. Respon teknisi cepat & harga transparan.`
4. `Pengecekan teknis akurat di depan Anda. Nota resmi bergaransi pengerjaan ulang 100% gratis.`

---

## 6. Ekstensi Iklan (Ad Assets) yang Wajib Diaktifkan

Mengaktifkan ekstensi akan **memperbesar ukuran visual iklan di Google** dan **meningkatkan CTR hingga 15-20%**:

1. **Call Asset (Nomor Telepon)**: Masukkan nomor telepon resmi `0813-8580-8284` agar tombol "Call" langsung muncul di Google pencarian mobile.
2. **Sitelink Assets**:
   - *Sitelink 1*: "Kontrak Maintenance B2B" (URL: `https://domain.com/#kapabilitas`)
   - *Sitelink 2*: "Daftar Biaya Servis Rumah" (URL: `https://domain.com/b2c.html#harga`)
   - *Sitelink 3*: "Standar K3 & APD Pabrik" (URL: `https://domain.com/#k3-compliance`)
   - *Sitelink 4*: "The Happiness Guarantee 30 Hari" (URL: `https://domain.com/b2c.html#garansi`)
3. **Callout Assets**:
   - `Legalitas CV Resmi`, `Faktur Pajak PPN`, `Teknisi Standar K3 SNI`, `Garansi Servis 30 Hari`, `Respon < 5 Menit`, `Free Survey Lokasi Pabrik`.
4. **Structured Snippet Assets**:
   - *Header Tipe Layanan*: Cuci AC Split, Perbaikan Bocor, Tambah Freon, Kontrak Perawatan Pabrik, Bongkar Pasang.
   - *Header Model*: AC Cassette 4-Way, Floor Standing Heavy Duty, VRV / VRF Multi-Zone, Split Wall.

---

## 7. Roadmap Bidding & Optimasi Konversi

Untuk mendapatkan **"konversi sebanyak-banyaknya dengan hasil semurah-murahnya"**, ikuti roadmap 3 tahap ini:

```
[ Minggu 1 - 2 ]                 [ Minggu 3 - 4 ]                 [ Bulan ke-2 dst ]
FASE 1: KUMPUL DATA             FASE 2: SMART BIDDING            FASE 3: TARGET CPA (SCALE)
====================             =====================            ==========================
Strategi: Maximize Clicks        Strategi: Maximize Conversions   Strategi: Target CPA
Set: Max CPC Cap (Rp 6.000)      Syarat: Minimal 30 konversi WA   Tentukan target biaya per lead
Tujuan: Kenalkan landing page    Tujuan: Google AI mencari        Tujuan: Skalakan volume lead
        ke pencari Google.               orang bertipe buyer.             secara stabil & murah.
```

### Tips Optimasi Mingguan:
1. **Search Terms Report (Laporan Istilah Penelusuran)**:
   - Buka menu *Insights & reports* > *Search terms*.
   - Cek kata apa yang benar-benar diketik orang sebelum mengklik iklan Anda.
   - Jika ada kata aneh (misal: "service remote ac universal"), langsung centang dan tambahkan sebagai **Negative Keyword**.
2. **Device Bid Adjustment**:
   - Pantau kampanye B2C: jika konversi 90% datang dari Mobile, naikkan bid perangkat seluler dan turunkan bid desktop.
3. **Quality Score Target**: Targetkan Quality Score &ge; 7 pada keyword utama (Relevansi Iklan & Pengalaman Halaman Landas) untuk menekan CPC hingga 30–50%.

---

## 8. Panduan Integrasi Conversion Tracking (Google Tag)

Landing page `index.html` dan `b2c.html` sudah siap dipasangi tag Google Ads. Ikuti langkah sederhana ini saat akun Google Ads sudah siap:

1. Di Google Ads, masuk ke **Tools and settings** > **Conversions** > **Summary** > **New conversion action**.
2. Pilih **Website** > Masukkan URL landing page Anda.
3. Buat conversion action manual:
   - Category: **Submit lead form** atau **Contact**.
   - Conversion name: `Klik WhatsApp CV Rifqi AC`.
   - Value: Don't use a value (atau set estimasi nilai lead, misal Rp 50.000).
   - Count: **One** (satu konversi per klik).
4. Ambil **Conversion ID** dan **Conversion Label** yang diberikan Google (misal: `AW-123456789/AbC_xyz123`).
5. Buka file `assets/js/tracking.js` di project ini:
   - Ubah `whatsappNumber: "6281385808284"` dengan nomor WA asli Anda.
   - Ubah `googleAdsSendTo: "AW-123456789/AbC_xyz123"` sesuai ID konversi dari Google.
6. Letakkan Google Tag snippet (`<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXX">...`) di bagian `<head>` file `index.html` dan `b2c.html`.

---

## 9. Prioritas Eksperimen CRO (Conversion Rate Optimization Backlog)

Gunakan framework **PIE (Potential, Importance, Ease)** dengan skor 1–10 untuk setiap eksperimen pada halaman landing:

| Eksperimen | Lokasi | Hipotesis | Skor PIE (P+I+E) | Status |
|---|---|---|---|---|
| **Mikro-copy Tanpa DP** | `b2c.html` Hero CTA | Jika ditambahkan teks *"Tanpa Uang Muka & Bayar Pasca Servis"*, maka rasio klik WA naik karena menghapus friksi ragu. | 9 + 10 + 9 = **28/30** | Rekomendasi Teratas |
| **SLA Respons Cepat di Form** | `index.html` Form Survey | Jika dicantumkan *"Tiket diverifikasi <15 menit di jam kerja"*, maka form submit rate naik karena ekspektasi waktu jelas. | 8 + 9 + 9 = **26/30** | Rekomendasi Teratas |
| **Badge Paket Paling Laris** | `b2c.html` Tabel Harga | Jika paket Cuci AC 0.5–1 PK diberi badge *"Pilihan Paling Populer"*, maka konversi naik karena efek anchoring. | 8 + 8 + 10 = **26/30** | Quick Win |
| **Pratinjau Legalitas Dokumen** | `index.html` Alur Pengadaan | Menampilkan preview visual dokumen e-Faktur Pajak & BAST untuk memvalidasi kredibilitas bagi procurement. | 8 + 8 + 8 = **24/30** | Rencana Fase 2 |
