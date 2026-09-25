## Context

Proyek saat ini telah memiliki 4 klaster landing page kawasan (`hvac-mm2100.html`, `hvac-jababeka.html`, `hvac-kiic.html`, `hvac-ejip.html`) yang menggunakan Tailwind CSS terkompilasi, font *Plus Jakarta Sans* & *JetBrains Mono*, serta engine `tracking.js`. Desain baru harus mematuhi aturan ketat anti-slop pada `AGENTS.md` (no emojis, palette Corporate Navy `#0b1b33` & Industrial Gold `#e6a100`, tactile feedback, dan mobile sticky bar yang tidak overlap).

## Goals / Non-Goals

**Goals:**
- Mengembangkan 3 landing page klaster kawasan industri baru: `hvac-suryacipta.html`, `hvac-deltasilicon.html`, dan `hvac-giic-deltamas.html` dengan spesifikasi konten unik sesuai profil industri tenant.
- Mengintegrasikan preset tracking baru pada `tracking.js` (`b2bSuryacipta`, `b2bDeltaSilicon`, `b2bGIIC`) tanpa merusak tracking UTM dan fallback conversion yang sudah ada.
- Menghubungkan arsitektur navigasi interlink (silo) antara halaman utama, regional agregator, dan klaster baru.
- Memperbarui `sitemap.xml` dengan URL baru.

**Non-Goals:**
- Mengubah desain form kalkulator BTU/PK (akan ditangani di perubahan terpisah).
- Mengubah arsitektur core tracking Google Tag Manager / GA4 selain penambahan key preset WhatsApp.

## Decisions

1. **Struktur Komponen Halaman Klaster**:
   - Mempertahankan layout modular berkonversi tinggi:
     - Hero Section dengan Eyebrow Badge spesifik kawasan + Quick Trust Badges (PPN, K3, Fast Response).
     - Cluster Pain Points & Operational Challenges (misal: CPOB pada Delta Silicon, CSMS pada Suryacipta, High Density Battery/Data Center pada GIIC).
     - Service Scope Table / Bento Grid (Chiller, AHU, VRV, PAC).
     - Location & Emergency Access Map Card (Jarak tempuh dari pintu tol & koordinat).
     - Interactive FAQ Accordions (dengan Schema FAQPage).
     - Mobile Floating WhatsApp Bar dengan safe bottom padding.
   - *Alternatif dipertimbangkan:* Membuat 1 halaman gabungan untuk semua kawasan baru. *Ditolak* karena Google Ads Quality Score dan SEO lokal membutuhkan relevansi halaman spesifik per entitas kawasan.

2. **JSON-LD Schema Integration**:
   - Menggunakan entitas `@type: "HVACBusiness"` dengan koordinat GeoCoordinates aktual pintu gerbang kawasan:
     - Suryacipta: Karawang Timur KM 54 (`-6.3768, 107.3489`)
     - Delta Silicon: Lippo Cikarang (`-6.3385, 107.1352`)
     - GIIC Deltamas: Cikarang Pusat (`-6.3687, 107.1785`)

3. **Tracking Engine Key Addition**:
   - Menambahkan key `b2bSuryacipta`, `b2bDeltaSilicon`, dan `b2bGIIC` pada objek `CONFIG.messages` di `assets/js/tracking.js`.

## Risks / Trade-offs

- **[Duplikasi Konten Antar Klaster]** → *Mitigasi:* Setiap halaman memiliki *technical hook* yang berbeda tajam: Suryacipta fokus pada audit K3 CSMS otomotif & chiller berat; Delta Silicon fokus pada ISO 14644 cleanroom, CPOB BPOM & filtrasi HEPA; GIIC Deltamas fokus pada PAC data center & fasilitas manufaktur baterai EV.
- **[Pertambahan Ukuran Sitemap & Indexation Delay]** → *Mitigasi:* Pastikan URL menggunakan struktur canonical absolut dan di-link langsung dari homepage dan halaman agregator kawasan.
