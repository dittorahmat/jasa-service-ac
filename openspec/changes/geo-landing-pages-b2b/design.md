## Context

Situs menggunakan HTML statis dengan styling Tailwind CSS (dikompilasi ke `assets/css/style.css`), didukung pelacakan Google Ads & WhatsApp link engine di `assets/js/tracking.js`. Desain berpedoman ketat pada panduan `AGENTS.md` (anti-slop, kontras WCAG AA, palet resmi Corporate Navy & Gold, tanpa emoji kasual, layout responsif mobile dengan bottom bar).

## Goals / Non-Goals

**Goals:**
- Membuat 4 landing page terpisah (`hvac-mm2100.html`, `hvac-jababeka.html`, `hvac-kiic.html`, `hvac-ejip.html`) dengan copywriting dan penekanan industri kontekstual:
  - MM2100: Pabrik komponen otomotif, logistik, toleransi downtime ketat.
  - Jababeka: Cleanroom ISO 14644, sistem HEPA, F&B, multi-zona Jababeka I-VI.
  - KIIC: Vendor compliance standar PMA Jepang, Chiller berkapasitas besar, e-Faktur PPN.
  - EJIP: Fasilitas presisi tinggi, kontrol kelembapan, AC VRV/VRF gedung manufaktur.
- Masing-masing halaman memiliki Schema `HVACBusiness` JSON-LD dengan koordinat lokal dan `areaServed` spesifik.
- Memperluas pesan `tracking.js` dengan opsi pesan WA per kawasan (`b2bMM2100`, `b2bJababeka`, `b2bKIIC`, `b2bEJIP`).
- Menyediakan internal link bidirectional antara `index.html` dan keempat halaman kawasan.
- Memperbarui `sitemap.xml`.

**Non-Goals:**
- Tidak mengubah layout atau konten consumer B2C (`b2c.html`).
- Tidak membuat backend dinamis atau CMS (tetap full static HTML untuk performa maksimal dan instant load time).

## Decisions

1. **Static HTML vs Template Engine**:
   - *Pilihan*: Mengembangkan halaman statis mandiri (`hvac-mm2100.html`, dll.) dengan markup yang dioptimalkan per kawasan.
   - *Alasan*: Cloudflare Workers static hosting tidak memerlukan overhead build template runtime; performa TTFB di mobile jaringan industri tetap instan (<500ms).
   - *Alternatif*: Static site generator (Astro/Eleventy) — dihindari saat ini agar tidak merombak toolchain proyek yang ramping.

2. **Diferensiasi Konten Anti-Doorway (SEO Quality)**:
   - *Pilihan*: Menulis headline, sub-headline, studi kasus/spesifikasi teknis, dan informasi gerbang tol/rute respon teknisi yang unik untuk tiap kawasan.
   - *Alasan*: Menghindari penalti duplicate content oleh Google Search Console.

3. **Message Configuration di `tracking.js`**:
   - *Pilihan*: Menambahkan tipe pesan baru pada objek `CONFIG.messages`:
     - `b2bMM2100`: Menyebutkan Kawasan MM2100 Cikarang Barat.
     - `b2bJababeka`: Menyebutkan Kawasan Jababeka Cikarang.
     - `b2bKIIC`: Menyebutkan Kawasan KIIC Karawang Barat.
     - `b2bEJIP`: Menyebutkan Kawasan EJIP Cikarang Selatan.
   - *Alasan*: Klien langsung merasa diprioritaskan saat chat WA terisi otomatis sesuai lokasi pabrik mereka.

## Risks / Trade-offs

- **[Risiko Duplikasi Desain / Slop]** → Gunakan pedoman `AGENTS.md` & `design-taste-frontend`: ikon SVG seragam, typography Plus Jakarta Sans + JetBrains Mono, dan palet warna Corporate.
- **[Risiko CSS Class Baru Tidak Ter-render]** → Jalankan `npm run build:css` setelah markup selesai dibuat untuk mengompilasi utility Tailwind baru ke `assets/css/style.css`.
- **[Maintenance Header/Footer]** → Pastikan nomor kontak dan struktur navigasi selaras dengan `index.html`.
