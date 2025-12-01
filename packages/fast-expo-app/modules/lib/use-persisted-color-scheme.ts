import { useEffect } from 'react';
import { useColorScheme as useNativeWindColorScheme } from 'nativewind';

import { mmkvStorage } from './mmkvStorage';

const THEME_KEY = 'app-theme';

/**
 * Hook to persist color scheme with MMKV for NativeWind
 */
export function usePersistedColorScheme() {
  const { colorScheme, setColorScheme } = useNativeWindColorScheme();

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = mmkvStorage.getItem(THEME_KEY) as 'light' | 'dark' | null;
    if (savedTheme && savedTheme !== colorScheme) {
      setColorScheme(savedTheme);
    }
  }, []);

  // Save theme whenever it changes
  const persistAndSetColorScheme = (theme: 'light' | 'dark') => {
    mmkvStorage.setItem(THEME_KEY, theme);
    setColorScheme(theme);
  };

  return {
    colorScheme: colorScheme ?? 'light',
    setColorScheme: persistAndSetColorScheme,
  };
}

