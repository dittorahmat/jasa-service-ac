# TEMPLATE GOOGLE SHEETS PELACAK PROSPEK & OFFLINE CONVERSION
## CV RIFQI AC — SISTEM DUA TAB (OPERASIONAL CS & GOOGLE ADS SYNC)

Dokumen ini adalah cetak biru (blueprint) struktur spreadsheet Google Sheets yang dirancang khusus untuk memfasilitasi alur kerja **Admin WhatsApp (100% manual tanpa pusing kode)** sekaligus menghasilkan data **Offline Conversion Import (OCI)** yang terstandarisasi untuk Google Ads.

---

## 1. Arsitektur Dua Tab (Two-Tab Pattern)

```
+-----------------------------------------------------------------------------------------+
|                  TAB 1: 'Leads_Masuk' (Halaman Kerja Admin WhatsApp)                    |
|  - Input nama PIC, PT, nomor WA, status deal, dan paste raw text/GCLID dari chat       |
+-----------------------------------------------------------------------------------------+
                                           |
                                           | (Formula Otomatis / Query)
                                           v
+-----------------------------------------------------------------------------------------+
|                 TAB 2: 'GoogleAds_Upload' (Mesin Sinkronisasi Google Ads)               |
|  - Berisi kolom resmi: Google Click ID, Conversion Name, Conversion Time, Value, dll   |
|  - Hanya memfilter baris yang valid (Survey Terjadwal / Deal SPK)                       |
|  - Dihubungkan langsung ke Google Ads via Scheduled Uploads (Tiap 24 Jam)               |
+-----------------------------------------------------------------------------------------+
```

---

## 2. Struktur Kolom Tab 1: `Leads_Masuk` (Input Admin)

Buat tab pertama bernama **`Leads_Masuk`**. Atur baris pertama sebagai Header:

| Kolom | Nama Header | Tipe Data / Format | Penjelasan untuk Admin CS |
|---|---|---|---|
| **A** | `Timestamp Input` | Date Time (`dd/mm/yyyy hh:mm`) | Waktu saat pesan pertama kali masuk ke WhatsApp. |
| **B** | `Nama PIC` | Teks | Nama penanya / engineering / purchasing. |
| **C** | `Nama Perusahaan` | Teks | Nama pabrik / PT / gedung kantor (kosongkan jika residensial). |
| **D** | `Nomor WhatsApp` | Teks | Nomor kontak klien (misal `0812xxxx`). |
| **E** | `Kawasan / Wilayah` | Dropdown | Pilihan: `MM2100`, `Jababeka`, `KIIC`, `EJIP`, `KNIC`, `Surya Cipta`, `Sentul`, `Bekasi Kota`, `Lainnya`. |
| **F** | `Layanan` | Dropdown | Pilihan: `Kontrak Chiller`, `Maintenance AHU`, `Service VRV`, `AC Split Ruko/Kantor`, `Perbaikan Darurat`. |
| **G** | `Raw Pesan WA / GCLID` | Teks | Salin baris referensi iklan dari chat WA (misal: `[Ref Iklan: ... | GCLID: EAIaIQob...]`) ATAU cukup nilai GCLID-nya saja. |
| **H** | `Status Prospek` | Dropdown Validasi | Pilihan: `1. Baru Masuk`, `2. Konsultasi / Survey Terjadwal`, `3. Negosiasi Penawaran`, `4. SPK / Deal Kontrak`, `5. Batal / Junk`. |
| **I** | `Nilai Transaksi (Rp)` | Angka / Currency IDR | Nominal riil SPK / Invoice (Isi Rp 0 jika belum deal atau masih tahap survey). |
| **J** | `Catatan Teknis` | Teks | Contoh: "Unit chiller 100 TR trip error high pressure". |

---

## 3. Formula Otomatis untuk Mengekstrak GCLID di Tab 1

Jika admin menyalin keseluruhan kalimat referensi chat WhatsApp (contoh: `[Ref Iklan: google | b2b-chiller | GCLID: EAIaIQobChMIr9Xy3_7x_QIVlZpmAh3_8wEWEAAYASAAEgK1ffD_BwE]`), Anda dapat menambahkan kolom bantu di **Kolom K** bernama `Clean_GCLID`:

```excel
=IF(G2="", "", IFERROR(REGEXEXTRACT(G2, "GCLID:\s*([A-Za-z0-9_-]+)"), G2))
```
*Penjelasan Formula:*
- Jika Kolom G mengandung `GCLID: XXXXX`, formula akan mengekstrak kode XXXXX secara bersih.
- Jika admin hanya menyalin kode GCLID langsung tanpa kata "GCLID:", formula otomatis mempertahankan kode tersebut.

---

## 4. Struktur Kolom Tab 2: `GoogleAds_Upload` (Feed Ekspor Otomatis)

Buat tab kedua bernama **`GoogleAds_Upload`**. Format header **WAJIB PERSIS** seperti ini:

```csv
Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency
```

### Penjelasan 5 Kolom Resmi:
1. **`Google Click ID`**: Kode GCLID unik dari klik iklan.
2. **`Conversion Name`**: Nama tindakan konversi yang telah didaftarkan di Google Ads (Pilihan: `B2B Survey Teknis Terjadwal` atau `Kontrak Maintenance B2B Deal`).
3. **`Conversion Time`**: Waktu konversi dengan format ISO `yyyy-MM-dd HH:mm:ss+07:00`.
4. **`Conversion Value`**: Nilai konversi (angka tanpa titik/koma/Rp).
5. **`Conversion Currency`**: Wajib diisi `IDR`.

### Formula Otomatis di Tab 2 (Baris A2):

Cukup tempelkan formula berikut pada sel **A2** di tab `GoogleAds_Upload`:

```excel
=QUERY(
  ARRAYFORMULA({
    Leads_Masuk!K2:K,
    IF(Leads_Masuk!H2:H="4. SPK / Deal Kontrak", "Kontrak Maintenance B2B Deal", 
       IF(Leads_Masuk!H2:H="2. Konsultasi / Survey Terjadwal", "B2B Survey Teknis Terjadwal", "")),
    TEXT(Leads_Masuk!A2:A, "yyyy-mm-dd hh:mm:ss") & "+07:00",
    IF(Leads_Masuk!H2:H="4. SPK / Deal Kontrak", IF(Leads_Masuk!I2:I>0, Leads_Masuk!I2:I, 10000000), 
       IF(Leads_Masuk!H2:H="2. Konsultasi / Survey Terjadwal", 500000, 0)),
    IF(Leads_Masuk!K2:K<>"", "IDR", "")
  }),
  "SELECT Col1, Col2, Col3, Col4, Col5 WHERE Col1 IS NOT NULL AND Col2 <> ''"
)
```

*Keajaiban Formula Ini:*
- Tab 2 otomatis terisi tanpa disentuh sama sekali oleh admin!
- Setiap kali admin mengubah status lead di Tab 1 menjadi `2. Konsultasi / Survey Terjadwal`, baris tersebut langsung masuk sebagai konversi tahap awal senilai Rp 500.000.
- Ketika status berubah menjadi `4. SPK / Deal Kontrak`, baris otomatis tercatat sebagai deal final dengan nilai kontrak riil yang diinput di Kolom I (misal Rp 45.000.000).

---

## 5. Cara Menghubungkan Google Sheets ke Google Ads (Sinkronisasi Otomatis Tiap 24 Jam)

Anda tidak perlu mengunduh CSV secara manual setiap hari. Manfaatkan fitur **Scheduled Uploads**:

1. Di Google Sheets, klik menu **File** &rarr; **Share** &rarr; **Publish to web** (Publikasikan ke web).
2. Pada bagian *Link*, pilih hanya tab: **`GoogleAds_Upload`**.
3. Pada format file, pilih **Comma-separated values (.csv)**.
4. Klik **Publish**, lalu salin link URL yang diberikan (contoh: `https://docs.google.com/spreadsheets/d/e/.../pub?gid=...&single=true&output=csv`).
5. Buka dashboard Google Ads:
   - Navigasi ke **Tools and settings** &rarr; **Conversions** &rarr; **Uploads**.
   - Klik tab **Schedules** (Jadwal).
   - Klik tombol **(+) Tambah Jadwal Baru**.
   - Source: Pilih **Google Sheets** atau **HTTPS** (masukkan URL CSV dari Google Sheets di atas).
   - Frequency: Pilih **Daily** (Harian), waktu jam **03:00 Pagi**.
   - Klik **Save & preview**.
6. **Selesai!** Mulai hari ini, setiap kesepakatan survey pabrik dan closing kontrak yang dicatat admin di WhatsApp secara otomatis terkirim ke Google Ads setiap malam. Algoritma Google akan belajar menemukan lebih banyak akun industri beromzet tinggi untuk bisnis Anda!
