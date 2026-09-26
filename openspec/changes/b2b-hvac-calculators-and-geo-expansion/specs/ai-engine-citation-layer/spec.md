## Purpose

Menyediakan standar dokumentasi machine-readable dan perizinan crawler mesin pencari AI generasi baru (Google Gemini, OpenAI Search, Perplexity, Claude Web) guna memaksimalkan visibilitas sitasi dan grounding entitas kontraktor HVAC.

## ADDED Requirements

### Requirement: Machine-Readable Context Files (`llms.txt` and `llms-full.txt`)
Sistem SHALL menyediakan file teks Markdown terstruktur di `/llms.txt` dan `/llms-full.txt` yang mematuhi standar llmstxt.org untuk menyajikan profil entitas legalitas, cakupan kawasan, kapabilitas teknis pendingin, dan rujukan kalkulator engineering CV Rifqi AC secara padat token.

#### Scenario: AI Search engine requests llms.txt
- **WHEN** crawler atau sistem LLM mengakses `https://domain/llms.txt`
- **THEN** sistem mengembalikan dokumen berformat Markdown dengan H1 entitas, blok ringkasan cakupan wilayah, katalog tautan layanan terkurasi (Chiller, AHU, VRV, Klaster Kawasan), serta tautan ke `llms-full.txt`.

#### Scenario: AI Search engine requests llms-full.txt
- **WHEN** LLM mengakses `https://domain/llms-full.txt`
- **THEN** sistem mengembalikan rujukan mendalam yang memuat formula teknis kalkulasi TR & ACH, standar batas toleransi suhu/kelembaban cleanroom, SOP emergency breakdown, dan legalitas izin K3/OSS CV Rifqi AC.

### Requirement: AI Search Crawler Permission in robots.txt
File `robots.txt` SHALL secara eksplisit mengizinkan (ALLOW) crawler pencarian dan sitasi AI generatif terkemuka untuk merayapi seluruh aset informasi publik.

#### Scenario: AI search crawler parses robots.txt
- **WHEN** bot `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Google-Extended`, atau `Claude-Web` membaca `/robots.txt`
- **THEN** aturan `User-agent` yang sesuai mengizinkan akses perayapan (`Allow: /`) serta mendeklarasikan lokasi sitemap dan tautan `llms.txt`.
