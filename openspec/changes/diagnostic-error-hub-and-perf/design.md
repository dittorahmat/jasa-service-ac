## Context

Situs saat ini sudah memiliki landing page B2B tersegmen untuk kawasan industri, namun belum memiliki halaman artikel panduan teknis yang dapat menjaring kata kunci pencarian organik berbasis masalah (*problem-aware queries*). Standar desain frontend tetap mengacu pada `AGENTS.md` (anti-slop, kontras WCAG AA, font Plus Jakarta Sans + JetBrains Mono, interaksi taktil, dan navigasi mobile teratur).

## Goals / Non-Goals

**Goals:**
- Membangun `panduan-kode-error-ac-industri.html` dengan desain responsif, modern, dan fungsional.
- Menyediakan katalog interaktif kode error umum (Daikin VRV/Cassette, York Chiller, Panasonic/Mitsubishi) dengan fitur pencarian teks instan (client-side vanila JS, tanpa dependensi eksternal).
- Setiap kartu error memiliki tombol panggil teknisi yang memicu template pesan WhatsApp darurat.
- Menyematkan Structured Data `FAQPage` & `TechArticle` JSON-LD.
- Memperbarui `assets/js/tracking.js` dengan helper function untuk dynamic error code dispatch.
- Mengintegrasikan internal linking dari `index.html` dan memperbarui `sitemap.xml`.

**Non-Goals:**
- Tidak menggunakan database runtime atau CMS berat; seluruh data kode error disimpan dalam struktur data JSON/DOM statis yang ringan dan cepat.

## Decisions

1. **Client-Side Live Filter vs Multi-Page Index**:
   - *Pilihan*: Menggunakan satu halaman rujukan terpadu dengan input filter live JavaScript murni.
   - *Alasan*: Memberikan pengalaman pengguna yang sangat cepat (tanpa jeda reload) saat mencari kode darurat di lantai pabrik menggunakan ponsel.
2. **Schema.org Integration**:
   - *Pilihan*: Mengombinasikan `TechArticle` untuk seluruh panduan dan `FAQPage` untuk pasangan [Kode & Gejala] -> [Solusi & Kapan Butuh Teknisi].
   - *Alasan*: Google sangat menyukai format FAQ untuk menampilkan dropdown rich snippets di SERP.

## Risks / Trade-offs

- **[Risiko Konten Terlalu Teknis / Dikerjakan Sendiri]** → Sertakan *Safety Warning* jelas di setiap kartu bahwa perbaikan tegangan tinggi 3-phase, refrigerant bertekanan, dan chiller wajib dikerjakan oleh teknisi bersertifikat K3 untuk menghindari bahaya kebakaran atau kehilangan garansi mesin.
