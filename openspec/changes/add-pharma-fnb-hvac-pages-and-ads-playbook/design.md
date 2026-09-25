## Context

Pabrik Farmasi (di kawasan Delta Silicon, Jababeka, Karawang) dan Makanan & Minuman (di MM2100, Surya Cipta, KIIC) menuntut tingkat kepatuhan regulasi dan audit ketat. Landing page ini melengkapi struktur penargetan Google Ads B2B (STAG) dan memperkaya relevansi kata kunci industri berbayar.

## Goals / Non-Goals

**Goals:**
- Membuat 2 landing page: `hvac-industri-farmasi-cleanroom.html` dan `hvac-industri-makanan-minuman.html`.
- Menerapkan schema `HVACBusiness`, `BreadcrumbList`, dan `FAQPage` terstruktur.
- Mendaftarkan URL ke `sitemap.xml`.
- Memperbarui dokumentasi kampanye Google Ads di `docs/google-ads-playbook.md`.
- Menambahkan baris keyword & copy RSA ke `docs/bulk-b2b-keywords.csv` dan `docs/bulk-b2b-ads.csv`.

**Non-Goals:**
- Mengubah core JavaScript tracking yang sudah stabil.

## Decisions

1. **Design System & Taste Anti-Slop (AGENTS.md):**
   - Palette resmi B2B: `#0b1b33` Navy, `#1070e5` Blue, `#e6a100` Gold/Amber.
   - SVG icons seragam, tombol tidak wrap di desktop, mobile bottom bar responsif.
2. **Google Ads Relevancy & Quality Score:**
   - Menghubungkan kata kunci bertarget langsung ke landing page yang relevan dengan parameter UTM dan DTR `service=Pharma` atau `service=FNB`.
3. **Dokumen Teknis Siap Audit:**
   - Menyertakan checklist kualifikasi (DQ/IQ/OQ/PQ) dan kepatuhan BPOM / HACCP pada landing page.
