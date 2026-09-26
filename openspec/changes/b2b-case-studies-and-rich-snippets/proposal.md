## Why

Halaman layanan teknis B2B (`service-chiller-industri.html`, `solusi-chiller-overheat-trip.html`, dan `maintenance-ahu-cleanroom.html`) saat ini telah memiliki konten dasar namun belum memiliki bukti rekayasa lapangan konkret (*proof of competence*) serta skema data terstruktur `HowTo` Google Rich Snippet. Penambahan studi kasus modular dan skema `HowTo` ini memberikan dampak konversi tinggi dan peningkatan CTR pencarian organik B2B dengan usaha implementasi yang terukur (*low effort, high impact*).

## What Changes

1. **Structured Data Rich Snippets (`HowTo`)**:
   - Menambahkan JSON-LD bertipe `HowTo` pada `solusi-chiller-overheat-trip.html` yang merinci protokol diagnosa darurat chiller (inspeksi delta T kondensor, descaling mechanical/kimia, dan pencegahan trip).
   - Menambahkan JSON-LD bertipe `HowTo` pada `maintenance-ahu-cleanroom.html` yang merinci prosedur pengujian ruang bersih (smoke test, penggantian HEPA filter gel-seal, dan air balancing).
2. **Modular Proof of Competence (Field Engineering Case Studies)**:
   - Menyisipkan komponen visual UI studi kasus lapangan berstandar desain agensi (Corporate Navy/Gold, tanpa generic AI slop) di `service-chiller-industri.html` (Studi Kasus: Troubleshooting & Descaling Chiller Water-Cooled di MM2100 Cikarang).
   - Menyisipkan komponen visual UI studi kasus lapangan di `maintenance-ahu-cleanroom.html` (Studi Kasus: Pemulihan Uji Partikulat & Sertifikasi CPOB Farmasi di Jababeka).
3. **CSS Compilation & Validation**:
   - Memastikan seluruh kelas Tailwind baru terkompilasi ke `assets/css/style.css`.

## Capabilities

### New Capabilities
- `b2b-engineering-case-studies`: Komponen UI dan konten studi kasus rekayasa teknis lapangan untuk membuktikan kapabilitas engineering dan kepatuhan K3/CSMS di kawasan industri.

### Modified Capabilities
- `b2b-seo`: Pengayaan skema JSON-LD structured data dengan tipe `HowTo` terstruktur pada halaman solusi teknis chiller dan cleanroom untuk menangkap Google Rich Snippets.

## Impact

- **Affected Code**: `solusi-chiller-overheat-trip.html`, `maintenance-ahu-cleanroom.html`, `service-chiller-industri.html`, `assets/css/style.css`.
- **APIs / Dependencies**: Tidak ada penambahan runtime dependency baru (hanya markup HTML dan kompilasi Tailwind CSS).
- **SEO & Search Visibility**: Kelayakan Google Rich Snippet (HowTo step-by-step) dan peningkatan topical authority EEAT di Google Search.
