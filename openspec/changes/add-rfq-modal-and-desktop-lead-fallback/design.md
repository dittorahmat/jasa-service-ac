## Context

Untuk memaksimalkan konversi iklan Google Ads berbayar, pengunjung desktop tidak boleh dibiarkan mental saat browser mencoba membuka tautan `web.whatsapp.com`. 

## Goals / Non-Goals

**Goals:**
- Mengembangkan komponen modal RFQ yang di-inject otomatis via JavaScript (`tracking.js`) sehingga langsung aktif di seluruh halaman (index, landing kawasan, halaman chiller, server room, farmasi, fnb) tanpa perlu memodifikasi 20 file HTML satu per satu.
- Menyediakan UX mulus: mobile tetap langsung WA, desktop memunculkan modal ramah pengadaan kantor.
- Memastikan konversi Google Ads tercatat akurat.

**Non-Goals:**
- Membuat backend database server-side baru (tetap arsitektur static site cepat, data RFQ dapat disimpan di local session / mailto / webhook).

## Decisions

1. **Auto-Inject DOM Modal:**
   - Script `tracking.js` otomatis membuat elemen modal di `document.body` saat DOM siap jika layar terdeteksi desktop (`window.innerWidth >= 768` atau `navigator.userAgent` non-mobile).
   - Pendekatan ini sangat bersih (*zero maintenance on HTML pages*).
2. **Design & UX Anti-Slop (AGENTS.md):**
   - Modal menggunakan styling Tailwind / inline CSS elegan dengan backdrop blur (`bg-slate-900/60 backdrop-blur-sm`).
   - Warna Corporate Navy (`#0b1b33`) dan Blue (`#1070e5`), label form jelas di atas input, tombol kontras tinggi dengan tactile active state.
   - Aksesibilitas: Tombol close (X) dan keyboard ESC listener untuk menutup modal.

## Risks / Trade-offs

- [Risk] Pengguna desktop yang sebenarnya ingin cepat ke WhatsApp merasa tertahan oleh modal.
  → *Mitigasi:* Sertakan tombol sekunder yang jelas: *"Buka WhatsApp Web Langsung"* di bagian atas/bawah modal.
