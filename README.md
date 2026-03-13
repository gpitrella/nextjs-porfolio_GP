# Portfolio - Gabriel Pitrella

Portfolio profesional construido con Next.js 13+ (App Router), TypeScript, React Query, y TailwindCSS.

## 🚀 Características

- **Next.js 13+ App Router** - Arquitectura moderna con Server/Client Components
- **TypeScript** - Type safety completo
- **React Query** - Gestión de estado asíncrono
- **TailwindCSS + shadcn/ui** - Estilos utility-first y componentes reutilizables
- **Feature-based Architecture** - Organización modular por features
- **Error Boundaries** - Manejo robusto de errores
- **Testing** - Jest + React Testing Library
- **Accesibilidad** - WCAG compliant

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Root layout con Error Boundary
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── certifications/    # Certifications page
│   └── api/               # API routes
├── components/            # Componentes React
│   ├── ui/               # Componentes UI base (shadcn)
│   ├── __tests__/        # Tests unitarios
│   └── ...
├── lib/
│   ├── components/       # Biblioteca de componentes compartidos
│   ├── features/         # Feature modules
│   │   ├── projects/
│   │   ├── profile/
│   │   ├── certificates/
│   │   ├── experience/
│   │   └── education/
│   └── utils/            # Utilidades
└── styles/               # Estilos globales
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint

# Tests
npm test
npm run test:watch
npm run test:coverage
```

## 🧪 Testing

El proyecto incluye configuración de Jest y React Testing Library. Los tests se encuentran en `src/components/__tests__/`.

```bash
# Ejecutar todos los tests
npm test

# Modo watch
npm run test:watch

# Con coverage
npm run test:coverage
```

## 🏗️ Arquitectura de Features

Cada feature sigue esta estructura:

```
lib/features/<featureName>/
├── index.ts              # Exports públicos
├── types.ts              # TypeScript types
├── keys.ts               # React Query keys
├── data.ts               # Datos estáticos (si aplica)
├── adapters/             # Adaptadores de datos
└── scopes/
    ├── me/
    │   ├── api.ts        # API calls
    │   ├── hooks.ts      # React Query hooks
    │   └── selectors.ts  # Selectores de datos
    ├── accelerator/
    └── admin/
```

## 🎨 Componentes Compartidos

Los componentes reutilizables están disponibles en `lib/components/index.ts`:

```typescript
import { Button, Card, Layout, ErrorBoundary } from '@/lib/components';
```

## 🚨 Error Boundaries

El proyecto incluye Error Boundaries para manejo robusto de errores. El ErrorBoundary principal está en el root layout.

## 📝 Convenciones

- **TypeScript**: Todos los componentes deben estar tipados
- **Client Components**: Marcar con `'use client'` cuando sea necesario
- **Server Components**: Por defecto en App Router
- **Naming**: PascalCase para componentes, camelCase para funciones
- **Imports**: Usar alias `@/` para imports absolutos

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local`:

```env
# Agregar variables de entorno según sea necesario
```

### TypeScript

El proyecto usa TypeScript estricto. Configuración en `tsconfig.json`.

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query](https://tanstack.com/query/latest)
- [TailwindCSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y propiedad de Gabriel Pitrella.

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
