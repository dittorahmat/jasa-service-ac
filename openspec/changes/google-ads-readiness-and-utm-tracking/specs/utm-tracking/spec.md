## Purpose

Menyediakan kapabilitas pelacakan atribusi sumber kampanye digital (Google Ads UTM parameters & GCLID) langsung ke pesan pra-isi WhatsApp agar admin dan pemilik usaha dapat mengidentifikasi efektivitas kata kunci iklan.

## ADDED Requirements

### Requirement: Session-Preserved UTM & Campaign Capture
Sistem pelacakan SHALL membaca parameter query string URL (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `gclid`), menyimpannya pada `sessionStorage` peramban saat landing awal, dan mempertahankannya selama sesi perambanan berlangsung.

#### Scenario: User visits site via Google Ads link
- **WHEN** pengunjung membuka halaman website dengan query `?utm_source=google&utm_campaign=b2b-mm2100&utm_term=service+ac+pabrik`
- **THEN** sistem menyimpan parameter tersebut ke dalam penyimpanan lokal peramban (`sessionStorage`) tanpa memengaruhi kecepatan loading halaman.

### Requirement: WhatsApp Attribution Suffix Attachment
Setiap link WhatsApp yang dihasilkan oleh sistem pelacakan SHALL secara otomatis menambahkan lampiran teks atribusi di baris terakhir pesan jika parameter kampanye terdeteksi.

#### Scenario: User clicks WhatsApp button after clicking ad
- **WHEN** pengunjung yang datang dari tautan kampanye mengklik tombol WhatsApp apa pun pada situs
- **THEN** pesan WhatsApp yang dibuka memuat teks kebutuhan asli ditambah baris metadata: `[Ref Iklan: google | b2b-mm2100 | KW: service ac pabrik]`.
