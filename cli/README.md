# Fast Expo App CLI

This directory contains the source code and templates for the Fast Expo App CLI.

## Structure

```
cli/
├── src/               # CLI source code (TypeScript)
│   └── index.ts       # Main CLI logic
├── templates/         # Project templates
│   └── base/          # Base Expo + NativeWind template
└── modules/           # Optional modules (coming soon)
```

## Development

The CLI source code is written in TypeScript and compiled to JavaScript in the `packages/fast-expo-app/dist` directory.

### Building

From the `packages/fast-expo-app` directory:

```bash
bun run build    # Compile TypeScript to JavaScript
bun run dev      # Watch mode for development
```

### Adding Templates

Templates are stored in the `templates/` directory. Each template should be a complete, working Expo project.

### Adding Modules

Future modular features will be stored in the `modules/` directory, allowing users to opt-in to additional functionality.

## Template Structure

The base template (`templates/base/`) includes:

- **Expo SDK 54** with file-based routing (Expo Router)
- **TypeScript** for type safety
- **NativeWind v4** for Tailwind CSS styling
- **Dark mode** support
- **MMKV** for fast local storage
- **React Query** for data fetching
- **Jest** for testing
- **ESLint** and **Prettier** for code quality

## How It Works

1. User runs `npx fast-expo-app`
2. CLI prompts for project name and module selection
3. CLI copies the base template from `cli/templates/base/`
4. CLI removes unselected modules from the copied project
5. CLI updates the project's `package.json` with the new project name
6. User installs dependencies and runs the app

