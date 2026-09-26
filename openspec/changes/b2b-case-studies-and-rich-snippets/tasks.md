## 1. Structured Data Rich Snippets (HowTo)

- [x] 1.1 Tambahkan skema JSON-LD bertipe `HowTo` pada `solusi-chiller-overheat-trip.html` dan verifikasi integritas sintaks JSON di dalam tag script
- [x] 1.2 Tambahkan skema JSON-LD bertipe `HowTo` pada `maintenance-ahu-cleanroom.html` dan verifikasi integritas sintaks JSON di dalam tag script

## 2. Field Engineering Case Studies UI

- [x] 2.1 Buat dan sisipkan komponen UI studi kasus rekayasa lapangan (Overhaul & Descaling Chiller Water-Cooled di MM2100 Cikarang) pada `service-chiller-industri.html` dan verifikasi tampilan visual serta tombol aksi RFQ
- [x] 2.2 Buat dan sisipkan komponen UI studi kasus pemulihan kamar bersih (Pemulihan Partikulat & Sertifikasi CPOB Farmasi di Jababeka) pada `maintenance-ahu-cleanroom.html` dan verifikasi tampilan visual serta tombol aksi RFQ

## 3. Build & Quality Verification

- [x] 3.1 Jalankan `npm run build:css` untuk mengompilasi seluruh utility class Tailwind CSS yang baru
- [x] 3.2 Lakukan verifikasi validasi OpenSpec (`openspec validate b2b-case-studies-and-rich-snippets --strict`) dan periksa tidak ada regresi layout pada viewport desktop maupun mobile
