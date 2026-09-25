## Purpose

Provides a Google Ads optimization framework including a negative keyword defense system and client-side dynamic text replacement (DTR) for industrial HVAC landing pages to maximize conversion quality and eliminate wasted ad spend.

## ADDED Requirements

### Requirement: Google Ads Negative Keyword Fortress
The system SHALL provide a structured list of negative keywords categorized into B2B exclusions, B2C exclusions, job/education queries, and irrelevant service filters.

#### Scenario: B2B Google Ads Campaign Exclusion
- **WHEN** a B2B campaign is configured in Google Ads
- **THEN** negative terms filtering out residential intent (e.g., rumah, kos, kontrakan, apartemen, kulkas, 1/2 pk, daikin inverter murah) MUST be attached to prevent wasted spend on non-industrial prospects.

#### Scenario: B2C Google Ads Campaign Exclusion
- **WHEN** a B2C residential campaign is configured in Google Ads
- **THEN** negative terms filtering out heavy industrial queries (e.g., chiller 100 tr, tender ahu, e-faktur pabrik, csms k3) MUST be attached so residential specialists handle only direct homeowner inquiries.

### Requirement: Client-Side Dynamic Text Replacement (DTR)
The frontend script SHALL parse specific URL parameters (`area`, `service`, `target`) safely and replace marked text elements (`data-dtr-headline`, `data-dtr-badge`) without causing visual layout shifts or breaking SEO metadata.

#### Scenario: URL contains matching industrial area and service
- **WHEN** a user visits `index.html?area=MM2100&service=Chiller`
- **THEN** the hero headline element with `data-dtr-headline` MUST dynamically display "Vendor Kontrak Maintenance & Service Chiller Kawasan MM2100" and the hero badge element with `data-dtr-badge` MUST highlight "Kawasan Industri MM2100".

#### Scenario: URL contains unknown or empty parameters
- **WHEN** a user visits with no parameters or unsupported values
- **THEN** the default static HTML text MUST remain unchanged without throwing JavaScript errors or altering layout.

### Requirement: DTR Synchronized WhatsApp Intent Generator
The conversion engine SHALL automatically synchronize detected DTR parameters into the pre-filled WhatsApp message payload.

#### Scenario: User clicks CTA after landing via DTR URL
- **WHEN** a user who arrived via `?area=Jababeka&service=AHU` clicks the primary WhatsApp CTA button
- **THEN** the generated WhatsApp message MUST automatically pre-fill the location as "Kawasan Industri Jababeka" and the service inquiry as "AHU & Cleanroom Maintenance".
