## Context

Proyek ini telah memiliki landing page B2B utama (`index.html`) dan B2C (`b2c.html`) yang didukung Tailwind CSS dan script tracking Google Ads. Langkah strategis selanjutnya adalah mengekspansi dominasi SEO lokal di dua koridor manufaktur terbesar di Jawa Barat (Cikarang & Karawang) dengan membuat dedicated landing pages berstandar B2B, serta menyempurnakan on-page SEO pada halaman B2C.

## Goals / Non-Goals

**Goals:**
- Membuat dua halaman cluster kawasan industri baru: `kawasan-industri-cikarang.html` dan `kawasan-industri-karawang.html`.
- Mengimplementasikan standar desain anti-slop sesuai pedoman `design-taste-frontend` dan `AGENTS.md` (Design Read B2B: Navy & Gold, font Plus Jakarta Sans, SVG icons, tanpa emoji sebagai bullet).
- Mengintegrasikan navigasi dan linking silang dari `index.html` ke halaman kawasan.
- Memperbarui `sitemap.xml` dengan menambahkan kedua URL baru tersebut.
- Menyempurnakan tag `<head>` pada `b2c.html` (canonical, OpenGraph, Twitter Card, dan pengayaan JSON-LD residential).

**Non-Goals:**
- Membuat dynamic server-side routing (situs tetap statis HTML/CSS untuk performa instan dan keandalan di Cloudflare Workers).
- Mengubah alur konversi tracking WhatsApp atau form submission yang sudah ada.

## Decisions

1. **Reusability Template Berdasarkan index.html:**
   - *Rationale:* Menggunakan struktur arsitektur sections yang sudah teruji di `index.html` (Hero, Alur Pengadaan, K3 Compliance, Unit & Sistem, Form Survey SPH, Sticky Bottom Mobile Bar).
   - *Perubahan Kontekstual:* Mengganti copywriting judul, subtext, FAQ, dan coverage list agar 100% spesifik ke kawasan terkait (misal: "Workshop Karawang Barat di Telukjambe", "Siap Safety Induction KIIC & Surya Cipta").

2. **Schema.org per Halaman Klaster:**
   - Menetapkan `@id` unik dan `areaServed` yang spesifik pada JSON-LD tiap halaman agar Google Search mendeteksi entitas geografis yang presisi.

3. **SOP Desain Anti-Slop (AGENTS.md):**
   - Menjaga stroke width icon SVG seragam (1.5 / 2.0).
   - Tetap menggunakan corner radius konsisten (`rounded-lg` untuk button/input, `rounded-2xl` untuk cards).
   - Tidak membungkus teks tombol CTA desktop.

## Risks / Trade-offs

- [Risk] Duplikasi konten (Thin/Duplicate Content penalty) → *Mitigasi:* Menyusun copywriting yang otentik dan unik untuk masing-masing kawasan: menyebut nama-nama jalan, gerbang kawasan, tipe pabrik dominan (otomotif/elektronik di Cikarang vs manufaktur berat/consumer goods di Karawang), dan referensi workshop lokal.
- [Risk] Peningkatan ukuran build CSS → *Mitigasi:* Menggunakan utility class Tailwind yang sudah terdaftar di `tailwind.config.js` sehingga stylesheet tetap ramping.
