## Why

Saat ini landing page CV Rifqi AC telah memiliki penetrasi kluster kawasan industri (MM2100, Jababeka, KIIC, EJIP, Delta Silicon, Suryacipta, GIIC) dan halaman umum residensial (`b2c.html`). Namun, terdapat dua potensi trafik pencarian bervolume tinggi yang belum tergarap optimal:
1. **B2B HVAC System-Specific Search**: Tim engineering dan GA pabrik sering mencari kontraktor berdasarkan jenis mesin kritis (Chiller industri, AHU/Cleanroom, VRV/VRF) bukan hanya nama kawasan.
2. **B2C Micro-Location Search**: Konsumen residensial/pemilik rumah memiliki pola pencarian hiper-lokal berbasis perumahan besar (Grand Wisata, Kota Harapan Indah, Summarecon Bekasi) dengan kebutuhan teknisi terdekat yang responsif dan bergaransi.

Selain itu, materi kampanye Google Ads di `docs/google-ads-playbook.md` serta file bulk CSV perlu diperluas agar memetakan landing page baru ini secara 1-to-1 untuk memaksimalkan Quality Score (9-10/10) dan meminimalkan CPC.

## What Changes

- **Halaman B2B Baru Berbasis Sistem & Mesin Industri**:
  - `service-chiller-industri.html`: Overhaul kompresor screw/centrifugal, descaling kondensor, chiller water-cooled & air-cooled, penanganan darurat pabrik 24/7.
  - `maintenance-ahu-cleanroom.html`: Sistem tata udara higienis farmasi/makanan/elektronik CPOB, penggantian HEPA filter, uji differential pressure & air flow balancing.
  - `service-ac-vrv-vrf.html`: Solusi AC multi-split inverter gedung & kantor industri, troubleshooting kode error inverter Daikin VRV / Mitsubishi City Multi.
- **Halaman B2C Baru Berbasis Mikro-Lokasi Residensial**:
  - `cuci-ac-grand-wisata.html`: Jasa cuci AC & servis panggilan area Grand Wisata Tambun, garansi 30 hari, tanpa DP, cover pelindung dinding.
  - `service-ac-harapan-indah.html`: Layanan servis AC perumahan Kota Harapan Indah Bekasi & Medan Satria.
  - `service-ac-summarecon-bekasi.html`: Layanan servis AC hunian modern & ruko Summarecon Bekasi & Bekasi Utara.
- **Pembaruan Aset Tracking & Metadata**:
  - Update `sitemap.xml` untuk mendaftarkan ke-6 URL landing page baru.
  - Penambahan mapping template pesan WhatsApp pre-filled otomatis di `assets/js/tracking.js` (`b2bChiller`, `b2bAHU`, `b2bVRV`, `b2cGrandWisata`, `b2cHarapanIndah`, `b2cSummarecon`).
- **Pembaruan Google Ads Playbook & Bulk Upload CSV**:
  - Update `docs/google-ads-playbook.md` dengan struktur Ad Group baru untuk kampanye B2B dan B2C.
  - Update `docs/bulk-b2b-keywords.csv` & `docs/bulk-b2b-ads.csv` dengan keyword & copy iklan RSA untuk Chiller, AHU, dan VRV/VRF.
  - Update `docs/bulk-b2c-keywords.csv` & `docs/bulk-b2c-ads.csv` dengan keyword & copy iklan RSA untuk Grand Wisata, Harapan Indah, dan Summarecon.

## Capabilities

### New Capabilities
- `system-and-microgeo-landing-pages`: Menyediakan standar antarmuka, metadata SEO, structured data JSON-LD, serta CRO conversion engine untuk halaman spesialisasi sistem HVAC industri dan landing page residensial mikro-lokasi.

### Modified Capabilities
- `b2b-seo`: Memperbarui jangkauan sitemap.xml dan indexing requirements untuk mencakup halaman landing page sistem spesifik B2B dan mikro-lokasi B2C.

## Impact

- Penambahan 6 file HTML mandiri yang telah dikompilasi dengan Tailwind CSS tanpa ketergantungan runtime baru.
- Perubahan pada `assets/js/tracking.js` (penambahan rute pesan WA baru tanpa merusak fungsi yang sudah ada).
- Perubahan pada `sitemap.xml` untuk indexing Googlebot.
- Perbaruan materi panduan dan file CSV Google Ads di folder `docs/`.
