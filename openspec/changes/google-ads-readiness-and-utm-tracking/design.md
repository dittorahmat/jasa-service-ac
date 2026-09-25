## Context

Landing page dan sub-halaman geo-kawasan (`hvac-mm2100`, `hvac-jababeka`, `hvac-kiic`, `hvac-ejip`) serta rujukan diagnostik (`panduan-kode-error-ac-industri`) sudah aktif dengan tracking link standar. Dibutuhkan jembatan yang menghubungkan klik Google Ads dengan WhatsApp chat nyata tanpa mengorbankan privasi atau membebani performa JavaScript.

## Goals / Non-Goals

**Goals:**
- Mengembangkan modul UTM & GCLID parser di `assets/js/tracking.js` menggunakan standar Web API vanilla (`URLSearchParams` dan `sessionStorage`).
- Menggabungkan data kampanye ke dalam akhir string pesan WhatsApp secara elegan: `\n\n[Ref Iklan: {source} | {campaign} | KW: {term}]`.
- Menulis dokumen `docs/google-ads-playbook.md` lengkap dengan copy RSA (Responsive Search Ads), ekstensi sitelink, dan negative keywords.

**Non-Goals:**
- Tidak memerlukan database backend eksternal untuk menyimpan log klik; semua atribusi disampaikan langsung kepada penerima chat WhatsApp.

## Decisions

1. **Session Storage vs Cookie**:
   - *Pilihan*: Menggunakan `sessionStorage` untuk menyimpan objek UTM.
   - *Alasan*: Otomatis terhapus saat tab browser ditutup, tidak menambah ukuran cookie HTTP header, dan bekerja sempurna saat pengguna mengklik beberapa halaman internal sebelum memutuskan untuk chat WA.

2. **Format Lampiran Pesan WA**:
   - *Pilihan*: Diletakkan di baris terbawah dengan tanda kurung siku `[Ref Iklan: ...]`.
   - *Alasan*: Tidak mengganggu isi pesan pokok calon klien, namun sangat jelas terbaca oleh admin WA.
