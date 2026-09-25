## Why

Saat ini kampanye iklan Google Ads belum memiliki visibilitas atribusi langsung di aplikasi WhatsApp. Ketika calon klien mengklik iklan berbayar (misal keyword "service chiller cikarang" atau "vendor ac mm2100") dan mengirim pesan, tim sales/admin CV Rifqi AC tidak mengetahui dari kampanye atau kata kunci mana lead tersebut berasal. Selain itu, belum ada dokumen operasional resmi (*Playbook*) yang merinci struktur Single Theme Ad Groups (STAG), daftar ratusan kata kunci negatif (Negative Keywords) untuk mencegah pemborosan budget klik, dan rekomendasi Responsive Search Ads (RSA).

Menerapkan engine dynamic UTM-to-WhatsApp dan menyusun playbook Google Ads memungkinkan pemilik bisnis mengukur efektivitas budget iklan secara akurat (ROI tinggi) dan meminimalisir CPC (Cost Per Click) berkat halaman kawasan yang relevan.

## What Changes

- Memperbarui `assets/js/tracking.js` dengan **Dynamic UTM & Campaign Attribution Engine**:
  - Membaca parameter URL: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` (keyword), `utm_content`, dan `gclid`.
  - Menyimpan data atribusi ke `sessionStorage` (agar tetap terbawa saat pengunjung menjelajahi sub-halaman lain sebelum mengklik WhatsApp).
  - Menyisipkan baris referensi atribusi di bagian bawah template pesan WhatsApp secara otomatis.
- Membuat panduan operasional komprehensif `docs/google-ads-playbook.md`:
  - Arsitektur struktur kampanye B2B Search (STAG: MM2100, Jababeka, KIIC, EJIP, Chiller Overhaul, Diagnostic).
  - Daftar judul (headlines) dan deskripsi siap pakai dengan Quality Score 10/10.
  - Master list Negative Keywords (menangkal traffic lowongan kerja, kursus, skema kelistrikan DIY).
  - Panduan pemasangan konversi Google Ads (Conversion Action: WA Click & Call).

## Capabilities

### New Capabilities
- `utm-tracking`: Penangkapan parameter UTM dan pelampiran data kampanye ke pesan WhatsApp.
- `google-ads-playbook`: Standardisasi struktur kampanye, ad copy, dan proteksi kata kunci negatif.

### Modified Capabilities
- Tidak ada requirement sistem yang berubah secara destruktif.

## Impact

- File termodifikasi: `assets/js/tracking.js`.
- File baru: `docs/google-ads-playbook.md`.
- Kompatibel penuh dengan seluruh tombol WhatsApp dan format pesan yang sudah ada.
