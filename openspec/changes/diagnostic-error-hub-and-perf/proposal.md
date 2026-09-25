## Why

Manajer fasilitas pabrik, teknisi gedung, dan purchasing umumnya mencari solusi di Google saat terjadi gangguan darurat atau muncul kode alarm/error pada sistem pendingin (Chiller, AHU, VRV/VRF, AC Cassette). Saat ini situs belum memiliki pusat rujukan teknis untuk menampung kata kunci pencarian berniat tinggi (*high-intent diagnostic queries*) seperti "kode error ac vrv daikin", "chiller high pressure trip", atau "ac cassete bocor air u4 e3".

Membangun Diagnostic & Error Code Problem Hub meningkatkan otoritas topikal (Topical Authority) website di mata Google, mendatangkan traffic organik manajer operasional yang membutuhkan penanganan onsite darurat, dan mempercepat konversi telepon/WhatsApp teknisi standby. Selain itu, audit aset gambar dan Core Web Vitals memastikan kecepatan muat landing page tetap optimal.

## What Changes

- Membuat halaman rujukan diagnostik interaktif baru: `panduan-kode-error-ac-industri.html`
  - Menyajikan katalog kode alarm & error terstruktur untuk sistem pendingin utama (Daikin VRV/Inverter, York Chiller, Panasonic/Mitsubishi Cassette).
  - Filter pencarian kode interaktif (Search & Category Pill filter tanpa reload).
  - Rekomendasi tindakan awal keselamatan pabrik dan tombol direct emergency dispatch teknisi berstandar K3 ke lokasi.
- Menambahkan template pesan WhatsApp `b2bDiagnostic` di `assets/js/tracking.js` yang menyertakan kode error terkait.
- Menerapkan schema `TechArticle` dan `FAQPage` JSON-LD untuk memicu Google Rich Snippets di hasil pencarian.
- Audit dan optimasi performa aset gambar (WebP/lazy-loading) untuk menjaga Core Web Vitals (LCP & CLS).
- Mendaftarkan URL baru di `sitemap.xml` dan menambahkan tautan bantuan darurat dari `index.html` dan halaman geo-kawasan.

## Capabilities

### New Capabilities
- `diagnostic-hub`: Spesifikasi fitur katalog kode error interaktif, panduan troubleshooting HVAC, dan alur panggil teknisi darurat.

### Modified Capabilities
- `b2b-seo`: Memperluas requirement sitemap dan schema metadata dengan penambahan Rich Snippet FAQPage/TechArticle.

## Impact

- File baru: `panduan-kode-error-ac-industri.html`.
- File termodifikasi: `assets/js/tracking.js`, `index.html`, `sitemap.xml`.
- Tidak ada breaking change terhadap struktur URL yang sudah aktif.
