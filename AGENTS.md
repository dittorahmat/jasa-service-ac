# AGENTS.md — Petunjuk & Standar Kerja AI Agent

Dokumen ini adalah acuan kerja wajib bagi setiap AI Agent yang bekerja pada repositori **CV Rifqi AC (`jasa-service-ac`)**.

---

## 1. Aturan Mutlak: Penggunaan Skill `design-taste-frontend`

> **MANDATORY / WAJIB:**
> Untuk **setiap perubahan atau penambahan frontend** (HTML, Tailwind CSS, komponen UI, copywriting visual, layout, kartu layanan, formulir, atau halaman baru), Agent **WAJIB membaca dan menerapkan pedoman dari skill `design-taste-frontend`**.
>
> **Tujuan:** Menghindari tampilan generic "AI Slop", memastikan kualitas desain berstandar agensi profesional, responsif di mobile, serta memiliki rasio konversi tinggi bagi calon pelanggan (B2B maupun B2C).

---

## 2. Poin-Poin Anti-Slop yang Wajib Ditaati

### A. Brief Inference & Read the Room
Sebelum menulis atau mengedit markup:
1. Nyatakan satu baris **Design Read**:
   - Contoh B2B: *"Reading this as: B2B HVAC Industrial contractor for factory GA & engineering buyers, trust-first industrial compliance language."*
   - Contoh B2C: *"Reading this as: Residential AC repair landing for homeowners, clean-home reassurance & upfront pricing language."*
2. Tetapkan nilai 3 Dial:
   - `DESIGN_VARIANCE` (Default: 5 - 7)
   - `MOTION_INTENSITY` (Default: 3 - 5)
   - `VISUAL_DENSITY` (Default: 4 - 5)

### B. Anti-Default Discipline (Larangan Keras / AI Slop Ban)
* ❌ **Dilarang menggunakan emoji kasual sebagai icon/bullet** (seperti `💧`, `❄️`, `⚡`, `🔧`, `🏭`, `⚙️`, `🏢`, `📞`). Selalu gunakan icon SVG yang bersih, presisi, dan konsisten (strokeWidth seragam 1.5 atau 2.0).
* ❌ **Dilarang memakai AI purple / neon glow** (`from-purple-600 to-indigo-600` dengan border glow ungu tanpa alasan brand). Gunakan palet resmi proyek: Corporate Navy (`#0b1b33`) & Gold (`#e6a100`) untuk B2B, Handy Blue (`#1070e5`) & Emerald (`#10b981`) untuk B2C.
* ❌ **Dilarang teks button/CTA membungkus (wrap) di desktop**. CTA harus ringkas (1–3 kata), kontras tinggi (WCAG AA min 4.5:1), dan tidak membingungkan pengguna dengan duplikasi intent.
* ❌ **Dilarang 3 kartu fitur generik yang monoton**. Variasikan ritme grid atau sajikan data secara asimetris yang kontekstual.
* ❌ **Dilarang placeholder dijadikan label input**. Form wajib memiliki `<label>` eksplisit di atas input, placeholder informatif, dan ring focus yang jelas.

### C. Layout & Hierarchy Discipline
* **Hero Section Discipline:**
  - Maksimal 4 elemen teks dalam stack: Eyebrow badge, Headline (maksimal 2 baris desktop), Subtext (ringkas, to the point), dan Action CTAs.
  - Hero harus pas di viewport awal tanpa memaksa pengguna scroll hanya untuk melihat tombol aksi utama.
  - Jangan gunakan `h-screen`; gunakan `min-h-[100dvh]` untuk mencegah loncatan layout pada mobile browser (Safari/Chrome).
* **Navigation:**
  - Wajib satu baris rapi di desktop (`lg`), tinggi maksimal 80px (default 64–72px).
* **Materiality & Radius Lock:**
  - Pilih satu skala sudut (corner-radius) yang konsisten: `rounded-lg` untuk tombol & input, `rounded-xl` / `rounded-2xl` untuk container card. Hindari mencampur bentuk kotak tajam dengan tombol full-pill tanpa sistem yang jelas.
* **Tactile Feedback:**
  - Semua tombol dan elemen interaktif wajib memiliki feedback sentuh/klik: `:active:scale-[0.98]` atau `active:-translate-y-[1px]`.

---

## 3. Alur Verifikasi Kode (Workflow Checklist)

Setelah melakukan perubahan frontend:
1. **Periksa Kontras & Aksesibilitas:**
   - Pastikan teks di atas badge/tombol memiliki kontras warna yang cukup (tidak ada teks putih di atas tombol abu-abu muda atau badge pucat).
2. **Kompilasi CSS:**
   - Jalankan build tailwind untuk memastikan class CSS baru terkompilasi:
     ```bash
     npm run build:css
     ```
3. **Cek Responsivitas:**
   - Pastikan fixed mobile bottom bar tidak menutupi konten penting dengan memanfaatkan `pb-24 md:pb-0` dan `safe-bottom-padding`.
4. **Verifikasi Tracking & Link:**
   - Pastikan atribut `data-wa-type`, `data-tel-link`, dan event handler `handleWhatsAppClick` / `handlePhoneClick` tetap berfungsi untuk tracking konversi Google Ads.

---

## 4. Struktur File Frontend Utama
* [index.html](file:///D:/development/jasa-service-ac/index.html) — Halaman B2B Kontrak HVAC Pabrik & Kawasan Industri (Bekasi, Cikarang, Karawang).
* [b2c.html](file:///D:/development/jasa-service-ac/b2c.html) — Halaman B2C Service & Cuci AC Rumah Tangga.
* [tailwind.config.js](file:///D:/development/jasa-service-ac/tailwind.config.js) — Konfigurasi warna `corporate` & `handy` serta token tipografi.
* [assets/css/style.css](file:///D:/development/jasa-service-ac/assets/css/style.css) — Output stylesheet hasil build Tailwind.
* [assets/js/tracking.js](file:///D:/development/jasa-service-ac/assets/js/tracking.js) — Logika tracking konversi WhatsApp & Telepon.
