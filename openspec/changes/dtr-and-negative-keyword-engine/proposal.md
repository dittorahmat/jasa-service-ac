## Why

Campaign Google Ads dan SEO lokal CV Rifqi AC memerlukan efisiensi biaya (anti budget bocor) dan peningkatan skor relevansi iklan (*Quality Score*). Saat ini, iklan B2B berisiko terklik pencari residensial bernilai rendah, dan landing page masih menggunakan teks statis sehingga rasio konversi klik-ke-WhatsApp belum maksimal ketika pengunjung datang dari kata kunci spesifik (misal: "service chiller mm2100").

Dengan mengombinasikan **Google Ads Negative Keyword Fortress** (Low Effort & High Impact) serta **Client-side Dynamic Text Replacement (DTR)**, kita dapat menghemat 30%–50% pemborosan anggaran iklan sekaligus mendongkrak konversi ke WhatsApp dengan teks landing page yang adaptif.

## What Changes

- **Negative Keyword Fortress & Ad Group Matrix Guide**: Menyusun panduan operasional Google Ads lengkap berisi master negative keyword (B2B exclusions dan B2C exclusions) serta struktur Match Type (Exact/Phrase) siap pakai untuk di-copy-paste ke Google Ads dashboard.
- **Client-Side Dynamic Text Replacement (DTR) Engine**: Menambahkan fungsi ekstraksi parameter URL (`area`, `service`, `source`) di `tracking.js` yang secara dinamis dan aman mengadaptasi teks Headline / Badge di landing page tanpa merusak SEO (server-side markup tetap utuh untuk web crawler).
- **Synchronized WhatsApp Intent Payload**: Menghubungkan parameter DTR yang terdeteksi ke dalam draft WhatsApp message generator, sehingga chat yang dibuka calon pelanggan otomatis mencantumkan area dan kebutuhan spesifik mereka.
- **Safe Fallback & Zero Layout Shift (CLS-safe)**: Memastikan DTR hanya mengganti teks secara inline tanpa memicu Cumulative Layout Shift (CLS) dan tetap menampilkan teks default pabrik/industri jika parameter tidak ada.

## Capabilities

### New Capabilities
- `ads-optimization`: Mekanisme perlindungan budget Google Ads (negative keywords) dan engine adaptasi landing page dinamis (DTR) berbasis query parameter untuk meningkatkan Quality Score dan rasio konversi.

### Modified Capabilities
<!-- Tidak ada perubahan requirement pada specs b2b-seo sebelumnya -->

## Impact

- **Affected code**: `assets/js/tracking.js` (penambahan logic DTR), `index.html` dan geo landing pages (penambahan target data attribute DTR seperti `data-dtr-headline` dan `data-dtr-badge`), serta dokumen panduan Google Ads di direktori dokumentasi/openspec.
- **Dependencies**: Tidak ada dependensi library luar baru, murni native vanilla JavaScript ES6.
- **SEO & Performance**: 0 dampak negatif pada SEO karena bot Google tetap mengindeks teks HTML statis default. 0 layout shift karena styling tidak diubah.
