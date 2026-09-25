## Context

Website saat ini menggunakan arsitektur static HTML dengan Tailwind CSS yang dikompilasi ke `assets/css/style.css` serta modul tracking berbasis vanilla JavaScript (`assets/js/tracking.js`). Telah terdapat template halaman kluster kawasan industri (seperti `hvac-mm2100.html`) dan template residensial (`b2c.html`). Dokumen panduan dan spreadsheet Google Ads (`docs/google-ads-playbook.md` dan `docs/bulk-*.csv`) menjadi sumber acuan impor kampanye.

## Goals / Non-Goals

**Goals:**
- Menghasilkan 6 halaman HTML statis mandiri dengan performa tinggi, waktu muat instan, dan markup semantik.
- Menerapkan pedoman anti-slop dari skill `design-taste-frontend` dan aturan `AGENTS.md` (Design Read eksplisit, tidak ada emoji generik, kontras warna WCAG AA, palet resmi B2B navy/gold dan B2C blue/emerald).
- Memastikan schema markup JSON-LD teruji (`HVACBusiness`, `FAQPage`, koordinat geo akurat, area served).
- Menyediakan pesan pre-filled WhatsApp yang kontekstual dan integrasi tracking parameter UTM/GCLID.
- Memperbarui playbook Google Ads dan memperluas baris CSV bulk upload tanpa merusak baris yang sudah ada.

**Non-Goals:**
- Mengubah backend worker atau menambahkan database server-side baru.
- Mengubah arsitektur global Tailwind atau menghapus halaman landing page yang sudah ada.

## Decisions

### 1. Desain Visual & Tipografi Bersih (Anti-Slop)
- **Keputusan**: Halaman B2B menggunakan tema Corporate Navy (`#0b1b33`) dengan aksen Gold (`#e6a100`) dan font `Plus Jakarta Sans` dipadukan angka/spec monospaced `JetBrains Mono`. Halaman B2C menggunakan tema Handy Blue (`#1070e5`) dengan aksen Emerald (`#10b981`).
- **Alternatif**: Menggunakan template generik luar negeri. *Ditolak karena tidak sesuai persona industri Jabodetabek dan tampak seperti AI slop.*

### 2. Standarisasi JSON-LD Schema
- **Keputusan**: Setiap halaman memiliki script JSON-LD terpisah bertipe `HVACBusiness` yang memuat `areaServed` spesifik lokasi atau spesialisasi katalog layanan, serta `FAQPage` dengan jawaban legalitas OSS/K3 atau garansi 30 hari.
- **Alternatif**: Schema global terpusat di JS eksternal. *Ditolak karena crawler search engine lebih cepat memvalidasi inline structured data.*

### 3. Penataan Pesan WhatsApp Pre-filled & Parameter Iklan
- **Keputusan**: Memperluas dictionary `CONFIG.messages` pada `assets/js/tracking.js` dengan key:
  - `b2bChiller`, `b2bAHU`, `b2bVRV`
  - `b2cGrandWisata`, `b2cHarapanIndah`, `b2cSummarecon`
  Setiap tombol CTA di HTML baru cukup dipasangi atribut `data-wa-type="b2bChiller"` atau sejenisnya.
- **Alternatif**: Hardcoded link WhatsApp di tiap tombol. *Ditolak karena menghilangkan otomatisasi atribusi UTM dan event conversion Google Ads.*

### 4. Ekstensi CSV Bulk Upload Google Ads
- **Keputusan**: Menambahkan baris Ad Groups baru pada `bulk-b2b-keywords.csv`, `bulk-b2b-ads.csv`, `bulk-b2c-keywords.csv`, dan `bulk-b2c-ads.csv` dengan format kolom standar Google Ads Editor (Campaign, Ad Group, Keyword/Headline/Description, Criterion Type, Max CPC, Final URL).
- **Alternatif**: Membuat file CSV baru terpisah. *Ditolak karena pengguna lebih mudah mengimpor satu file terpadu untuk kampanye B2B dan B2C.*

## Risks / Trade-offs

- **[Duplikasi struktur HTML antar halaman]** &rarr; Mitigasi: Mengadopsi struktur modul dari halaman kluster yang telah terbukti konversi tingginya, dengan diferensiasi copy, spesifikasi teknis mesin, dan konteks wilayah perumahan yang nyata.
- **[Class Tailwind baru belum terkompilasi]** &rarr; Mitigasi: Jalankan `npm run build:css` setelah penambahan markup HTML baru untuk memastikan utility classes masuk ke `assets/css/style.css`.
