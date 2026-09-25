/**
 * CV RIFQI AC - Conversion Tracking & WhatsApp Direct Link Engine
 * Didesain khusus untuk Google Ads Conversion Tracking (Lead Generation)
 */

const CONFIG = {
  // Ganti dengan nomor WhatsApp resmi CV Rifqi AC (format internasional tanpa tanda +, misal: 6281234567890)
  whatsappNumber: "6281385808284",
  
  // Ganti dengan ID Google Ads Anda (misal: AW-123456789/AbCdEfGhIjK)
  googleAdsId: "AW-CONVERSION_ID",
  googleAdsSendTo: "AW-CONVERSION_ID/CONVERSION_LABEL",
  
  // Pesan default per segmen
  messages: {
    b2bSurvey: "Halo CV Rifqi AC, saya ingin konsultasi pengadaan & jadwal survey service AC untuk kantor/pabrik:\n- Nama Perusahaan:\n- Lokasi (Bekasi/Karawang/lainnya):\n- Estimasi Jumlah Unit & Jenis AC:\nMohon info ketersediaan tim survey. Terima kasih.",
    b2bEmergency: "Halo CV Rifqi AC, ada kendala urgent pada AC kantor/fasilitas kami:\n- Nama Perusahaan:\n- Lokasi:\n- Kendala (Mati total / Bocor / Error code):\nMohon penanganan teknisi segera.",
    b2cCuci: "Halo CV Rifqi AC, saya mau order jasa cuci AC rumah/ruko:\n- Lokasi (Bekasi/Depok/Karawang):\n- Jumlah Unit:\n- Jadwal yang diinginkan:\nBisa dibantu jadwal teknisinya?",
    b2cRepair: "Halo CV Rifqi AC, AC rumah saya bermasalah:\n- Kendala (Bocor air / Tidak dingin / Berisik / Bau):\n- Lokasi (Bekasi/Depok/Karawang):\nMohon info teknisi terdekat yang bisa datang hari ini. Terima kasih.",
    general: "Halo CV Rifqi AC, saya ingin bertanya seputar layanan service dan maintenance AC."
  }
};

/**
 * Trigger pelacakan konversi Google Ads secara aman
 */
function trackConversion(callback) {
  if (typeof gtag === 'function' && CONFIG.googleAdsSendTo !== "AW-CONVERSION_ID/CONVERSION_LABEL") {
    gtag('event', 'conversion', {
      'send_to': CONFIG.googleAdsSendTo,
      'event_callback': function() {
        if (callback) callback();
      }
    });
    // Fallback timer jika callback gtag lambat/terblokir adblocker
    setTimeout(function() {
      if (callback) {
        callback();
        callback = null;
      }
    }, 400);
  } else {
    // Mode development atau belum pasang ID tag
    console.log('[Tracking] Conversion Event Triggered:', CONFIG.googleAdsSendTo);
    if (callback) callback();
  }
}

/**
 * Generate link WhatsApp dengan teks terenkripsi URI
 */
function getWhatsAppUrl(type) {
  const text = CONFIG.messages[type] || CONFIG.messages.general;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Handle direct click tombol WhatsApp
 */
function handleWhatsAppClick(event, type) {
  if (event) event.preventDefault();
  const targetUrl = getWhatsAppUrl(type);
  
  trackConversion(function() {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  });
}

/**
 * Handle direct click tombol Telepon
 */
function handlePhoneClick(event, phoneNumber) {
  if (event) event.preventDefault();
  const telUrl = `tel:${phoneNumber || CONFIG.whatsappNumber}`;
  
  trackConversion(function() {
    window.location.href = telUrl;
  });
}

/**
 * Pasang fallback href WhatsApp & Telepon saat DOM selesai dimuat
 * untuk mendukung aksesibilitas, klik kanan, dan navigasi keyboard
 */
document.addEventListener('DOMContentLoaded', function() {
  const waLinks = document.querySelectorAll('[data-wa-type]');
  waLinks.forEach(function(link) {
    const type = link.getAttribute('data-wa-type');
    link.href = getWhatsAppUrl(type);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const telLinks = document.querySelectorAll('[data-tel-link]');
  telLinks.forEach(function(link) {
    link.href = `tel:${CONFIG.whatsappNumber}`;
  });
});
