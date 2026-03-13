# Documento de Requisitos de Bugfix: Profesionalización del Portfolio

## Introducción

Este documento identifica y corrige aspectos no profesionales del portfolio de Gabriel Pitrella que afectan su presentación como ingeniero de software. El portfolio actual presenta múltiples problemas de contenido, estructura, configuración técnica y mejores prácticas que disminuyen su impacto profesional. Como carta de presentación ante empleadores y clientes, estos defectos pueden generar una impresión negativa sobre la calidad del trabajo y atención al detalle del candidato.

Los problemas identificados incluyen: contenido genérico y poco específico, falta de métricas cuantificables, configuraciones técnicas incompletas, ausencia de optimizaciones SEO críticas, y violaciones de mejores prácticas de desarrollo profesional.

## Análisis del Bug

### Comportamiento Actual (Defecto)

#### 1. Contenido y Presentación

1.1 CUANDO un reclutador lee el título "Passion Fuels Purpose!" en la página About ENTONCES encuentra un mensaje genérico y poco profesional que no comunica valor técnico

1.2 CUANDO un empleador revisa la biografía ENTONCES encuentra descripciones vagas como "architecting reliable and scalable web experiences" sin métricas específicas ni logros cuantificables

1.3 CUANDO un visitante lee las descripciones de proyectos ENTONCES encuentra textos con errores gramaticales ("brodeurd-development" en slug, "Brodeurd Development" como título) y descripciones inconsistentes en calidad

1.4 CUANDO un reclutador revisa la experiencia laboral ENTONCES encuentra bloques de texto largos sin estructura, mezclando responsabilidades con tecnologías, dificultando la lectura rápida

1.5 CUANDO un visitante lee "Build With ❤️" en el footer ENTONCES encuentra un tono informal inadecuado para un portfolio profesional de ingeniería

1.6 CUANDO un empleador revisa las métricas en About ("3+ University certificates", "15+ Projects completed") ENTONCES encuentra números inflados o poco verificables que generan desconfianza

#### 2. Configuración Técnica y SEO

2.1 CUANDO Google indexa el sitio ENTONCES no encuentra un archivo robots.txt configurado, afectando el control sobre el rastreo

2.2 CUANDO se comparte el portfolio en redes sociales ENTONCES no se muestran Open Graph tags ni Twitter Cards, resultando en previews genéricas sin impacto

2.3 CUANDO Google analiza las páginas ENTONCES no encuentra structured data (JSON-LD) para mejorar la visibilidad en resultados de búsqueda

2.4 CUANDO un usuario accede al sitio ENTONCES no hay un sitemap.xml generado automáticamente, dificultando la indexación completa

2.5 CUANDO se revisa next.config.js ENTONCES faltan configuraciones profesionales como compresión, optimización de imágenes, headers de seguridad y variables de entorno documentadas

2.6 CUANDO se analiza el rendimiento ENTONCES no hay implementación de analytics profesional (solo Google Analytics básico sin eventos personalizados)

#### 3. Mejores Prácticas de Desarrollo

3.1 CUANDO se revisa el código ENTONCES se encuentra console.error en producción (ErrorBoundary.tsx línea 29) sin un servicio de logging profesional

3.2 CUANDO se analiza la estructura ENTONCES no existe un archivo CHANGELOG.md para documentar cambios y versiones del portfolio

3.3 CUANDO se revisa la documentación ENTONCES el README.md contiene información técnica de desarrollo pero no incluye una sección de arquitectura de decisiones o ADRs

3.4 CUANDO se buscan tests ENTONCES solo existen 2 archivos de test básicos, sin cobertura de componentes críticos ni tests E2E

3.5 CUANDO se revisa la accesibilidad ENTONCES faltan pruebas automatizadas de a11y y el README afirma "WCAG compliant" sin evidencia

3.6 CUANDO se analiza el proyecto ENTONCES no hay configuración de pre-commit hooks (husky) para validar calidad de código antes de commits

#### 4. Estructura de Datos y Contenido

4.1 CUANDO se revisan los datos de perfil ENTONCES se encuentran inconsistencias: "4+ years" en summary vs experiencia real desde 2022 (3 años)

4.2 CUANDO se analiza la lista de skills ENTONCES se encuentra una lista plana de 40+ tecnologías sin categorización ni niveles de expertise, dificultando la identificación de fortalezas clave

4.3 CUANDO se revisan los proyectos ENTONCES algunos tienen URLs de repo y live idénticas (Brodeur Development, HigherMe Story), sugiriendo proyectos privados sin repositorio público

4.4 CUANDO se lee la experiencia en Toyota ENTONCES se describe como "Front-End Developer" pero el rol real era "Quality Assembly Engineer", generando confusión sobre la trayectoria

### Comportamiento Esperado (Correcto)

#### 1. Contenido y Presentación

2.1 CUANDO un reclutador lee el título de About ENTONCES DEBERÁ encontrar un mensaje profesional y específico como "Full Stack Engineer | HubSpot Specialist" que comunique valor inmediato

2.2 CUANDO un empleador revisa la biografía ENTONCES DEBERÁ encontrar logros cuantificables específicos como "Reduced page load time by 40%" o "Built 20+ HubSpot CMS sites serving 100K+ monthly visitors"

2.3 CUANDO un visitante lee las descripciones de proyectos ENTONCES DEBERÁ encontrar textos sin errores, con nombres correctos y descripciones consistentes en calidad y formato

2.4 CUANDO un reclutador revisa la experiencia laboral ENTONCES DEBERÁ encontrar bullet points estructurados separando logros, responsabilidades y tecnologías para lectura rápida

2.5 CUANDO un visitante lee el footer ENTONCES DEBERÁ encontrar un mensaje profesional como "Built by Gabriel Pitrella" sin emojis ni lenguaje informal

2.6 CUANDO un empleador revisa las métricas ENTONCES DEBERÁ encontrar números precisos y verificables con contexto claro (ej: "8 Professional Certifications" en lugar de "3+ University certificates")

#### 2. Configuración Técnica y SEO

2.7 CUANDO Google indexa el sitio ENTONCES DEBERÁ encontrar un robots.txt configurado correctamente en /public con directivas apropiadas

2.8 CUANDO se comparte el portfolio en redes sociales ENTONCES DEBERÁ mostrar Open Graph tags y Twitter Cards con imagen, título y descripción profesionales

2.9 CUANDO Google analiza las páginas ENTONCES DEBERÁ encontrar structured data (JSON-LD) con Person schema y WebSite schema para mejorar SEO

2.10 CUANDO un usuario accede al sitio ENTONCES DEBERÁ existir un sitemap.xml generado automáticamente por Next.js

2.11 CUANDO se revisa next.config.js ENTONCES DEBERÁ incluir configuraciones profesionales: compresión gzip, optimización de imágenes, security headers, y variables de entorno documentadas en .env.example

2.12 CUANDO se analiza el rendimiento ENTONCES DEBERÁ haber analytics profesional con eventos personalizados (project views, CV downloads, contact clicks)

#### 3. Mejores Prácticas de Desarrollo

2.13 CUANDO se revisa el código ENTONCES DEBERÁ usar un servicio de logging profesional (ej: Sentry) en lugar de console.error en producción

2.14 CUANDO se analiza la estructura ENTONCES DEBERÁ existir un CHANGELOG.md siguiendo el formato Keep a Changelog para documentar versiones

2.15 CUANDO se revisa la documentación ENTONCES DEBERÁ incluir una sección de Architecture Decision Records (ADRs) explicando decisiones técnicas clave

2.16 CUANDO se buscan tests ENTONCES DEBERÁ existir cobertura de al menos 70% en componentes críticos y tests E2E con Playwright o Cypress

2.17 CUANDO se revisa la accesibilidad ENTONCES DEBERÁ incluir tests automatizados con axe-core o similar, y documentación de cumplimiento WCAG

2.18 CUANDO se analiza el proyecto ENTONCES DEBERÁ tener pre-commit hooks configurados con husky para lint, format y type-check

#### 4. Estructura de Datos y Contenido

2.19 CUANDO se revisan los datos de perfil ENTONCES DEBERÁ mostrar años de experiencia precisos y consistentes en todo el portfolio

2.20 CUANDO se analiza la lista de skills ENTONCES DEBERÁ estar categorizada por tipo (Frontend, Backend, DevOps, etc.) con indicadores de nivel de expertise

2.21 CUANDO se revisan los proyectos ENTONCES DEBERÁ indicar claramente cuando un proyecto es privado/confidencial en lugar de duplicar URLs

2.22 CUANDO se lee la experiencia en Toyota ENTONCES DEBERÁ reflejar con precisión el rol principal y mencionar el desarrollo como actividad secundaria o transición

### Comportamiento Sin Cambios (Prevención de Regresiones)

#### 3. Funcionalidad Técnica Existente

3.1 CUANDO un usuario navega entre páginas ENTONCES el sistema DEBERÁ CONTINUAR mostrando transiciones suaves con TransitionEffect

3.2 CUANDO un usuario cambia entre tema claro y oscuro ENTONCES el sistema DEBERÁ CONTINUAR persistiendo la preferencia y aplicándola correctamente

3.3 CUANDO se carga la página ENTONCES React Query DEBERÁ CONTINUAR haciendo prefetch de datos en el servidor para SSR óptimo

3.4 CUANDO un usuario accede desde mobile ENTONCES el menú hamburguesa DEBERÁ CONTINUAR funcionando correctamente con animaciones

3.5 CUANDO se renderizan las métricas en About ENTONCES los números animados DEBERÁ CONTINUAR usando framer-motion para contar desde 0

#### 4. Estructura de Código

3.6 CUANDO se organiza el código ENTONCES DEBERÁ CONTINUAR usando la arquitectura feature-based actual (lib/features/*)

3.7 CUANDO se importan componentes ENTONCES DEBERÁ CONTINUAR usando alias @ para imports absolutos

3.8 CUANDO se definen tipos ENTONCES DEBERÁ CONTINUAR usando TypeScript estricto sin any types

3.9 CUANDO se crean componentes ENTONCES DEBERÁ CONTINUAR separando Server Components y Client Components apropiadamente

3.10 CUANDO se estilizan componentes ENTONCES DEBERÁ CONTINUAR usando TailwindCSS con la configuración actual

#### 5. Funcionalidad de Componentes

3.11 CUANDO se muestra el componente ErrorBoundary ENTONCES DEBERÁ CONTINUAR capturando errores y mostrando UI de fallback

3.12 CUANDO se cargan datos ENTONCES DEBERÁ CONTINUAR mostrando skeletons de loading apropiados

3.13 CUANDO se muestran proyectos ENTONCES DEBERÁ CONTINUAR ordenando featured projects primero

3.14 CUANDO se renderizan imágenes ENTONCES DEBERÁ CONTINUAR usando Next.js Image con optimización automática

3.15 CUANDO se accede a rutas ENTONCES DEBERÁ CONTINUAR usando App Router de Next.js 13+ correctamente
