import fs from 'fs';
import path from 'path';
import * as p from '@clack/prompts';
import { ModuleManager, ModuleConfig } from './module-manager.js';

export async function generateProject(
  projectName: string,
  modules: string[],
  styling: string,
  targetPath: string
) {
  const config: ModuleConfig = {
    hasMMKV: modules.includes('mmkv'),
    hasZustand: modules.includes('zustand'),
    hasReactQuery: modules.includes('react-query'),
    hasDevClient: modules.includes('expo-dev-client'),
    styling: styling as 'nativewind' | 'unistyles',
  };

  const manager = new ModuleManager();

  // Read package.json
  const pkgPath = path.join(targetPath, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.name = projectName;

  // 1. Generate storage file
  if (config.hasMMKV) {
    // Remove the base storage.ts file if it exists
    const baseStorageFile = path.join(targetPath, 'lib', 'storage.ts');
    if (fs.existsSync(baseStorageFile)) {
      fs.rmSync(baseStorageFile, { force: true });
    }
    const storageModule = manager.getStorageModule(config);
    const storageTarget = path.join(targetPath, 'lib', 'mmkvStorage.ts');
    manager.copyModule(storageModule, storageTarget, config);
  } else {
    // Remove mmkvStorage.ts if it exists (from template)
    const mmkvStorageFile = path.join(targetPath, 'lib', 'mmkvStorage.ts');
    if (fs.existsSync(mmkvStorageFile)) {
      fs.rmSync(mmkvStorageFile, { force: true });
    }
    const storageModule = manager.getStorageModule(config);
    const storageTarget = path.join(targetPath, 'lib', 'storage.ts');
    manager.copyModule(storageModule, storageTarget, config);
  }

  // 2. Generate query-provider.tsx in providers/
  const queryProviderModule = manager.getQueryProviderModule(config);
  const queryProviderTarget = path.join(targetPath, 'providers', 'query-provider.tsx');
  // Ensure providers directory exists
  const providersDir = path.dirname(queryProviderTarget);
  if (!fs.existsSync(providersDir)) {
    fs.mkdirSync(providersDir, { recursive: true });
  }
  manager.copyModule(queryProviderModule, queryProviderTarget, config);

  // 3. Generate zustand.ts if needed
  if (config.hasZustand) {
    const zustandModule = manager.getZustandModule(config);
    if (zustandModule) {
      const zustandTarget = path.join(targetPath, 'lib', 'zustand.ts');
      manager.copyModule(zustandModule, zustandTarget, config);
    }
  } else {
    // Remove zustand.ts if exists
    const zustandFile = path.join(targetPath, 'lib', 'zustand.ts');
    if (fs.existsSync(zustandFile)) {
      fs.rmSync(zustandFile, { force: true });
    }
  }

  // 3b. Generate use-persisted-color-scheme hook for NativeWind
  if (config.styling === 'nativewind') {
    p.log.step('Generating persisted color scheme hook...');
    const hookModule = path.join(manager.modulesPath, 'lib', 'use-persisted-color-scheme.ts');
    const hookTarget = path.join(targetPath, 'lib', 'use-persisted-color-scheme.ts');
    if (fs.existsSync(hookModule)) {
      manager.copyModule(hookModule, hookTarget, config);
    }
  }

  // 4. Handle styling
  await handleStyling(config, targetPath, pkg);

  // 5. Handle dependencies
  const deps = manager.getDependencies(config);
  const depsToRemove = manager.getDependenciesToRemove(config);

  // Add dependencies
  if (!pkg.dependencies) pkg.dependencies = {};
  Object.entries(deps).forEach(([name, version]) => {
    pkg.dependencies[name] = version;
  });

  // Remove dependencies
  depsToRemove.forEach((dep) => {
    if (pkg.dependencies?.[dep]) {
      delete pkg.dependencies[dep];
    }
    if (pkg.devDependencies?.[dep]) {
      delete pkg.devDependencies[dep];
    }
  });

  // 6. Remove modules that are not selected
  await removeUnselectedModules(modules, config, targetPath, pkg);

  // 7. Generate layout based on styling
  const layoutModule = manager.getLayoutModule(config);
  const layoutTarget = path.join(targetPath, 'app', '_layout.tsx');
  manager.copyModule(layoutModule, layoutTarget, config);

  // 8. Generate Unistyles configuration files if Unistyles is selected
  if (config.styling === 'unistyles') {
    // Generate theme.ts (must be first, imported by unistyles.ts)
    const themeModule = path.join(manager.modulesPath, 'styling', 'theme.ts');
    const themeTarget = path.join(targetPath, 'theme.ts');
    manager.copyModule(themeModule, themeTarget, config);
    
    // Generate breakpoints.ts (must be before unistyles.ts)
    const breakpointsModule = path.join(manager.modulesPath, 'styling', 'breakpoints.ts');
    const breakpointsTarget = path.join(targetPath, 'breakpoints.ts');
    manager.copyModule(breakpointsModule, breakpointsTarget, config);
    
    // Generate unistyles.ts (main config) at root - reads theme.ts and breakpoints.ts
    p.log.step('Generating unistyles.ts configuration...');
    const unistylesConfigModule = path.join(manager.modulesPath, 'styling', 'unistyles-config.ts');
    const unistylesConfigTarget = path.join(targetPath, 'unistyles.ts');
    // Need to fix imports in unistyles.ts to use relative imports
    let unistylesContent = fs.readFileSync(unistylesConfigModule, 'utf-8');
    unistylesContent = unistylesContent.replace(
      /from ['"]@\/breakpoints['"]/g,
      "from './breakpoints'"
    );
    unistylesContent = unistylesContent.replace(
      /from ['"]@\/theme['"]/g,
      "from './theme'"
    );
    fs.writeFileSync(unistylesConfigTarget, unistylesContent);
    
    // Generate index.js at root to import unistyles before expo-router/entry
    p.log.step('Generating index.js entry point...');
    const indexJsContent = `import "./unistyles";
import "expo-router/entry";
`;
    const indexJsTarget = path.join(targetPath, 'index.js');
    fs.writeFileSync(indexJsTarget, indexJsContent);
    
    // Update package.json to use index.js as main entry point
    pkg.main = 'index.js';
    
    // Generate container component for Unistyles (kebab-case)
    p.log.step('Generating container component...');
    const containerModule = path.join(manager.modulesPath, 'components', 'container.tsx');
    const containerTarget = path.join(targetPath, 'components', 'container.tsx');
    // Ensure components directory exists
    const componentsDir = path.dirname(containerTarget);
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }
    manager.copyModule(containerModule, containerTarget, config);
    
    // Generate theme-toggle component (kebab-case)
    const themeToggleModule = manager.getToggleThemeModule(config);
    const themeToggleTarget = path.join(targetPath, 'components', 'theme-toggle.tsx');
    manager.copyModule(themeToggleModule, themeToggleTarget, config);
    
    // Generate (tabs)/_layout.tsx
    const tabsLayoutModule = manager.getTabsLayoutModule(config);
    const tabsLayoutTarget = path.join(targetPath, 'app', '(tabs)', '_layout.tsx');
    manager.copyModule(tabsLayoutModule, tabsLayoutTarget, config);
    
    // Generate (tabs)/index.tsx
    const indexScreenModule = manager.getIndexScreenModule(config);
    const indexScreenTarget = path.join(targetPath, 'app', '(tabs)', 'index.tsx');
    manager.copyModule(indexScreenModule, indexScreenTarget, config);
    
    // Generate (tabs)/settings.tsx
    const settingsScreenModule = manager.getSettingsScreenModule(config);
    const settingsScreenTarget = path.join(targetPath, 'app', '(tabs)', 'settings.tsx');
    manager.copyModule(settingsScreenModule, settingsScreenTarget, config);
    
    // Generate +not-found.tsx
    const notFoundScreenModule = manager.getNotFoundScreenModule(config);
    const notFoundScreenTarget = path.join(targetPath, 'app', '+not-found.tsx');
    manager.copyModule(notFoundScreenModule, notFoundScreenTarget, config);
    
    // Generate modal.tsx
    const modalScreenModule = manager.getModalScreenModule(config);
    const modalScreenTarget = path.join(targetPath, 'app', 'modal.tsx');
    manager.copyModule(modalScreenModule, modalScreenTarget, config);
  } else {
    // Generate tabs layout for NativeWind
    const tabsLayoutModule = manager.getTabsLayoutModule(config);
    if (tabsLayoutModule && fs.existsSync(tabsLayoutModule)) {
      const tabsLayoutTarget = path.join(targetPath, 'app', '(tabs)', '_layout.tsx');
      manager.copyModule(tabsLayoutModule, tabsLayoutTarget, config);
    }
    
    // Generate (tabs)/index.tsx for NativeWind
    const indexScreenModule = manager.getIndexScreenModule(config);
    if (indexScreenModule && fs.existsSync(indexScreenModule)) {
      const indexScreenTarget = path.join(targetPath, 'app', '(tabs)', 'index.tsx');
      manager.copyModule(indexScreenModule, indexScreenTarget, config);
    }
    
    // Generate (tabs)/settings.tsx for NativeWind
    const settingsScreenModule = manager.getSettingsScreenModule(config);
    if (settingsScreenModule && fs.existsSync(settingsScreenModule)) {
      const settingsScreenTarget = path.join(targetPath, 'app', '(tabs)', 'settings.tsx');
      manager.copyModule(settingsScreenModule, settingsScreenTarget, config);
    }
    
    // Generate +not-found.tsx for NativeWind
    const notFoundScreenModule = manager.getNotFoundScreenModule(config);
    if (notFoundScreenModule && fs.existsSync(notFoundScreenModule)) {
      const notFoundScreenTarget = path.join(targetPath, 'app', '+not-found.tsx');
      manager.copyModule(notFoundScreenModule, notFoundScreenTarget, config);
    }
    
    // Generate modal.tsx for NativeWind
    const modalScreenModule = manager.getModalScreenModule(config);
    if (modalScreenModule && fs.existsSync(modalScreenModule)) {
      const modalScreenTarget = path.join(targetPath, 'app', 'modal.tsx');
      manager.copyModule(modalScreenModule, modalScreenTarget, config);
    }
    
    // Generate container component for NativeWind (kebab-case)
    p.log.step('Generating container component...');
    const containerNativeWindModule = path.join(manager.modulesPath, 'components', 'container-nativewind.tsx');
    const containerTarget = path.join(targetPath, 'components', 'container.tsx');
    // Ensure components directory exists
    const componentsDir = path.dirname(containerTarget);
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }
    manager.copyModule(containerNativeWindModule, containerTarget, config);
  }
  
  // 9. Generate components (external-link, colors) - these are generated for both styling options
  // 9a. Generate external-link component (kebab-case)
  p.log.step('Generating external-link component...');
  const externalLinkModule = path.join(manager.modulesPath, 'components', 'external-link.tsx');
  const externalLinkTarget = path.join(targetPath, 'components', 'external-link.tsx');
  if (fs.existsSync(externalLinkModule)) {
    const componentsDir = path.dirname(externalLinkTarget);
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }
    manager.copyModule(externalLinkModule, externalLinkTarget, config);
  }
  
  // 9b. Generate themes constants for Unistyles (kebab-case)
  if (config.styling === 'unistyles') {
    p.log.step('Generating themes constants...');
    const themesModule = path.join(manager.modulesPath, 'constants', 'themes.ts');
    const themesTarget = path.join(targetPath, 'constants', 'themes.ts');
    if (fs.existsSync(themesModule)) {
      const constantsDir = path.dirname(themesTarget);
      if (!fs.existsSync(constantsDir)) {
        fs.mkdirSync(constantsDir, { recursive: true });
      }
      manager.copyModule(themesModule, themesTarget, config);
    }
  }
  
  // 9c. Generate colors utils for NativeWind (kebab-case)
  if (config.styling === 'nativewind') {
    p.log.step('Generating colors utilities...');
    const colorsModule = path.join(manager.modulesPath, 'utils', 'colors.ts');
    const colorsTarget = path.join(targetPath, 'utils', 'colors.ts');
    if (fs.existsSync(colorsModule)) {
      const utilsDir = path.dirname(colorsTarget);
      if (!fs.existsSync(utilsDir)) {
        fs.mkdirSync(utilsDir, { recursive: true });
      }
      manager.copyModule(colorsModule, colorsTarget, config);
    }
  }
  
  // 10. Generate toggle theme component based on styling (kebab-case)
  p.log.step('Generating theme-toggle component...');
  const toggleThemeModule = manager.getToggleThemeModule(config);
  if (toggleThemeModule && fs.existsSync(toggleThemeModule)) {
    const toggleThemeTarget = path.join(targetPath, 'components', 'theme-toggle.tsx');
    const componentsDir = path.dirname(toggleThemeTarget);
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }
    manager.copyModule(toggleThemeModule, toggleThemeTarget, config);
  }
  
  // 11. Remove old component files (PascalCase -> kebab-case)
  p.log.step('Cleaning up old component files...');
  const oldToggleTheme = path.join(targetPath, 'components', 'ToggleTheme.tsx');
  if (fs.existsSync(oldToggleTheme)) {
    fs.rmSync(oldToggleTheme, { force: true });
  }
  
  // Only remove old Container.tsx if we're NOT using Unistyles (container is only for Unistyles)
  if (config.styling !== 'unistyles') {
    const oldContainer = path.join(targetPath, 'components', 'Container.tsx');
    if (fs.existsSync(oldContainer)) {
      fs.rmSync(oldContainer, { force: true });
    }
  }
  
  // Remove old PascalCase files
  const oldFiles = [
    path.join(targetPath, 'components', 'ExternalLink.tsx'),
  ];
  oldFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      fs.rmSync(file, { force: true });
    }
  });
  
  // 12. Update app.json with project name
  p.log.step('Updating app.json...');
  const appJsonPath = path.join(targetPath, 'app.json');
  if (fs.existsSync(appJsonPath)) {
    const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf-8'));
    const slug = projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    appJson.expo.name = projectName;
    appJson.expo.slug = slug;
    appJson.expo.scheme = slug;
    appJson.expo.ios.bundleIdentifier = `com.${slug.replace(/-/g, '')}`;
    appJson.expo.android.package = `com.${slug.replace(/-/g, '')}`;
    fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));
  }

  // Write updated package.json
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

async function handleStyling(config: ModuleConfig, targetPath: string, pkg: any) {
  if (config.styling === 'unistyles') {
    // Removing NativeWind
    // Remove NativeWind files
    const tailwindConfig = path.join(targetPath, 'tailwind.config.js');
    if (fs.existsSync(tailwindConfig)) {
      fs.rmSync(tailwindConfig, { force: true });
    }
    const globalCss = path.join(targetPath, 'global.css');
    if (fs.existsSync(globalCss)) {
      fs.rmSync(globalCss, { force: true });
    }
    const nativewindEnv = path.join(targetPath, 'nativewind-env.d.ts');
    if (fs.existsSync(nativewindEnv)) {
      fs.rmSync(nativewindEnv, { force: true });
    }
    // Update metro.config.js
    const metroConfigPath = path.join(targetPath, 'metro.config.js');
    const metroConfig = `const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = config;
`;
    fs.writeFileSync(metroConfigPath, metroConfig);
    // Update babel.config.js with Unistyles plugin
    const babelConfigPath = path.join(targetPath, 'babel.config.js');
    const babelConfig = `module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'react-native-unistyles/plugin',
        {
          root: 'app',
          autoProcessRoot: 'app',
          autoProcessImports: ['@/components'],
        },
      ],
      'react-native-worklets/plugin',
    ],
  };
};
`;
    fs.writeFileSync(babelConfigPath, babelConfig);
  }
  // If styling === 'nativewind', keep everything as is
}

async function removeUnselectedModules(
  modules: string[],
  config: ModuleConfig,
  targetPath: string,
  pkg: any
) {
  if (!modules.includes('mmkv')) {
    // Removing MMKV
    const mmkvFile = path.join(targetPath, 'lib', 'mmkv.ts');
    if (fs.existsSync(mmkvFile)) {
      fs.rmSync(mmkvFile, { force: true });
    }
  }

  if (!modules.includes('expo-dev-client')) {
    // Removing expo-dev-client
    if (pkg.scripts?.['dev']) {
      delete pkg.scripts['dev'];
    }
  }

  if (!modules.includes('react-query')) {
    // Removing React Query
    const queryClientFile = path.join(targetPath, 'lib', 'query-client.ts');
    if (fs.existsSync(queryClientFile)) {
      fs.rmSync(queryClientFile, { force: true });
    }
  }

  if (!modules.includes('jest')) {
    // Removing Jest
    if (pkg.scripts?.['test']) {
      delete pkg.scripts['test'];
    }
    const testsDir = path.join(targetPath, '__tests__');
    if (fs.existsSync(testsDir)) {
      fs.rmSync(testsDir, { recursive: true, force: true });
    }
  }

  if (config.styling !== 'unistyles') {
    // Remove unistyles.ts from root (not app/)
    const unistylesFile = path.join(targetPath, 'unistyles.ts');
    if (fs.existsSync(unistylesFile)) {
      fs.rmSync(unistylesFile, { force: true });
    }
    // Remove index.js if it was created for Unistyles
    const indexJsFile = path.join(targetPath, 'index.js');
    if (fs.existsSync(indexJsFile)) {
      const indexJsContent = fs.readFileSync(indexJsFile, 'utf-8');
      // Only remove if it imports unistyles
      if (indexJsContent.includes('./unistyles')) {
        fs.rmSync(indexJsFile, { force: true });
        // Restore package.json main to expo-router/entry
        pkg.main = 'expo-router/entry';
      }
    }
    // Remove theme context if not using Unistyles
    const themeContextFile = path.join(targetPath, 'contexts', 'app-theme-context.tsx');
    if (fs.existsSync(themeContextFile)) {
      fs.rmSync(themeContextFile, { force: true });
    }
    const themeFile = path.join(targetPath, 'theme.ts');
    if (fs.existsSync(themeFile)) {
      fs.rmSync(themeFile, { force: true });
    }
    const breakpointsFile = path.join(targetPath, 'breakpoints.ts');
    if (fs.existsSync(breakpointsFile)) {
      fs.rmSync(breakpointsFile, { force: true });
    }
  }
}
