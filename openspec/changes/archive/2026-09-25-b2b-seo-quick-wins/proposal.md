## Why

CV Rifqi Berkah Teknik (CV Rifqi AC) membutuhkan aliran prospek/leads B2B yang konsisten dari calon klien korporat (Manajer Pabrik, PIC General Affairs, Tim Procurement, dan Engineering) di kawasan industri utama (Bekasi, Cikarang, Karawang). 

Saat ini, website belum memiliki file pondasi pengindeksan mesin pencari (`robots.txt` dan `sitemap.xml`), serta metadata, semantic headings, dan JSON-LD Structured Data pada halaman B2B (`index.html`) belum teroptimasi secara maksimal untuk kata kunci transaksional bernilai tinggi seperti *"kontrak service hvac pabrik"*, *"vendor hvac cikarang"*, dan *"perawatan ac kantor bekasi"*. Optimasi SEO on-page dan teknis ini merupakan langkah dengan *effort* terendah namun berdampak paling signifikan (*high impact*) untuk meningkatkan visibilitas di Google Search sebelum melangkah ke pembuatan sub-halaman kawasan.

## What Changes

- **Pondasi Indexing Mesin Pencari:**
  - Pembuatan file `robots.txt` yang mengizinkan crawling Googlebot dan merujuk ke sitemap resmi.
  - Pembuatan file `sitemap.xml` yang mendaftarkan URL resmi dengan prioritas halaman B2B (`/`) dan B2C (`/b2c.html`).
- **Optimasi On-Page Meta & OpenGraph (index.html):**
  - Penajaman `<title>` dan `<meta name="description">` dengan kata kunci transaksional B2B (Kontrak HVAC Pabrik & Kawasan Industri).
  - Penambahan canonical link eksplisit (`<link rel="canonical">`).
  - Pembaruan OpenGraph dan Twitter card meta tags untuk meningkatkan CTR saat tautan dibagikan.
- **Penyempurnaan Semantic Headings & Copywriting B2B:**
  - Penyesuaian `H1`, `H2`, dan subtext pada hero/service sections agar mengandung entitas relevan (Jababeka, MM2100, KIIC, EJIP, Chiller, AHU, Ducting, Cassette).
- **Pengayaan JSON-LD Structured Data:**
  - Memperkaya skema `HVACBusiness` dengan koordinat geo, area spesifik per kawasan industri, kontak darurat, dan relasi layanan teknis.

## Capabilities

### New Capabilities
- `b2b-seo`: Spesifikasi pengindeksan teknis mesin pencari (robots.txt, sitemap.xml), standarisasi on-page SEO meta tags, dan pengayaan schema markup untuk target B2B HVAC.

### Modified Capabilities
<!-- None -->

## Impact

- **File Baru:** `robots.txt`, `sitemap.xml` di root direktori proyek.
- **File Termodifikasi:** `index.html` (tag `<head>`, meta tags, canonical, schema JSON-LD, dan heading semantics).
- **Dependensi/Sistem:** Tidak ada penambahan dependensi npm baru. Menggunakan struktur Tailwind yang sudah ada.
