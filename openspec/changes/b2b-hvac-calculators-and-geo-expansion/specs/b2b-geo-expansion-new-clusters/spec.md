## Purpose

Menyediakan halaman pendaratan (landing page) berstandar agensi profesional untuk 4 klaster kawasan industri strategis (KNIC Karawang, Artha Industrial Hill, Sentul Industrial Estate, dan Modern Cikande Serang) guna menangkap prospek kontrak HVAC, chiller, dan cleanroom.

## ADDED Requirements

### Requirement: Hyper-Local Industrial Cluster Landing Pages
Sistem SHALL menyediakan halaman pendaratan terdedikasi untuk masing-masing kawasan: KNIC Karawang (`hvac-knic-karawang.html`), Artha Industrial Hill (`hvac-artha-industrial-hill.html`), Sentul Bogor (`hvac-sentul-bogor.html`), dan Modern Cikande Serang (`hvac-modern-cikande.html`) dengan copywriting kontekstual sesuai profil industri setempat.

#### Scenario: Procurement user visits KNIC landing page
- **WHEN** calon klien mengakses `hvac-knic-karawang.html`
- **THEN** sistem menampilkan layout berstandar `design-taste-frontend` dengan penekanan pada spesialisasi pabrik EV battery, high-tech manufacturing, kesiapan e-Faktur PPN, standar K3/CSMS, dan akses cepat gerbang tol Karawang Barat.

#### Scenario: Facility manager visits Modern Cikande landing page
- **WHEN** calon klien mengakses `hvac-modern-cikande.html`
- **THEN** sistem menampilkan penekanan pada penanganan sistem pendingin industri berat, pabrik kimia, baja, serta pengolahan makanan dengan komitmen respon tim teknisi siaga koridor tol Jakarta-Merak.

### Requirement: Cluster-Specific Conversion Action and Tracking
Setiap halaman klaster baru SHALL terintegrasi dengan mesin pelacakan konversi WhatsApp dan Desktop RFQ Modal dengan parameter kawasan yang teratribusi otomatis.

#### Scenario: User clicks consultation CTA on new cluster page
- **WHEN** pengguna menekan tombol WhatsApp atau submit RFQ pada halaman klaster baru
- **THEN** payload pesan dan trigger konversi Google Ads membawa identitas nama kawasan yang bersangkutan untuk memudahkan tim sales menindaklanjuti kebutuhan penawaran resmi.
