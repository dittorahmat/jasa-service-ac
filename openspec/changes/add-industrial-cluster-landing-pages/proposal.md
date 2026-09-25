## Why

CV Rifqi AC membutuhkan ekspansi cakupan geografis pencarian organik B2B (SEO) dan relevansi iklan Google Ads pada 3 kawasan industri dengan konsentrasi pabrik manufaktur dan data center terbesar di koridor Cikarang–Karawang: Suryacipta (Karawang Timur), Delta Silicon 1–8 (Lippo Cikarang), dan GIIC Deltamas (Cikarang Pusat).

Halaman pendaratan khusus (*geo-landing pages*) per kawasan industri terbukti mendongkrak CTR dan skor relevansi Google Ads serta menguasai kata kunci transaksional pengadaan HVAC industri (seperti yang telah terbukti pada klaster MM2100, Jababeka, KIIC, dan EJIP).

## What Changes

1. **Pembuatan 3 Halaman Klaster Baru**:
   - `hvac-suryacipta.html`: Fokus pabrik otomotif & heavy manufacturing di Suryacipta Karawang Timur (exit tol KM 54), standar keselamatan K3 CSMS Astra/Toyota group, chiller sentral, dan overhaul mesin cetak.
   - `hvac-deltasilicon.html`: Fokus industri farmasi (standar CPOB/BPOM), makanan & minuman (F&B), cleanroom filtration, HEPA filter replacement, dan kontrol kelembaban (RH) di Delta Silicon 1–8 Lippo Cikarang.
   - `hvac-giic-deltamas.html`: Fokus fasilitas industri modern EV (kendaraan listrik), pabrik baterai, dan Hyperscale Data Center di Greenland International Industrial Center (GIIC) Deltamas Cikarang Pusat, dengan solusi Precision AC (PAC) dan zero-downtime cooling.
2. **Peningkatan Tracking & WhatsApp Attribution**:
   - Menambahkan preset pesan WhatsApp di `assets/js/tracking.js` (`b2bSuryacipta`, `b2bDeltaSilicon`, `b2bGIIC`) untuk memudahkan tracking asal inquiry dan kebutuhan spesifik fasilitas tenant.
3. **Penyelarasan Navigasi & Cross-Linking (SEO Silo)**:
   - Menambahkan tautan silang ke 3 klaster baru di navigasi/footer `index.html`, `kawasan-industri-cikarang.html`, dan `kawasan-industri-karawang.html`.
4. **Pembaruan Sitemap & Structured Data**:
   - Mendaftarkan ketiga URL baru ke dalam `sitemap.xml` dengan prioritas tinggi (0.9).
   - Menyematkan JSON-LD schema `HVACBusiness` dengan koordinat geo akurat gerbang kawasan industri masing-masing.

## Capabilities

### New Capabilities
- `industrial-cluster-seo`: Menyediakan halaman klaster SEO geotargeting dan atribusi konversi terdedikasi untuk kawasan industri strategis Suryacipta Karawang, Delta Silicon Lippo Cikarang, dan GIIC Deltamas.

### Modified Capabilities
- `b2b-seo`: Memperluas cakupan perayapan `sitemap.xml` dan interlinking entitas kawasan industri B2B di `index.html` dan halaman agregator regional.

## Impact

- **Files Added**:
  - `hvac-suryacipta.html`
  - `hvac-deltasilicon.html`
  - `hvac-giic-deltamas.html`
- **Files Modified**:
  - `assets/js/tracking.js` (preset pesan WhatsApp)
  - `sitemap.xml` (penambahan URL baru)
  - `index.html`, `kawasan-industri-cikarang.html`, `kawasan-industri-karawang.html` (penambahan interlinking)
- **External Dependencies**: Tidak ada penambahan dependensi npm baru (menggunakan arsitektur Tailwind & vanilla JS yang sudah ada).
