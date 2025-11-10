# Fast Expo App CLI

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

<p align="center">
  Get started by running <b><code>npx fast-expo-app@latest</code></b>
</p>

## Simple & Fast Starter for Expo, Nativewind, and TypeScript

![](https://res.cloudinary.com/dw3mwclgk/image/upload/v1748088179/FAST-EXPO-APP.png)

<p align="center">
<b>
This boilerplate provides a fast and modern setup for building React Native applications with Expo, NativeWind, and TypeScript. It's designed to enhance developer experience and streamline your development process.
</b>
</p>

### Features

Developer experience first:

- ⚡ [Expo](https://expo.dev) for mobile development
- ⚛️ [React Native](https://reactnative.dev) for building native apps using React
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [NativeWind](https://www.nativewind.dev), Tailwind CSS for React Native
- 🌜 Light/Dark mode already setup with toggle
- 📊 MMKV (~30x faster than AsyncStorage and not Async usage)
- 📁 File-based routing with Expo Router
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🤡 Unit Testing with Jest
- 💡 Absolute Imports using `@` prefix

### Debugging

This boilerplate includes **Expo Dev Client** for enhanced debugging capabilities:

- 🐛 **Custom Native Modules**: Test and debug native code changes without rebuilding
- 🔍 **Advanced Dev Menu**: Access performance monitors, element inspectors, and more
- ⚡ **Hot Reloading**: Faster development with instant code updates
- 🌐 **Network Inspector**: Debug API calls and network requests

**Using Expo Dev Client:**

```bash
# First build (includes native modules)
bun run ios      # For iOS
bun run android  # For Android

# Daily development (faster)
bun run dev
```

**Debug Menu Shortcuts:**

- **iOS**: Shake device or `Cmd + D` in simulator
- **Android**: Shake device or `Cmd + M` in emulator

### Last Boilerplate Update

- ⚡ Expo SDK 54 (Including Expo Router 6, Expo Dev Client...) + update all libraries
- ⚛️ React Native 0.81 (Including New Arch, Android Edge-to-Edge...)
- 💎 NativeWind 4.2
- 🥟 Bun
- 🐛 TanStack Query for data fetching

![](https://res.cloudinary.com/dw3mwclgk/image/upload/v1748011077/UPDATE.png)

### Requirements

- Java 17+
- Node.js 22+ (Recommended LTS)
- BUN IS VERY RECOMMENDED

### Contributions

Contributions are welcome! If you find a bug or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/issues). You can also submit pull requests with enhancements or fixes.

### License

Licensed under the MIT License, Copyright © 2025

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [Teczer](https://mehdihattou.com/)

[downloads-image]: https://img.shields.io/npm/dm/fast-expo-app?color=364fc7&logoColor=364fc7
[npm-url]: https://www.npmjs.com/package/fast-expo-app
[npm-image]: https://img.shields.io/npm/v/fast-expo-app?color=0b7285&logoColor=0b7285
