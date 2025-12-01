import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface ModuleConfig {
  hasMMKV: boolean;
  hasZustand: boolean;
  hasReactQuery: boolean;
  hasDevClient: boolean;
  styling: 'nativewind' | 'unistyles';
}

export class ModuleManager {
  public modulesPath: string;

  constructor() {
    this.modulesPath = path.join(__dirname, '..', 'modules');
  }

  /**
   * Get the storage module file path based on configuration
   */
  getStorageModule(config: ModuleConfig): string {
    const storagePath = path.join(this.modulesPath, 'storage');
    return config.hasMMKV
      ? path.join(storagePath, 'with-mmkv.ts')
      : path.join(storagePath, 'without-mmkv.ts');
  }

  /**
   * Get the query provider module file path based on configuration
   */
  getQueryProviderModule(config: ModuleConfig): string {
    const queryProviderPath = path.join(this.modulesPath, 'query-provider');
    
    if (!config.hasReactQuery) {
      return path.join(queryProviderPath, 'without-react-query.tsx');
    }
    
    if (config.hasMMKV && config.hasDevClient) {
      return path.join(queryProviderPath, 'with-react-query-mmkv-dev.tsx');
    }
    
    if (config.hasMMKV) {
      return path.join(queryProviderPath, 'with-react-query-mmkv.tsx');
    }
    
    return path.join(queryProviderPath, 'with-react-query.tsx');
  }

  /**
   * Get the Zustand module file path based on configuration
   */
  getZustandModule(config: ModuleConfig): string | null {
    if (!config.hasZustand) {
      return null;
    }
    
    const zustandPath = path.join(this.modulesPath, 'zustand');
    return config.hasMMKV
      ? path.join(zustandPath, 'with-mmkv.ts')
      : path.join(zustandPath, 'without-mmkv.ts');
  }

  /**
   * Get the layout module file path based on styling configuration
   */
  getLayoutModule(config: ModuleConfig): string {
    const layoutPath = path.join(this.modulesPath, 'layout');
    if (config.styling === 'unistyles') {
      return path.join(layoutPath, 'with-unistyles.tsx');
    }
    return path.join(layoutPath, 'with-nativewind.tsx');
  }


  /**
   * Get the toggle theme component module file path based on styling
   */
  getToggleThemeModule(config: ModuleConfig): string {
    const componentsPath = path.join(this.modulesPath, 'components');
    if (config.styling === 'unistyles') {
      return path.join(componentsPath, 'theme-toggle-unistyles.tsx');
    }
    return path.join(componentsPath, 'theme-toggle-nativewind.tsx');
  }

  /**
   * Get the tabs layout module file path based on styling
   */
  getTabsLayoutModule(config: ModuleConfig): string {
    const layoutPath = path.join(this.modulesPath, 'layout');
    if (config.styling === 'unistyles') {
      return path.join(layoutPath, 'tabs-unistyles.tsx');
    }
    return path.join(layoutPath, 'tabs-nativewind.tsx');
  }

  /**
   * Get the index screen module file path based on styling
   */
  getIndexScreenModule(config: ModuleConfig): string {
    const appPath = path.join(this.modulesPath, 'app', 'tabs');
    if (config.styling === 'unistyles') {
      return path.join(appPath, 'index-unistyles.tsx');
    }
    return path.join(appPath, 'index-nativewind.tsx');
  }

  /**
   * Get the settings screen module file path based on styling
   */
  getSettingsScreenModule(config: ModuleConfig): string {
    const appPath = path.join(this.modulesPath, 'app', 'tabs');
    if (config.styling === 'unistyles') {
      return path.join(appPath, 'settings-unistyles.tsx');
    }
    return path.join(appPath, 'settings-nativewind.tsx');
  }

  /**
   * Get the not-found screen module file path based on styling
   */
  getNotFoundScreenModule(config: ModuleConfig): string {
    const appPath = path.join(this.modulesPath, 'app');
    if (config.styling === 'unistyles') {
      return path.join(appPath, '+not-found-unistyles.tsx');
    }
    return path.join(appPath, '+not-found-nativewind.tsx');
  }

  /**
   * Get the modal screen module file path based on styling
   */
  getModalScreenModule(config: ModuleConfig): string {
    const appPath = path.join(this.modulesPath, 'app');
    if (config.styling === 'unistyles') {
      return path.join(appPath, 'modal-unistyles.tsx');
    }
    return path.join(appPath, 'modal-nativewind.tsx');
  }

  /**
   * Copy a module file to the target location
   */
  copyModule(modulePath: string, targetPath: string, config?: ModuleConfig): void {
    if (!fs.existsSync(modulePath)) {
      throw new Error(`Module file not found: ${modulePath}`);
    }
    
    // Ensure target directory exists
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Read the file content
    let content = fs.readFileSync(modulePath, 'utf-8');
    
    // Replace imports if MMKV is selected and we're copying to mmkvStorage.ts
    if (config?.hasMMKV && targetPath.endsWith('mmkvStorage.ts')) {
      // No need to change imports, they're already correct
    } else if (config?.hasMMKV) {
      // If MMKV is selected but we're copying to another file, update imports
      content = content.replace(/from ['"]@\/lib\/storage['"]/g, "from '@/lib/mmkvStorage'");
    }
    
    fs.writeFileSync(targetPath, content);
  }

  /**
   * Get dependencies to add based on configuration
   */
  getDependencies(config: ModuleConfig): Record<string, string> {
    const deps: Record<string, string> = {};

    if (config.hasMMKV) {
      deps['react-native-mmkv'] = '^4.0.0';
      deps['react-native-nitro-modules'] = '^0.31.5';
    }

    if (config.hasZustand) {
      deps['zustand'] = '^5.0.2';
    }

    if (config.hasReactQuery) {
      deps['@tanstack/react-query'] = '^5.90.7';
      
      if (config.hasMMKV) {
        deps['@tanstack/react-query-persist-client'] = '^5.90.7';
        deps['@tanstack/query-sync-storage-persister'] = '^5.90.7';
      }
    }

    if (config.hasDevClient) {
      deps['expo-dev-client'] = '~6.0.17';
      
      if (config.hasMMKV && config.hasReactQuery) {
        deps['@dev-plugins/react-native-mmkv'] = '^0.4.0';
      }
    }

    // Always add these dependencies
    deps['expo-haptics'] = '~14.0.0';
    deps['react-native-edge-to-edge'] = '^1.0.0';
    deps['react-native-worklets'] = '^0.5.1';

    if (config.styling === 'unistyles') {
      deps['react-native-unistyles'] = '^3.0.18';
      deps['react-native-gesture-handler'] = '~2.28.0';
      deps['react-native-keyboard-controller'] = '^1.18.5';
    }

    if (config.styling === 'nativewind') {
      deps['nativewind'] = '^4.1.23';
    }

    return deps;
  }

  /**
   * Get dependencies to remove based on configuration
   */
  getDependenciesToRemove(config: ModuleConfig): string[] {
    const toRemove: string[] = [];

    if (!config.hasMMKV) {
      toRemove.push('react-native-mmkv', 'react-native-nitro-modules');
    }

    if (!config.hasZustand) {
      toRemove.push('zustand');
    }

    if (!config.hasReactQuery) {
      toRemove.push(
        '@tanstack/react-query',
        '@tanstack/react-query-persist-client',
        '@tanstack/query-sync-storage-persister'
      );
    }

    if (!config.hasDevClient) {
      toRemove.push('expo-dev-client', '@dev-plugins/react-native-mmkv');
    }

    if (config.styling !== 'nativewind') {
      toRemove.push('nativewind');
    }

    if (config.styling !== 'unistyles') {
      toRemove.push('react-native-unistyles');
    }

    if (config.styling === 'unistyles') {
      toRemove.push('tailwindcss'); // devDependency
    }

    return toRemove;
  }
}

