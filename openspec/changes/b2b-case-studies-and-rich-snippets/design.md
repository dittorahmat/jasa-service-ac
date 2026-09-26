## Context

Pengembangan ini meningkatkan otoritas teknis (topical authority & EEAT) dan kelayakan rich snippet Google SERP pada halaman layanan B2B (`service-chiller-industri.html`, `maintenance-ahu-cleanroom.html`, dan `solusi-chiller-overheat-trip.html`). Desain mengadopsi standar `design-taste-frontend` dengan palet resmi Corporate Navy (`#0b1b33`) dan Gold (`#e6a100`), tipografi Plus Jakarta Sans & JetBrains Mono, tanpa generic AI slop.

## Goals / Non-Goals

**Goals:**
- Mengimplementasikan skema terstruktur `HowTo` (Schema.org) yang valid di validator Google Rich Results.
- Menambahkan section modular studi kasus rekayasa lapangan yang rapi, padat data teknis, dan dilengkapi alur konversi RFQ.
- Memastikan kompatibilitas mobile penuh dan kompilasi CSS Tailwind bersih tanpa regresi.

**Non-Goals:**
- Tidak membuat sistem backend database studi kasus terpisah (cukup markup HTML statis berkinerja tinggi).
- Tidak mengubah logika tracking Google Ads konversi inti yang sudah stabil di `tracking.js`.

## Decisions

1. **Format JSON-LD HowTo**:
   - Disematkan ke dalam tag `<script type="application/ld+json">` yang sudah ada di `@graph`, melengkapi entitas `HVACBusiness` dan `FAQPage`.
   - Menggunakan properti `step`, `name`, `text`, dan `itemListElement`.

2. **Desain Komponen Case Study**:
   - Layout kartu bento asimetris: Kolom kiri menampilkan ringkasan profil pabrik & metrik hasil (sebelum vs sesudah dalam font monospace JetBrains Mono beraksen emerald/gold), kolom kanan memuat kronologi rekayasa teknis & kepatuhan K3/CSMS.
   - Dilengkapi CTA terhubung ke fungsi `handleWhatsAppClick(event, 'b2bChiller')` / `handleWhatsAppClick(event, 'b2bAHU')` atau trigger RFQ modal desktop.

## Risks / Trade-offs

- **[Risk] Skema HowTo terdeteksi invalid jika ada atribut wajib yang terlewat** → *Mitigasi*: Cantumkan nama, deskripsi, dan step secara lengkap sesuai spesifikasi resmi Google Search Central.
- **[Risk] Layout bergeser di layar mobile kecil** → *Mitigasi*: Gunakan pendekatan responsive stack (`flex-col lg:flex-row`), padding yang pas, dan batasi line wrap.
