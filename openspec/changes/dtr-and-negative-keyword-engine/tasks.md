## 1. Google Ads Negative Keyword Fortress Playbook

- [x] 1.1 Buat dokumen panduan `docs/google-ads-negative-keywords.md` yang memuat daftar copy-paste negative keyword B2B (anti-residential & non-industrial), B2C exclusions, dan irrelevant search filters. Verifikasi bahwa file terdokumentasi rapi dengan panduan penerapan di dashboard Google Ads.
- [x] 1.2 Susun tabel pencocokan Ad Group & URL Destination (landing page URL generator dengan parameter `?area=` dan `?service=`) untuk kampanye Search Ads industri Cikarang, Karawang, dan Bekasi.

## 2. Client-Side DTR Engine Implementation

- [x] 2.1 Tambahkan fungsi `initDynamicTextReplacement()` pada `assets/js/tracking.js` yang membaca query parameter `area` dan `service`, mencocokkannya dengan safe dictionary, dan memperbarui elemen ber-atribut `data-dtr-headline` dan `data-dtr-badge`. Verifikasi tidak ada error saat parameter kosong.
- [x] 2.2 Sinkronkan deteksi parameter DTR dengan payload draft WhatsApp di `assets/js/tracking.js` agar pesan otomatis menyesuaikan area/layanan yang diklik pengunjung. Verifikasi link WhatsApp menghasilkan teks yang sesuai.
- [x] 2.3 Tambahkan data-attribute `data-dtr-headline` dan `data-dtr-badge` pada elemen hero di `index.html` dan pastikan fallback server-side rendering tetap utuh jika skrip tidak dieksekusi.

## 3. Verifikasi & Testing

- [x] 3.1 Uji URL dengan query parameters di browser (misal: `index.html?area=MM2100&service=Chiller`) dan verifikasi bahwa teks headline hero berubah tanpa layout shift serta tombol WhatsApp mengarahkan ke draft pesan yang tepat.
- [x] 3.2 Uji URL tanpa parameter (default) untuk memastikan tampilan statis dan skor performa tetap 100% normal.
