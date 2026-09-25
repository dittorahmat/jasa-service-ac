# Google Ads Optimization: Negative Keyword Fortress & Ad Group Matrix
**CV Rifqi AC (CV Rifqi Berkah Teknik)**  
Panduan Operasional Penghematan Budget & Peningkatan Quality Score Google Ads.

---

## 1. Negative Keyword Fortress (Anti-Budget Bocor)

Target kampanye B2B industri memiliki Cost-per-Click (CPC) yang lebih tinggi dibandingkan pencarian residensial. Tanpa negative keywords yang ketat, anggaran iklan akan terbuang untuk klik dari pemilik rumah tangga, anak kos, atau pencari tutorial DIY yang nilai transaksinya tidak sesuai skala B2B.

### A. Master Negative Keyword List: B2B Industrial Campaign
> **Cara pakai**: Salin daftar di bawah ini, masuk ke Google Ads Dashboard -> **Tools and Settings** -> **Negative Keyword Lists** -> Buat daftar baru dengan nama `Exclusion - B2B Non-Industrial` -> Terapkan ke seluruh Campaign B2B (MM2100, Jababeka, KIIC, Chiller, AHU, VRV).

```text
# Residential & Retail Queries
rumah
perumahan
kontrakan
kost
kos-kosan
kosan
apartemen
kamar
pribadi
rumahan

# Small Appliance & Low-Capacity Units
1/2 pk
0.5 pk
1/2pk
3/4 pk
0.75 pk
3/4pk
1 pk
1pk
ac portable
ac standing kecil
kulkas
lemari es
mesin cuci
dispenser
kipas angin

# Low Intent, DIY & Educational Searches
cara
cara memperbaiki
cara cuci
cara pasang
tutorial
youtube
skema
diagram
freon habis ciri-cirinya
kenapa ac tidak dingin
kenapa ac bocor air
penyebab ac mati
belajar
kursus
training

# Job Seekers & Employment Queries
lowongan
loker
lowongan kerja
gaji
karir
career
magang
internship
pkl

# Secondhand / Rongsok / Jual Beli Bekas
bekas
second
rongsok
tukang rongsok
jual beli
olx
tokopedia
shopee
harga bekas
```

---

### B. Master Negative Keyword List: B2C Residential Campaign
> **Cara pakai**: Terapkan ke Campaign B2C (Service AC Rumah Bekasi, Cuci AC Grand Wisata, Summarecon, Harapan Indah) untuk mencegah klik dari permohonan tender atau proyek pabrik besar di luar kapasitas armada residensial.

```text
# Heavy Industrial & Commercial Queries
chiller
ahu
air handling unit
cooling tower
cleanroom
cpob
hepa filter
boiler
duct smoke
vrv daikin industri
vrf mitsubishi heavy
tender
spk
procurement
b2b
pt
pabrik
kawasan industri
kiic
mm2100
ejip
giic
suryacipta
csms
k3 migas
iso 14001
```

---

## 2. Ad Group Matrix & URL Destination (DTR Enabled)

Gunakan struktur berikut untuk membuat Search Ads dengan *Quality Score* 9-10/10. Landing page URL memanfaatkan parameter Dynamic Text Replacement (DTR) sehingga headline dan pesan WhatsApp otomatis sinkron.

| Ad Group (B2B) | Keyword Intent (Phrase Match) | Headline 1 (Ad Copy) | Destination URL (DTR Parameter) |
| :--- | :--- | :--- | :--- |
| **B2B - MM2100 Chiller** | `"service chiller mm2100"`<br>`"maintenance chiller mm2100"` | Vendor Chiller MM2100 - CV Rifqi AC | `https://jasa-service-ac.tech1solusi.workers.dev/?area=MM2100&service=Chiller` |
| **B2B - MM2100 General** | `"service ac mm2100"`<br>`"kontrak hvac mm2100"` | Kontraktor HVAC MM2100 - Resmi PPN | `https://jasa-service-ac.tech1solusi.workers.dev/?area=MM2100&service=Maintenance` |
| **B2B - Jababeka AHU** | `"service ahu jababeka"`<br>`"cleanroom ahu cikarang"` | Spesialis AHU Cleanroom Jababeka | `https://jasa-service-ac.tech1solusi.workers.dev/?area=Jababeka&service=AHU` |
| **B2B - Jababeka General** | `"vendor hvac jababeka"`<br>`"service ac pabrik jababeka"` | Vendor HVAC Pabrik Jababeka I-VI | `https://jasa-service-ac.tech1solusi.workers.dev/?area=Jababeka&service=Maintenance` |
| **B2B - KIIC Karawang** | `"service ac kiic"`<br>`"vendor hvac kiic karawang"` | Kontraktor HVAC Kawasan KIIC | `https://jasa-service-ac.tech1solusi.workers.dev/?area=KIIC&service=Maintenance` |
| **B2B - KIIC Chiller** | `"service chiller karawang"`<br>`"overhaul chiller kiic"` | Overhaul & Service Chiller KIIC | `https://jasa-service-ac.tech1solusi.workers.dev/?area=KIIC&service=Chiller` |
| **B2B - EJIP Cikarang** | `"service ac ejip"`<br>`"maintenance vrv ejip"` | Maintenance VRV & AC Pabrik EJIP | `https://jasa-service-ac.tech1solusi.workers.dev/?area=EJIP&service=VRV` |
| **B2B - GIIC Deltamas** | `"service ac giic"`<br>`"kontrak hvac deltamas"` | Vendor HVAC GIIC Deltamas | `https://jasa-service-ac.tech1solusi.workers.dev/?area=GIIC&service=Maintenance` |
| **B2B - Delta Silicon** | `"service ac delta silicon"`<br>`"maintenance ahu delta silicon"` | HVAC & AHU Cleanroom Delta Silicon | `https://jasa-service-ac.tech1solusi.workers.dev/?area=DeltaSilicon&service=AHU` |

---

## 3. Best Practices Setup Google Ads Search
1. **Match Type Strategy**:
   - Selalu gunakan **Phrase Match** (`"kata kunci"`) atau **Exact Match** (`[kata kunci]`).
   - Hindari *Broad Match* murni tanpa negative keyword fortress karena memicu kebocoran budget hingga 60%.
2. **Sitelink Extension Checklist**:
   - Link 1: *Legalitas Perusahaan & e-Faktur PPN* -> anchor `#keunggulan`
   - Link 2: *Layanan Emergency 24/7 Pabrik* -> anchor `#kontak`
   - Link 3: *Spesialis Chiller & AHU Cleanroom* -> anchor `#layanan`
   - Link 4: *Katalog Sertifikasi K3 & CSMS* -> anchor `#legalitas`
3. **Callout Extension**:
   - "Teknisi Bersertifikat BNSP / K3"
   - "Invoice Resmi & Faktur Pajak PPN"
   - "Respon Cepat Darurat 24 Jam"
   - "Free Survey Kawasan Industri"
