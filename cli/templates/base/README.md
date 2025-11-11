# Fast Expo App Boilerplate

This is the source code for the Fast Expo App boilerplate. This codebase is cloned when you run `bunx fast-expo-app@latest`.

## ⚠️ For Users

**Don't clone this directly!** Use the CLI instead:

```bash
bunx fast-expo-app@latest
```

The CLI will let you choose which features you want and set up everything for you.

## 📦 For Contributors

If you want to contribute to the boilerplate:

1. Clone the monorepo
2. Navigate to `packages/boilerplate`
3. Make your changes
4. Test thoroughly
5. Submit a PR

### Development

```bash
# From monorepo root
bun run boilerplate:dev

# Run on iOS
bun run boilerplate:ios

# Run on Android
bun run boilerplate:android
```

### Testing Changes

```bash
# Install dependencies
bun install

# Start Metro
bun run start

# Run on platform
bun run ios
# or
bun run android
```

## 📚 Stack

- **Expo SDK 54** with New Architecture
- **React Native 0.81**
- **TypeScript 5.9**
- **NativeWind v4** (Tailwind CSS)
- **Expo Router v6** (File-based routing)
- **MMKV v4** (Optional - Ultra-fast storage)
- **TanStack Query v5** (Optional - Data fetching)
- **expo-dev-client** (Optional - Enhanced debugging)

## 📁 Structure

```
boilerplate/
├── app/                  # Expo Router routes
│   ├── (tabs)/          # Tab navigation
│   ├── _layout.tsx      # Root layout
│   └── modal.tsx        # Modal example
├── components/          # Reusable components
├── constants/           # App constants
├── lib/                 # Libraries & utilities
│   ├── mmkv.ts         # MMKV storage (optional)
│   ├── query-client.ts # React Query config (optional)
│   └── utils.ts        # Utility functions
├── assets/             # Images, fonts
├── android/            # Android native code
├── ios/                # iOS native code
└── ...config files
```

## 🔧 Available Scripts

```bash
bun run start         # Start Metro bundler
bun run dev          # Start with expo-dev-client
bun run ios          # Run on iOS
bun run android      # Run on Android
bun run web          # Run web version
bun run test         # Run tests
bun run lint         # Lint code
bun run format       # Format code
bun run clean        # Clean cache
```

## 📖 Documentation

See the [main repository documentation](../../docs/AGENTS.md) for detailed information.

## 🤝 Contributing

See the [Contributing Guide](../../docs/CONTRIBUTING.md).

---

Made with ♥ by [Teczer](https://github.com/Teczer)

