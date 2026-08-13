# Changelog

## [4.0.0] - 2026-08-13

### ⚡ Expo SDK 57

Generated apps now target **Expo SDK 57** (React Native 0.86.2, React 19.2.3, TypeScript 6.0).

This is a major upgrade from SDK 54. New projects require **Node.js 22.13+**.

### 🎨 Updated styling options

| Option | Version |
| --- | --- |
| NativeWind | 4.2.6 |
| Unistyles | 3.3.0 |
| Uniwind | 1.10.1 |

### 📦 Stack bump

- MMKV **4.3.2** + Nitro Modules **0.36.5**
- TanStack Query **5.101.4**
- Zustand **5.0.14**
- Reanimated **4.5.1** + Worklets **0.10.1**
- Gesture Handler **2.32**, Keyboard Controller **1.21.9**
- expo-haptics **57.0.1**, expo-dev-client **57.0.11**, expo-router **57.0.12**

### 🧱 Continuous Native Generation

`ios/` and `android/` are no longer committed in the template. After scaffolding:

```bash
npx expo prebuild
bun ios   # or bun android
```

### 🔧 Breaking changes in generated apps

- Expo Router theme imports now use `expo-router/react-navigation` (React Navigation is no longer a direct dependency)
- Removed `EXPO_USE_FAST_RESOLVER` (gone since SDK 55)
- Removed `edgeToEdgeEnabled` / `newArchEnabled` from app.json (always-on in SDK 55+)

### 🐛 Fixes

- Uniwind `setTheme('premium')` now applies the third theme correctly
- CLI next steps respect the chosen package manager (npm / yarn / pnpm / bun)
- Jest dependencies are fully removed when Jest is not selected
- `.gitignore` is copied into generated projects
