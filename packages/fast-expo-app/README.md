# fast-expo-app

<div align="center">

[![npm version](https://img.shields.io/npm/v/fast-expo-app.svg)](https://www.npmjs.com/package/fast-expo-app)
[![npm downloads](https://img.shields.io/npm/dm/fast-expo-app.svg)](https://www.npmjs.com/package/fast-expo-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**⚡ Lightning-fast CLI to create production-ready React Native apps with modern best practices**

</div>

---

## 🚀 Quick Start

Create a new React Native app in seconds:

```bash
# Using Bun (recommended)
bunx fast-expo-app@latest

# Or using npm
npx fast-expo-app@latest
```

The CLI will guide you through:

1. 📝 Project name
2. 🎨 Styling choice (NativeWind or Unistyles)
3. 🔧 Optional modules (React Query, Zustand, Jest, etc.)

Then just:

```bash
cd your-project-name
bun install  # or npm install
bun start    # or npm start
```

---

## ✨ What's Included

### 🎯 Core Stack (Always Included)

- ⚡ **Expo SDK 54** - Latest Expo with New Architecture
- ⚛️ **React Native 0.81** - Modern React Native with Fabric
- 🔥 **TypeScript 5.9** - Strict type-safety
- 📁 **Expo Router v6** - File-based routing with typed routes
- 💾 **MMKV v4** - Ultra-fast storage (~30x faster than AsyncStorage)
- 📱 **Edge-to-edge** - Modern display support
- 🎭 **Animations** - React Native Reanimated + Worklets

### 🎨 Styling Options (Choose One)

#### NativeWind v4 🌊

- Tailwind CSS for React Native
- Dark mode with MMKV persistence
- Utility-first approach
- Centralized color system

#### Unistyles v3 💎

- Type-safe styling
- 3-theme system (light/dark/premium)
- Runtime theme switching with MMKV persistence
- Breakpoints support
- Better performance

### 🔧 Optional Modules

Pick what you need:

- 🌐 **TanStack Query v5** - Data fetching with MMKV persistence
- 🔄 **Zustand** - State management with MMKV storage
- 🛠️ **expo-dev-client** - Enhanced debugging
- 🧪 **Jest** - Unit testing

### 🎁 Pre-configured

- 🌓 Theme System with MMKV persistence
- 🎯 Absolute Imports (`@/` prefix)
- 📏 ESLint + Prettier
- 🔐 New Architecture enabled
- 📱 SafeArea handling
- ⌨️ Keyboard management
- 🎉 Haptic feedback

---

## 📖 Generated Project Structure

```
your-app/
├── app/                      # Expo Router screens
│   ├── (tabs)/              # Tab navigation
│   │   ├── index.tsx        # Home screen
│   │   └── settings.tsx     # Settings screen
│   ├── _layout.tsx          # Root layout
│   └── modal.tsx            # Modal example
├── components/              # React components
│   ├── container.tsx        # Container component
│   ├── theme-toggle.tsx     # Theme toggle
│   └── external-link.tsx    # External link
├── lib/                     # Core utilities
│   ├── mmkvStorage.ts       # MMKV storage
│   ├── query-client.ts      # React Query (optional)
│   └── zustand.ts           # Zustand store (optional)
├── providers/               # React providers
│   └── query-provider.tsx   # React Query provider
├── constants/               # Constants
│   └── themes.ts            # Theme configs (Unistyles)
├── utils/                   # Utilities
│   └── colors.ts            # Color utilities (NativeWind)
├── assets/                  # Images, fonts
├── android/                 # Android native
├── ios/                     # iOS native
└── __tests__/               # Jest tests (optional)
```

---

## 🎨 Styling Examples

### NativeWind

```tsx
import { View, Text } from 'react-native';

export default function Screen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-bold text-black dark:text-white">Hello NativeWind!</Text>
    </View>
  );
}
```

### Unistyles

```tsx
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Unistyles!</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.foreground,
  },
}));
```

---

## 🔧 Available Scripts

```bash
# Development
bun start              # Start Expo dev server
bun run ios            # Run on iOS simulator
bun run android        # Run on Android emulator
bun run web            # Run on web

# With dev client
bun run dev            # Start with expo-dev-client

# Testing & Quality
bun test               # Run Jest tests
bun run lint           # Lint code
bun run format         # Format code with Prettier

# Cleanup
bun run clean          # Clear cache and restart
```

---

## 🌟 Features Comparison

| Feature              | NativeWind                  | Unistyles              |
| -------------------- | --------------------------- | ---------------------- |
| **Styling Approach** | Utility classes             | StyleSheet API         |
| **Type Safety**      | ⚠️ Limited                  | ✅ Full                |
| **Themes**           | 2 (light/dark)              | 3 (light/dark/premium) |
| **Performance**      | ✅ Good                     | ✅ Excellent           |
| **Learning Curve**   | Easy (if you know Tailwind) | Medium                 |
| **Bundle Size**      | Larger                      | Smaller                |
| **Breakpoints**      | ✅ Yes                      | ✅ Yes                 |
| **Runtime Theming**  | ✅ Yes                      | ✅ Yes                 |

---

## 📚 Documentation

- **GitHub**: [github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate)
- **Website**: [fast-expo-app-web.vercel.app](https://fast-expo-app-web.vercel.app)
- **Expo Docs**: [docs.expo.dev](https://docs.expo.dev)
- **NativeWind**: [nativewind.dev](https://www.nativewind.dev)
- **Unistyles**: [unistyl.es](https://www.unistyl.es)

---

## 🤝 Contributing

Contributions are welcome! Please check out our [Contributing Guide](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/blob/main/CONTRIBUTING.md).

---

## 📝 License

MIT © [Teczer](https://github.com/Teczer)

---

## 🙏 Credits

Built with:

- [Expo](https://expo.dev)
- [React Native](https://reactnative.dev)
- [NativeWind](https://www.nativewind.dev)
- [Unistyles](https://www.unistyl.es)
- [MMKV](https://github.com/mrousavy/react-native-mmkv)
- [TanStack Query](https://tanstack.com/query)
- [Zustand](https://zustand-demo.pmnd.rs)

---

<div align="center">

**Made with ♥ by [Teczer](https://github.com/Teczer)**

[⭐ Star on GitHub](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate) • [🐛 Report Bug](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/issues) • [💡 Request Feature](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/issues)

</div>
