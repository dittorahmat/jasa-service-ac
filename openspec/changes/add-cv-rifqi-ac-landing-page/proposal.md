## Why

CV Rifqi AC membutuhkan kehadiran web berkonversi tinggi untuk menjalankan kampanye Google Ads (AdWords) yang efektif dan efisien biaya di wilayah Bekasi, Karawang (kawasan industri), dan Depok. Menggabungkan segmen B2B (kantor/pabrik) dan B2C (residensial) dalam satu halaman umum berisiko menurunkan conversion rate dan memboroskan anggaran iklan. Perubahan ini menyediakan dua landing page khusus yang ringan, cepat (<1s), bebas dari konten "AI slop", terintegrasi pelacakan konversi WhatsApp, serta dilengkapi blueprint kampanye Google Ads untuk optimalisasi biaya per lead (Smart Bidding).

## What Changes

- **Landing Page B2B (`index.html`)**: Landing page khusus target korporat, fasilitas komersil, dan pabrik di kawasan industri Bekasi & Karawang. Memuat legalitas CV resmi, penawaran kontrak perawatan, faktur pajak/BAST/SPK, standar APD/K3 teknisi, dan alur survey lokasi gratis.
- **Landing Page B2C (`b2c.html`)**: Landing page khusus target residensial & ruko di area Bekasi, Depok, dan Karawang. Menekankan respon darurat cepat (AC bocor/mati/tidak dingin), transparansi harga cuci/tambah freon, garansi servis 30 hari, dan SOP teknisi bersih.
- **Conversion Tracking Foundation**: Integrasi snippet event tracking (Google Tag / GTM dataLayer) pada semua tombol interaksi Call-to-Action (WhatsApp click & direct call) dengan pre-filled message dinamis per segmen.
- **Google Ads Strategy Playbook (`adwords-playbook.md`)**: Dokumen komprehensif panduan kampanye Google Ads, mencakup pembagian Campaign B2B vs B2C, riset kata kunci (Exact & Phrase), daftar negative keywords anti-boncos, rekomendasi ad copy (Headlines & Descriptions), serta tahapan transisi bidding (Maximize Clicks -> Maximize Conversions / Target CPA).

## Capabilities

### New Capabilities
- `landing-pages`: Struktur halaman web statis ultra-cepat (HTML5 & Tailwind CSS) yang memisahkan jalur akuisisi B2B dan B2C dengan copy otentik, social proof, dan CTA WhatsApp dinamis.
- `conversion-tracking`: Pelacak klik konversi Google Ads (lead generation event) untuk tombol WhatsApp dan telepon.
- `adwords-campaign`: Struktur kampanye, riset keyword, negative keywords, ad copy, dan rencana bidding strategi Google Ads untuk memaksimalkan konversi dengan biaya semurah mungkin.

### Modified Capabilities
<!-- None. Greenfield implementation. -->

## Impact

- Penambahan file statis web: `index.html` (B2B), `b2c.html` (B2C), stylesheet/assets, dan script pelacak.
- Tidak ada dependensi server dinamis (dapat di-host gratis dan instan di Netlify, Vercel, Cloudflare Pages, atau cPanel).
- Kesiapan peluncuran iklan Google Ads terukur tanpa kebocoran anggaran pada klik yang tidak relevan.
