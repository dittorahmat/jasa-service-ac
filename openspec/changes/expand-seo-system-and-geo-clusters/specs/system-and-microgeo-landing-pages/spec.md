## Purpose

Menyediakan antarmuka landing page spesialisasi sistem pendingin industri (Chiller, AHU, VRV/VRF) dan mikro-lokasi residensial (Grand Wisata, Harapan Indah, Summarecon) yang teroptimasi ganda untuk search engine organik (SEO) dan konversi iklan berbayar (Google Ads Quality Score).

## ADDED Requirements

### Requirement: Industrial HVAC System-Specific Landing Pages
Sistem SHALL menyediakan tiga halaman spesifik sistem industri (`service-chiller-industri.html`, `maintenance-ahu-cleanroom.html`, dan `service-ac-vrv-vrf.html`) dengan arsitektur konten teknis mendalam, trust badges legalitas (OSS, K3, e-Faktur PPN), dan integrasi CTA darurat/survey.

#### Scenario: Factory engineer visits chiller maintenance page
- **WHEN** pengguna atau bot perayap membuka `/service-chiller-industri.html`
- **THEN** halaman menampilkan H1 spesifik overhaul/descaling chiller industri, rincian teknis penanganan water-cooled & air-cooled chiller, trust badge K3 & garansi kompresor, schema markup `HVACBusiness`, dan tombol WhatsApp dengan pesan pre-filled spesifik chiller industri.

#### Scenario: Cleanroom facility manager visits AHU maintenance page
- **WHEN** pengguna mengakses `/maintenance-ahu-cleanroom.html`
- **THEN** halaman menampilkan H1 spesialisasi tata udara CPOB/cleanroom, pengujian filter HEPA, static pressure balancing, bukti kepatuhan K3, dan CTA survey teknis langsung terhubung ke WhatsApp.

#### Scenario: Building manager visits VRV/VRF service page
- **WHEN** pengguna mengakses `/service-ac-vrv-vrf.html`
- **THEN** halaman menampilkan H1 perawatan multi-split inverter Daikin VRV / Mitsubishi Electric City Multi, diagnostik error code inverter, dan alur pemesanan survey tanpa mengganggu operasional gedung.

### Requirement: Residential Micro-Location Landing Pages
Sistem SHALL menyediakan tiga halaman landing page B2C hiper-lokal (`cuci-ac-grand-wisata.html`, `service-ac-harapan-indah.html`, dan `service-ac-summarecon-bekasi.html`) dengan copywriting ramah keluarga, garansi dingin 30 hari, tanpa DP, dan jaminan SOP bersih tanpa menciprat dinding.

#### Scenario: Homeowner in Grand Wisata visits residential page
- **WHEN** pengguna mencari jasa AC di area Tambun/Grand Wisata dan membuka `/cuci-ac-grand-wisata.html`
- **THEN** halaman menyajikan H1 spesifik kawasan Grand Wisata & Tambun, kejelasan harga transparan, perlindungan garansi 30 hari, checklist SOP teknisi sopan, dan tombol WhatsApp dengan pesan pre-filled instan.

#### Scenario: Resident in Harapan Indah or Summarecon visits residential page
- **WHEN** pengguna membuka `/service-ac-harapan-indah.html` atau `/service-ac-summarecon-bekasi.html`
- **THEN** halaman menyajikan konten lokal yang relevan dengan cluster/ruko setempat, data schema `HVACBusiness` berkoordinat Bekasi, dan integrasi nomor kontak responsif.

### Requirement: Google Ads Campaign Alignment & Pre-filled WA Context
Sistem tracking dan panduan Google Ads SHALL diperbarui agar selaras 100% dengan landing page baru, memetakan UTM parameter, dan menyediakan pesan pre-filled unik untuk tiap halaman di `assets/js/tracking.js`.

#### Scenario: User clicks WhatsApp CTA on new landing pages
- **WHEN** pengguna mengklik tombol WhatsApp pada salah satu dari 6 halaman baru
- **THEN** `assets/js/tracking.js` menghasilkan URL WhatsApp dengan template pesan pre-filled yang sesuai dengan topik halaman (Chiller, AHU, VRV, Grand Wisata, Harapan Indah, Summarecon) serta melampirkan parameter kampanye Google Ads jika tersedia.
