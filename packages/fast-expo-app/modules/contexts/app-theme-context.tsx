import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';

type ThemeName = 'light' | 'dark';

type AppThemeContextType = {
  currentTheme: string;
  isLight: boolean;
  isDark: boolean;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
};

const AppThemeContext = createContext<AppThemeContextType | undefined>(undefined);

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const themeName = UnistylesRuntime.colorScheme;

  const isLight = useMemo(() => {
    return themeName === 'light';
  }, [themeName]);

  const isDark = useMemo(() => {
    return themeName === 'dark';
  }, [themeName]);

  const setTheme = useCallback((newTheme: ThemeName) => {
    UnistylesRuntime.setTheme(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    UnistylesRuntime.setTheme(themeName === 'light' ? 'dark' : 'light');
  }, [themeName]);

  const value = useMemo(
    () => ({
      currentTheme: themeName,
      isLight,
      isDark,
      setTheme,
      toggleTheme,
    }),
    [themeName, isLight, isDark, setTheme, toggleTheme],
  );

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};

export function useAppTheme() {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }
  return context;
}

