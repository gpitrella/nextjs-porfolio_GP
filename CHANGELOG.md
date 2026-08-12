## [1.2.0](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.1.0...v1.2.0) (2026-08-12)


### ✨ Features

* add EN/ES language toggle for the portfolio UI ([7c89d87](https://github.com/gpitrella/nextjs-porfolio_GP/commit/7c89d87892121b74417c1036672dc40a5c17394f))


### 🐛 Bug Fixes

* stop chat responses from truncating and improve tone ([1dcc0ad](https://github.com/gpitrella/nextjs-porfolio_GP/commit/1dcc0ad79475e44f2dbc0af3aa99832a114711ea))

## [1.1.0](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.0.0...v1.1.0) (2026-08-12)


### ✨ Features

* switch chat backend to NVIDIA NIM (Nemotron) and render Markdown ([ede9468](https://github.com/gpitrella/nextjs-porfolio_GP/commit/ede946829841dd4562bd90ed56c316ad98e33a51))
* turn portfolio into a sidebar + chat agent powered by Gemini ([8e7b96f](https://github.com/gpitrella/nextjs-porfolio_GP/commit/8e7b96f2e3c2927835f3130f5f968e3ded1c63a8))


### 🐛 Bug Fixes

* make CI checks more lenient for PR validation ([62ea7b4](https://github.com/gpitrella/nextjs-porfolio_GP/commit/62ea7b457b0ff7b450ba7824db12e7d2bdd40577))
* regenerate package-lock.json to resolve CI dependency errors ([7692bbd](https://github.com/gpitrella/nextjs-porfolio_GP/commit/7692bbd7a3c83df83a36bd61441c394132ba1d60))


### ✅ Tests

* remove obsolete verification tests that conflict with user changes ([6abba65](https://github.com/gpitrella/nextjs-porfolio_GP/commit/6abba654a22f5937311e62ec8b6e480057f13cc5))


### 👷 CI/CD

* add automatic versioning system with semantic-release ([65eb724](https://github.com/gpitrella/nextjs-porfolio_GP/commit/65eb724b893d3a54dc28e03b00b8812a535f59ce))
* add comprehensive CI/CD workflows and PR automation ([2987a31](https://github.com/gpitrella/nextjs-porfolio_GP/commit/2987a31f5474e9c17915e8d53fb3228de058ca0b))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-XX

### Added
- Initial portfolio release with Next.js 13 App Router
- Project showcase with featured and grid layouts
- Certifications page with PDF viewer
- Dark/light theme switcher with persistence
- Responsive navigation with mobile menu
- Google Analytics integration

### Changed
- Migrated from Pages Router to App Router
- Updated to React 18 and Next.js 13

### Fixed
- Theme flashing on page load
- Mobile menu animation issues
