# Fast Expo App

<div align="center">

[![npm version](https://img.shields.io/npm/v/fast-expo-app.svg)](https://www.npmjs.com/package/fast-expo-app)
[![GitHub stars](https://img.shields.io/github/stars/Teczer/expo-react-native-nativewind-typescript-boilerplate.svg)](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate)

**⚡ Lightning-fast CLI to create production-ready React Native apps with modern best practices**

[Quick Start](#quick-start) • [Features](#features) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## 🚀 Quick Start

Create a new React Native app with one command:

```bash
bunx fast-expo-app@latest
```

Or with npm:

```bash
npx fast-expo-app@latest
```

That's it! The CLI will guide you through the setup process and let you choose which features to include.

---

## ✨ Features

### 🎯 Core Stack (Always Included)

- ⚡ **Expo SDK 57** - Latest Expo with New Architecture (always on)
- ⚛️ **React Native 0.86** - Modern React Native with Fabric renderer
- 🔥 **TypeScript 6.0** - Strict type-safety out of the box
- 📁 **Expo Router** - File-based routing with typed routes (`expo-router/react-navigation`)
- 💾 **MMKV v4.3** - Ultra-fast storage with Nitro Modules (~30x faster than AsyncStorage)
- 📱 **Edge-to-edge** - Enabled by default on Android 16+

### 🎨 Styling Options (Choose One)

**NativeWind v4.2** 🌊

- Tailwind CSS v3.4 for React Native
- Utility-first CSS framework
- 2-theme system (light/dark)
- Dark mode with persistent storage

**Unistyles v3.3** 💎

- Type-safe styling solution
- 3-theme system (light/dark/premium)
- Runtime theme switching
- Breakpoints support
- Better performance

**Uniwind v1.10** ✨

- Tailwind CSS v4 for React Native
- Live theme switching with `Uniwind.setTheme()`
- 3-theme system (light/dark/premium)
- CSS variables for dynamic theming
- Type-safe with auto-generated types

### 🔧 Optional Modules

Pick what you need during setup:

- 🌐 **TanStack Query v5** - Powerful data fetching with MMKV persistence
- 🔄 **Zustand** - Lightweight state management with MMKV storage
- 🛠️ **expo-dev-client** - Enhanced debugging with native logs
- 🧪 **Jest** - Unit testing framework

### 🎁 Pre-configured

- 🌓 **Theme System** - Light/Dark/Premium modes with MMKV persistence
- 🎯 **Absolute Imports** - Clean imports with `@/` prefix
- 📏 **Code Quality** - ESLint + Prettier pre-configured
- 🔐 **New Architecture** - Fabric renderer enabled
- 📱 **SafeArea** - Proper insets handling
- 🎭 **Animations** - React Native Reanimated ready
- ⌨️ **Keyboard** - Smart keyboard handling

---

## 📦 What's Inside

This monorepo contains:

```
fast-expo-app/
├── cli/                      # CLI source code and templates
│   ├── src/                  # CLI TypeScript source
│   ├── templates/            # Project templates
│   │   └── base/             # Base Expo + NativeWind template
│   └── modules/              # Optional modules (coming soon)
├── packages/
│   └── fast-expo-app/        # Published npm package
├── www/                      # Landing page (Next.js)
├── docs/                     # Documentation
├── get_started.sh            # Install all dependencies
└── clean.sh                  # Clean all build artifacts
```

### `/cli`

The CLI source code, templates, and modules:

- **src/** - TypeScript source code for the CLI
- **templates/base/** - The React Native template that gets copied
- **modules/** - Optional features users can include (future)

### `/packages/fast-expo-app`

The npm package `fast-expo-app` - the CLI tool that scaffolds new projects. This is what gets published to npm.

### `/www`

The landing page built with Next.js, showcasing the CLI and providing documentation.

---

## 📚 Documentation

- [Quick Start Guide](./QUICK_START.md) - Get started quickly
- [CLI Package](./packages/fast-expo-app/README.md) - CLI documentation
- [CLI Source](./cli/README.md) - CLI development guide
- [Contributing Guide](./CONTRIBUTING.md) - How to contribute
- [AGENTS.md](./AGENTS.md) - Complete project documentation for AI assistants

---

## 🏃 Development

### Prerequisites

- **Node.js 22.13+** (required by Expo SDK 57)
- **Bun** (highly recommended) or npm
- **Java 17+**
- **Xcode** (for iOS development)
- **Android Studio** (for Android development)

### Setup Monorepo

```bash
# Clone the repository
git clone https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate.git
cd expo-react-native-nativewind-typescript-boilerplate

# Install all dependencies (root, cli, www, template)
bun run get_started
# or
./get_started.sh
```

### Available Scripts

```bash
# 🚀 Get Started
bun run get_started          # Install dependencies in all packages

# 🧹 Clean
bun run clean                # Remove all node_modules and build artifacts
bun run clean:cli            # Clean CLI package only
bun run clean:www            # Clean website only
bun run clean:template       # Clean template only

# 🔨 Build
bun run build                # Build all packages
bun run build:cli            # Build CLI only
bun run build:www            # Build website only

# 💻 Development
bun run dev                  # Run all in dev mode
bun run dev:cli              # Watch CLI changes
bun run dev:www              # Run website in dev mode

# 📱 Template Testing
bun run template:start       # Start Expo in template
bun run template:ios         # Run template on iOS
bun run template:android     # Run template on Android

# ✨ Code Quality
bun run format               # Format all files with Prettier
bun run format:check         # Check formatting
bun run lint                 # Run linters
```

### Work on Template

```bash
# Test the base template
cd cli/templates/base
bun install
bun start
```

### Work on CLI

```bash
# 1. Build the CLI from source
bun run build:cli

# 2. Test the CLI locally (choose one method):

# Method 1: Use the test script (easiest - recommended)
# From monorepo root:
bun run test:cli
# The CLI will prompt you for project name and options
# Navigate to the directory where you want to create the project first if needed
```

**Note:** Method 1 (`bun run test:cli`) is the simplest - just build and run!

### Work on Website

```bash
# Run website in development
bun run dev:www

# Build website
bun run build:www
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./docs/CONTRIBUTING.md) for details.

### Quick Contribution Steps

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📈 Project Stats

- **80+ GitHub Stars** ⭐
- **26+ Forks** 🍴
- **v4.0.0** - Expo SDK 57, RN 0.86, Uniwind 1.10, NativeWind 4.2, Unistyles 3.3
- **v3.2.0** - Added Uniwind styling with Tailwind v4
- **Active Development** 🚀

## 🆕 What's New in v4.0.0

- ⚡ **Expo SDK 57** / React Native 0.86 / React 19.2
- 🎨 **NativeWind 4.2.6**, **Unistyles 3.3.0**, **Uniwind 1.10.1**
- 💾 **MMKV 4.3.2** + Nitro Modules 0.36.5
- 🧭 **Expo Router** imports via `expo-router/react-navigation` (SDK 56+)
- 🧱 **CNG** - `ios/` and `android/` are generated with `npx expo prebuild`
- 🔧 Node.js **22.13+** required

### v3.2.0 Highlights

- ✨ **Uniwind v1.2** - New styling option with Tailwind CSS v4
- 🎨 **3 styling choices** - NativeWind v4, Unistyles v3, or Uniwind v1.2
- 🔄 **Live theme switching** - `Uniwind.setTheme()` for instant updates
- 🎭 **3-theme system** - Light/Dark/Premium with CSS variables
- 📦 **Tailwind v4** - Modern CSS-first configuration
- 🔧 **Proper theme variants** - `@layer theme` with `@variant` blocks

### v3.0.0 Highlights

- ✨ **Unistyles v3** support with 3-theme system
- 💾 **MMKV mandatory** - Included by default (~30x faster)
- 🎯 **Theme persistence** - Automatic saving with MMKV
- 🔧 **Better architecture** - Cleaner file structure
- 🚀 **Performance** - Nitro Modules and Worklets

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Website**: [fast-expo-app](https://fast-expo-app-web.vercel.app/)
- **npm Package**: [npmjs.com/package/fast-expo-app](https://www.npmjs.com/package/fast-expo-app)
- **GitHub**: [github.com/Teczer/fast-expo-app](https://github.com/Teczer/fast-expo-app)

---

<div align="center">

**Made with ♥ by [Teczer](https://github.com/Teczer)**

If you find this project helpful, please consider giving it a ⭐

</div>
