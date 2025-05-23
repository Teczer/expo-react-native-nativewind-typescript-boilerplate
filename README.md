# Simple & Fast Starter for React Native, Expo, NativeWind, and TypeScript
![](https://res.cloudinary.com/dw3mwclgk/image/upload/v1721761113/React_Native_Boilerplate_1_ekixp3.png)
This boilerplate provides a fast and modern setup for building React Native applications with Expo, NativeWind, and TypeScript. It's designed to enhance developer experience and streamline your development process.a

### Features

Developer experience first:

- ⚡ [Expo](https://expo.dev) for mobile development
- ⚛️ [React Native](https://reactnative.dev) for building native apps using React
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [NativeWind](https://www.nativewind.dev), Tailwind CSS for React Native
- 🌜 Light/Dark mode already setup with toggle
- 📁 File-based routing with Expo Router
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🤡 Unit Testing with Jest 
- 💡 Absolute Imports using `@` prefix

### Last Boilerplate Update

- ⚡ Expo SDK 53 (Including Expo Router 3.5, Expo UI...) + update all libraries
- ⚛️ React Native 0.79 (Including New Arch, Android Edge-to-Edge...)
- 💎 NativeWind 4.0
- 🥟 Bun

![](https://res.cloudinary.com/dw3mwclgk/image/upload/v1748011077/UPDATE.png)

### Requirements

- Node.js 14+ (recommended version: 18.x)
- BUN + YARN IS VERY RECOMMENDED or npm 
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

### Getting started

Run the following command on your local environment:

1. Clone the repository and install dependencies :
   
```shell
git clone --depth=1 https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate.git my-project-name
cd my-project-name
bun install
```

2. Then, you have to prebuild the application for creating ios/android folders according to app.json

```shell
npx expo prebuild
```

3. You can now start building the app and run locally in development mode with live reload :

```shell
bun ios  # or: bun android (--device can be helpful)
bun start
```

### Testing with Jest

To run the unit tests, run the following command:

```shell
yarn test
```

### Contributions

Contributions are welcome! If you find a bug or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/issues). You can also submit pull requests with enhancements or fixes.

### License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [Teczer](https://mehdihattou.com/)
