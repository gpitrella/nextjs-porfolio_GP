## [1.3.1](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.3.0...v1.3.1) (2026-08-17)


### 🐛 Bug Fixes

* offer degree/cert docs on request instead of publishing scans ([4b5c31f](https://github.com/gpitrella/nextjs-porfolio_GP/commit/4b5c31f5f66cf6469c4131799a00265aad780d09))

## [1.3.0](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.2.8...v1.3.0) (2026-08-17)


### ✨ Features

* auto-scroll chat, keep suggested prompts always visible ([a79b81e](https://github.com/gpitrella/nextjs-porfolio_GP/commit/a79b81e2f6b6bc030b4d4f56012032f90a21143b))

## [1.2.8](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.2.7...v1.2.8) (2026-08-17)


### 🐛 Bug Fixes

* trim system prompt and retune retry to fit the free-tier token budget ([d8679b7](https://github.com/gpitrella/nextjs-porfolio_GP/commit/d8679b767137a5fb370d0fefc7abadf7357c3621))

## [1.2.7](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.2.6...v1.2.7) (2026-08-17)


### 🐛 Bug Fixes

* retry once on Groq 429 instead of failing the whole request ([8a3340f](https://github.com/gpitrella/nextjs-porfolio_GP/commit/8a3340fd7f891cdeaf0eeb580478bff4d41c9e57))

## [1.2.6](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.2.5...v1.2.6) (2026-08-17)


### 🐛 Bug Fixes

* switch Groq model to gpt-oss-20b and cap hallucinated inferences ([171b99f](https://github.com/gpitrella/nextjs-porfolio_GP/commit/171b99fcea4424b3cc60327fba3749406eaf646f))

## [1.2.5](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.2.4...v1.2.5) (2026-08-14)


### ⚡ Performance Improvements

* switch chat backend from NVIDIA NIM to Groq ([30f9652](https://github.com/gpitrella/nextjs-porfolio_GP/commit/30f96525760470e7023e33ebf6c508e5e46dd1fc))

## [1.2.4](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.2.3...v1.2.4) (2026-08-13)


### 🐛 Bug Fixes

* use dvh instead of vh for the shell height on mobile ([267b9fa](https://github.com/gpitrella/nextjs-porfolio_GP/commit/267b9fae0b632d062416a16f45d0230940ddc426))

## [1.2.3](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.2.2...v1.2.3) (2026-08-12)


### ⚡ Performance Improvements

* disable Nemotron's extended reasoning to speed up chat replies ([213dcc9](https://github.com/gpitrella/nextjs-porfolio_GP/commit/213dcc94011fd06eaf07b3fb4b73c6871bb83a43))

## [1.2.2](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.2.1...v1.2.2) (2026-08-12)


### 🐛 Bug Fixes

* tune max_tokens so chat responses finish within the timeout ([3d39e13](https://github.com/gpitrella/nextjs-porfolio_GP/commit/3d39e13d858f777ef997c8408d985171ddf9efe6))

## [1.2.1](https://github.com/gpitrella/nextjs-porfolio_GP/compare/v1.2.0...v1.2.1) (2026-08-12)


### 🐛 Bug Fixes

* extend chat API route timeout to stop mid-stream cutoffs ([32c5e6a](https://github.com/gpitrella/nextjs-porfolio_GP/commit/32c5e6a109d9e2da3efc0df0b94d58e3c20c640a))

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
