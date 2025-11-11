# Fast Expo App

<div align="center">

[![npm version](https://img.shields.io/npm/v/fast-expo-app.svg)](https://www.npmjs.com/package/fast-expo-app)
[![GitHub stars](https://img.shields.io/github/stars/Teczer/expo-react-native-nativewind-typescript-boilerplate.svg)](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Modern React Native boilerplate with CLI for rapid mobile app development**

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

This boilerplate includes everything you need to build production-ready React Native applications:

### 🎯 Core Stack

- ⚡ **Expo SDK 54** - Latest Expo with New Architecture enabled
- ⚛️ **React Native 0.81** - Modern React Native with Fabric
- 🔥 **TypeScript 5.9** - Type-safe development
- 💎 **NativeWind v4** - Tailwind CSS for React Native
- 📁 **Expo Router v6** - File-based routing

### 🔧 Optional Features

Choose what you need during setup:

- 📊 **MMKV v4** - Ultra-fast storage (~30x faster than AsyncStorage)
- 🌐 **TanStack Query v5** - Powerful data fetching and state management
- 🛠️ **expo-dev-client** - Enhanced debugging with native logs
- 🧪 **Jest** - Unit testing framework
- 🔄 **Zustand** - Lightweight state management *(coming soon)*

### 🎨 Pre-configured

- 🌜 Light/Dark mode with toggle
- 📏 ESLint + Prettier
- 🎯 Absolute imports with `@` prefix
- 🔐 New Architecture enabled
- 📱 SafeArea support

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

- **Node.js 22+** (LTS recommended)
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
# Build and test CLI locally
bun run build:cli

# Link CLI globally for testing
cd packages/fast-expo-app
bun link

# Test the CLI
cd /tmp
fast-expo-app
```

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

- **66+ GitHub Stars** ⭐
- **26+ Forks** 🍴
- **2.0+ Version** with major updates
- **Active Development** 🚀

---

## 🙏 Acknowledgments

Special thanks to:

- [@neiltalap](https://github.com/neiltalap) for suggesting expo-dev-client and debugging improvements
- All our [contributors](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/graphs/contributors)
- The Expo and React Native communities

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Website**: [fast-expo-app-web.vercel.app](https://fast-expo-app-web.vercel.app/)
- **npm Package**: [npmjs.com/package/fast-expo-app](https://www.npmjs.com/package/fast-expo-app)
- **GitHub**: [github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate)

---

<div align="center">

**Made with ♥ by [Teczer](https://github.com/Teczer)**

If you find this project helpful, please consider giving it a ⭐

</div>
