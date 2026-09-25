## Purpose

Menyediakan halaman pendaratan klaster SEO (geo-landing pages) dan sistem atribusi inquiry terdedikasi untuk kawasan industri strategis Suryacipta Karawang, Delta Silicon Lippo Cikarang, dan GIIC Deltamas Cikarang Pusat guna mendongkrak perolehan prospek B2B HVAC industri.

## ADDED Requirements

### Requirement: Industrial Cluster Geotargeted Landing Pages
Sistem website SHALL menyediakan 3 halaman klaster industri baru (`hvac-suryacipta.html`, `hvac-deltasilicon.html`, dan `hvac-giic-deltamas.html`) yang menyajikan konten penawaran HVAC spesifik tenant kawasan, sertifikasi K3, kelayakan compliance, dan technical proof sesuai kebutuhan industri setempat.

#### Scenario: User visits Suryacipta cluster landing page
- **WHEN** pengunjung atau Googlebot mengakses `/hvac-suryacipta.html`
- **THEN** halaman menyajikan konten solusi HVAC pabrik manufaktur otomotif, aksesibilitas gerbang Tol Karawang Timur KM 54, standar K3 CSMS, portofolio maintenance chiller sentral, serta CTA terarah ke WhatsApp tim B2B.

#### Scenario: User visits Delta Silicon cluster landing page
- **WHEN** pengunjung atau Googlebot mengakses `/hvac-deltasilicon.html`
- **THEN** halaman menyajikan solusi sistem pendingin higienis untuk farmasi dan makanan (CPOB/GMP), kontrol kelembaban (RH), maintenance filter HEPA & AHU, serta formulir/CTA WhatsApp berkualifikasi.

#### Scenario: User visits GIIC Deltamas cluster landing page
- **WHEN** pengunjung atau Googlebot mengakses `/hvac-giic-deltamas.html`
- **THEN** halaman menyajikan spesialisasi pendingin pabrik baterai/EV dan AC Presisi (PAC) untuk Hyperscale Data Center & cleanroom modern di Greenland International Industrial Center Deltamas.

### Requirement: Cluster-Specific Conversion & Tracking Attribution
Sistem script tracking (`assets/js/tracking.js`) SHALL mendukung preset pesan WhatsApp kontekstual untuk masing-masing klaster industri baru agar tim teknisi dan sales segera mengetahui identitas tenant, lokasi kawasan, dan tipe fasilitas unit saat lead masuk.

#### Scenario: User clicks B2B inquiry on cluster landing page
- **WHEN** pengguna mengklik tombol CTA WhatsApp pada halaman klaster (`hvac-suryacipta.html`, `hvac-deltasilicon.html`, atau `hvac-giic-deltamas.html`) dengan atribut `data-wa-type` yang sesuai
- **THEN** sistem membuka tautan WhatsApp dengan format teks terstruktur yang mencantumkan nama PT, blok/sektor kawasan terkait, dan kebutuhan spesifik sistem HVAC, serta memicu event conversion Google Ads jika terkonfigurasi.

### Requirement: Structured Data Schema for New Clusters
Setiap halaman klaster industri baru SHALL menyertakan data terstruktur JSON-LD bertipe `HVACBusiness` yang memuat koordinat geo akurat, area pelayanan spesifik, dan katalog penawaran teknis.

#### Scenario: Rich results validator checks cluster pages
- **WHEN** bot mesin pencari mengurai script JSON-LD pada halaman klaster baru
- **THEN** terdeteksi entitas `HVACBusiness` dengan atribut `geo` (GeoCoordinates) dan `areaServed` yang merujuk pada kawasan industri terkait.
