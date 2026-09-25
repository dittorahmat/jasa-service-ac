## 1. Tracking Engine Preparation

- [x] 1.1 Tambahkan key preset WhatsApp `b2bSuryacipta`, `b2bDeltaSilicon`, dan `b2bGIIC` ke `assets/js/tracking.js` dan verifikasi pemanggilan fungsi menghasilkan link WhatsApp berformat valid.

## 2. Landing Pages Creation

- [x] 2.1 Buat landing page `hvac-suryacipta.html` berstandar `design-taste-frontend` (fokus otomotif, heavy manufacturing, chiller, akses KM 54, dan kepatuhan K3 CSMS) lengkap dengan JSON-LD `HVACBusiness` dan verifikasi integritas markup.
- [x] 2.2 Buat landing page `hvac-deltasilicon.html` berstandar `design-taste-frontend` (fokus CPOB/GMP farmasi, filtrasi AHU HEPA, dan kontrol kelembaban RH) lengkap dengan JSON-LD `HVACBusiness` dan verifikasi integritas markup.
- [x] 2.3 Buat landing page `hvac-giic-deltamas.html` berstandar `design-taste-frontend` (fokus fasilitas baterai EV, data center, dan Precision AC) lengkap dengan JSON-LD `HVACBusiness` dan verifikasi integritas markup.

## 3. Silo Navigation & SEO Interlinking

- [x] 3.1 Perbarui tautan navigasi dan footer di `index.html`, `kawasan-industri-cikarang.html`, dan `kawasan-industri-karawang.html` untuk menyertakan ketiga klaster baru dan verifikasi tidak ada tautan rusak (*broken link*).
- [x] 3.2 Tambahkan ketiga entri URL klaster baru ke `sitemap.xml` dengan prioritas 0.9 dan tanggal lastmod terbaru.

## 4. Verification & Style Build

- [x] 4.1 Jalankan `npm run build:css` untuk mengompilasi seluruh utility class Tailwind yang digunakan pada halaman-halaman baru dan pastikan build selesai tanpa error.
- [x] 4.2 Lakukan inspeksi visual responsif (desktop, tablet, mobile) dan uji klik CTA WhatsApp pada ketiga halaman baru.
