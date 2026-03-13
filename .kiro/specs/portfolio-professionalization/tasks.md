# Plan de Implementación: Profesionalización del Portfolio

## Fase 1: Tests de Exploración de Condición de Bug

- [x] 1. Escribir tests de exploración de condición de bug
  - **Property 1: Bug Condition** - Problemas de Profesionalidad Detectados
  - **CRÍTICO**: Estos tests DEBEN FALLAR en el código sin corregir - el fallo confirma que los bugs existen
  - **NO intentar corregir los tests o el código cuando fallen**
  - **NOTA**: Estos tests codifican el comportamiento esperado - validarán la corrección cuando pasen después de la implementación
  - **OBJETIVO**: Identificar contraejemplos concretos que demuestran los 22 problemas de profesionalidad
  - **Enfoque PBT Acotado**: Para bugs determinísticos, acotar la propiedad a los casos concretos que fallan
  - Implementar tests que validen la presencia de cada problema:
    - Test 1.1: Verificar título genérico "Passion Fuels Purpose!" en About
    - Test 1.2: Verificar biografía sin métricas cuantificables (sin números/porcentajes)
    - Test 1.3: Verificar errores gramaticales en proyectos ("brodeurd-development")
    - Test 1.4: Verificar experiencia laboral sin estructura de bullet points
    - Test 1.5: Verificar footer informal con emoji ❤️
    - Test 1.6: Verificar métricas infladas con "+" (ej: "3+ University certificates")
    - Test 2.1: Verificar ausencia de public/robots.txt
    - Test 2.2: Verificar ausencia de Open Graph tags en metadata
    - Test 2.3: Verificar ausencia de structured data (JSON-LD)
    - Test 2.4: Verificar ausencia de src/app/sitemap.ts
    - Test 2.5: Verificar next.config.js con configuración mínima (sin compress, sin security headers)
    - Test 2.6: Verificar analytics sin eventos personalizados
    - Test 3.1: Verificar console.error en ErrorBoundary.tsx línea 29
    - Test 3.2: Verificar ausencia de CHANGELOG.md
    - Test 3.3: Verificar README.md sin sección de ADRs
    - Test 3.4: Verificar cobertura de tests insuficiente (< 70%)
    - Test 3.5: Verificar ausencia de tests de accesibilidad automatizados
    - Test 3.6: Verificar ausencia de pre-commit hooks (.husky)
    - Test 4.1: Verificar inconsistencia en años de experiencia
    - Test 4.2: Verificar skills sin categorización (array plano)
    - Test 4.3: Verificar URLs duplicadas en proyectos privados (link === github)
    - Test 4.4: Verificar rol en Toyota inconsistente ("Front-End Developer" vs "Quality Assembly Engineer")
  - Ejecutar tests en código SIN CORREGIR
  - **RESULTADO ESPERADO**: Tests FALLAN (esto es correcto - prueba que los bugs existen)
  - Documentar contraejemplos encontrados para entender causa raíz
  - Marcar tarea completa cuando tests estén escritos, ejecutados y fallos documentados
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21, 2.22_


## Fase 2: Tests de Preservación

- [x] 2. Escribir tests de preservación de funcionalidad (ANTES de implementar correcciones)
  - **Property 2: Preservation** - Funcionalidad Técnica Existente
  - **IMPORTANTE**: Seguir metodología de observación primero
  - Observar comportamiento en código SIN CORREGIR para funcionalidad técnica existente
  - Escribir property-based tests capturando patrones de comportamiento observados de Requisitos de Preservación
  - Property-based testing genera muchos casos de test para garantías más fuertes
  - Tests de preservación:
    - Test 3.1: TransitionEffect muestra transiciones suaves entre páginas
    - Test 3.2: Theme switcher persiste preferencia en localStorage
    - Test 3.3: React Query hace prefetch de datos en servidor para SSR
    - Test 3.4: Menú hamburguesa mobile funciona con animaciones
    - Test 3.5: Métricas animadas usan framer-motion para contar desde 0
    - Test 3.6: Arquitectura feature-based (lib/features/*) se mantiene
    - Test 3.7: Imports absolutos con alias @ funcionan correctamente
    - Test 3.8: TypeScript estricto sin any types
    - Test 3.9: Separación correcta de Server Components y Client Components
    - Test 3.10: TailwindCSS con configuración actual funciona
    - Test 3.11: ErrorBoundary captura errores y muestra UI de fallback
    - Test 3.12: Skeletons de loading se muestran apropiadamente
    - Test 3.13: Featured projects se ordenan primero
    - Test 3.14: Next.js Image optimiza imágenes automáticamente
    - Test 3.15: App Router de Next.js 13+ funciona correctamente
  - Ejecutar tests en código SIN CORREGIR
  - **RESULTADO ESPERADO**: Tests PASAN (confirma comportamiento base a preservar)
  - Marcar tarea completa cuando tests estén escritos, ejecutados y pasando en código sin corregir
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14, 3.15_


## Fase 3: Implementación de Correcciones

- [x] 3. Grupo 1: Correcciones de Contenido y Presentación (Problemas 1.1-1.6)

  - [x] 3.1 Corregir título genérico en About (Problema 1.1)
    - Ubicación: `src/lib/features/profile/data.ts`
    - Reemplazar "Passion Fuels Purpose!" por "Full Stack Engineer | HubSpot Specialist"
    - _Bug_Condition: isBugCondition(title) donde hasGenericLanguage(title) = true_
    - _Expected_Behavior: Título comunica valor técnico inmediato y especialización_
    - _Preservation: Estructura de datos de perfil permanece igual_
    - _Requirements: 2.1_

  - [x] 3.2 Agregar métricas cuantificables a biografía (Problema 1.2)
    - Ubicación: `src/lib/features/profile/data.ts` - campo bio/summary
    - Agregar métricas específicas:
      - "Reduced page load time by 40% across 20+ HubSpot CMS sites"
      - "Built and deployed 15+ production applications serving 100K+ monthly users"
      - "Implemented CI/CD pipelines reducing deployment time by 60%"
    - _Bug_Condition: isBugCondition(bio) donde lacksQuantifiableMetrics(bio) = true_
    - _Expected_Behavior: Biografía incluye al menos 3 métricas con números/porcentajes_
    - _Preservation: Formato de biografía permanece igual_
    - _Requirements: 2.2_

  - [x] 3.3 Corregir errores en descripciones de proyectos (Problema 1.3)
    - Ubicación: `src/lib/features/projects/data.ts`
    - Corregir slug "brodeurd-development" → "brodeur-development"
    - Corregir título "Brodeurd Development" → "Brodeur Development"
    - Revisar y estandarizar todas las descripciones de proyectos
    - _Bug_Condition: isBugCondition(project) donde hasGrammaticalErrors(project) = true_
    - _Expected_Behavior: Proyectos sin errores, nombres correctos, descripciones consistentes_
    - _Preservation: Estructura de datos de proyectos permanece igual_
    - _Requirements: 2.3_

  - [x] 3.4 Estructurar experiencia laboral con bullet points (Problema 1.4)
    - Ubicación: `src/lib/features/experience/data.ts`
    - Convertir bloques de texto en arrays estructurados:
      ```typescript
      responsibilities: [
        "Led development of 10+ HubSpot CMS websites",
        "Reduced page load time by 40% through optimization",
        "Implemented responsive designs serving 50K+ users"
      ],
      technologies: ["React", "Next.js", "HubSpot CMS", "TypeScript"]
      ```
    - Actualizar componente Experience.tsx si es necesario para renderizar arrays
    - _Bug_Condition: isBugCondition(experience) donde experiencia es bloque de texto largo_
    - _Expected_Behavior: Experiencia usa bullet points separando logros, responsabilidades y tecnologías_
    - _Preservation: Componente Experience continúa renderizando correctamente_
    - _Requirements: 2.4_

  - [x] 3.5 Profesionalizar mensaje de footer (Problema 1.5)
    - Ubicación: `src/components/Footer.tsx`
    - Reemplazar "Build With ❤️" por "Built by Gabriel Pitrella"
    - _Bug_Condition: isBugCondition(footer) donde hasInformalTone(footer) = true_
    - _Expected_Behavior: Footer con mensaje profesional sin emojis_
    - _Preservation: Estructura y enlaces de footer permanecen iguales_
    - _Requirements: 2.5_

  - [x] 3.6 Corregir métricas infladas (Problema 1.6)
    - Ubicación: `src/lib/features/profile/data.ts` - sección de métricas
    - Cambios:
      - "3+ University certificates" → "8 Professional Certifications" (verificar número real)
      - "15+ Projects completed" → Número exacto verificable
      - "4+ years" → "3 years" (consistente con experiencia desde 2022)
    - _Bug_Condition: isBugCondition(metrics) donde métricas usan "+" sin verificación_
    - _Expected_Behavior: Métricas precisas y verificables con contexto claro_
    - _Preservation: Componente de métricas animadas continúa funcionando_
    - _Requirements: 2.6_


- [x] 4. Grupo 2: Configuración Técnica y SEO (Problemas 2.1-2.6)

  - [x] 4.1 Crear archivo robots.txt (Problema 2.1)
    - Ubicación: Crear `public/robots.txt`
    - Contenido:
      ```
      User-agent: *
      Allow: /
      Disallow: /api/
      
      Sitemap: https://gabrielpitrella.com/sitemap.xml
      ```
    - _Bug_Condition: isBugCondition(config) donde missingRobotsTxt() = true_
    - _Expected_Behavior: robots.txt configurado correctamente controla rastreo de bots_
    - _Preservation: Ninguna funcionalidad existente afectada_
    - _Requirements: 2.7_

  - [x] 4.2 Agregar Open Graph tags y Twitter Cards (Problema 2.2)
    - Ubicación: `src/app/layout.tsx` - objeto metadata
    - Agregar campos de Open Graph:
      ```typescript
      openGraph: {
        title: "Gabriel Pitrella | Full Stack Engineer",
        description: "Specialized in Next.js, React, and scalable architectures",
        url: "https://gabrielpitrella.com",
        siteName: "Gabriel Pitrella Portfolio",
        images: [{
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Gabriel Pitrella - Full Stack Engineer"
        }],
        locale: "es_AR",
        type: "website"
      },
      twitter: {
        card: "summary_large_image",
        title: "Gabriel Pitrella | Full Stack Engineer",
        description: "Specialized in Next.js, React, and scalable architectures",
        images: ["/images/og-image.jpg"]
      }
      ```
    - Crear imagen og-image.jpg (1200x630px) si no existe
    - _Bug_Condition: isBugCondition(metadata) donde missingOpenGraphTags() = true_
    - _Expected_Behavior: Previews profesionales al compartir en redes sociales_
    - _Preservation: Metadata existente permanece funcional_
    - _Requirements: 2.8_

  - [x] 4.3 Agregar structured data (JSON-LD) (Problema 2.3)
    - Ubicación: `src/app/layout.tsx` - agregar script en body
    - Agregar structured data:
      ```typescript
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Gabriel Pitrella",
            jobTitle: "Full Stack Engineer",
            url: "https://gabrielpitrella.com",
            sameAs: [
              "https://github.com/gabrielpitrella",
              "https://linkedin.com/in/gabrielpitrella"
            ],
            knowsAbout: ["Next.js", "React", "TypeScript", "HubSpot CMS"]
          })
        }}
      />
      ```
    - _Bug_Condition: isBugCondition(seo) donde missingStructuredData() = true_
    - _Expected_Behavior: Structured data mejora visibilidad en resultados de búsqueda_
    - _Preservation: Renderizado de layout permanece igual_
    - _Requirements: 2.9_

  - [x] 4.4 Crear sitemap automático (Problema 2.4)
    - Ubicación: Crear `src/app/sitemap.ts`
    - Implementar generación de sitemap:
      ```typescript
      import { MetadataRoute } from 'next'
      
      export default function sitemap(): MetadataRoute.Sitemap {
        return [
          {
            url: 'https://gabrielpitrella.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
          },
          {
            url: 'https://gabrielpitrella.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
          },
          {
            url: 'https://gabrielpitrella.com/projects',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
          },
          {
            url: 'https://gabrielpitrella.com/certifications',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
          },
        ]
      }
      ```
    - _Bug_Condition: isBugCondition(seo) donde missingSitemap() = true_
    - _Expected_Behavior: Sitemap.xml generado automáticamente facilita indexación_
    - _Preservation: Routing existente permanece igual_
    - _Requirements: 2.10_

  - [x] 4.5 Mejorar configuración de next.config.js (Problema 2.5)
    - Ubicación: `next.config.js`
    - Agregar configuraciones profesionales:
      ```javascript
      const nextConfig = {
        reactStrictMode: true,
        compress: true,
        poweredByHeader: false,
        images: {
          formats: ['image/avif', 'image/webp'],
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        },
        async headers() {
          return [
            {
              source: '/:path*',
              headers: [
                { key: 'X-DNS-Prefetch-Control', value: 'on' },
                { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
              ]
            }
          ]
        }
      }
      ```
    - Crear `.env.example`:
      ```
      # Google Analytics
      NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
      
      # Site URL
      NEXT_PUBLIC_SITE_URL=https://gabrielpitrella.com
      
      # Sentry (optional)
      NEXT_PUBLIC_SENTRY_DSN=
      SENTRY_AUTH_TOKEN=
      ```
    - _Bug_Condition: isBugCondition(config) donde incompleteNextConfig() = true_
    - _Expected_Behavior: Configuración profesional con compresión, security headers, optimización_
    - _Preservation: Build y funcionalidad existente permanecen iguales_
    - _Requirements: 2.11_

  - [x] 4.6 Implementar analytics con eventos personalizados (Problema 2.6)
    - Ubicación: Componentes de interacción (ProjectCard, Footer, etc.)
    - Agregar tracking de eventos:
      ```typescript
      // En ProjectCard al hacer click
      gtag('event', 'project_view', {
        project_name: project.title,
        project_type: project.type
      });
      
      // En Footer al descargar CV
      gtag('event', 'cv_download', { format: 'pdf' });
      
      // En enlaces de contacto
      gtag('event', 'contact_click', {
        method: 'email' | 'linkedin' | 'github'
      });
      ```
    - _Bug_Condition: isBugCondition(analytics) donde solo existe Google Analytics básico_
    - _Expected_Behavior: Analytics profesional con eventos personalizados para análisis detallado_
    - _Preservation: Google Analytics básico continúa funcionando_
    - _Requirements: 2.12_


- [x] 5. Grupo 3: Mejores Prácticas de Desarrollo (Problemas 3.1-3.6)

  - [x] 5.1 Implementar logging profesional (Problema 3.1)
    - Ubicación: `src/components/ErrorBoundary.tsx` línea 29
    - Opción 1 - Sentry (recomendado):
      ```typescript
      import * as Sentry from "@sentry/nextjs";
      
      componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        if (process.env.NODE_ENV === 'production') {
          Sentry.captureException(error, { 
            contexts: { react: { componentStack: errorInfo.componentStack } } 
          });
        } else {
          console.error('Error caught by boundary:', error, errorInfo);
        }
      }
      ```
    - Opción 2 - Custom logging service:
      ```typescript
      import { logError } from '@/lib/logging';
      
      componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        logError(error, { componentStack: errorInfo.componentStack });
      }
      ```
    - _Bug_Condition: isBugCondition(errorHandling) donde hasConsoleErrorInProduction() = true_
    - _Expected_Behavior: Logging profesional en producción sin exponer errores en consola_
    - _Preservation: ErrorBoundary continúa capturando errores y mostrando UI de fallback_
    - _Requirements: 2.13_

  - [x] 5.2 Crear CHANGELOG.md (Problema 3.2)
    - Ubicación: Crear `CHANGELOG.md` en raíz
    - Contenido inicial siguiendo formato Keep a Changelog:
      ```markdown
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
      ```
    - _Bug_Condition: isBugCondition(documentation) donde missingChangelog() = true_
    - _Expected_Behavior: CHANGELOG.md documenta cambios y versiones profesionalmente_
    - _Preservation: Ninguna funcionalidad existente afectada_
    - _Requirements: 2.14_

  - [x] 5.3 Agregar ADRs al README (Problema 3.3)
    - Ubicación: `README.md`
    - Agregar sección de Architecture Decision Records:
      ```markdown
      ## Architecture Decision Records
      
      ### ADR-001: Next.js App Router
      **Status**: Accepted
      **Context**: Need modern routing with server components support
      **Decision**: Use Next.js 13+ App Router instead of Pages Router
      **Consequences**: Better performance with RSC, simpler data fetching
      
      ### ADR-002: Feature-Based Architecture
      **Status**: Accepted
      **Context**: Need scalable code organization
      **Decision**: Organize code by feature in lib/features/*
      **Consequences**: Better modularity, easier to locate related code
      
      ### ADR-003: TailwindCSS for Styling
      **Status**: Accepted
      **Context**: Need consistent, maintainable styling approach
      **Decision**: Use TailwindCSS with custom configuration
      **Consequences**: Faster development, smaller bundle size
      
      ### ADR-004: React Query for Data Fetching
      **Status**: Accepted
      **Context**: Need efficient data fetching with SSR support
      **Decision**: Use @tanstack/react-query for data management
      **Consequences**: Better caching, automatic refetching, SSR support
      ```
    - _Bug_Condition: isBugCondition(documentation) donde README no incluye ADRs_
    - _Expected_Behavior: README documenta decisiones técnicas clave_
    - _Preservation: Contenido existente de README permanece igual_
    - _Requirements: 2.15_

  - [x] 5.4 Aumentar cobertura de tests (Problema 3.4)
    - Ubicación: Crear nuevos archivos de test
    - Archivos a crear:
      - `src/components/__tests__/AnimatedText.test.tsx`
      - `src/components/__tests__/Footer.test.tsx`
      - `src/components/__tests__/AppNavBar.test.tsx`
      - `src/components/projects/__tests__/FeaturedProjectCard.test.tsx`
      - `src/components/projects/__tests__/ProjectGridCard.test.tsx`
      - `src/lib/features/profile/__tests__/hooks.test.ts`
    - Actualizar `package.json` con threshold de cobertura:
      ```json
      "jest": {
        "coverageThreshold": {
          "global": {
            "branches": 70,
            "functions": 70,
            "lines": 70,
            "statements": 70
          }
        }
      }
      ```
    - _Bug_Condition: isBugCondition(testing) donde insufficientTestCoverage() = true_
    - _Expected_Behavior: Cobertura de tests alcanza mínimo 70% en componentes críticos_
    - _Preservation: Tests existentes continúan pasando_
    - _Requirements: 2.16_

  - [x] 5.5 Implementar tests de accesibilidad (Problema 3.5)
    - Ubicación: Crear `src/lib/testing/a11y.ts` y tests
    - Instalar dependencias: `npm install --save-dev jest-axe @axe-core/react`
    - Crear helper de testing:
      ```typescript
      import { axe, toHaveNoViolations } from 'jest-axe';
      expect.extend(toHaveNoViolations);
      
      export async function testA11y(container: HTMLElement) {
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      }
      ```
    - Agregar tests de accesibilidad en componentes críticos
    - Actualizar README con sección de accesibilidad:
      ```markdown
      ## Accessibility
      
      This portfolio follows WCAG 2.1 Level AA guidelines. Automated testing is performed using jest-axe.
      
      ### Testing
      Run accessibility tests: `npm run test:a11y`
      
      ### Manual Testing Performed
      - Keyboard navigation tested across all pages
      - Screen reader compatibility verified with NVDA
      - Color contrast ratios meet WCAG AA standards
      ```
    - _Bug_Condition: isBugCondition(accessibility) donde faltan tests automatizados_
    - _Expected_Behavior: Tests automatizados validan cumplimiento WCAG con evidencia_
    - _Preservation: Accesibilidad existente permanece funcional_
    - _Requirements: 2.17_

  - [x] 5.6 Configurar pre-commit hooks (Problema 3.6)
    - Ubicación: Configurar husky y lint-staged
    - Instalar dependencias: `npm install --save-dev husky lint-staged`
    - Inicializar husky: `npx husky init`
    - Crear `.husky/pre-commit`:
      ```bash
      #!/usr/bin/env sh
      . "$(dirname -- "$0")/_/husky.sh"
      
      npx lint-staged
      ```
    - Agregar a `package.json`:
      ```json
      "lint-staged": {
        "*.{ts,tsx}": [
          "eslint --fix",
          "prettier --write"
        ],
        "*.{json,md}": [
          "prettier --write"
        ]
      },
      "scripts": {
        "prepare": "husky install"
      }
      ```
    - _Bug_Condition: isBugCondition(devPractices) donde missingPreCommitHooks() = true_
    - _Expected_Behavior: Pre-commit hooks validan calidad de código antes de cada commit_
    - _Preservation: Workflow de desarrollo existente permanece igual_
    - _Requirements: 2.18_


- [x] 6. Grupo 4: Estructura de Datos y Contenido (Problemas 4.1-4.4)

  - [x] 6.1 Corregir años de experiencia inconsistentes (Problema 4.1)
    - Ubicación: `src/lib/features/profile/data.ts`
    - Calcular años dinámicamente:
      ```typescript
      const CAREER_START_YEAR = 2022;
      const currentYear = new Date().getFullYear();
      const yearsOfExperience = currentYear - CAREER_START_YEAR;
      
      export const profileData = {
        summary: `${yearsOfExperience} years of experience...`,
        metrics: {
          experience: `${yearsOfExperience}+ years`,
          // ...
        }
      };
      ```
    - _Bug_Condition: isBugCondition(profile) donde años de experiencia son inconsistentes_
    - _Expected_Behavior: Años de experiencia precisos y consistentes en todo el portfolio_
    - _Preservation: Componente de métricas animadas continúa funcionando_
    - _Requirements: 2.19_

  - [x] 6.2 Categorizar skills por tipo y nivel (Problema 4.2)
    - Ubicación: `src/lib/features/skills/data.ts`
    - Reestructurar skills con categorización:
      ```typescript
      export interface Skill {
        name: string;
        level: 'expert' | 'advanced' | 'intermediate' | 'basic';
        category: 'frontend' | 'backend' | 'devops' | 'tools' | 'soft-skills';
      }
      
      export const skillsData: Skill[] = [
        // Frontend - Expert
        { name: 'React', level: 'expert', category: 'frontend' },
        { name: 'Next.js', level: 'expert', category: 'frontend' },
        { name: 'TypeScript', level: 'expert', category: 'frontend' },
        { name: 'TailwindCSS', level: 'expert', category: 'frontend' },
        
        // Frontend - Advanced
        { name: 'HubSpot CMS', level: 'advanced', category: 'frontend' },
        { name: 'Framer Motion', level: 'advanced', category: 'frontend' },
        
        // Backend - Advanced
        { name: 'Node.js', level: 'advanced', category: 'backend' },
        { name: 'Express', level: 'advanced', category: 'backend' },
        
        // DevOps - Intermediate
        { name: 'Docker', level: 'intermediate', category: 'devops' },
        { name: 'CI/CD', level: 'intermediate', category: 'devops' },
        
        // Tools - Advanced
        { name: 'Git', level: 'advanced', category: 'tools' },
        { name: 'VS Code', level: 'advanced', category: 'tools' },
      ];
      
      export const skillsByCategory = {
        frontend: skillsData.filter(s => s.category === 'frontend'),
        backend: skillsData.filter(s => s.category === 'backend'),
        devops: skillsData.filter(s => s.category === 'devops'),
        tools: skillsData.filter(s => s.category === 'tools'),
      };
      ```
    - Actualizar componente Skills.tsx si es necesario para mostrar categorías
    - _Bug_Condition: isBugCondition(skills) donde skills es array plano sin categorización_
    - _Expected_Behavior: Skills categorizadas por tipo con niveles de expertise_
    - _Preservation: Componente Skills continúa renderizando correctamente_
    - _Requirements: 2.20_

  - [x] 6.3 Indicar proyectos privados claramente (Problema 4.3)
    - Ubicación: `src/lib/features/projects/data.ts`
    - Agregar campo isPrivate y manejar URLs:
      ```typescript
      export interface Project {
        title: string;
        description: string;
        img: string;
        link?: string;
        github?: string;
        isPrivate?: boolean;
        privateReason?: string;
      }
      
      export const projectsData: Project[] = [
        {
          title: "Brodeur Development",
          description: "Custom HubSpot CMS website...",
          img: "/images/projects/BrodeurBg.png",
          link: "https://brodeurdevelopment.com",
          isPrivate: true,
          privateReason: "Client project - code repository is confidential"
        },
        {
          title: "HigherMe Story",
          description: "Internal tool for...",
          img: "/images/projects/HigherMeGP.png",
          link: "https://higherme.com",
          isPrivate: true,
          privateReason: "Proprietary company project"
        },
        {
          title: "Portfolio Website",
          description: "Personal portfolio built with Next.js 13...",
          img: "/images/projects/PorfolioGP.png",
          link: "https://gabrielpitrella.com",
          github: "https://github.com/gabrielpitrella/portfolio"
        }
      ];
      ```
    - Actualizar componentes de proyecto para mostrar badge "Private Project":
      ```typescript
      {project.isPrivate && (
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300">
          🔒 Private Project
        </span>
      )}
      ```
    - _Bug_Condition: isBugCondition(projects) donde proyectos privados tienen URLs duplicadas_
    - _Expected_Behavior: Proyectos privados indicados claramente sin duplicar URLs_
    - _Preservation: Renderizado de proyectos continúa funcionando_
    - _Requirements: 2.21_

  - [x] 6.4 Corregir rol en Toyota (Problema 4.4)
    - Ubicación: `src/lib/features/experience/data.ts`
    - Reflejar rol principal con precisión:
      ```typescript
      {
        position: "Quality Assembly Engineer",
        company: "Toyota Motor Manufacturing Canada",
        time: "2019-2022",
        address: "Woodstock, ON",
        work: [
          "Ensured quality standards in vehicle assembly line operations",
          "Identified and resolved production defects reducing error rate by 15%",
          "Collaborated with cross-functional teams to improve processes",
          "Transitioned to software development through internal automation projects",
          "Built internal tools using Python and JavaScript to streamline quality reporting"
        ],
        technologies: ["Python", "JavaScript", "Excel VBA", "Quality Management Systems"]
      }
      ```
    - _Bug_Condition: isBugCondition(experience) donde rol en Toyota es inconsistente_
    - _Expected_Behavior: Experiencia refleja rol principal sin confusión_
    - _Preservation: Componente Experience continúa renderizando correctamente_
    - _Requirements: 2.22_


## Fase 4: Validación Post-Implementación

- [x] 7. Verificar que tests de exploración ahora pasan

  - [x] 7.1 Re-ejecutar tests de condición de bug
    - **Property 1: Expected Behavior** - Comportamiento Profesional Implementado
    - **IMPORTANTE**: Re-ejecutar los MISMOS tests de la tarea 1 - NO escribir tests nuevos
    - Los tests de la tarea 1 codifican el comportamiento esperado
    - Cuando estos tests pasen, confirma que el comportamiento esperado está satisfecho
    - Ejecutar todos los 22 tests de exploración de la tarea 1
    - **RESULTADO ESPERADO**: Tests PASAN (confirma que bugs están corregidos)
    - Verificar que cada problema identificado está resuelto:
      - Test 1.1: Título profesional "Full Stack Engineer | HubSpot Specialist"
      - Test 1.2: Biografía con al menos 3 métricas cuantificables
      - Test 1.3: Proyectos sin errores gramaticales
      - Test 1.4: Experiencia con estructura de bullet points
      - Test 1.5: Footer profesional sin emojis
      - Test 1.6: Métricas precisas sin "+"
      - Test 2.1: public/robots.txt existe
      - Test 2.2: Open Graph tags presentes
      - Test 2.3: Structured data (JSON-LD) presente
      - Test 2.4: src/app/sitemap.ts existe
      - Test 2.5: next.config.js con configuraciones profesionales
      - Test 2.6: Analytics con eventos personalizados
      - Test 3.1: Logging profesional (no console.error en producción)
      - Test 3.2: CHANGELOG.md existe
      - Test 3.3: README.md con ADRs
      - Test 3.4: Cobertura de tests >= 70%
      - Test 3.5: Tests de accesibilidad implementados
      - Test 3.6: Pre-commit hooks configurados
      - Test 4.1: Años de experiencia consistentes
      - Test 4.2: Skills categorizadas
      - Test 4.3: Proyectos privados con isPrivate: true
      - Test 4.4: Rol en Toyota preciso
    - _Requirements: Propiedades de Comportamiento Esperado del diseño_

  - [x] 7.2 Verificar que tests de preservación siguen pasando
    - **Property 2: Preservation** - Funcionalidad Técnica Preservada
    - **IMPORTANTE**: Re-ejecutar los MISMOS tests de la tarea 2 - NO escribir tests nuevos
    - Ejecutar todos los 15 tests de preservación de la tarea 2
    - **RESULTADO ESPERADO**: Tests PASAN (confirma que no hay regresiones)
    - Confirmar que toda funcionalidad técnica existente permanece intacta:
      - Test 3.1: TransitionEffect funciona
      - Test 3.2: Theme switcher persiste
      - Test 3.3: React Query SSR funciona
      - Test 3.4: Menú mobile funciona
      - Test 3.5: Métricas animadas funcionan
      - Test 3.6: Arquitectura feature-based intacta
      - Test 3.7: Imports con @ funcionan
      - Test 3.8: TypeScript estricto sin any
      - Test 3.9: Server/Client Components correctos
      - Test 3.10: TailwindCSS funciona
      - Test 3.11: ErrorBoundary captura errores
      - Test 3.12: Loading skeletons funcionan
      - Test 3.13: Featured projects ordenados
      - Test 3.14: Image optimization funciona
      - Test 3.15: App Router funciona


- [x] 8. Checkpoint Final - Asegurar que todos los tests pasan
  - Ejecutar suite completa de tests: `npm test`
  - Verificar cobertura de tests: `npm run test:coverage`
  - Confirmar que cobertura alcanza 70% en todas las métricas
  - Ejecutar tests de accesibilidad: `npm run test:a11y`
  - Ejecutar linter: `npm run lint`
  - Ejecutar type-check: `npm run type-check`
  - Verificar build de producción: `npm run build`
  - Confirmar que no hay errores ni warnings
  - Probar pre-commit hook haciendo un commit de prueba
  - Verificar que todos los 22 problemas están corregidos
  - Verificar que toda funcionalidad técnica existente permanece intacta
  - Si surgen preguntas o problemas, consultar con el usuario

---

## Resumen de Tareas

**Total de tareas principales**: 8
- Fase 1: Tests de Exploración (1 tarea con 22 sub-tests)
- Fase 2: Tests de Preservación (1 tarea con 15 sub-tests)
- Fase 3: Implementación (4 grupos con 22 correcciones)
- Fase 4: Validación (2 tareas de verificación + 1 checkpoint)

**Archivos a modificar**: 10
- `src/lib/features/profile/data.ts`
- `src/lib/features/projects/data.ts`
- `src/lib/features/experience/data.ts`
- `src/lib/features/skills/data.ts`
- `src/components/Footer.tsx`
- `src/components/ErrorBoundary.tsx`
- `src/app/layout.tsx`
- `next.config.js`
- `README.md`
- `package.json`

**Archivos a crear**: 7+
- `public/robots.txt`
- `src/app/sitemap.ts`
- `.env.example`
- `CHANGELOG.md`
- `src/lib/testing/a11y.ts`
- `.husky/pre-commit`
- 6+ archivos de test nuevos

**Criterios de Aceptación**:
1. ✅ Todos los 22 problemas identificados están corregidos
2. ✅ Todos los tests de Fix Checking pasan (22 tests)
3. ✅ Todos los tests de Preservation Checking pasan (15 tests)
4. ✅ Cobertura de tests alcanza mínimo 70% en todas las métricas
5. ✅ Tests de accesibilidad automatizados pasan sin violaciones
6. ✅ Pre-commit hooks están configurados y funcionando
7. ✅ CHANGELOG.md está creado y actualizado
8. ✅ README.md incluye ADRs y documentación de accesibilidad
9. ✅ Variables de entorno están documentadas en .env.example
10. ✅ Build de producción se completa sin errores ni warnings

