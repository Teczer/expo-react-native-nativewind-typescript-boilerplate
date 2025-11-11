# Fast Expo App

🚀 A powerful CLI tool to instantly generate a modern Expo app with TypeScript, NativeWind, and more.

## Features

- ⚡ **Fast Setup**: Create a new Expo app in seconds
- 🎨 **NativeWind**: Tailwind CSS for React Native
- 📱 **Expo Router**: File-based routing
- 💪 **TypeScript**: Full type safety
- 🗂️ **MMKV**: Ultra-fast storage (~30x faster than AsyncStorage)
- 🔄 **React Query**: Powerful data fetching & state management
- 🧪 **Jest**: Testing framework included
- 🔧 **Expo Dev Client**: Enhanced debugging & custom native modules

## Usage

### With npx (recommended)

```bash
npx fast-expo-app
```

### With bun

```bash
bunx fast-expo-app
```

### With yarn

```bash
yarn create fast-expo-app
```

## What you get

After running the CLI, you'll be prompted to:

1. **Name your project**: Choose a name for your new app
2. **Select modules**: Pick which features you want included:
   - MMKV
   - expo-dev-client
   - React Query
   - Jest

The CLI will then:
- Copy the template
- Remove unselected modules
- Update your package.json
- Prepare your project for development

## Next Steps

After creating your project:

```bash
cd your-project-name
bun install           # Install dependencies
npx expo prebuild     # Generate native code
bun ios               # Run on iOS
# or
bun android           # Run on Android
```

## What's Included

- **React Native** with Expo SDK
- **TypeScript** for type safety
- **NativeWind** for styling with Tailwind CSS
- **Expo Router** for file-based navigation
- **Dark Mode** support out of the box
- **ESLint** and **Prettier** for code quality
- **Best practices** and modern architecture

## Repository

[GitHub Repository](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate)

## License

MIT

## Author

Created by [Teczer](https://github.com/Teczer)

