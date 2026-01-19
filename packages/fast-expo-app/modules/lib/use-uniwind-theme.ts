import { useState, useCallback, useEffect } from 'react';
import { Uniwind, useUniwind } from 'uniwind';

import { mmkvStorage } from './mmkvStorage';
import { lightTheme, darkTheme, premiumTheme, type ThemeColors } from '@/constants/uniwind-themes';

export type ThemeName = 'light' | 'dark' | 'premium';

const THEME_KEY = 'app-theme';

const themes: Record<ThemeName, ThemeColors> = {
  light: lightTheme,
  dark: darkTheme,
  premium: premiumTheme,
};

// Get initial theme from storage
const getInitialTheme = (): ThemeName => {
  const savedTheme = mmkvStorage.getItem(THEME_KEY) as ThemeName | null;
  return savedTheme ?? 'light';
};

// Apply initial theme on app start
const initialTheme = getInitialTheme();
Uniwind.setTheme(initialTheme as 'light' | 'dark');

/**
 * Hook to manage Uniwind theme with MMKV persistence
 */
export function useUniwindTheme() {
  const { theme: uniwindTheme } = useUniwind();
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(initialTheme);

  // Sync with Uniwind theme
  useEffect(() => {
    if (uniwindTheme && uniwindTheme !== currentTheme) {
      setCurrentTheme(uniwindTheme as ThemeName);
    }
  }, [uniwindTheme]);

  // Set and persist theme
  const setTheme = useCallback((themeName: ThemeName) => {
    mmkvStorage.setItem(THEME_KEY, themeName);
    setCurrentTheme(themeName);
    // Use Uniwind.setTheme to change theme
    Uniwind.setTheme(themeName as 'light' | 'dark');
  }, []);

  return {
    currentTheme,
    setTheme,
    colors: themes[currentTheme],
  };
}
