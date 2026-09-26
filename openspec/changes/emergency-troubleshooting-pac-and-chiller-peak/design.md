## Context

Target pencarian teknis darurat pendingin di kawasan industri membutuhkan landing page yang menjawab gejala kerusakan dengan cepat, meyakinkan secara rekayasa (bukan artikel tips generik), dan memberikan akses instan ke tombol darurat WhatsApp / Telepon.

Kedua halaman baru:
- `solusi-server-room-overheat-pac.html`
- `solusi-chiller-trip-siang-hari.html`
akan mengadopsi arsitektur visual dan komponen B2B resmi CV Rifqi AC (Corporate Navy `#0b1b33`, Gold `#e6a100`, slate background, dan font Plus Jakarta Sans + JetBrains Mono untuk pembacaan parameter).

## Goals / Non-Goals

**Goals:**
- Membuat dua file HTML berstandar SEO & CRO tinggi sesuai pedoman `AGENTS.md` (larangan AI emoji slop, SVG icons murni, WCAG contrast AA, tracking data attributes).
- Menyediakan Structured Data JSON-LD `HowTo`, `TechArticle`, dan `FAQPage` di masing-masing halaman.
- Mengintegrasikan CTA WhatsApp dengan payload teks darurat otomatis (`data-wa-type="lead_b2b_emergency"`).
- Memperbarui `sitemap.xml` dengan kedua halaman baru.

**Non-Goals:**
- Mengubah arsitektur tracking JavaScript di `assets/js/tracking.js` (cukup memanfaatkan atribut yang sudah ada).
- Mengubah stylesheet CSS inti (memanfaatkan utility class Tailwind yang sudah terkompilasi).

## Decisions

### Decision 1: Desain Halaman Mengikuti Pola High-Converting Technical Guide
- Header: Top compliance bar (PKP, e-Faktur, K3, NIB).
- Hero: Minimalist alert banner, headline teknis tajam (misal: "Suhu Server Naik di Atas 24°C? SLA Dispatch 2 Jam"), quick call CTA.
- Body Section:
  1. *Diagnosa 4 Parameter Kritis* (Tabel / Metric cards).
  2. *Panduan Mitigasi Langkah demi Langkah (HowTo mapping)*.
  3. *Tabel Kode Error & Tindakan Lapangan*.
  4. *FAQ Akordion Interaktif*.
  5. *Formulir Request Kunjungan Darurat / RFQ modal trigger*.

### Decision 2: Payload Pesan WhatsApp Diagnostik Cepat
- Link WA otomatis memuat konteks:
  - PAC: `"Halo CV Rifqi AC, emergency suhu server room kami naik di pabrik [Nama PT/Kawasan]. Butuh teknisi PAC standby."`
  - Chiller: `"Halo CV Rifqi AC, chiller pabrik kami trip high pressure saat jam siang di [Nama PT/Kawasan]. Butuh bantuan teknisi darurat."`

## Risks / Trade-offs

- **[Risk]** Calon klien panik dan tidak membaca artikel panjang.
  - *Mitigasi*: Letakkan tombol Call / WhatsApp Sticky di posisi paling atas (hero) dan fixed bottom bar di mobile browser.
