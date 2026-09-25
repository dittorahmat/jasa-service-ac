## Why

Mayoritas pengambil keputusan B2B industri (Procurement, General Affairs, Facility Engineer) melakukan pencarian vendor HVAC melalui komputer desktop/laptop kantor saat jam kerja pabrik. Ketika mereka mengklik tombol CTA konsultasi, membuka tautan WhatsApp Web di PC kantor sering kali terhambat karena jaringan IT pabrik yang memblokir WA Web atau ketiadaan aplikasi WA di PC tersebut. Hal ini menyebabkan lonjakan bounce rate dan kebocoran biaya klik Google Ads (ad waste).

Dengan menghadirkan modal interaktif cerdas (RFQ Modal & Desktop Fallback), pengunjung desktop diberikan dua jalur konversi yang mulus: (1) lanjut ke WhatsApp Web, atau (2) mengisi formulir permintaan surat penawaran resmi/jadwal survei (Nama PT, Email Kantor, No Telp PIC) tanpa meninggalkan halaman.

## What Changes

- **Pembaruan Core Engine Tracking & CRO (`assets/js/tracking.js`)**:
  - Deteksi perangkat (Desktop vs Mobile). Pada mobile, CTA tetap langsung membuka aplikasi WhatsApp seperti biasa.
  - Pada desktop, klik CTA memicu munculnya modal RFQ yang elegan, anti-slop, dan profesional.
  - Formulir RFQ instan: input Nama Perusahaan, Lokasi Kawasan Industri, Email Kantor, No HP/Telepon, serta Deskripsi Kebutuhan.
  - Tombol aksi ganda: "Kirim Permintaan Penawaran Resmi" (menyimpan lead, memicu event konversi Google Ads, dan menyajikan opsi kirim email/WA) dan opsi langsung "Buka WhatsApp Web".
- **Gaya Komponen Modal (Tailwind CSS)**:
  - Menggunakan palet korporat B2B resmi (`#0b1b33` Navy, `#1070e5` Blue, border bersih, backdrop blur).
  - Aksesibilitas keyboard (tombol Escape untuk menutup, fokus trap, dan label input eksplisit).

## Capabilities

### New Capabilities
- `rfq-desktop-modal`: Komponen modal interaktif penangkap lead desktop untuk mencegah drop-off WhatsApp Web pada pengunjung PC kantor pabrik.

### Modified Capabilities
- `ads-optimization`: Sinkronisasi event tracking konversi Google Ads saat formulir RFQ dikirim dari modal desktop.

## Impact

- Pembaruan berkas: `assets/js/tracking.js`.
- Injeksi DOM modal secara dinamis dan bersih oleh script sehingga otomatis aktif di seluruh halaman B2B tanpa merusak markup HTML yang ada.
- Tidak ada breaking changes pada alur mobile atau link telepon langsung.
