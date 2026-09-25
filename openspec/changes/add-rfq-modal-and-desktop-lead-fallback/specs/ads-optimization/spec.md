## ADDED Requirements

### Requirement: Unified Conversion Event for Desktop RFQ
Sistem pelacakan `tracking.js` SHALL menyatukan pelacakan konversi Google Ads (`gtag('event', 'conversion', ...)`) baik untuk klik langsung WhatsApp mobile maupun pengiriman formulir RFQ desktop.

#### Scenario: Conversion tracking verification
- **WHEN** formulir RFQ desktop berhasil divalidasi dan dikirim
- **THEN** fungsi `trackConversion()` terpanggil dengan data atribusi UTM/GCLID yang tersimpan di `sessionStorage`.
