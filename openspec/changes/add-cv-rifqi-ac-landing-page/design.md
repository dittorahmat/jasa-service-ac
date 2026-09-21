## Context

Lihat `proposal.md` untuk motivasi dan latar belakang kebutuhan CV Rifqi AC. Proyek ini membutuhkan struktur file web statis berkecepatan tinggi, bebas dependensi runtime server yang rumit, serta dokumen operasional kampanye Google Ads.

## Goals / Non-Goals

**Goals:**
- Menghasilkan dua berkas landing page mandiri: `index.html` (B2B Komersil/Pabrik) dan `b2c.html` (B2C Residensial) dengan performa PageSpeed maksimal (>90 mobile) dan waktu muat di bawah 1 detik.
- Menggunakan Tailwind CSS (via CDN modern dan efisien) dengan styling bersih, palet warna industri terpercaya (Navy Blue & Safety Yellow / Cool Cyan), serta tipografi profesional sans-serif.
- Menyediakan handler pelacakan konversi JavaScript (`conversion.js`) yang siap dipasangi ID Google Tag (`AW-XXXXXXXXX`) dan secara otomatis melacak klik WhatsApp / Telepon.
- Menghasilkan dokumen playbook Google Ads (`docs/adwords-playbook.md`) yang siap dipakai langsung oleh pengiklan di dashboard Google Ads.

**Non-Goals:**
- Membangun backend sistem booking atau database transaksi (semua lead langsung diarahkan ke WhatsApp resmi CV Rifqi AC).
- Mengintegrasikan payment gateway online (pembayaran B2B berbasis termin/invoice/BAST, B2C via transfer bank atau tunai di tempat).

## Decisions

### 1. Arsitektur Dual Single-Page HTML Statis (B2B di `index.html`, B2C di `b2c.html`)
- **Rationale**: Klien Google Ads B2B (Manajer Pabrik/GA) mencari kredibilitas legalitas CV dan kontrak, sedangkan klien B2C mencari kecepatan dan harga cuci/perbaikan darurat. Menyatukan keduanya menurunkan Quality Score dan Conversion Rate.
- **Alternatif yang ditolak**: Single page multi-tab dengan switcher toggle di hero. Alasan penolakan: Membingungkan pengguna mobile dan menurunkan relevansi landing page terhadap kata kunci spesifik ad group.

### 2. Stack Teknologi: Zero-build Pure HTML5 + Modern Tailwind CSS
- **Rationale**: Memungkinkan landing page di-deploy langsung ke web server mana pun (Apache/Nginx/cPanel/Vercel/GitHub Pages) tanpa langkah kompilasi node_modules yang membebani pemilik usaha. Kecepatan muat instan meningkatkan konversi dan menurunkan biaya per klik iklan.
- **Alternatif yang ditolak**: Next.js / Nuxt / WordPress Elementor. Alasan penolakan: Terlalu berat, rentan lambat (bloat), dan mempersulit deployment instan.

### 3. Skrip Pelacakan Konversi Modular (`assets/js/tracking.js`)
- **Rationale**: Mengisolasi fungsi pelacak Google Ads dan pengiriman dataLayer sehingga nomor WhatsApp dan Tag ID dapat diubah di satu file konfigurasi tanpa mengedit seluruh tag HTML.
- **Alternatif yang ditolak**: Hardcoding event `onclick` mentah di setiap tag `<a>`.

### 4. Bidding Roadmap Google Ads: Maximize Clicks -> Maximize Conversions (Target CPA)
- **Rationale**: AI Google Ads membutuhkan minimal 15-30 sinyal konversi awal untuk memahami profil audiens yang paling mungkin menghubungi WhatsApp. Memulai langsung dengan Target CPA pada akun baru berisiko iklan tidak tayang (underdelivery).

## Risks / Trade-offs

- **[Risiko: Ketiadaan foto real teknisi saat awal peluncuran]** $\rightarrow$ *Mitigasi*: Gunakan SVG badges kredibilitas, ilustrasi blueprint teknis, layout spesifikasi unit berstandar industri, dan sediakan slot gambar terisolasi yang dapat diganti dengan 1 baris kode saat foto tim asli sudah siap.
- **[Risiko: Kebocoran budget Google Ads pada kata kunci umum/edukasi]** $\rightarrow$ *Mitigasi*: Penggunaan phrase match dan exact match ketat, ditambah daftar negative keyword komprehensif (loker, cara, tutorial, skripsi, dll).
