## Why

Halaman kalkulator engineering (`kalkulator-hvac-industri.html`), panduan troubleshooting darurat (`solusi-chiller-overheat-trip.html`), dan tabel kode diagnostik (`panduan-kode-error-ac-industri.html`) telah memiliki konten teknis berkualitas tinggi, namun belum memanfaatkan Google Rich Results Schema secara maksimal. 

Penambahan Structured Data teknis tingkat lanjut (`SoftwareApplication`, `HowTo`, dan penguatan `TechArticle`/E-E-A-T) adalah langkah *low-effort, high-impact* yang secara instan memperluas ruang visual website di SERP Google (CTR boost) tanpa biaya iklan tambahan serta memperkuat otoritas entitas teknis CV Rifqi AC di mata algoritma Google Search.

## What Changes

1. **`kalkulator-hvac-industri.html`**:
   - Menambahkan JSON-LD Schema `SoftwareApplication` / `WebApplication` yang mendefinisikan kalkulator beban pendingin (TR) dan Air Change Rate (ACH) CPOB sebagai aplikasi web utilitas teknik gratis.
   - Menyertakan `operatingSystem: "All"`, `applicationCategory: "BusinessApplication"`, dan `offers`.

2. **`solusi-chiller-overheat-trip.html`**:
   - Menambahkan JSON-LD Schema `HowTo` dengan langkah bertingkat terstruktur (Step 1: Pengecekan Pressure Gauge & Alarm, Step 2: Inspeksi Air Pendingin & Water Flow, Step 3: Verifikasi Fan & Kondensor, Step 4: Reset & Prosedur Panggilan Vendor).
   - Menambahkan `TechArticle` dengan author terverifikasi `HVAC Technical Team CV Rifqi AC`.

3. **`panduan-kode-error-ac-industri.html`**:
   - Memperkuat Schema `TechArticle` dan keterhubungan `FAQPage` dengan atribut entitas publisher & author teknis industri berstandar E-E-A-T.

## Capabilities

### Modified Capabilities
- `b2b-seo`: Memperluas requirement structured data agar mencakup `SoftwareApplication` dan `HowTo` rich snippets pada halaman engineering & diagnostik B2B.

## Impact

- File yang terdampak:
  - `kalkulator-hvac-industri.html`
  - `solusi-chiller-overheat-trip.html`
  - `panduan-kode-error-ac-industri.html`
- Tidak ada perubahan layout/tampilan visual frontend yang merusak responsivitas mobile.
- Validasi 100% compliant terhadap spesifikasi Google Rich Results Test & Schema.org.
