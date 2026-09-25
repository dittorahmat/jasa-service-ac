## Context

Website CV Rifqi AC dideploy sebagai static HTML/CSS melalui Cloudflare Workers / static hosting. Halaman utama saat ini (`index.html`) difokuskan untuk target B2B (Kontrak Pabrik & Gedung), dan `b2c.html` untuk servis rumah tangga. Proyek ini belum memiliki file standarisasi crawling mesin pencari (`robots.txt`, `sitemap.xml`) serta memerlukan penajaman on-page meta tags dan Schema.org JSON-LD agar relevan dengan algoritma pencarian lokal Google di kawasan industri Bekasi, Cikarang, dan Karawang.

## Goals / Non-Goals

**Goals:**
- Menyediakan file `robots.txt` dan `sitemap.xml` statis yang valid untuk Googlebot dan Bingbot.
- Mengoptimasi `<title>`, `<meta name="description">`, canonical URL, OpenGraph tags, dan Twitter cards pada `index.html`.
- Memperluas skema `HVACBusiness` JSON-LD di `index.html` dengan rincian `areaServed` (MM2100, Jababeka, KIIC, EJIP, Surya Cipta), `serviceType`, serta koordinat geo.
- Menyempurnakan semantic headings (`H1`, `H2`) dan keyword injection alami tanpa merusak estetika desain visual profesional (mengikuti aturan `design-taste-frontend` & `AGENTS.md`).

**Non-Goals:**
- Pembuatan dynamic sitemap generator (karena situs statis dengan halaman terbatas, file XML statis jauh lebih cepat dan andal).
- Pembuatan sub-halaman baru per kawasan industri (ini masuk ke Sprint 2 setelah quick wins selesai).
- Perubahan arsitektur sistem backend atau tracking Google Ads yang sudah aktif.

## Decisions

1. **Static XML Sitemap & Robots.txt di Root Repo:**
   - *Rationale:* Mudah dipelihara, zero-latency, langsung disajikan oleh server statis/Workers.
   - *Alternative Considered:* Script generator build-time — tidak diperlukan untuk ukuran situs saat ini (2 halaman utama).

2. **Keyword Targeting On-Page (Industrial B2B Intent):**
   - *Rationale:* Decision maker B2B (General Affairs, Engineering, Procurement) mencari dengan query: *"kontrak service hvac cikarang"*, *"maintenance hvac pabrik bekasi"*, *"vendor service ac karawang"*, *"legalitas e-faktur ac kantor"*.
   - *Decision:* Pasang kata kunci ini pada Title tag, Meta description, H1 hero, dan FAQ Schema secara alami.

3. **Schema.org HVACBusiness Extension:**
   - *Rationale:* Menambahkan entitas `AdministrativeArea` spesifik kawasan industri membantu Google Knowledge Graph mengaitkan CV Rifqi AC dengan zona manufaktur utama di Jawa Barat.

## Risks / Trade-offs

- [Risk] Keyword stuffing membuat teks terkesan kaku atau menurunkan konversi manusia → *Mitigasi:* Mengutamakan copywriting bernada profesional B2B, kredibilitas izin usaha (NIB, PPN, K3), dan keterbacaan alami sesuai pedoman `design-taste-frontend`.
- [Risk] Broken links di sitemap → *Mitigasi:* Verifikasi seluruh link yang didaftarkan berstatus 200 OK dengan URL absolut canonical.
