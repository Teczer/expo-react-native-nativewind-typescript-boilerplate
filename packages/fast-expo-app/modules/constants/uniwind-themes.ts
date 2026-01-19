export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
  success: string;
  destructive: string;
  warning: string;
  info: string;
}

const sharedColors = {
  success: '#22C55E',
  destructive: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
};

export const lightTheme: ThemeColors = {
  ...sharedColors,
  background: '#ffffff',
  foreground: '#000000',
  card: '#fafafa',
  cardForeground: '#000000',
  primary: '#1a1a1a',
  primaryForeground: '#ffffff',
  secondary: '#f2f2f2',
  secondaryForeground: '#000000',
  muted: '#f5f5f5',
  mutedForeground: '#737373',
  accent: '#f5f5f5',
  accentForeground: '#000000',
  border: '#e6e6e6',
  input: '#e6e6e6',
  ring: '#333333',
};

export const darkTheme: ThemeColors = {
  ...sharedColors,
  background: '#000000',
  foreground: '#ffffff',
  card: '#0a0a0a',
  cardForeground: '#ffffff',
  primary: '#e6e6e6',
  primaryForeground: '#000000',
  secondary: '#1a1a1a',
  secondaryForeground: '#ffffff',
  muted: '#171717',
  mutedForeground: '#a6a6a6',
  accent: '#171717',
  accentForeground: '#ffffff',
  border: '#262626',
  input: '#262626',
  ring: '#cccccc',
};

export const premiumTheme: ThemeColors = {
  ...sharedColors,
  background: '#1a0a2e',
  foreground: '#f2e6ff',
  card: '#2d1a47',
  cardForeground: '#f2e6ff',
  primary: '#b366ff',
  primaryForeground: '#1a0a2e',
  secondary: '#3d2266',
  secondaryForeground: '#f2e6ff',
  muted: '#2d1a47',
  mutedForeground: '#b399cc',
  accent: '#ff4da6',
  accentForeground: '#1a0a2e',
  border: '#5c3380',
  input: '#5c3380',
  ring: '#b366ff',
};
