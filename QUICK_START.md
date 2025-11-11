# Quick Start Guide

## 🚀 For New Contributors

### First Time Setup

```bash
# 1. Clone the repository
git clone https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate.git
cd expo-react-native-nativewind-typescript-boilerplate

# 2. Install all dependencies
bun run get_started
# This will install dependencies in:
# - Root (monorepo)
# - CLI package
# - Website (www)
# - Template (cli/templates/base)

# 3. Build the CLI
bun run build:cli

# 4. (Optional) Link CLI globally for testing
cd packages/fast-expo-app
bun link
cd ../..
```

## 📦 Project Structure

```
/
├── cli/                          # CLI source and templates
│   ├── src/index.ts              # CLI source code
│   ├── templates/base/           # Template project
│   ├── modules/                  # Future optional modules
│   └── tsconfig.json             # TypeScript config
│
├── packages/fast-expo-app/       # Published npm package
│   ├── bin/fast-expo-app.js      # Executable entry point
│   ├── dist/                     # Compiled code (from cli/src/)
│   ├── package.json
│   ├── README.md
│   └── CHANGELOG.md
│
├── www/                          # Landing page (Next.js)
│   ├── app/
│   ├── components/
│   └── package.json
│
├── get_started.sh                # Install all dependencies
├── clean.sh                      # Clean all artifacts
└── package.json                  # Root monorepo config
```

## 🛠️ Common Commands

### Development

```bash
# Start developing the CLI
bun run dev:cli              # Watch mode for CLI changes

# Start developing the website
bun run dev:www              # Run Next.js in dev mode

# Test the template
bun run template:start       # Start Expo dev server
bun run template:ios         # Run on iOS simulator
bun run template:android     # Run on Android emulator
```

### Building

```bash
# Build everything
bun run build

# Build specific packages
bun run build:cli            # Compile CLI TypeScript
bun run build:www            # Build Next.js website
```

### Testing the CLI Locally

```bash
# Method 1: Using bun link
cd packages/fast-expo-app
bun link
cd /tmp
fast-expo-app

# Method 2: Direct execution
node packages/fast-expo-app/bin/fast-expo-app.js

# Method 3: Using bunx (local)
bunx ./packages/fast-expo-app
```

### Cleaning

```bash
# Clean everything
bun run clean                # Removes all node_modules and build artifacts

# Clean specific parts
bun run clean:cli            # Clean CLI package
bun run clean:www            # Clean website
bun run clean:template       # Clean template
```

## 📝 Making Changes

### To the CLI Logic

1. Edit `cli/src/index.ts`
2. Build: `bun run build:cli`
3. Test: `node packages/fast-expo-app/bin/fast-expo-app.js`

### To the Template

1. Edit files in `cli/templates/base/`
2. Test: `bun run template:start`
3. The CLI will copy these files when creating new projects

### To Add Modules (Future)

1. Create a new folder in `cli/modules/`
2. Add module files and configuration
3. Update CLI logic to handle the module

## 🔄 Workflow Example

```bash
# 1. Start fresh
bun run clean

# 2. Install dependencies
bun run get_started

# 3. Make your changes to cli/src/index.ts

# 4. Build and test
bun run build:cli
node packages/fast-expo-app/bin/fast-expo-app.js

# 5. Format code before committing
bun run format

# 6. Commit your changes
git add .
git commit -m "feat: add new feature"
```

## 🐛 Troubleshooting

### "Command not found: fast-expo-app"

```bash
cd packages/fast-expo-app
bun link
```

### Template not found error

```bash
# Make sure you've built the CLI first
bun run build:cli

# The CLI looks for templates relative to the dist folder
# Path should resolve to: cli/templates/base/
```

### Dependencies not installing

```bash
# Clean and reinstall
bun run clean
bun run get_started
```

## 📚 More Information

- [Main README](./README.md)
- [CLI README](./packages/fast-expo-app/README.md)
- [CLI Source README](./cli/README.md)
- [Contributing Guide](./docs/CONTRIBUTING.md)
