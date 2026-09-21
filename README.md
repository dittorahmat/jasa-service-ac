# CV Rifqi AC — HVAC Contractor & Residential AC Service

Landing page performa tinggi & siap konversi iklan Google Ads untuk **CV Rifqi Berkah Teknik (CV Rifqi AC)**. Dirancang dengan pemisahan persona yang tegas antara segmentasi korporat (B2B) dan pelanggan perumahan (B2C).

---

## 🌐 Live URL & Demo

- **B2B Landing Page (Pabrik & Gedung)**: [https://jasa-service-ac.tech1solusi.workers.dev/](https://jasa-service-ac.tech1solusi.workers.dev/)
- **B2C Landing Page (Rumah & Residensial)**: [https://jasa-service-ac.tech1solusi.workers.dev/b2c.html](https://jasa-service-ac.tech1solusi.workers.dev/b2c.html)

---

## 🚀 Fitur Utama

- **Dual-Persona Architecture**:
  - `index.html`: Khusus buyer B2B (General Affair, Procurement, Engineering Plant Manager di MM2100, Jababeka, EJIP, KIIC, Suryacipta). Menonjolkan legalitas e-Faktur Pajak PPN 11%, sertifikasi K3/APD SNI, dan SLA respon darurat < 3 jam server room.
  - `b2c.html`: Khusus pelanggan rumah tangga (Bekasi, Depok, Karawang). Menonjolkan transparansi harga mulai Rp 65.000, tanpa uang muka (DP), garansi 30 hari, SOP kerja bersih, dan kejujuran freon.
- **Conversion Rate Optimization (CRO)**:
  - Sticky mobile bottom contact bar dengan target sentuh jempol ergonomis.
  - Micro-copy penenang psikologis transaksi pasca-servis.
  - Tagging `PALING POPULER` pada paket layanan unggulan.
  - Native accessible `<details>`/`<summary>` FAQ accordions.
- **SEO & Search Engine Rich Snippets**:
  - Schema.org JSON-LD terstruktur (`HVACBusiness`, `OpeningHoursSpecification`, `GeoCoordinates`, `OfferCatalog`, dan `FAQPage`) untuk meningkatkan CTR Google Search & Google Ads.
- **Conversion Tracking Built-in**:
  - Tracking otomatis interaksi WhatsApp & panggilan telepon dengan Google Tag (`gtag`) & Google Ads Conversion Event (`assets/js/tracking.js`).
- **Anti-Slop Design Standard**:
  - Mengikuti standar ketat skill `design-taste-frontend` (tanpa emoji generik, menggunakan SVG stroke presisi, palet warna brand terkalibrasi, WCAG AA contrast).

---

## 🛠️ Tech Stack & Tooling

- **Markup & Styling**: Semantic HTML5, Tailwind CSS v3 (JIT mode).
- **Deployment & Hosting**: Cloudflare Workers Static Assets (`wrangler`).
- **Standardisasi AI Agent**: [AGENTS.md](AGENTS.md) dan OpenSpec framework (`openspec/`).

---

## 💻 Panduan Pengembangan Lokal

### 1. Prasyarat
- Node.js (v18+)
- npm

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Kompilasi Tailwind CSS
Untuk mengompilasi utility class Tailwind yang baru ke `assets/css/style.css`:
```bash
npm run build:css
```

### 4. Menjalankan Server Lokal
Anda dapat menggunakan live server lokal seperti:
```bash
npx serve .
# atau
python -m http.server 8080
```
Buka peramban di `http://localhost:8080` untuk B2B dan `http://localhost:8080/b2c.html` untuk B2C.

### 5. Deploy ke Cloudflare Workers
```bash
npm run deploy
```

---

## 📁 Struktur Direktori

```text
├── index.html                   # Landing page B2B (Pabrik & Kawasan Industri)
├── b2c.html                     # Landing page B2C (Rumah Tangga & Residensial)
├── assets/
│   ├── css/
│   │   └── style.css            # Stylesheet utama hasil kompilasi Tailwind
│   └── js/
│       └── tracking.js          # Skrip pelacak konversi Google Ads & WA click
├── docs/
│   └── adwords-playbook.md      # Strategi & Playbook kampanye Google Ads
├── openspec/                    # Spesifikasi proposal & perubahan berkala
├── AGENTS.md                    # Panduan standar desain & aturan kerja AI Agent
├── tailwind.config.js           # Konfigurasi token warna, font, & styling
├── wrangler.toml                # Konfigurasi deployment Cloudflare Workers
└── package.json                 # Dependency manifest & script build
```

---

## 📄 Lisensi & Hak Cipta

© 2026 CV Rifqi Berkah Teknik (CV Rifqi AC). Seluruh hak cipta dilindungi undang-undang.
