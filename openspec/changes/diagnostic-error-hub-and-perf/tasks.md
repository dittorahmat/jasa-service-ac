## 1. Tracking Engine Extension

- [x] 1.1 Tambahkan fungsi penanganan error code dispatch `handleErrorCodeClick(event, errorCode, brand)` dan template pesan `b2bDiagnostic` di `assets/js/tracking.js`.

## 2. Halaman Diagnostic Hub & Kode Error

- [x] 2.1 Buat halaman `panduan-kode-error-ac-industri.html` dengan desain standar `AGENTS.md` (header konsisten, search input live filter, tab filter merek Daikin / York / Mitsubishi-Panasonic, safety callout K3, dan schema JSON-LD `FAQPage` & `TechArticle`).
- [x] 2.2 Uji interaktivitas filter pencarian kode error dan verifikasi tautan pre-fill WhatsApp bekerja secara akurat.

## 3. Integrasi Navigasi, Sitemap, & Build CSS

- [x] 3.1 Tambahkan tautan internal linking ke panduan kode error di navbar/footer `index.html`.
- [x] 3.2 Perbarui `sitemap.xml` dengan menambahkan URL `panduan-kode-error-ac-industri.html` (prioritas 0.85).
- [x] 3.3 Jalankan `npm run build:css` dan pastikan seluruh utility Tailwind CSS baru terkompilasi ke `assets/css/style.css`.
