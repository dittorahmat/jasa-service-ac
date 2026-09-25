## Purpose

Menyediakan spesifikasi halaman pendaratan (landing pages) geo-targeted B2B khusus kawasan industri (MM2100, Jababeka, KIIC, EJIP) dengan konten hiper-lokal, schema data terstruktur spesifik, dan pelacakan konversi relevan.

## ADDED Requirements

### Requirement: Industrial Geo-Targeted Landing Pages Structure
Sistem website SHALL menyediakan halaman terpisah untuk kawasan industri utama (`hvac-mm2100.html`, `hvac-jababeka.html`, `hvac-kiic.html`, `hvac-ejip.html`) dengan arsitektur UI berstandar K3 industri, informasi radius respons cepat dari gerbang tol terdekat, serta pemenuhan izin kerja pabrik (working at height / hot work permits).

#### Scenario: User visits specific industrial landing page
- **WHEN** calon klien pabrik membuka URL kawasan (misal `/hvac-mm2100.html` atau `/hvac-kiic.html`)
- **THEN** sistem menyajikan halaman dengan judul spesifik kawasan, estimasi waktu tempuh teknisi ke gerbang kawasan (<30 menit), spesifikasi layanan HVAC industri relevan (Chiller, AHU, Inverter Cassette), legalitas resmi e-Faktur PPN, dan tombol kontak WhatsApp yang terkonfigurasi untuk kawasan tersebut.

### Requirement: Hyper-Local Structured Data Schema
Setiap halaman kawasan industri SHALL menyertakan script JSON-LD bertipe `HVACBusiness` yang dikonfigurasi dengan titik koordinat `geo`, nama kawasan spesifik pada `areaServed`, dan katalog layanan industri yang relevan.

#### Scenario: Search engine validator parses industrial geo-page
- **WHEN** validator schema mengurai tag `<script type="application/ld+json">` pada halaman kawasan
- **THEN** ditemukan data terstruktur `HVACBusiness` yang mendefinisikan kawasan industri target secara eksplisit pada `areaServed` dan URL canonical yang tepat.

### Requirement: Geo-Specific WhatsApp Pre-Fill Message
Setiap tombol CTA WhatsApp pada halaman kawasan industri SHALL memuat pesan template yang telah terisi (pre-filled) dengan nama kawasan terkait untuk mempercepat klarifikasi kebutuhan survey saat klien chat.

#### Scenario: User clicks WhatsApp button on MM2100 page
- **WHEN** pengunjung mengklik tombol WhatsApp pada `/hvac-mm2100.html`
- **THEN** sistem membuka aplikasi WhatsApp dengan nomor resmi CV Rifqi AC dan pesan otomatis yang mencantumkan Kawasan Industri MM2100 pada rincian lokasi.
