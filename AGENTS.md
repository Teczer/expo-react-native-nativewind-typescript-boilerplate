# AGENTS.md - Fast Expo App Boilerplate

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Coding Conventions](#coding-conventions)
- [Key Features](#key-features)
- [Scripts](#scripts)
- [Best Practices](#best-practices)

---

## Project Overview

**Fast Expo App** is a modern React Native boilerplate for building production-ready mobile applications quickly.

- **Type**: Boilerplate/Starter Kit
- **Package Manager**: Bun (recommended)
- **Purpose**: Kickstart React Native development with best practices pre-configured
- **Platforms**: iOS, Android, Web
- **NPM Package**: `bunx fast-expo-app@latest` or `npx fast-expo-app@latest`

### What's Included

✅ **Expo SDK 54** with New Architecture enabled  
✅ **React Native 0.81** with latest features  
✅ **TypeScript 5.9** with strict mode  
✅ **NativeWind v4** for Tailwind CSS styling  
✅ **Expo Router v6** for file-based routing  
✅ **MMKV v4** for ultra-fast storage (with Nitro Modules)  
✅ **Expo Dev Client** for custom native modules  
✅ **ESLint + Prettier** pre-configured  
✅ **Jest** for testing  
✅ **Light/Dark mode** ready to use

---

## Tech Stack

### Core

- **React Native**: 0.81.5
- **React**: 19.1.0
- **Expo**: 54.0.23
- **TypeScript**: 5.9.2
- **Bun**: Recommended (faster than npm/yarn)

### Navigation & Routing

- **Expo Router**: v6 (File-based routing with typed routes)

### Styling

- **NativeWind**: v4.2.1 (TailwindCSS for React Native)
- **Tailwind CSS**: v3.3.2

### Storage & Performance

- **MMKV**: v4.0.0 with Nitro Modules (~30x faster than AsyncStorage)
- **React Native Reanimated**: v4.1.3
- **React Native Worklets**: v0.5.1

### Development

- **Expo Dev Client**: v6.0.17 (Custom native modules support)
- **ESLint**: v8.57.0
- **Prettier**: v3.6.2
- **Jest**: v29.7.0

---

## Project Structure

```
expo-react-native-nativewind-typescript-boilerplate/
├── app/                        # Expo Router routes (file-based)
│   ├── _layout.tsx            # Root layout
│   ├── (tabs)/                # Tab navigation
│   │   ├── _layout.tsx
│   │   ├── index.tsx          # Home screen
│   │   └── settings.tsx       # Settings screen
│   ├── modal.tsx              # Modal example
│   └── +not-found.tsx         # 404 page
├── components/                 # Reusable components
│   ├── ExternalLink.tsx
│   └── ToggleTheme.tsx
├── constants/                  # App constants
│   └── Colors.ts
├── lib/                       # Libraries & utilities
│   ├── mmkv.ts               # MMKV storage setup
│   └── utils.ts
├── assets/                    # Images, fonts, etc.
├── android/                   # Android native code
├── ios/                       # iOS native code
├── app.json                   # Expo config
├── tailwind.config.js         # Tailwind config
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

---

## Getting Started

### Installation

```bash
# Using bunx (recommended)
bunx fast-expo-app@latest

# Or using npx
npx fast-expo-app@latest
```

### First Run

```bash
# Install dependencies
bun install

# Start development server
bun run start

# iOS
bun run ios

# Android
bun run android

# With Dev Client
bun run dev
```

---

## Development

### Available Scripts

```bash
bun run start         # Start Metro bundler
bun run dev          # Start with Expo Dev Client
bun run ios          # Run on iOS simulator
bun run android      # Run on Android emulator
bun run web          # Run web version
bun run test         # Run tests
bun run lint         # Lint code
bun run format       # Format code with Prettier
bun run clean        # Clean build artifacts
```

### Development Workflow

1. **Make changes** to your code
2. **Hot reload** updates automatically
3. **Use Dev Client** for native module development
4. **Test on device** for production validation

### Adding New Screens

1. Create a file in `app/` directory:

   ```tsx
   // app/profile.tsx
   export default function ProfileScreen() {
     return <View>...</View>;
   }
   ```

2. Navigate to it:
   ```tsx
   import { router } from 'expo-router';
   router.push('/profile');
   ```

---

## Coding Conventions

### File Naming

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Routes**: kebab-case (e.g., `user-profile.tsx`)

### TypeScript

- Strict mode enabled
- No implicit any
- Explicit return types for functions
- Use interfaces for object shapes

### React Components

```tsx
import { View, Text } from 'react-native';

interface CardProps {
  title: string;
  description?: string;
}

export function Card(props: CardProps) {
  const { title, description } = props;

  return (
    <View className="p-4 bg-white rounded-lg">
      <Text className="text-lg font-bold">{title}</Text>
      {description && <Text className="text-sm">{description}</Text>}
    </View>
  );
}
```

### Styling with NativeWind

```tsx
// Basic styling
<View className="flex-1 items-center justify-center bg-white dark:bg-black">
  <Text className="text-xl font-bold">Hello World</Text>
</View>

// Conditional styling
<View className={`p-4 ${isActive ? 'bg-blue-500' : 'bg-gray-500'}`}>
  <Text>Content</Text>
</View>
```

### Code Best Practices

✅ **Use named exports** instead of default exports  
✅ **Destructure props** inside component body  
✅ **Use TypeScript** for all new code  
✅ **Keep components small** and focused  
✅ **Use hooks** for stateful logic  
✅ **Avoid inline styles** - use NativeWind classes

---

## Key Features

### MMKV Storage

Ultra-fast persistent storage (~30x faster than AsyncStorage):

```tsx
import { storage } from '@/lib/mmkv';

// Set values
storage.set('user.name', 'John Doe');
storage.set('user.age', 30);
storage.set('user.isActive', true);

// Get values
const name = storage.getString('user.name');
const age = storage.getNumber('user.age');
const isActive = storage.getBoolean('user.isActive');

// Remove values
storage.remove('user.name');

// Check if key exists
const hasName = storage.contains('user.name');
```

### Light/Dark Mode

Pre-configured with automatic theme switching:

```tsx
import { useColorScheme } from 'nativewind';

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Pressable onPress={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}>
      <Text>Toggle Theme</Text>
    </Pressable>
  );
}
```

### Expo Router Navigation

```tsx
import { router } from 'expo-router';

// Navigate to a route
router.push('/profile');

// Navigate with params
router.push({
  pathname: '/user/[id]',
  params: { id: '123' },
});

// Go back
router.back();

// Replace current route
router.replace('/home');
```

### New Architecture

This boilerplate has React Native's New Architecture enabled:

- ✅ **Fabric** - New rendering system
- ✅ **TurboModules** - Faster native module loading
- ✅ **JSI** - JavaScript Interface for synchronous native calls
- ✅ **Hermes** - Optimized JavaScript engine

---

## Scripts

### Development

```bash
bun run start         # Start Metro with cache cleared
bun run dev          # Start with Expo Dev Client
bun run ios          # Build and run iOS
bun run android      # Build and run Android
```

### Code Quality

```bash
bun run lint         # Run ESLint
bun run format       # Format with Prettier
bun run format:check # Check formatting
bun run test         # Run Jest tests
```

### Maintenance

```bash
bun run clean        # Clean build artifacts
bun install          # Install dependencies
bunx expo-doctor     # Check project health
bunx expo install --check  # Verify dependency versions
```

### iOS Specific

```bash
cd ios && pod install               # Install CocoaPods
bunx expo prebuild --clean          # Regenerate native code
```

---

## Best Practices

### 1. Use Bun for Speed

```bash
# Install with bun (faster)
bun add <package>

# Run scripts with bun
bun run ios
```

### 2. Leverage File-Based Routing

```
app/
├── index.tsx           → /
├── about.tsx           → /about
├── user/
│   └── [id].tsx        → /user/:id
└── (tabs)/
    ├── home.tsx        → /(tabs)/home
    └── settings.tsx    → /(tabs)/settings
```

### 3. Use MMKV for Storage

```tsx
// ✅ Good - Fast synchronous storage
storage.set('token', token);

// ❌ Avoid - Slower async storage
await AsyncStorage.setItem('token', token);
```

### 4. Type Everything

```tsx
// ✅ Good
interface User {
  id: string;
  name: string;
}

function greet(user: User): string {
  return `Hello ${user.name}`;
}

// ❌ Avoid
function greet(user: any) {
  return `Hello ${user.name}`;
}
```

### 5. Use NativeWind Classes

```tsx
// ✅ Good
<View className="p-4 bg-blue-500 rounded-lg">

// ❌ Avoid inline styles
<View style={{ padding: 16, backgroundColor: '#3B82F6', borderRadius: 8 }}>
```

### 6. Keep Components Small

```tsx
// ✅ Good - Single responsibility
export function UserAvatar({ url }: { url: string }) {
  return <Image source={{ uri: url }} className="w-10 h-10 rounded-full" />;
}

export function UserCard({ user }: { user: User }) {
  return (
    <View className="p-4">
      <UserAvatar url={user.avatar} />
      <Text>{user.name}</Text>
    </View>
  );
}
```

### 7. Use Expo Dev Client

```bash
# First build (includes native modules)
bun run ios

# Daily development (faster)
bun run dev  # Then open already-installed app
```

---

## Repository Links

- **Boilerplate**: [https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate)
- **NPM Package**: [https://github.com/Teczer/fast-expo-app](https://github.com/Teczer/fast-expo-app)

---

## Quick Reference

### Common Commands

```bash
# Start development
bun run start

# Run on platforms
bun run ios
bun run android
bun run web

# Code quality
bun run lint
bun run format

# Clean & rebuild
bun run clean
rm -rf node_modules && bun install
cd ios && pod install
```

### Import Aliases

```tsx
import { Component } from '@/components/Component';
import { utils } from '@/lib/utils';
import { Colors } from '@/constants/Colors';
```

### NativeWind Classes

```tsx
// Layout
className = 'flex flex-row items-center justify-between';

// Spacing
className = 'p-4 mx-2 my-4';

// Colors
className = 'bg-blue-500 text-white dark:bg-blue-900';

// Typography
className = 'text-lg font-bold';

// Borders & Radius
className = 'border border-gray-300 rounded-lg';
```

---

**Made with ♥ by [Teczer](https://github.com/Teczer)**

Licensed under the MIT License
