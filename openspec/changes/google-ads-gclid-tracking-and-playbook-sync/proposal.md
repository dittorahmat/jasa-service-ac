## Why

Sistem periklanan Google Ads CV Rifqi AC membutuhkan akurasi atribusi lead bernilai tinggi. Saat ini kampanye Google Ads telah memiliki landing page spesifik dan bulk CSV keywords/ads, namun lead yang masuk lewat WhatsApp dan RFQ belum menyertakan tracking identifier Google Click ID (`gclid`) serta parameter privasi (`wbraid`, `gbraid`). Selain itu, dokumentasi operasional `docs/google-ads-playbook.md` belum disinkronkan dengan 10 Ad Group baru (Chiller, AHU, VRV, Pharma, F&B, KNIC, Artha Industrial Hill, Sentul, Modern Cikande, Kalkulator), serta belum memiliki panduan Offline Conversion Import (OCT) untuk mengirim data transaksi deal kontrak kembali ke Google Ads.

## What Changes

- **Tracking Script GCLID & Privacy IDs Support**: Memperbarui `assets/js/tracking.js` untuk menangkap dan menyimpan parameter `gclid`, `wbraid`, dan `gbraid` ke `sessionStorage` serta cookie berdurasi 30 hari.
- **WhatsApp Message Attribution**: Menyertakan Click ID ringkas pada pesan template WhatsApp (misal: `[Ref Iklan: google | b2b-mm2100 | KW: service chiller | GCLID: EAIa...8kQ]`).
- **RFQ Submission Attribution**: Menyimpan dan mengirimkan Click ID serta data kampanye dalam payload formulir RFQ desktop.
- **Google Ads Playbook Synchronization**: Memperbarui `docs/google-ads-playbook.md` dengan menyertakan copywriting RSA lengkap untuk 10 Ad Group baru, matriks sitelink terbaru, serta panduan langkah-demi-langkah Offline Conversion Tracking (OCT).
- **Template Offline Conversion Import**: Menyediakan file `docs/template-offline-conversions.csv` berstandar Google Ads agar tim admin/sales CV Rifqi AC dapat mengunggah data deal transaksi kontrak secara berkala.

## Capabilities

### New Capabilities
- `gclid-offline-conversion-tracking`: Menangkap, menyimpan, dan meneruskan Google Click ID (`gclid`/`wbraid`/`gbraid`) melalui channel lead WhatsApp & formulir RFQ serta menyediakan template dan alur Offline Conversion Tracking (OCT) untuk Google Ads.

### Modified Capabilities
<!-- None -->

## Impact

- `assets/js/tracking.js`: Logika penangkapan URL param, penyusunan suffix teks WhatsApp, dan submission RFQ.
- `docs/google-ads-playbook.md`: Dokumentasi playbook, copywriting RSA, matriks sitelink, dan SOP Offline Conversion Tracking.
- `docs/template-offline-conversions.csv`: Template impor konversi Google Ads format CSV baru.
