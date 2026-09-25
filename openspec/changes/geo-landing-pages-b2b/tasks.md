## 1. Tracking Engine & Configuration

- [x] 1.1 Perbarui `assets/js/tracking.js` dengan template pesan WhatsApp khusus kawasan industri (`b2bMM2100`, `b2bJababeka`, `b2bKIIC`, `b2bEJIP`) dan verifikasi output URL WhatsApp via console/testing.

## 2. Halaman Kawasan Industri Cikarang (MM2100, Jababeka, EJIP)

- [x] 2.1 Buat halaman `hvac-mm2100.html` berpedoman pada `AGENTS.md` (fokus otomotif/logistik, SLA respon Tol Cibitung, schema JSON-LD `HVACBusiness`, dan data-wa-type `b2bMM2100`).
- [x] 2.2 Buat halaman `hvac-jababeka.html` berpedoman pada `AGENTS.md` (fokus Jababeka I-VI, cleanroom/HEPA filter, F&B, schema JSON-LD, dan data-wa-type `b2bJababeka`).
- [x] 2.3 Buat halaman `hvac-ejip.html` berpedoman pada `AGENTS.md` (fokus manufaktur presisi PMA Jepang Cikarang Selatan, kontrol suhu/kelembapan, AC Central/VRV, schema JSON-LD, dan data-wa-type `b2bEJIP`).

## 3. Halaman Kawasan Industri Karawang (KIIC)

- [x] 3.1 Buat halaman `hvac-kiic.html` berpedoman pada `AGENTS.md` (fokus kawasan KIIC Karawang Barat, standar kontraktor PMA Jepang, Chiller berkapasitas besar, e-Faktur PPN, izin kerja K3, schema JSON-LD, dan data-wa-type `b2bKIIC`).

## 4. Hub-and-Spoke Navigation, Sitemap, & Asset Build

- [x] 4.1 Tambahkan tautan internal linking interaktif (Hub-and-Spoke) pada section cakupan kawasan di `index.html` yang mengarah ke keempat landing page kawasan industri baru.
- [x] 4.2 Perbarui `sitemap.xml` dengan menambahkan 4 entri URL landing page kawasan baru berprioritas 0.9 beserta lastmod terbaru.
- [x] 4.3 Jalankan `npm run build:css` dan pastikan seluruh utility Tailwind CSS baru terkompilasi tanpa error di `assets/css/style.css`.
