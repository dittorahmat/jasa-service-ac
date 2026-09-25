## Context

See [proposal.md](proposal.md) for background and motivation. Repositori ini telah memiliki infrastruktur pelacakan konversi di `assets/js/tracking.js` yang menangkap parameter UTM dan mengarahkan pesan WhatsApp per segmen industri. Desain ini menambahkan layer optimasi Google Ads: penyaringan kata kunci negatif (Negative Keyword Fortress) dan Dynamic Text Replacement (DTR) di sisi klien.

## Goals / Non-Goals

**Goals:**
- Menyediakan master playbook dan daftar negative keyword siap pakai untuk kampanye Google Ads CV Rifqi AC (B2B vs B2C).
- Mengimplementasikan client-side DTR engine ringan (<1.5KB) di `assets/js/tracking.js` yang bereaksi terhadap query parameter `area` dan `service`.
- Menjaga skor Core Web Vitals (CLS = 0) dan memelihara keramahan SEO (bot web crawler tetap membaca markup server/statis yang kaya kata kunci).
- Mensinkronisasi teks dinamis dengan pre-filled message WhatsApp CTA.

**Non-Goals:**
- Tidak menggunakan database backend atau server-side rendering (SSR) dinamis yang memerlukan infrastruktur server baru.
- Tidak mengubah layout kartu, palet warna resmi (`corporate` / `handy`), atau arsitektur CSS Tailwind yang ada.
- Tidak menggantikan halaman geo-cluster statis (`/kawasan/`) yang sudah berfungsi optimal untuk SEO organik.

## Decisions

### 1. Client-Side Text Swap via DOM Data-Attributes
- **Keputusan**: Menggunakan atribut deklaratif `data-dtr-headline` dan `data-dtr-badge` pada elemen target hero di `index.html`.
- **Rasional**: Memisahkan logika JavaScript dari struktur HTML. Jika skrip gagal atau browser memblokir JavaScript, pengunjung tetap melihat headline default yang sudah dioptimasi untuk industri.
- **Alternatif**: Memisahkan file HTML baru untuk setiap variasi kata kunci Google Ads — ditolak karena memicu redundansi file dan duplikasi konten di mata Google.

### 2. Sanitization & Safe Dictionary Mapping
- **Keputusan**: Menggunakan kamus/mapping whitelist untuk parameter `area` (misal: `MM2100`, `Jababeka`, `KIIC`, `EJIP`, `GIIC`) dan `service` (misal: `Chiller`, `AHU`, `VRV`, `Maintenance`).
- **Rasional**: Menghindari potensi Cross-Site Scripting (XSS) atau teks aneh dari URL sembarang yang tidak sesuai dengan persona brand CV Rifqi AC.

### 3. Struktur Negative Keyword Dual-Layer
- **Keputusan**: Membagi playbook menjadi 4 kategori negative keywords:
  1. *Residential Intent* (untuk memblokir trafik non-pabrik pada kampanye B2B).
  2. *Industrial/Commercial Intent* (untuk memblokir trafik pabrik besar pada kampanye B2C).
  3. *Zero-Commercial / Hobbyist* (misal: `-cara memperbaiki`, `-skema diagram`, `-lowongan kerja`, `-gaji teknisi`).
  4. *Irrelevant Appliances* (misal: `-kulkas`, `-mesin cuci`, `-dispenser`).

## Risks / Trade-offs

- **[Risk] Cumulative Layout Shift (CLS)** saat teks diganti via JavaScript  
  → *Mitigasi*: DTR dieksekusi sedini mungkin (`DOMContentLoaded`) dan panjang teks pengganti dirancang memiliki metrik vertikal/panjang karakter yang seimbang dengan teks default.
- **[Risk] Parameter URL Terpotong atau Di-strip oleh Privacy Extensions**  
  → *Mitigasi*: Engine memiliki graceful fallback ke teks default pabrik dan UTM session storage fallback.
