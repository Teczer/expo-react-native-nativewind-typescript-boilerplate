import { StyleSheet } from 'react-native-unistyles';

import { breakpoints } from '@/breakpoints';
import { darkTheme, lightTheme, premiumTheme } from '@/theme';
import { mmkvStorage } from '@/lib/mmkvStorage';

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
  premium: typeof premiumTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  breakpoints,
  themes: {
    light: lightTheme,
    dark: darkTheme,
    premium: premiumTheme,
  },
  settings: {
    initialTheme: () => {
      // Get saved theme from MMKV or default to 'light'
      const savedTheme = mmkvStorage.getItem('app-theme');
      return (savedTheme as keyof AppThemes) ?? 'light';
    },
  },
});
