## Context

Lihat `proposal.md` untuk latar belakang dan motivasi. Saat ini repositori memiliki 7 klaster landing page kawasan industri, arsitektur tracking terintegrasi (UTM, DTR, RFQ Modal), dan stylesheet Tailwind terkompilasi. Proyek ini mematuhi standar desain ketat anti-slop pada `AGENTS.md` (Design read: B2B industrial trust, e-Faktur PPN, K3 compliance, zero AI-purple glow, no casual emoji).

## Goals / Non-Goals

**Goals:**
- Membangun antarmuka kalkulator engineering interaktif (`kalkulator-hvac-industri.html`) dengan vanilla JavaScript murni (zero-dependency) yang responsif, tactile, dan terhubung ke WhatsApp CTA.
- Menyediakan 4 landing page klaster kawasan industri baru (`hvac-knic-karawang.html`, `hvac-artha-industrial-hill.html`, `hvac-sentul-bogor.html`, `hvac-modern-cikande.html`) sesuai sistem desain corporate navy/gold.
- Mengimplementasikan spesifikasi `llms.txt` dan `llms-full.txt` di root domain dan memperbarui `robots.txt` agar AI citation crawler (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Google-Extended`, `Claude-Web`) dapat merayapi tanpa hambatan.
- Menghubungkan klaster baru dan kalkulator ke `assets/js/tracking.js` (kamus DTR dan WhatsApp message presets).

**Non-Goals:**
- Tidak menambahkan framework JavaScript eksternal (React/Vue/Angular) — mempertahankan arsitektur performa tinggi static HTML + vanilla JS pada Cloudflare Pages / Workers.
- Tidak membangun sistem backend database kompleks untuk kalkulator; semua rumus dikalkulasi secara client-side deterministik real-time.

## Decisions

### 1. Zero-Dependency Vanilla JS untuk Kalkulator Teknik
- **Pilihan:** Menulis logika kalkulasi matematika murni dalam tag `<script>` terisolasi di `kalkulator-hvac-industri.html`.
- **Rasional:** Cepat dimuat (<50ms), skor Core Web Vitals (LCP/CLS/INP) sempurna, dan tidak memerlukan bundler rumit.
- **Alternatif:** Memakai library formula eksternal ditolak karena menambah overhead jaringan dan ketergantungan paket.

### 2. Standar llmstxt.org untuk AI Citation Grounding
- **Pilihan:** Menyediakan dua berkas: `/llms.txt` (ringkas, <1.500 token) untuk ringkasan cepat crawler, dan `/llms-full.txt` untuk korpus mendalam rujukan teknis.
- **Rasional:** Sesuai temuan riset `last30days`, AI agent dan search bot modern memprioritaskan endpoint teks ringkas Markdown untuk grounding LLM tanpa harus mengekstrak DOM HTML yang berat.
- **Alternatif:** Hanya mengandalkan meta description biasa ditolak karena LLM modern sering melewatkan detail spesifikasi teknis mendalam.

### 3. Arsitektur Reusable Bento Grid & Metric Badges untuk Klaster Baru
- **Pilihan:** Mengikuti pola komponen teruji dari klaster yang sudah ada (hero stack <= 4 elemen, bento showcase spesialisasi, tabel perbandingan SLA, dan breadcrumb JSON-LD).
- **Rasional:** Menjaga konsistensi visual di seluruh koridor industri Jabodetabek & Banten, serta mempermudah maintenance styling Tailwind.

## Risks / Trade-offs

- [Resiko: Salah estimasi kapasitas oleh user awam di kalkulator] → **Mitigasi:** Memberikan disclaimer teknis eksplisit di bawah hasil hitungan bahwa angka tersebut adalah estimasi awal dan memerlukan audit teknis langsung oleh tim engineering ber-K3 CV Rifqi AC sebelum eksekusi pengadaan/overhaul.
- [Resiko: Lonjakan ukuran sitemap atau file duplikasi] → **Mitigasi:** Struktur internal linking silang terarah antara halaman kalkulator dan halaman kawasan yang relevan, memastikan nilai canonical URL unik pada setiap halaman baru.
