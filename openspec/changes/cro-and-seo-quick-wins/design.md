## Context

Lihat `proposal.md` untuk konteks bisnis dan motivasi. Saat ini kedua halaman landing (`index.html` dan `b2c.html`) telah mengadopsi styling anti-slop Tailwind CSS dan tracking konversi Google Ads. Desain teknis ini merinci cara mengintegrasikan micro-copy CRO, Schema.org JSON-LD, serta FAQ interaktif tanpa menambah bundle JavaScript eksternal atau memicu layout shift.

## Goals / Non-Goals

**Goals:**
- Mengimplementasikan Schema.org JSON-LD (`HVACBusiness` & `FAQPage`) yang 100% valid menurut Google Rich Results Test.
- Menyediakan komponen FAQ akordeon yang sepenuhnya ramah aksesibilitas menggunakan tag native HTML5 `<details>` dan `<summary>` dengan styling Tailwind CSS.
- Menambahkan elemen penguat konversi (micro-copy & badge penanda populer) dengan tetap mempertahankan palet warna resmi (`corporate` & `handy`) dan aturan anti-slop di `AGENTS.md`.

**Non-Goals:**
- Tidak menambahkan framework JS baru (React/Vue/Alpine.js).
- Tidak merombak layout grid atau skema navigasi utama yang sudah berjalan.

## Decisions

### 1. Schema.org JSON-LD Embedded in `<head>`
- **Pilihan**: Menanamkan blok `<script type="application/ld+json">` langsung di bagian `<head>` masing-masing dokumen.
- **Rasional**: Googlebot memprioritaskan JSON-LD di `<head>` untuk indexing rich snippet. Format ini decoupled dari markup visual, sehingga pembaruan UI di masa depan tidak merusak metadata SEO.
- **Alternatif**: Microdata inline attribute (`itemscope`, `itemprop`). Ditolak karena membuat markup HTML menjadi berantakan dan rawan rusak saat refactoring CSS.

### 2. Native HTML5 Accordion (`<details>` & `<summary>`)
- **Pilihan**: Menggunakan `<details class="group ...">` dan `<summary class="flex justify-between items-center cursor-pointer ...">` dengan ikon panah SVG yang berotasi menggunakan utility class `group-open:rotate-180 transition-transform`.
- **Rasional**: Memiliki aksesibilitas bawaan browser (keyboard tabable, Enter/Space toggle, ARIA support otomatis) tanpa 1 baris pun JavaScript tambahan.
- **Alternatif**: Vanilla JS onclick toggle. Ditolak karena menambah overhead script dan rawan kegagalan jika script terblokir.

### 3. Styling & Color Harmony Lock
- **Pilihan**:
  - FAQ B2B: Nuansa `bg-corporate-grayBg`, border `border-slate-200`, accent text `text-corporate-navy` & `text-corporate-blue`.
  - FAQ B2C: Nuansa `bg-white`, border `border-slate-200`, hover `border-handy-blue`.
  - Badge Popular: `bg-amber-100 text-amber-900 border border-amber-200` untuk kontras tinggi tanpa melanggar WCAG AA.
- **Rasional**: Mematuhi aturan `AGENTS.md` (no random AI purple/neon glow, single radius scale, WCAG AA compliance).

## Risks / Trade-offs

- **[Risk]** Penambahan teks FAQ memperpanjang halaman mobile.
  - **Mitigasi**: Batasi FAQ hanya 4 butir pertanyaan paling esensial per segmen (B2B dan B2C) dalam format collapsed default (`<details>` tertutup), sehingga hanya memakan ruang vertikal minimal sebelum dibuka oleh pengguna.
