## Purpose

Menyediakan kapabilitas penangkapan dan pelacakan Google Click ID (GCLID, WBRAID, GBRAID) pada interaksi prospek (WhatsApp & Formulir RFQ), serta menyediakan standarisasi template dan alur kerja Offline Conversion Tracking (OCT) untuk sinkronisasi konversi transaksi bernilai tinggi ke Google Ads.

## ADDED Requirements

### Requirement: Click Attribution and Privacy IDs Capture
Sistem pelacakan frontend SHALL secara otomatis mengekstrak parameter atribusi iklan Google (`gclid`, `wbraid`, `gbraid`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`) dari URL pendaratan dan menyimpannya dalam media penyimpanan browser yang persisten melintasi navigasi internal.

#### Scenario: User arrives from Google Ads with GCLID
- **WHEN** pengunjung membuka landing page dengan parameter URL `?gclid=EAIaIQobChMI12345&utm_campaign=b2b-mm2100`
- **THEN** sistem mengekstrak nilai `gclid` dan parameter UTM, lalu menyimpannya di `sessionStorage` serta cookie fallback dengan masa berlaku 30 hari.

#### Scenario: User arrives from iOS Safari with WBRAID/GBRAID
- **WHEN** pengunjung membuka landing page dengan parameter privasi iOS `?wbraid=Wbr12345` atau `?gbraid=Gbr12345`
- **THEN** sistem mengekstrak nilai `wbraid` atau `gbraid` dan menyimpannya berdampingan dengan data kampanye untuk keperluan pelacakan.

### Requirement: WhatsApp Attribution Suffix Formatting
Sistem generator tautan WhatsApp SHALL menyertakan indikator sumber iklan, kampanye, kata kunci pencarian, serta identifier klik (`GCLID` atau `BRAID`) pada pesan teks pembuka secara ringkas agar tim penerima lead dapat memverifikasi asal kampanye berbayar.

#### Scenario: WhatsApp link clicked with active GCLID attribution
- **WHEN** pengunjung yang memiliki riwayat klik Google Ads menekan tombol WhatsApp
- **THEN** tautan WhatsApp yang terbentuk memiliki teks pembuka yang diakhiri dengan format identifikasi iklan yang mencakup GCLID/BRAID (contoh: `[Ref Iklan: google | b2b-mm2100 | KW: service chiller | GCLID: EAIa...8kQ]`).

### Requirement: RFQ Lead Form Click Attribution
Formulir permintaan penawaran resmi (RFQ Desktop Modal) SHALL menyertakan data Click ID dan kampanye dalam pengiriman data agar prospek terdokumentasi lengkap dengan ID klik Google Ads.

#### Scenario: User submits Desktop RFQ form with tracked session
- **WHEN** pengunjung mengirimkan formulir RFQ desktop
- **THEN** sistem menyertakan parameter `gclid`/`wbraid`/`gbraid` dan nama kampanye ke dalam rincian pesan WhatsApp penawaran resmi dan event konversi.

### Requirement: Offline Conversion Tracking Protocol & Template
Repositori SHALL menyediakan format berkas impor CSV resmi dan panduan SOP bagi tim operasional CV Rifqi AC untuk mengunggah konversi offline (deal kontrak SPK bernilai tinggi) kembali ke Google Ads.

#### Scenario: Administrator prepares offline conversion CSV
- **WHEN** tim sales closing kontrak tahunan bernilai puluhan juta rupiah dari prospek yang memiliki GCLID
- **THEN** tersedia template `docs/template-offline-conversions.csv` berformat kolom Google Ads (`Google Click ID`, `Conversion Name`, `Conversion Time`, `Conversion Value`, `Conversion Currency`) serta panduan unggah di `docs/google-ads-playbook.md`.
