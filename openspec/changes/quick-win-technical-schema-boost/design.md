## Context

Halaman `kalkulator-hvac-industri.html`, `solusi-chiller-overheat-trip.html`, dan `panduan-kode-error-ac-industri.html` telah online dan memiliki struktur konten yang rapi. Namun, skema JSON-LD saat ini sebagian besar masih generic atau hanya mengandalkan skema dasar. Kita perlu menginjeksi Structured Data spesifik tipe `SoftwareApplication` dan `HowTo` untuk merebut posisi Google Rich Snippet.

## Goals / Non-Goals

**Goals:**
- Menginjeksi skema `SoftwareApplication` (dengan subtipe `WebApplication`) di `kalkulator-hvac-industri.html`.
- Menginjeksi skema `HowTo` dengan step terstruktur di `solusi-chiller-overheat-trip.html`.
- Menyelaraskan atribut E-E-A-T (`author` dan `publisher`) pada `panduan-kode-error-ac-industri.html` dan `solusi-chiller-overheat-trip.html`.
- Memastikan tidak ada error sintaks JSON dan valid terhadap standar schema.org.

**Non-Goals:**
- Mengubah layout visual atau merombak styling Tailwind CSS.
- Menulis ulang seluruh artikel troubleshooting dari nol.

## Decisions

### Decision 1: Structured Data Format
- **Pilihan**: JSON-LD mandiri di dalam `<script type="application/ld+json">`.
- **Alternatif**: Microdata inline HTML.
- **Alasan**: JSON-LD adalah format resmi yang direkomendasikan Google Search Central, lebih bersih, mudah dipelihara, dan tidak merusak kebersihan markup DOM.

### Decision 2: Struktur HowTo Step
- Pada `solusi-chiller-overheat-trip.html`, memetakan langkah-langkah praktis:
  1. *Identifikasi Kode Alarm & Catat Tekanan Suction/Discharge*
  2. *Periksa Aliran Air Pendingin (Cooling Water Flow Rate & Strainer)*
  3. *Inspeksi Kebersihan Sirip Kondensor & Putaran Fan*
  4. *Prosedur Reset Alarm & Eskalasi Vendor Emergency Ber-SLA*
- Setiap step memiliki anchor link menuju heading terkait di halaman.

## Risks / Trade-offs

- **[Risk]** Snippet terlalu panjang atau terpotong di Google SERP.
  - *Mitigasi*: Buat deskripsi setiap step ringkas (1–2 kalimat to the point) dan fokus pada kata kunci industri.
