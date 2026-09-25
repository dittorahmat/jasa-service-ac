## Purpose

Menyediakan standar dokumentasi operasional periklanan Google Ads (Playbook) mencakup struktur Single Theme Ad Groups (STAG), copy iklan berkonversi tinggi, daftar kata kunci negatif, dan panduan pelacakan konversi untuk CV Rifqi AC.

## ADDED Requirements

### Requirement: Industrial Google Ads Campaign Architecture Document
Repositori SHALL menyediakan berkas panduan operasional periklanan Google Ads (`docs/google-ads-playbook.md`) yang memetakan grup iklan (Ad Groups) secara presisi ke halaman landing page kawasan dan diagnostik yang relevan.

#### Scenario: Marketer or owner configures Google Ads account
- **WHEN** pengelola kampanye memeriksa `docs/google-ads-playbook.md`
- **THEN** ditemukan struktur STAG lengkap untuk Kawasan MM2100, Jababeka, KIIC, EJIP, Chiller Industri, dan Diagnostic Error Code, lengkap dengan tautan final URL yang tepat.

### Requirement: Master Negative Keyword Protection List
Panduan kampanye SHALL menyertakan daftar kurasi kata kunci negatif (Negative Keywords) komprehensif dalam format teks yang siap diimpor ke Google Ads Shared Library untuk mencegah pemborosan budget klik non-komersial.

#### Scenario: Campaign administrator imports negative keywords
- **WHEN** administrator menyalin daftar kata kunci negatif dari playbook
- **THEN** tersedia kategori negatif untuk pencarian karir/loker (lowongan kerja, gaji teknisi), materi edukasi/skema DIY (skema kelistrikan, tutorial youtube, cara servis sendiri), dan kompetitor residensial yang tidak relevan.
