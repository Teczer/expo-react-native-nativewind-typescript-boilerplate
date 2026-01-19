// Uniwind configuration file
// This file sets up the CSS variables for Uniwind theming

import { updateCSSVariables } from 'uniwind';
import { mmkvStorage } from '@/lib/mmkvStorage';
import { lightTheme, darkTheme, premiumTheme, type ThemeColors } from '@/constants/uniwind-themes';

export type ThemeName = 'light' | 'dark' | 'premium';

const themes: Record<ThemeName, ThemeColors> = {
  light: lightTheme,
  dark: darkTheme,
  premium: premiumTheme,
};

// Get saved theme from MMKV or default to 'light'
const savedTheme = mmkvStorage.getItem('app-theme') as ThemeName | null;
const initialTheme = savedTheme ?? 'light';
const theme = themes[initialTheme];

// Initialize CSS variables
updateCSSVariables({
  '--color-background': theme.background,
  '--color-foreground': theme.foreground,
  '--color-primary': theme.primary,
  '--color-primary-foreground': theme.primaryForeground,
  '--color-secondary': theme.secondary,
  '--color-secondary-foreground': theme.secondaryForeground,
  '--color-muted': theme.muted,
  '--color-muted-foreground': theme.mutedForeground,
  '--color-accent': theme.accent,
  '--color-accent-foreground': theme.accentForeground,
  '--color-border': theme.border,
  '--color-card': theme.card,
  '--color-card-foreground': theme.cardForeground,
});

export { themes };
