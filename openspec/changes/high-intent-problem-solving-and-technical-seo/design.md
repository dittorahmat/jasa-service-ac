## Context

Website CV Rifqi AC menggunakan vanilla HTML + Tailwind CSS, dengan tracking WhatsApp & Telepon Google Ads melalui `assets/js/tracking.js`. Penambahan landing page harus konsisten dengan pedoman `AGENTS.md` (larangan AI-slop, penggunaan palet warna resmi B2B `#0b1b33` Navy dan `#e6a100` Gold, serta tipografi Plus Jakarta Sans).

## Goals / Non-Goals

**Goals:**
- Membuat 2 landing page pemecahan masalah teknis dengan konversi tinggi: `hvac-ruang-server-datacenter.html` dan `solusi-chiller-overheat-trip.html`.
- Mengimplementasikan Schema.org `BreadcrumbList`, `FAQPage`, dan `HVACBusiness` pada kedua halaman.
- Membangun internal linking mesh dari halaman pilar kawasan (MM2100, Jababeka, KIIC, dll.) dan halaman chiller/AHU yang sudah ada.
- Menambahkan kedua URL baru ke `sitemap.xml` dengan prioritas tinggi.

**Non-Goals:**
- Mengubah arsitektur tracking core di `assets/js/tracking.js` (halaman baru hanya memanfaatkan listener yang sudah terbukti).
- Membuat sistem backend dinamis (tetap arsitektur static site cepat di Cloudflare Workers / static host).

## Decisions

1. **Design System & Palette Enforcement:**
   - Gunakan palet resmi Corporate B2B: `corporate-navy` (`#0b1b33`), `corporate-blue` (`#1070e5`), dan `corporate-gold` (`#e6a100`).
   - SVG Icon presisi dengan `stroke-width="1.5"` tanpa emoji kasual untuk elemen penanda/bullet.
   - Header & Hero section tidak boleh wrap button CTA di desktop dan mempertahankan mobile bottom bar (`pb-24 md:pb-0`).

2. **Schema Breadcrumb Hierarchy:**
   - Level 1: Beranda (`/`)
   - Level 2: Solusi HVAC Industri (`/#layanan` atau halaman pilar)
   - Level 3: Halaman Spesifik Masalah (Ruang Server / Chiller Overheat)
   - Menggunakan format JSON-LD `@type: BreadcrumbList`.

3. **Internal Linking Mesh Placement:**
   - Di halaman `hvac-mm2100.html`, `hvac-jababeka.html`, dan `service-chiller-industri.html`, ditambahkan modul interkoneksi "Troubleshooting & Problem Solving" agar Googlebot dan pengunjung pabrik dapat menavigasi masalah kritis mereka dengan 1 klik.

## Risks / Trade-offs

- [Risk] Peningkatan ukuran sitemap dan potensi halaman orphan jika internal link tidak menyeluruh.
  → *Mitigasi:* Pastikan kedua halaman ditautkan secara kontekstual dari footer, navigation/sub-menu, dan widget terkait di halaman pilar.
- [Risk] Duplikasi konten dengan halaman layanan umum Chiller atau Cleanroom.
  → *Mitigasi:* Diferensiasi tajam sudut pandang (Troubleshooting/Problem-solving versus General Services).
