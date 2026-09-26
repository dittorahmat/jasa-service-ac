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
    b2bKNIC: "Halo CV Rifqi AC, kami dari fasilitas industri di Kawasan Industri KNIC (Karawang New Industry City). Membutuhkan vendor HVAC resmi (e-Faktur PPN, K3 compliant):\n- Nama Perusahaan:\n- Lokasi Kavling KNIC:\n- Kebutuhan (Tata Udara EV Battery / Chiller / Cleanroom / Kontrak Rutin):\nMohon info penawaran dan jadwal survey teknisi. Terima kasih.",
    b2bAIH: "Halo CV Rifqi AC, kami dari pabrik di Kawasan Artha Industrial Hill (AIH) Karawang Barat. Ingin konsultasi maintenance HVAC & Chiller:\n- Nama Perusahaan:\n- Lokasi Lot AIH:\n- Kebutuhan (Overhaul Chiller / AHU Ruang Produksi / VRV):\nMohon respon ketersediaan tim teknisi. Terima kasih.",
    b2bSentul: "Halo CV Rifqi AC, kami dari perusahaan di Sentul Industrial Estate Bogor. Membutuhkan jasa service & maintenance tata udara:\n- Nama Perusahaan:\n- Lokasi Kawasan Sentul:\n- Kebutuhan (F&B HVAC / Cold Storage / Chiller / AC Kantor):\nMohon info jadwal survey teknisi. Terima kasih.",
    b2bCikande: "Halo CV Rifqi AC, kami dari fasilitas manufaktur di Kawasan Industri Modern Cikande Serang. Membutuhkan kontraktor resmi HVAC (e-Faktur PPN & K3):\n- Nama Perusahaan:\n- Lokasi Blok Modern Cikande:\n- Kebutuhan (Chiller Kapasitas Besar / AHU / Kontrak Rutin Pabrik):\nMohon respon jadwal survey tim regional. Terima kasih.",
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
 * Cookie Helper for 30-Day First-Party Attribution
 */
function setAttributionCookie(name, value, days) {
  try {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;SameSite=Lax";
  } catch (e) {
    // Fail-safe
  }
}

function getAttributionCookie(name) {
  try {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(cname) === 0) {
        return c.substring(cname.length, c.length);
      }
    }
  } catch (e) {
    // Fail-safe
  }
  return '';
}

/**
 * UTM & Campaign Attribution Engine
 * Dual-storage (sessionStorage + 30-day cookie) with GCLID / WBRAID / GBRAID support
 */
function captureCampaignParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const trackingKeys = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'gclid', 'wbraid', 'gbraid'
    ];
    let found = false;
    let data = {};

    // 1. Ambil dari URL jika ada
    trackingKeys.forEach(function(key) {
      if (params.has(key)) {
        data[key] = params.get(key);
        found = true;
      }
    });

    if (found) {
      const serialized = JSON.stringify(data);
      sessionStorage.setItem('cv_rifqi_campaign', serialized);
      setAttributionCookie('cv_rifqi_attribution', serialized, 30);
    } else {
      // 2. Fallback restore dari cookie jika tab/sesi baru
      if (!sessionStorage.getItem('cv_rifqi_campaign')) {
        const savedCookie = getAttributionCookie('cv_rifqi_attribution');
        if (savedCookie) {
          sessionStorage.setItem('cv_rifqi_campaign', savedCookie);
        }
      }
    }
  } catch (e) {
    // Fail-safe untuk browser dengan mode privasi ketat
  }
}

function getCampaignData() {
  try {
    let raw = sessionStorage.getItem('cv_rifqi_campaign');
    if (!raw) {
      raw = getAttributionCookie('cv_rifqi_attribution');
    }
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function getCampaignSuffix(isDetailed) {
  try {
    const data = getCampaignData();
    if (!data) return '';

    const clickId = data.gclid || data.wbraid || data.gbraid || '';
    const clickType = data.gclid ? 'GCLID' : (data.wbraid ? 'WBRAID' : (data.gbraid ? 'GBRAID' : ''));
    const source = data.utm_source || (clickId ? 'google' : '');
    const campaign = data.utm_campaign || '';
    const term = data.utm_term || '';

    if (!source && !campaign && !term && !clickId) return '';
    
    let parts = [];
    if (source) parts.push(source);
    if (campaign) parts.push(campaign);
    if (term) parts.push('KW: ' + term);

    if (clickId) {
      if (isDetailed) {
        parts.push(`${clickType}: ${clickId}`);
      } else {
        // Format ringkas pada WhatsApp agar rapi (tampilkan 10 karakter awal & akhir jika panjang)
        const shortId = clickId.length > 16 
          ? `${clickId.substring(0, 7)}...${clickId.substring(clickId.length - 5)}`
          : clickId;
        parts.push(`${clickType}: ${shortId}`);
      }
    }

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
    },
    'knic': {
      name: 'Kawasan Industri KNIC Karawang',
      badge: 'Coverage: Kawasan Industri KNIC Karawang (EV & High-Tech)',
      waKey: 'b2bKNIC'
    },
    'aih': {
      name: 'Kawasan Artha Industrial Hill Karawang',
      badge: 'Coverage: Kawasan Artha Industrial Hill (AIH) Telukjambe',
      waKey: 'b2bAIH'
    },
    'sentul': {
      name: 'Sentul Industrial Estate Bogor',
      badge: 'Coverage: Sentul Industrial Estate & Babakan Madang Bogor',
      waKey: 'b2bSentul'
    },
    'cikande': {
      name: 'Kawasan Industri Modern Cikande Serang',
      badge: 'Coverage: Kawasan Industri Modern Cikande Serang Banten',
      waKey: 'b2bCikande'
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
 * Deteksi perangkat: apakah pengunjung menggunakan desktop/laptop?
 */
function isDesktopDevice() {
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isWideScreen = window.innerWidth >= 768;
  return isWideScreen && !isMobileUA;
}

/**
 * Handle direct click tombol WhatsApp
 * Pada mobile: langsung buka aplikasi WhatsApp
 * Pada desktop: munculkan RFQ Modal penangkap prospek agar tidak drop-off
 */
function handleWhatsAppClick(event, type) {
  if (event) event.preventDefault();
  const targetUrl = getWhatsAppUrl(type);

  if (isDesktopDevice()) {
    openRfqModal(type, targetUrl);
  } else {
    trackConversion(function() {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    });
  }
}

/**
 * Handle error code emergency dispatch click
 */
function handleErrorCodeClick(event, errorCode, brand) {
  if (event) event.preventDefault();
  const baseMessage = `Halo CV Rifqi AC, unit kami memunculkan kode error berikut dan butuh teknisi darurat:\n- Merek: ${brand || 'Sistem HVAC'}\n- Kode Error: ${errorCode || '-'}\n- Nama Perusahaan:\n- Lokasi (Kawasan Industri/Bekasi/Karawang):\nMohon respon ketersediaan tim teknisi. Terima kasih.`;
  const fullMessage = baseMessage + getCampaignSuffix();
  const targetUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

  if (isDesktopDevice()) {
    openRfqModal('b2bDiagnostic', targetUrl, `Kode Error: ${errorCode || '-'} (${brand || 'HVAC'})`);
  } else {
    trackConversion(function() {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    });
  }
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
 * RFQ Modal DOM Injection & Controller Engine
 */
let currentRfqTargetUrl = '';

function injectRfqModalDOM() {
  if (document.getElementById('rfq-desktop-modal')) return;

  const modalHtml = `
  <div id="rfq-desktop-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs hidden transition-opacity duration-200">
    <div class="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all text-slate-800 font-sans">
      <!-- Modal Header -->
      <div class="bg-corporate-navy px-6 py-4 flex items-center justify-between border-b border-corporate-navyLight">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-corporate-blue text-white flex items-center justify-center font-mono font-black text-sm">RAC</div>
          <div>
            <h3 class="text-sm font-bold text-white leading-tight">Permintaan Penawaran Resmi &amp; Survey</h3>
            <p class="text-[11px] text-slate-300">CV Rifqi AC &bull; Respon Cepat Pabrik &amp; Kawasan Industri</p>
          </div>
        </div>
        <button type="button" onclick="closeRfqModal()" class="text-slate-300 hover:text-white transition p-1.5 rounded-lg hover:bg-white/10" aria-label="Tutup Modal">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6">
        <div class="flex items-center gap-2 p-3 bg-sky-50 border border-sky-200 rounded-xl mb-5 text-xs text-sky-900">
          <svg class="w-4 h-4 text-sky-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Pilih metode tercepat untuk fasilitas Anda: Isi formulir resmi (RFQ) atau lanjut ke WhatsApp Web.</span>
        </div>

        <form id="rfq-desktop-form" onsubmit="submitDesktopRfq(event)">
          <div class="grid grid-cols-2 gap-3.5 mb-3.5">
            <div>
              <label class="block text-xs font-bold text-corporate-navy mb-1">Nama Perusahaan / PT <span class="text-rose-500">*</span></label>
              <input type="text" id="rfq-company" required placeholder="Contoh: PT Manufaktur Cikarang" class="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-blue">
            </div>
            <div>
              <label class="block text-xs font-bold text-corporate-navy mb-1">Kawasan Industri / Lokasi <span class="text-rose-500">*</span></label>
              <input type="text" id="rfq-location" required placeholder="Contoh: MM2100 / KIIC / Jababeka" class="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-blue">
            </div>
            <div>
              <label class="block text-xs font-bold text-corporate-navy mb-1">Nomor Telepon / PIC <span class="text-rose-500">*</span></label>
              <input type="tel" id="rfq-phone" required placeholder="Contoh: 0812-xxxx-xxxx" class="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-blue">
            </div>
            <div>
              <label class="block text-xs font-bold text-corporate-navy mb-1">Email Kantor (Untuk Dokumen Penawaran)</label>
              <input type="email" id="rfq-email" placeholder="procurement@perusahaan.co.id" class="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-blue">
            </div>
          </div>

          <div class="mb-5">
            <label class="block text-xs font-bold text-corporate-navy mb-1">Jenis Kebutuhan / Permasalahan HVAC</label>
            <textarea id="rfq-needs" rows="2" placeholder="Contoh: Kontrak berkala 30 unit AC kantor & Chiller trip HP" class="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-blue"></textarea>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-3">
            <button type="submit" class="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-corporate-blue hover:bg-sky-700 text-white font-bold text-xs py-3 px-4 rounded-lg transition active:scale-[0.98] shadow-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Kirim Formulir RFQ Resmi</span>
            </button>
            <button type="button" onclick="continueToWhatsAppWeb()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-4 rounded-lg transition active:scale-[0.98]">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.969.539 1.772.825 2.792.826 3.183 0 5.77-2.586 5.77-5.768 0-3.18-2.588-5.767-5.77-5.767zm7.55 5.766c.002 4.148-3.374 7.525-7.55 7.525-1.328 0-2.588-.348-3.69-.958l-4.341 1.137 1.159-4.227c-.668-1.157-1.02-2.479-1.02-3.839 0-4.147 3.376-7.524 7.55-7.524 4.148 0 7.55 3.376 7.55 7.524z"/></svg>
              <span>Lanjut ke WhatsApp Web</span>
            </button>
          </div>
        </form>

        <div id="rfq-success-message" class="hidden mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
          <div class="text-emerald-700 font-bold text-sm mb-1">Permintaan RFQ Berhasil Dikirim!</div>
          <p class="text-xs text-slate-600 mb-3">Tim sales &amp; engineering CV Rifqi AC akan segera menghubungi PIC perusahaan Anda untuk verifikasi teknis.</p>
          <button type="button" onclick="closeRfqModal()" class="px-4 py-1.5 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-700">Tutup</button>
        </div>
      </div>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Close on backdrop click
  const modal = document.getElementById('rfq-desktop-modal');
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeRfqModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeRfqModal();
    }
  });
}

function openRfqModal(type, targetUrl, prefillNeed) {
  injectRfqModalDOM();
  currentRfqTargetUrl = targetUrl || getWhatsAppUrl(type);

  const modal = document.getElementById('rfq-desktop-modal');
  const needsInput = document.getElementById('rfq-needs');
  const successBox = document.getElementById('rfq-success-message');
  const form = document.getElementById('rfq-desktop-form');

  if (prefillNeed && needsInput) {
    needsInput.value = prefillNeed;
  }
  if (successBox) successBox.classList.add('hidden');
  if (form) form.classList.remove('hidden');

  modal.classList.remove('hidden');
}

function closeRfqModal() {
  const modal = document.getElementById('rfq-desktop-modal');
  if (modal) modal.classList.add('hidden');
}

function continueToWhatsAppWeb() {
  trackConversion(function() {
    closeRfqModal();
    window.open(currentRfqTargetUrl, '_blank', 'noopener,noreferrer');
  });
}

function submitDesktopRfq(e) {
  e.preventDefault();
  const co = document.getElementById('rfq-company').value.trim();
  const loc = document.getElementById('rfq-location').value.trim();
  const phone = document.getElementById('rfq-phone').value.trim();
  const email = document.getElementById('rfq-email').value.trim();
  const needs = document.getElementById('rfq-needs').value.trim();

  let formattedMsg = `*PERMINTAAN PENAWARAN RESMI (RFQ DESKTOP)*\n`;
  formattedMsg += `- Perusahaan: ${co}\n`;
  formattedMsg += `- Lokasi Kawasan: ${loc}\n`;
  formattedMsg += `- No PIC / Telp: ${phone}\n`;
  formattedMsg += `- Email Kantor: ${email || '-'}\n`;
  formattedMsg += `- Kebutuhan: ${needs || 'Permintaan survey resmi'}`;
  formattedMsg += getCampaignSuffix(true);

  // Trigger Google Ads conversion
  trackConversion(function() {
    // Tampilkan pesan sukses di modal
    document.getElementById('rfq-desktop-form').classList.add('hidden');
    document.getElementById('rfq-success-message').classList.remove('hidden');

    // Buka fallback WA dengan pesan yang sudah terstruktur rapi
    const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;
    setTimeout(function() {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
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

  // Siapkan DOM modal jika dibuka di perangkat layar lebar
  if (isDesktopDevice()) {
    injectRfqModalDOM();
  }
});

