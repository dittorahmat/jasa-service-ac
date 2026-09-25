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
    b2bMM2100: "Halo CV Rifqi AC, saya dari perusahaan di Kawasan Industri MM2100 Cikarang Barat. Ingin konsultasi maintenance/perbaikan sistem HVAC & AC pabrik:\n- Nama Perusahaan:\n- Blok/Sektor MM2100:\n- Kebutuhan (Kontrak Berkala / Chiller / AHU / AC Kantor):\nMohon info jadwal survey teknisi. Terima kasih.",
    b2bJababeka: "Halo CV Rifqi AC, saya dari perusahaan di Kawasan Industri Jababeka (I-VI) Cikarang. Ingin konsultasi service & maintenance HVAC/AC pabrik:\n- Nama Perusahaan:\n- Lokasi Jababeka (Fase/Blok):\n- Kebutuhan (Cleanroom / AHU / Chiller / AC Cassette):\nMohon info jadwal survey teknisi. Terima kasih.",
    b2bKIIC: "Halo CV Rifqi AC, kami dari fasilitas pabrik di Kawasan Industri KIIC Karawang Barat. Membutuhkan kontraktor resmi HVAC (e-Faktur PPN & K3 compliant):\n- Nama Perusahaan:\n- Lokasi Lot/Kavling KIIC:\n- Kebutuhan (Chiller / AHU / Paket Maintenance Tahunan):\nMohon penawaran dan jadwal survey. Terima kasih.",
    b2bEJIP: "Halo CV Rifqi AC, kami dari fasilitas manufaktur di Kawasan Industri EJIP Cikarang Selatan. Ingin permohonan survey/maintenance HVAC:\n- Nama Perusahaan:\n- Lokasi Plot EJIP:\n- Kebutuhan (AC Presisi / Central VRV / AHU / Perbaikan):\nMohon respon ketersediaan tim teknisi. Terima kasih.",
    b2bSuryacipta: "Halo CV Rifqi AC, kami dari perusahaan di Kawasan Industri Suryacipta Karawang Timur. Membutuhkan kontraktor resmi HVAC (e-Faktur PPN, CSMS & K3 compliant):\n- Nama Perusahaan:\n- Lokasi Lot/Jalan Suryacipta:\n- Kebutuhan (Overhaul Chiller / AHU / Kontrak Berkala AC Pabrik):\nMohon info jadwal survey teknisi. Terima kasih.",
    b2bDeltaSilicon: "Halo CV Rifqi AC, kami dari fasilitas industri di Kawasan Delta Silicon (1-8) Lippo Cikarang. Ingin konsultasi maintenance HVAC & sistem tata udara higienis:\n- Nama Perusahaan:\n- Lokasi Delta Silicon:\n- Kebutuhan (CPOB/Cleanroom AHU / HEPA Filter / Chiller / Cassette Kantor):\nMohon info jadwal survey teknisi. Terima kasih.",
    b2bGIIC: "Halo CV Rifqi AC, kami dari fasilitas manufaktur/data center di Kawasan Industri GIIC Kota Deltamas Cikarang Pusat. Membutuhkan vendor HVAC profesional:\n- Nama Perusahaan:\n- Blok/Sektor GIIC Deltamas:\n- Kebutuhan (Precision AC PAC / Chiller Central / VRV / Kontrak Maintenance):\nMohon info jadwal survey dan penawaran teknisi. Terima kasih.",
    b2cCuci: "Halo CV Rifqi AC, saya mau order jasa cuci AC rumah/ruko:\n- Lokasi (Bekasi/Depok/Karawang):\n- Jumlah Unit:\n- Jadwal yang diinginkan:\nBisa dibantu jadwal teknisinya?",
    b2cRepair: "Halo CV Rifqi AC, AC rumah saya bermasalah:\n- Kendala (Bocor air / Tidak dingin / Berisik / Bau):\n- Lokasi (Bekasi/Depok/Karawang):\nMohon info teknisi terdekat yang bisa datang hari ini. Terima kasih.",
    b2bDiagnostic: "Halo CV Rifqi AC, unit pendingin pabrik/gedung kami mengalami error dan butuh bantuan teknisi:\n- Kode Error/Alarm:\n- Merek & Jenis Unit (VRV/Chiller/Cassette):\n- Nama Perusahaan & Lokasi:\nMohon info jadwal inspeksi/kunjungan darurat. Terima kasih.",
    b2bChiller: "Halo CV Rifqi AC, kami butuh penanganan/service Chiller Industri pabrik:\n- Nama Perusahaan:\n- Lokasi Pabrik (Kawasan/Kota):\n- Kapasitas & Tipe Chiller (Air-Cooled/Water-Cooled, Tonase/TR):\n- Kendala/Kebutuhan (Overhaul/Descaling/Flushing/Emergency):\nMohon info jadwal survey teknisi spesialis chiller. Terima kasih.",
    b2bAHU: "Halo CV Rifqi AC, kami ingin konsultasi maintenance & service AHU / Cleanroom:\n- Nama Perusahaan:\n- Lokasi Fasilitas/Pabrik:\n- Kebutuhan (Pembersihan AHU / Ganti Filter HEPA-Medium / Airflow Balancing / Sertifikasi CPOB):\nMohon info penawaran & survey teknisi. Terima kasih.",
    b2bVRV: "Halo CV Rifqi AC, kami butuh maintenance & perbaikan sistem AC VRV / VRF gedung/kantor:\n- Nama Perusahaan/Gedung:\n- Lokasi:\n- Merek Unit (Daikin VRV / Mitsubishi VRF / Lainnya):\n- Kendala (Error Code Inverter / Bocor Freon / Maintenance Rutin):\nMohon respon ketersediaan tim teknisi VRV. Terima kasih.",
    b2cGrandWisata: "Halo CV Rifqi AC, saya warga Grand Wisata / Tambun ingin order service AC bergaransi:\n- Alamat Cluster / Blok:\n- Kendala / Kebutuhan (Cuci AC / Bocor Air / Kurang Dingin):\n- Jumlah Unit:\nBisa dijadwalkan teknisi hari ini/besok? Terima kasih.",
    b2cHarapanIndah: "Halo CV Rifqi AC, saya di area Kota Harapan Indah / Medan Satria ingin pesan teknisi AC panggilan:\n- Alamat Cluster / Ruko:\n- Keluhan AC / Kebutuhan (Cuci Berkala / Perbaikan):\n- Jadwal yang Diinginkan:\nMohon info kedatangan teknisi bergaransi. Terima kasih.",
    b2cSummarecon: "Halo CV Rifqi AC, saya dari kawasan Summarecon Bekasi ingin order service AC bergaransi 30 hari:\n- Alamat Cluster / Ruko:\n- Jenis Layanan (Cuci Bersih Tanpa Ciprat / Perbaikan Dingin):\n- Jumlah Unit AC:\nMohon info jadwal teknisi terdekat. Terima kasih.",
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
 * UTM & Campaign Attribution Engine
 */
function captureCampaignParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
    let found = false;
    let data = {};

    utmKeys.forEach(function(key) {
      if (params.has(key)) {
        data[key] = params.get(key);
        found = true;
      }
    });

    if (found) {
      sessionStorage.setItem('cv_rifqi_campaign', JSON.stringify(data));
    }
  } catch (e) {
    // Fail-safe untuk browser dengan mode privasi ketat
  }
}

function getCampaignSuffix() {
  try {
    const raw = sessionStorage.getItem('cv_rifqi_campaign');
    if (!raw) return '';
    const data = JSON.parse(raw);
    const source = data.utm_source || (data.gclid ? 'google_ads' : '');
    const campaign = data.utm_campaign || '';
    const term = data.utm_term || '';

    if (!source && !campaign && !term) return '';
    
    let parts = [];
    if (source) parts.push(source);
    if (campaign) parts.push(campaign);
    if (term) parts.push('KW: ' + term);

    return `\n\n[Ref Iklan: ${parts.join(' | ')}]`;
  } catch (e) {
    return '';
  }
}

// Jalankan penangkapan parameter saat script dimuat
captureCampaignParams();

/**
 * Dynamic Text Replacement (DTR) & Safe Keyword Adaptation Engine
 * Meningkatkan Ad Relevancy & Quality Score Google Ads secara dinamis
 */
const DTR_DICTIONARY = {
  areas: {
    'mm2100': {
      name: 'Kawasan Industri MM2100',
      badge: 'Coverage: Kawasan Industri MM2100 Cikarang Barat',
      waKey: 'b2bMM2100'
    },
    'jababeka': {
      name: 'Kawasan Industri Jababeka (I-VI)',
      badge: 'Coverage: Kawasan Industri Jababeka I-VI Cikarang',
      waKey: 'b2bJababeka'
    },
    'kiic': {
      name: 'Kawasan Industri KIIC Karawang',
      badge: 'Coverage: Kawasan Industri KIIC Karawang Barat',
      waKey: 'b2bKIIC'
    },
    'ejip': {
      name: 'Kawasan Industri EJIP Cikarang',
      badge: 'Coverage: Kawasan Industri EJIP Cikarang Selatan',
      waKey: 'b2bEJIP'
    },
    'giic': {
      name: 'Kawasan Industri GIIC Deltamas',
      badge: 'Coverage: Kawasan Industri GIIC Kota Deltamas',
      waKey: 'b2bGIIC'
    },
    'deltasilicon': {
      name: 'Kawasan Delta Silicon Lippo Cikarang',
      badge: 'Coverage: Kawasan Delta Silicon (1-8) Cikarang',
      waKey: 'b2bDeltaSilicon'
    },
    'suryacipta': {
      name: 'Kawasan Industri Suryacipta Karawang',
      badge: 'Coverage: Kawasan Industri Suryacipta Karawang Timur',
      waKey: 'b2bSuryacipta'
    }
  },
  services: {
    'chiller': {
      name: 'Chiller Industri & AHU',
      headlinePrefix: 'Vendor Kontrak Maintenance & Overhaul Chiller Industri',
      waKey: 'b2bChiller'
    },
    'ahu': {
      name: 'AHU Cleanroom & Tata Udara',
      headlinePrefix: 'Spesialis Maintenance & Service AHU Cleanroom Pabrik',
      waKey: 'b2bAHU'
    },
    'vrv': {
      name: 'Sistem VRV / VRF Inverter',
      headlinePrefix: 'Vendor Perawatan & Service AC Central VRV / VRF',
      waKey: 'b2bVRV'
    },
    'maintenance': {
      name: 'Kontrak Maintenance HVAC Berkala',
      headlinePrefix: 'Vendor Kontrak Maintenance & Service HVAC Pabrik',
      waKey: 'b2bSurvey'
    }
  }
};

let activeDtrContext = null;

function detectDTR() {
  try {
    const params = new URLSearchParams(window.location.search);
    const rawArea = (params.get('area') || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const rawService = (params.get('service') || '').toLowerCase().replace(/[^a-z0-9]/g, '');

    const areaMatch = DTR_DICTIONARY.areas[rawArea] || null;
    const serviceMatch = DTR_DICTIONARY.services[rawService] || null;

    if (areaMatch || serviceMatch) {
      activeDtrContext = {
        area: areaMatch,
        service: serviceMatch
      };
      return activeDtrContext;
    }
  } catch (e) {
    // Fail-safe
  }
  return null;
}

function initDynamicTextReplacement() {
  const dtr = detectDTR();
  if (!dtr) return;

  // 1. Update Badge
  const badgeEl = document.querySelector('[data-dtr-badge]');
  if (badgeEl && dtr.area) {
    badgeEl.textContent = dtr.area.badge;
  }

  // 2. Update Headline
  const headlineEl = document.querySelector('[data-dtr-headline]');
  if (headlineEl) {
    let headlineText = '';
    if (dtr.service && dtr.area) {
      headlineText = `${dtr.service.headlinePrefix} ${dtr.area.name}`;
    } else if (dtr.service) {
      headlineText = `${dtr.service.headlinePrefix} Bekasi, Cikarang & Karawang`;
    } else if (dtr.area) {
      headlineText = `Vendor Kontrak Maintenance & Service HVAC ${dtr.area.name}`;
    }

    if (headlineText) {
      headlineEl.textContent = headlineText;
    }
  }

  // 3. Update Quick Form default facility if matched
  const locationSelect = document.getElementById('facilityLocation');
  if (locationSelect && dtr.area) {
    const areaLower = dtr.area.name.toLowerCase();
    for (let i = 0; i < locationSelect.options.length; i++) {
      if (locationSelect.options[i].text.toLowerCase().includes(areaLower.substring(0, 4))) {
        locationSelect.selectedIndex = i;
        break;
      }
    }
  }
}

// Jalankan DTR sedini mungkin
detectDTR();

/**
 * Generate link WhatsApp dengan teks terenkripsi URI dan atribusi iklan
 */
function getWhatsAppUrl(type) {
  // Bila ada konteks DTR aktif dan type adalah generic b2bSurvey, arahkan ke pesan yang lebih spesifik
  let resolvedType = type;
  if (activeDtrContext && (type === 'b2bSurvey' || !type)) {
    if (activeDtrContext.service && activeDtrContext.service.waKey) {
      resolvedType = activeDtrContext.service.waKey;
    } else if (activeDtrContext.area && activeDtrContext.area.waKey) {
      resolvedType = activeDtrContext.area.waKey;
    }
  }

  const baseText = CONFIG.messages[resolvedType] || CONFIG.messages[type] || CONFIG.messages.general;
  const fullText = baseText + getCampaignSuffix();
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
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
 * Handle error code emergency dispatch click
 */
function handleErrorCodeClick(event, errorCode, brand) {
  if (event) event.preventDefault();
  const baseMessage = `Halo CV Rifqi AC, unit kami memunculkan kode error berikut dan butuh teknisi darurat:\n- Merek: ${brand || 'Sistem HVAC'}\n- Kode Error: ${errorCode || '-'}\n- Nama Perusahaan:\n- Lokasi (Kawasan Industri/Bekasi/Karawang):\nMohon respon ketersediaan tim teknisi. Terima kasih.`;
  const fullMessage = baseMessage + getCampaignSuffix();
  const targetUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

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
  initDynamicTextReplacement();

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

