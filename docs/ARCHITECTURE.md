# Project Architecture

This document outlines the modular architecture and best practices used in this project.

## Directory Structure

```
src/
├── app/                    # Next.js app router
│   ├── dashboard/         # Dashboard routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # UI components
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components (shadcn)
├── data/                  # Data layer (separated from components)
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── about.ts
│   └── navigation.ts
├── features/              # Feature-based modules
│   └── dashboard/        # Dashboard feature
│       ├── components/   # Feature-specific components
│       └── layouts/      # Feature-specific layouts
├── shared/               # Shared utilities and components
│   ├── components/       # Reusable shared components
│   ├── hooks/           # Shared React hooks
│   └── utils/           # Shared utility functions
├── types/                # TypeScript type definitions
├── config/               # Configuration files
│   └── constants.ts     # App-wide constants
└── lib/                  # Third-party library utilities
```

## Key Principles

### 1. Separation of Concerns

- **Data Layer**: All data is separated from components in the `data/` directory
- **Types**: Centralized type definitions in `types/`
- **Constants**: App-wide constants in `config/`
- **Components**: Pure presentation components that receive data as props

### 2. Feature-Based Organization

Features are organized in the `features/` directory, each containing:
- Components specific to that feature
- Layouts for feature pages
- Any feature-specific logic

### 3. Shared Resources

Commonly used components, hooks, and utilities are in `shared/`:
- `shared/components/`: Reusable UI components (e.g., SectionHeader, SectionContainer)
- `shared/hooks/`: Custom React hooks
- `shared/utils/`: Utility functions

### 4. Type Safety

All data structures are typed using TypeScript:
- Types defined in `types/index.ts`
- Data files import and use these types
- Components receive typed props

## Dashboard Structure

The dashboard is built as a scalable feature module:

```
features/dashboard/
├── components/
│   ├── dashboard-header.tsx
│   └── dashboard-sidebar.tsx
└── layouts/
    └── dashboard-layout.tsx
```

### Adding Dashboard Pages

1. Create a new page in `app/dashboard/[page-name]/page.tsx`
2. Add route to `dashboard-sidebar.tsx` if needed
3. Use the `DashboardLayout` wrapper (automatically applied via `app/dashboard/layout.tsx`)

## Data Management

### Adding New Data

1. Define types in `types/index.ts`
2. Create data file in `data/` directory
3. Export data and icon mappings
4. Import in components that need it

Example:
```typescript
// types/index.ts
export interface MyData {
  id: number;
  title: string;
}

// data/mydata.ts
import { MyData } from "@/types";
export const myData: MyData[] = [...];
```

## Component Patterns

### Section Components

All section components follow this pattern:
- Use `SectionContainer` for consistent spacing and background
- Use `SectionHeader` for consistent headers
- Import data from `data/` directory
- Use icon resolver for dynamic icons

### Reusable Components

Shared components in `shared/components/`:
- `SectionHeader`: Standardized section headers
- `SectionContainer`: Consistent section containers with backgrounds

## Best Practices

1. **No Hardcoded Data**: All data should be in the `data/` directory
2. **Type Everything**: Use TypeScript types for all data structures
3. **Reusable Components**: Extract common patterns to `shared/`
4. **Feature Isolation**: Keep feature-specific code in `features/`
5. **Consistent Styling**: Use constants from `config/constants.ts` for theme values

## Scaling Guidelines

### Adding New Features

1. Create feature directory in `features/`
2. Add feature-specific components
3. Create routes in `app/` if needed
4. Keep feature code isolated

### Adding New Sections

1. Create data file in `data/`
2. Create section component in `components/sections/`
3. Use shared components (`SectionContainer`, `SectionHeader`)
4. Add to main page in `app/page.tsx`

### Adding Dashboard Content

1. Create page in `app/dashboard/[name]/page.tsx`
2. Add route to sidebar navigation
3. Use dashboard layout (automatic)
4. Follow dashboard styling patterns

## Migration Notes

The project has been refactored from a flat structure to this modular architecture:
- Data extracted from components to `data/` directory
- Types centralized in `types/`
- Constants moved to `config/`
- Shared components created in `shared/`
- Dashboard structure added for scalability

