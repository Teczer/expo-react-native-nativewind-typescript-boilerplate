# AGENTS.md - Fast Expo App Monorepo

## Table of Contents

- [Project Overview](#project-overview)
- [Monorepo Architecture](#monorepo-architecture)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development Workflows](#development-workflows)
- [Turborepo & Workspaces](#turborepo--workspaces)
- [CLI Package](#cli-package)
- [Template (Boilerplate)](#template-boilerplate)
- [Website Package](#website-package)
- [Optional Modules](#optional-modules)
- [Coding Conventions](#coding-conventions)
- [Scripts Reference](#scripts-reference)
- [Best Practices](#best-practices)

---

## Project Overview

**Fast Expo App** is a complete monorepo containing:

1. A **CLI tool** (`fast-expo-app`) for scaffolding React Native projects
2. A **production-ready boilerplate** with modern best practices
3. A **landing website** to showcase the project

### What's Included (v3.0.0)

#### Core Stack (Always Included)

✅ **Expo SDK 54** with New Architecture enabled  
✅ **React Native 0.81** with Fabric renderer  
✅ **TypeScript 5.9** with strict mode  
✅ **Expo Router v6** for file-based routing with typed routes  
✅ **MMKV v4** for ultra-fast storage (Nitro Modules, ~30x faster)  
✅ **expo-haptics** for native haptic feedback  
✅ **react-native-edge-to-edge** for modern edge-to-edge display  
✅ **react-native-worklets** for high-performance animations

#### Styling Options (Choose One)

✅ **NativeWind v4** - Tailwind CSS v3 for React Native with dark mode  
✅ **Unistyles v3** - Type-safe styling with 3-theme system (light/dark/premium)  
✅ **Uniwind v1.2** - Tailwind CSS v4 with live theme switching (light/dark/premium)

#### Optional Modules

✅ **TanStack Query v5** - Data fetching with MMKV persistence  
✅ **Zustand** - State management with MMKV storage  
✅ **Expo Dev Client** - Enhanced debugging  
✅ **Jest** - Unit testing

#### Pre-configured

✅ **Theme System** - Persistent themes with MMKV  
✅ **ESLint + Prettier** - Code quality tools  
✅ **Absolute Imports** - `@/` prefix for clean imports  
✅ **Turborepo** - Monorepo management

---

## Monorepo Architecture

This project follows the **create-expo-stack** architecture pattern with CLI source at the root level.

### Key Design Decisions

1. **CLI source** in `/cli/` (not in packages) for easier development
2. **Templates** in `/cli/templates/` for better organization
3. **Modules** in `/cli/modules/` for future extensibility
4. **Published package** in `/packages/fast-expo-app/`
5. **Website** in `/www/` for marketing and documentation

### Benefits

- 🎯 **Clean Separation** - CLI, template, and website are isolated
- ⚡ **Fast Development** - Turborepo caching and parallel execution
- 📦 **Easy Publishing** - Single package ready for npm
- 🔧 **Extensible** - Easy to add new modules and features
- 🌐 **Production Ready** - Includes landing page and documentation

---

## Project Structure

```
fast-expo-app-monorepo/
│
├── cli/                          # 🛠️ CLI Source (root level)
│   ├── src/
│   │   ├── index.ts              # CLI implementation
│   │   ├── generate-project.ts   # Project generation logic
│   │   ├── module-manager.ts     # Module management
│   │   └── ascii-art.ts          # CLI banner
│   ├── templates/
│   │   └── base/                 # 📱 React Native Template
│   │       ├── app/              # Expo Router routes
│   │       ├── components/       # React components
│   │       ├── lib/              # Core utilities
│   │       ├── providers/        # React providers
│   │       ├── constants/        # App constants
│   │       ├── assets/           # Images, fonts
│   │       ├── android/          # Android native
│   │       ├── ios/              # iOS native
│   │       ├── __tests__/        # Jest tests (optional)
│   │       └── README.md
│   ├── modules/                  # 🔮 Conditional modules
│   │   ├── app/                  # Screen modules (styling-specific)
│   │   ├── components/           # Component modules
│   │   ├── constants/            # Constants (themes, colors)
│   │   ├── layout/               # Layout modules (styling-specific)
│   │   ├── lib/                  # Library modules (hooks, storage)
│   │   ├── query-provider/       # React Query providers
│   │   ├── storage/              # MMKV storage modules
│   │   ├── styling/              # Styling configs (Unistyles)
│   │   └── utils/                # Utility modules (colors)
│   ├── tsconfig.json             # CLI TypeScript config
│   └── README.md                 # CLI documentation
│
├── packages/
│   └── fast-expo-app/            # 📦 Published NPM Package
│       ├── bin/
│       │   └── fast-expo-app.js  # Executable entry point
│       ├── dist/                 # Compiled code (from /cli/src/)
│       │   ├── index.js
│       │   ├── index.d.ts
│       │   └── *.map
│       ├── package.json          # NPM package config
│       ├── README.md             # Package documentation
│       └── CHANGELOG.md          # Version history
│
├── www/                          # 🌐 Landing Website (Next.js)
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── global.css
│   ├── components/
│   │   ├── magicui/              # UI components
│   │   ├── AnimatedBeams.tsx
│   │   ├── OrbitingCircleDemo.tsx
│   │   └── ...
│   ├── public/
│   ├── package.json
│   ├── next.config.mjs
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── scripts/                      # 🔧 Utility Scripts
│   ├── get_started.sh            # Install all dependencies
│   └── clean.sh                  # Clean build artifacts
│
├── package.json                  # Root monorepo config
├── turbo.json                    # Turborepo configuration
├── bun.lock                      # Bun lockfile
├── AGENTS.md                     # Complete documentation for AI assistants
├── CONTRIBUTING.md               # Contribution guide
├── README.md                     # Main documentation
├── QUICK_START.md                # Quick start guide
└── LICENSE                       # MIT License
```

---

## What's New in v3.2.0 🆕

### Uniwind Styling Option

**Uniwind v1.2** is now available as a third styling option:

- **Tailwind CSS v4** - Modern CSS-first configuration
- **Live theme switching** - `Uniwind.setTheme()` for instant updates
- **3-theme system** - Light/Dark/Premium with CSS variables
- **Type-safe** - Auto-generated TypeScript types
- **withUniwind HOC** - Wrap third-party components

#### Uniwind Dependencies

```json
{
  "uniwind": "1.2.4",
  "tailwindcss": "4.1.16",
  "postcss": "8.5.6",
  "lightningcss": "1.30.2"
}
```

#### Uniwind Configuration

- `global.css` in `app/` folder with `@layer theme` + `@variant` blocks
- `metro.config.js` uses `withUniwindConfig` with `extraThemes: ['premium']`
- `useUniwindTheme()` hook for theme management with MMKV persistence

---

## What's New in v3.0.0

### Major Features

#### 1. **Dual Styling System** 🎨

Choose between two powerful styling solutions:

- **NativeWind v4** - Tailwind CSS for React Native
- **Unistyles v3** - Type-safe styling with breakpoints

#### 2. **Enhanced Theme System** 🌓

- **3-theme support** for Unistyles (light/dark/premium)
- **MMKV persistence** - Themes saved automatically
- **Haptic feedback** - Native feel on theme toggle
- **Runtime switching** - Instant theme changes

#### 3. **Mandatory MMKV** 💾

- Now included by default (not optional)
- ~30x faster than AsyncStorage
- Nitro Modules for native performance
- Persistent storage for themes and state

#### 4. **Better Architecture** 🏗️

```
Generated Project Structure:
project/
├── lib/                    # Core utilities
│   ├── mmkvStorage.ts     # MMKV storage
│   ├── query-client.ts    # React Query config
│   ├── use-persisted-color-scheme.ts  # NativeWind theme hook
│   └── zustand.ts         # Zustand store (optional)
├── providers/              # React providers
│   └── query-provider.tsx # React Query provider
├── utils/                  # Utilities
│   └── colors.ts          # Color utilities (NativeWind)
├── constants/              # Constants
│   └── themes.ts          # Theme configs (Unistyles)
├── components/             # React components
│   ├── theme-toggle.tsx   # Theme toggle component
│   ├── container.tsx      # Container component
│   └── external-link.tsx  # External link component
└── app/                    # Expo Router screens
```

#### 5. **Conditional Generation** 🔧

Files are generated based on user choices:

- **Styling-specific files** - Only NativeWind OR Unistyles files
- **Module-specific files** - Only selected modules
- **Clean output** - No unused files

#### 6. **Performance Enhancements** ⚡

- **react-native-worklets** - High-performance animations
- **expo-haptics** - Native haptic feedback
- **react-native-edge-to-edge** - Modern display
- **Optimized imports** - Absolute paths with `@/`

### Breaking Changes from v2.x

1. **MMKV is mandatory** - No longer optional
2. **Styling choice required** - Must choose NativeWind OR Unistyles
3. **File structure changed** - New `providers/` and `utils/` directories
4. **Theme system redesigned** - New persistence with MMKV
5. **Component naming** - All kebab-case (e.g., `theme-toggle.tsx`)

### Migration from v2.x

If you have an existing v2.x project:

1. Generate a new v3.0.0 project
2. Copy your custom code
3. Update imports to match new structure
4. Adopt new theme system with MMKV persistence

---

### Workspace Configuration

The monorepo is configured with **Bun workspaces** and **Turborepo**:

```json
{
  "name": "fast-expo-app-monorepo",
  "workspaces": ["www", "packages/fast-expo-app"]
}
```

**Note**: The `/cli/` directory is NOT a workspace—it's the source that gets compiled into `packages/fast-expo-app/dist/`.

---

## Tech Stack

### Core Stack (Always Included)

- **React Native**: 0.81.5
- **React**: 19.1.0
- **Expo**: 54.0.23
- **TypeScript**: 5.9.2
- **Bun**: 1.2.14 (recommended)
- **Turborepo**: 2.6.0

### Navigation & Routing

- **Expo Router**: v6 (File-based routing with typed routes)

### Data Fetching (Optional)

- **TanStack Query**: v5.90.7 (React Query)

### Styling

- **NativeWind**: v4.2.1 (TailwindCSS for React Native)
- **Tailwind CSS**: v3.3.2

### Storage & Performance (Optional)

- **MMKV**: v4.0.0 with Nitro Modules (~30x faster than AsyncStorage)
- **React Native Reanimated**: v4.1.3
- **React Native Worklets**: v0.5.1

### Development Tools

- **Expo Dev Client**: v6.0.17 (optional)
- **ESLint**: v8.57.0
- **Prettier**: v3.6.2
- **Jest**: v29.7.0 (optional)

### Website Stack

- **Next.js**: 15.5.6
- **React**: 19.1.0
- **Tailwind CSS**: 3.4.x
- **TypeScript**: 5.9.2

---

## Getting Started

### For End Users (Using the CLI)

```bash
# Using bunx (recommended)
bunx fast-expo-app@latest

# Or using npx
npx fast-expo-app@latest
```

The CLI will:

1. Prompt for project name
2. Ask which optional modules to include
3. Copy the template from `/cli/templates/base/`
4. Remove unselected modules
5. Set up a fresh Git history

### For Contributors (Development)

```bash
# 1. Clone the repository
git clone https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate.git
cd expo-react-native-nativewind-typescript-boilerplate

# 2. Install all dependencies
bun run get_started
# This installs deps in: root, cli template, www, cli package

# 3. Build the CLI
bun run build:cli

# 4. (Optional) Link CLI globally for testing
cd packages/fast-expo-app
bun link
cd ../..

# 5. Test the CLI
fast-expo-app
```

---

## Development Workflows

### Available Scripts

#### 🚀 Setup & Maintenance

```bash
bun run get_started          # Install dependencies in all packages
bun run clean                # Remove all node_modules and build artifacts
bun run clean:cli            # Clean CLI package only
bun run clean:www            # Clean website only
bun run clean:template       # Clean template only
```

#### 🔨 Build

```bash
bun run build                # Build all packages (Turborepo)
bun run build:cli            # Build CLI only (TypeScript compilation)
bun run build:www            # Build website only (Next.js)
```

#### 💻 Development

```bash
bun run dev                  # Run all in dev mode (Turborepo)
bun run dev:cli              # Watch CLI changes (TypeScript)
bun run dev:www              # Run website dev server (Next.js)
```

#### 📱 Template Testing

```bash
bun run template:start       # Start Expo dev server in template
bun run template:ios         # Run template on iOS simulator
bun run template:android     # Run template on Android emulator
```

#### ✨ Code Quality

```bash
bun run format               # Format all files with Prettier
bun run format:check         # Check formatting
bun run lint                 # Run ESLint on all packages
```

### Workflow Examples

#### Working on the CLI

```bash
# 1. Make changes to cli/src/index.ts
# 2. Build
bun run build:cli

# 3. Test locally
cd /tmp
fast-expo-app  # (if linked globally)
# or
node packages/fast-expo-app/bin/fast-expo-app.js
```

#### Working on the Template

```bash
# 1. Navigate to template
cd cli/templates/base

# 2. Install dependencies (if needed)
bun install

# 3. Start Expo
bun start

# 4. Test changes
# The CLI will copy these files when creating new projects
```

#### Working on the Website

```bash
# 1. Start dev server
bun run dev:www

# 2. Open http://localhost:3000

# 3. Make changes (hot reload enabled)

# 4. Build for production
bun run build:www
```

---

## Turborepo & Workspaces

### Understanding Turborepo

Turborepo provides:

- ⚡ **Parallel Execution** - Runs tasks simultaneously
- 💾 **Smart Caching** - Skips redundant work
- 📊 **Task Dependencies** - Ensures correct build order
- 🔄 **Incremental Builds** - Only rebuilds what changed

### Configuration (turbo.json)

```json
{
  "$schema": "https://turborepo.com/schema.json",
  "ui": "tui",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    }
  }
}
```

### Task Execution Flow

When you run `bun run build`, Turborepo:

```
1. Reads turbo.json
2. Analyzes workspace dependencies
3. Builds packages/fast-expo-app (CLI)
4. Builds www (website) in parallel
5. Caches outputs
6. Future builds reuse cache if nothing changed
```

---

## CLI Package

### How the CLI Works

```typescript
// cli/src/index.ts (simplified)

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

async function main() {
  // 1. Prompt for project name
  const { projectName } = await inquirer.prompt([...]);

  // 2. Prompt for modules
  const { modules } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'modules',
      choices: [
        { name: 'MMKV', value: 'mmkv', checked: true },
        { name: 'React Query', value: 'react-query', checked: true },
        { name: 'expo-dev-client', value: 'expo-dev-client', checked: true },
        { name: 'Jest', value: 'jest', checked: true },
      ],
    },
  ]);

  // 3. Copy template from /cli/templates/base/
  const templatePath = path.join(__dirname, '..', '..', '..', 'cli', 'templates', 'base');
  const targetPath = path.join(process.cwd(), projectName);
  copyFolderSync(templatePath, targetPath);

  // 4. Remove unselected modules
  const pkg = JSON.parse(fs.readFileSync(path.join(targetPath, 'package.json'), 'utf-8'));

  if (!modules.includes('mmkv')) {
    delete pkg.dependencies['react-native-mmkv'];
    fs.rmSync(path.join(targetPath, 'lib', 'mmkv.ts'), { force: true });
  }

  if (!modules.includes('react-query')) {
    delete pkg.dependencies['@tanstack/react-query'];
    fs.rmSync(path.join(targetPath, 'lib', 'query-client.ts'), { force: true });
    // Remove from _layout.tsx
  }

  // ... similar for other modules

  // 5. Write updated package.json
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  // 6. Success message
  console.log(`✅ Project "${projectName}" is ready!`);
}

main();
```

### Publishing the CLI

```bash
# From packages/fast-expo-app/
cd packages/fast-expo-app

# Build
bun run build

# Publish to npm
npm publish --access public

# Or use version bump helper (if available)
bun run publish:next        # Patch bump
bun run publish:next minor  # Minor bump
bun run publish:next major  # Major bump
```

---

## Template (Boilerplate)

### Template Structure

The template lives in `/cli/templates/base/` and is what users get when running the CLI.

```
cli/templates/base/
├── app/                      # Expo Router
│   ├── _layout.tsx          # Root layout with providers
│   ├── (tabs)/              # Tab navigation
│   │   ├── _layout.tsx
│   │   ├── index.tsx        # Home screen
│   │   └── settings.tsx     # Settings screen
│   ├── +not-found.tsx       # 404 page
│   ├── +html.tsx            # HTML wrapper
│   └── modal.tsx            # Modal example
│
├── components/
│   ├── ExternalLink.tsx
│   └── ToggleTheme.tsx
│
├── constants/
│   └── Colors.ts
│
├── lib/
│   ├── hooks/               # Custom React Query hooks
│   ├── mmkv.ts              # MMKV storage (optional)
│   ├── query-client.ts      # React Query config (optional)
│   └── utils.ts
│
├── assets/
│   ├── fonts/
│   └── images/
│
├── android/                  # Android native
├── ios/                      # iOS native
│
├── __tests__/                # Jest tests (optional)
│   └── init.test.ts
│
├── app.json
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── metro.config.js
├── babel.config.js
├── global.css
├── .eslintrc.js
├── .prettierrc
└── README.md
```

### Key Template Files

#### app/\_layout.tsx

Root layout with optional providers:

```tsx
import { QueryClientProvider } from '@tanstack/react-query'; // Optional
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { queryClient } from '@/lib/query-client'; // Optional

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      {' '}
      {/* Optional */}
      <SafeAreaProvider>
        <ThemeProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
```

#### package.json Scripts

```json
{
  "scripts": {
    "start": "EXPO_USE_FAST_RESOLVER=1 bunx expo start -c",
    "dev": "EXPO_USE_FAST_RESOLVER=1 bunx expo start --dev-client -c",
    "android": "bunx expo run:android",
    "ios": "bunx expo run:ios",
    "web": "bunx expo start --web",
    "test": "jest",
    "lint": "eslint . --max-warnings 0",
    "format": "prettier --write .",
    "clean": "rm -rf node_modules/.cache .expo && bun expo start --clear"
  }
}
```

---

## Website Package

Located in `/www/`, this is a Next.js 15 application serving as the landing page.

### Key Features

- 🎨 **Modern UI** with Tailwind CSS
- ✨ **Animated components** (Framer Motion, Magic UI)
- 📱 **Responsive design**
- 🌙 **Dark mode support**
- 🚀 **Fast deployment** on Vercel

### Structure

```
www/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── favicon.ico
│   └── global.css
│
├── components/
│   ├── magicui/             # Magic UI components
│   ├── ui/                  # Shadcn UI components
│   ├── AnimatedBeams.tsx
│   ├── OrbitingCircleDemo.tsx
│   ├── MainTitle/
│   ├── TerminalCode/
│   └── ...
│
├── lib/
│   ├── constant.ts
│   └── utils.ts
│
├── public/
│   ├── icons/
│   └── manifest.json
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Optional Modules

The CLI allows users to select which modules they want. Each module can be independently enabled/disabled.

### 1. MMKV Storage (Default: ✅ Enabled)

**Ultra-fast persistent storage (~30x faster than AsyncStorage)**

**Dependencies**:

- `react-native-mmkv`: ^4.0.0
- `react-native-nitro-modules`: ^0.31.5

**Files**:

- `lib/mmkv.ts` - Storage instance

**Usage**:

```typescript
import { storage } from '@/lib/mmkv';

// Set values
storage.set('user.name', 'John Doe');
storage.set('user.age', 30);

// Get values
const name = storage.getString('user.name');
const age = storage.getNumber('user.age');
```

---

### 2. React Query (TanStack Query) (Default: ✅ Enabled)

**Powerful data fetching and server state management**

**Dependencies**:

- `@tanstack/react-query`: ^5.90.7

**Files**:

- `lib/query-client.ts` - QueryClient config
- `app/_layout.tsx` - Provider wrapper

**Usage**:

```typescript
import { useQuery } from '@tanstack/react-query';

export const useUser = (userId: number) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const response = await fetch(`/api/users/${userId}`);
      return response.json();
    },
  });
};

// In component
const { data, isLoading, error } = useUser(1);
```

---

### 3. expo-dev-client (Default: ✅ Enabled)

**Enhanced debugging and custom native modules**

**Dependencies**:

- `expo-dev-client`: ~6.0.17

**Scripts**:

```json
"dev": "EXPO_USE_FAST_RESOLVER=1 bunx expo start --dev-client -c"
```

**Benefits**:

- ✅ Native logs access
- ✅ Custom native modules support
- ✅ Better debugging
- ✅ Network inspector

---

### 4. Jest (Default: ✅ Enabled)

**Unit testing framework**

**Dependencies**:

- `jest`: ^29.7.0
- `@testing-library/react-native`

**Files**:

- `__tests__/` directory

**Scripts**:

```json
"test": "jest"
```

---

## Coding Conventions

### File Naming

- **Components**: **kebab-case** (e.g., `user-profile.tsx`, `theme-toggle.tsx`, `container.tsx`)
  - ⚠️ **Important**: Always use kebab-case for component files, never PascalCase
  - Examples: `container.tsx`, `theme-toggle.tsx`, `external-link.tsx`
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Routes**: kebab-case or index (e.g., `user-profile.tsx`, `index.tsx`)

### TypeScript

```typescript
// ✅ Good - Explicit types
interface UserProps {
  id: string;
  name: string;
  email?: string;
}

export function UserCard(props: UserProps) {
  const { id, name, email } = props;
  return <View>...</View>;
}

// ❌ Avoid - Any types
function UserCard(props: any) {
  return <View>...</View>;
}
```

### React Components

```tsx
// ✅ Good - Named export, typed props
interface CardProps {
  title: string;
  description?: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <View className="p-4 bg-white rounded-lg">
      <Text className="text-lg font-bold">{title}</Text>
      {description && <Text>{description}</Text>}
    </View>
  );
}

// ❌ Avoid - Default export, no types
export default function Card(props) {
  return <View>...</View>;
}
```

### NativeWind Styling

```tsx
// ✅ Good - Use Tailwind classes
<View className="flex-1 items-center justify-center bg-white dark:bg-black">
  <Text className="text-xl font-bold">Hello</Text>
</View>

// ❌ Avoid - Inline styles
<View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello</Text>
</View>
```

---

## Scripts Reference

### Root Scripts

```bash
# Setup
bun run get_started          # Install all dependencies
bun run clean                # Clean all build artifacts

# Build
bun run build                # Build all packages
bun run build:cli            # Build CLI
bun run build:www            # Build website

# Development
bun run dev                  # Run all in dev mode
bun run dev:cli              # Watch CLI changes
bun run dev:www              # Run website dev server

# Template
bun run template:start       # Start template
bun run template:ios         # Run on iOS
bun run template:android     # Run on Android

# Code Quality
bun run format               # Format all files
bun run format:check         # Check formatting
bun run lint                 # Lint all packages

# Cleanup
bun run clean:cli            # Clean CLI only
bun run clean:www            # Clean website only
bun run clean:template       # Clean template only
```

### Template Scripts

```bash
# From cli/templates/base/
bun start                    # Start Expo
bun run dev                  # With dev client
bun run ios                  # Run on iOS
bun run android              # Run on Android
bun run web                  # Run on web
bun run test                 # Run Jest tests
bun run lint                 # Lint code
bun run format               # Format code
```

---

## Best Practices

### Monorepo Development

1. **Always install from root** - `cd` to root and run `bun install`
2. **Use workspace protocol** - `workspace:*` for internal dependencies
3. **Build before testing** - Run `bun run build:cli` before testing CLI
4. **Keep caches clean** - Run `bun run clean` when switching branches
5. **Test locally** - Use `bun link` to test CLI globally

### CLI Development

1. **Use local template** - CLI copies from `/cli/templates/base/`
2. **Test module removal** - Verify each module can be safely removed
3. **Handle errors gracefully** - Use try/catch and clear error messages
4. **Version consistently** - Bump version in package.json before publishing
5. **Update dependencies** - Keep template dependencies up to date

### Template Development

1. **Test without modules** - Ensure app works with any module combination
2. **Use absolute imports** - `@/` prefix for cleaner imports
3. **Keep components small** - Single responsibility principle
4. **Document features** - Update README with new features
5. **Test on devices** - Always test on real iOS/Android devices

### Website Development

1. **Optimize images** - Use Next.js Image component
2. **Mobile-first** - Design for mobile, enhance for desktop
3. **Accessibility** - Use semantic HTML and ARIA labels
4. **Performance** - Lazy load components and images
5. **SEO** - Use proper meta tags and structured data

---

## Links & Resources

- **Main Repository**: https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate
- **NPM Package**: https://www.npmjs.com/package/fast-expo-app
- **Website**: https://fast-expo-app-web.vercel.app/
- **Expo Documentation**: https://docs.expo.dev/
- **React Native**: https://reactnative.dev/
- **NativeWind**: https://www.nativewind.dev/
- **Turborepo**: https://turbo.build/

---

## Troubleshooting

### CLI Issues

**"Template not found"**

```bash
# Build the CLI first
bun run build:cli

# The path resolves to: cli/templates/base/
```

**"Command not found: fast-expo-app"**

```bash
cd packages/fast-expo-app
bun link
```

### Template Issues

**Dependencies not installing**

```bash
cd cli/templates/base
rm -rf node_modules
bun install
```

**Metro bundler cache issues**

```bash
bun run clean
# or
rm -rf node_modules/.cache .expo
```

### Turborepo Issues

**Stale cache**

```bash
bun run build --force  # Force rebuild
```

**Workspace not found**

```bash
bun install  # Reinstall from root
```

---

**Made with ♥ by [Teczer](https://github.com/Teczer)**

Licensed under the MIT License
