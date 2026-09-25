## Why

Klien B2B industri (General Affairs, Engineering, & Facility Manager pabrik di kawasan Jababeka, MM2100, KIIC, dan EJIP) mencari kontraktor HVAC menggunakan kata kunci pencarian hiper-lokal (misal: "vendor hvac kawasan jababeka", "service ac pabrik mm2100", "kontrak chiller kiic"). Saat ini seluruh target kawasan hanya terpusat pada satu halaman beranda (`index.html`), membatasi relevansi organik (SEO) dan skor relevansi iklan (Google Ads Quality Score) yang berakibat pada biaya per klik (CPC) yang lebih mahal.

Membangun halaman geo-targeted khusus per kawasan industri memposisikan CV Rifqi AC sebagai vendor lokal terdekat dengan SLA respon cepat, meningkatkan konversi Google Ads, serta mendominasi kata kunci pencarian transaksional B2B di wilayah manufaktur utama Jawa Barat.

## What Changes

- Menambahkan 4 halaman landing page B2B hiper-lokal berstandar K3 & industri:
  - `hvac-mm2100.html`: Fokus pabrik otomotif, pergudangan logistik, dan ruang kontrol Cibitung/Cikarang Barat.
  - `hvac-jababeka.html`: Fokus kawasan Jababeka I-VI, industri elektronik, F&B, dan cleanroom/HEPA filter.
  - `hvac-kiic.html`: Fokus kawasan KIIC Karawang Barat, standar kontraktor PMA Jepang, chiller berat, dan e-Faktur PPN.
  - `hvac-ejip.html`: Fokus kawasan EJIP Cikarang Selatan, industri presisi, dan AC central VRV/VRF.
- Menerapkan schema `HVACBusiness` JSON-LD spesifik dengan geocoordinates dan radius area per kawasan.
- Mengintegrasikan tracking Google Ads dan WhatsApp dynamic pre-fill message berbasis kawasan di masing-masing landing page.
- Memperbarui `index.html` dengan internal linking navigasi kawasan industri (hub & spoke).
- Memperbarui `sitemap.xml` untuk mendaftarkan keempat URL landing page kawasan baru.

## Capabilities

### New Capabilities
- `geo-landing-pages`: Spesifikasi untuk struktur, metadata, konten hiper-lokal, dan schema data terstruktur halaman kawasan industri B2B.

### Modified Capabilities
- `b2b-seo`: Memperluas requirement sitemap dan internal linking untuk mendukung arsitektur hub-and-spoke kawasan industri.

## Impact

- File baru: `hvac-mm2100.html`, `hvac-jababeka.html`, `hvac-kiic.html`, `hvac-ejip.html`.
- File yang dimodifikasi: `index.html`, `sitemap.xml`, `assets/js/tracking.js`.
- Tidak ada breaking changes pada URL atau routing yang sudah ada.
