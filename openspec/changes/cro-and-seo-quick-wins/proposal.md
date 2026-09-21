## Why

Setelah audit anti-slop frontend dan penyelarasan strategi Google Ads (Search Campaign), diperlukan serangkaian optimasi tingkat konversi (CRO) dan peningkatan SEO Rich Snippets pada halaman landing B2B (`index.html`) dan B2C (`b2c.html`). Perubahan ini bertujuan untuk menurunkan resistensi calon pelanggan saat memutuskan menghubungi WhatsApp, memperjelas ekspektasi SLA penanganan survey pabrik, serta memampukan mesin pencari Google menampilkan informasi terstruktur bisnis lokal dan FAQ kaya (rich snippets).

## What Changes

- **B2C Conversion Friction Reduction**:
  - Penambahan micro-copy penenang psikologis di bawah tombol utama booking WhatsApp (`"✓ Tanpa Uang Muka • Bayar Pasca Servis Selesai • Garansi 30 Hari"`).
  - Penambahan badge visual `PALING POPULER` pada baris Cuci AC Split 0.5–1 PK (Rp 60.000) di tabel harga.
- **B2B Survey SLA Assurance**:
  - Penambahan keterangan penjaminan SLA verifikasi cepat (`"⚡ Tiket survey langsung diverifikasi engineer kami dalam < 15 menit di jam kerja"`) pada form tiket survey pabrik/kantor.
- **SEO & Google Ads Rich Snippets (Schema.org JSON-LD)**:
  - Implementasi schema `HVACBusiness` / `LocalBusiness` terstruktur pada `index.html` dan `b2c.html` mencakup area layanan (Bekasi, Cikarang, Karawang, Depok), kontak resmi, dan jam operasional.
  - Implementasi schema `FAQPage` pada kedua halaman untuk memaksimalkan visibilitas organic search dan ekstensi iklan Google Ads.
- **Interactive FAQ Accordion Component**:
  - Penambahan komponen tanya jawab ringkas berformat akordeon native (menggunakan `<details>` dan `<summary>` yang ramah aksesibilitas) untuk menjawab keraguan utama pengguna sebelum berpindah ke WhatsApp.

## Capabilities

### New Capabilities
- `cro-and-seo-quick-wins`: Peningkatan elemen penenang psikologis konversi (CRO), badge pilihan populer, garansi SLA verifikasi cepat, komponen FAQ interaktif, dan penanaman data terstruktur Schema.org JSON-LD (HVACBusiness & FAQPage) di landing page B2B dan B2C.

### Modified Capabilities
<!-- Tidak ada modified capabilities karena specs utama belum disinkronisasi ke root openspec/specs/ -->

## Impact

- **Affected Files**:
  - `index.html`: Penambahan Schema JSON-LD, micro-copy SLA form survey, dan section FAQ B2B.
  - `b2c.html`: Penambahan Schema JSON-LD, micro-copy tanpa DP, badge populer pada pricing, dan section FAQ B2C.
  - `assets/css/style.css`: Terkompilasi ulang melalui Tailwind CLI jika terdapat utility class baru.
- **APIs & Dependencies**: Tidak ada penambahan library pihak ketiga; menggunakan native HTML/CSS dan script JSON-LD murni.
