## 1. Tracking Engine Upgrade (assets/js/tracking.js)

- [x] 1.1 Perbarui fungsi `captureCampaignParams` dan dual storage (sessionStorage + cookie 30 hari) untuk menangkap `gclid`, `wbraid`, dan `gbraid`. Verifikasi dengan simulasi URL param dan periksa storage di browser console.
- [x] 1.2 Perbarui fungsi `getCampaignSuffix` agar menyertakan Click ID (GCLID/WBRAID) secara ringkas dalam teks WhatsApp. Verifikasi format teks yang dihasilkan pada event click WhatsApp.
- [x] 1.3 Perbarui fungsi `submitDesktopRfq` untuk menyertakan nilai lengkap GCLID/kampanye dalam pesan penawaran resmi. Verifikasi submit form desktop menghasilkan teks yang menyertakan data atribusi.

## 2. Google Ads Playbook & Offline Conversion Documentation

- [x] 2.1 Buat template CSV impor konversi offline `docs/template-offline-conversions.csv` sesuai format resmi Google Ads. Verifikasi struktur header dan contoh baris data valid.
- [x] 2.2 Perbarui `docs/google-ads-playbook.md` dengan copywriting RSA lengkap untuk 10 Ad Group B2B baru (Chiller, AHU, VRV, Pharma, F&B, KNIC, Artha Industrial Hill, Sentul, Modern Cikande, Kalkulator). Verifikasi kelengkapan headlines dan descriptions.
- [x] 2.3 Tambahkan bab panduan Offline Conversion Tracking (OCT) dan alur pengelolaan GCLID ke `docs/google-ads-playbook.md`. Verifikasi ketersediaan langkah praktis integrasi.
- [x] 2.4 Perbarui matriks Ad Assets (Sitelinks, Callouts, Structured Snippets) di `docs/google-ads-playbook.md` untuk mencakup kalkulator teknis dan kawasan industri baru. Verifikasi kesesuaian URL tujuan.
