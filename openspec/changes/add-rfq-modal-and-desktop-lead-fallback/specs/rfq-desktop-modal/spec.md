## Purpose

Menyediakan mekanisme penangkapan prospek (lead capture) berbasis modal interaktif di desktop untuk mengakomodasi staf kantor/pabrik yang mencari vendor HVAC tanpa akses langsung ke WhatsApp Web.

## ADDED Requirements

### Requirement: Desktop Smart RFQ Modal Activation
Sistem pelacakan dan CRO SHALL mendeteksi tipe perangkat pengguna saat tombol CTA konsultasi diklik. Jika pengguna menggunakan perangkat non-mobile (desktop/laptop), sistem SHALL menampilkan modal RFQ interaktif sebagai preferensi awal alih-alih langsung memicu redirect WhatsApp Web.

#### Scenario: Desktop procurement user clicks B2B CTA
- **WHEN** pengunjung desktop mengklik tombol dengan atribut `data-wa-type` atau handler `handleWhatsAppClick`
- **THEN** sistem menampilkan popup modal RFQ korporat di tengah layar dengan opsi isi formulir penawaran resmi atau opsi alternatif lanjut ke WhatsApp Web.

### Requirement: RFQ Form Submission & Lead Tracking
Sistem modal RFQ SHALL memvalidasi kelengkapan data (minimal Nama Perusahaan, No Telp/WhatsApp, dan Email Kantor) serta memicu fungsi `trackConversion()` ke Google Ads saat formulir berhasil disubmit.

#### Scenario: User submits desktop RFQ form
- **WHEN** pengunjung mengisi formulir RFQ dan menekan tombol kirim
- **THEN** sistem memicu pelacakan konversi Google Ads, menyusun format permintaan resmi, dan menyajikan konfirmasi sukses instan serta opsi penerusan ke email/WhatsApp tim marketing.
