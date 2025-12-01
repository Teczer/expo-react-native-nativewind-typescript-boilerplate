import type { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';

export type ThemeName = 'light' | 'dark' | 'premium';

type IconName = ComponentProps<typeof Ionicons>['name'];

export interface ThemeConfig {
  name: ThemeName;
  icon: IconName;
  key: string;
  label: string;
}

export const THEME_CONFIGS: Record<ThemeName, ThemeConfig> = {
  light: {
    name: 'light',
    icon: 'sunny',
    key: 'sun',
    label: 'Light',
  },
  dark: {
    name: 'dark',
    icon: 'moon',
    key: 'moon',
    label: 'Dark',
  },
  premium: {
    name: 'premium',
    icon: 'diamond',
    key: 'diamond',
    label: 'Premium',
  },
} as const;

export const THEME_CYCLE_ORDER: ThemeName[] = ['light', 'dark', 'premium'];

export const getNextTheme = (currentTheme: ThemeName): ThemeName => {
  const currentIndex = THEME_CYCLE_ORDER.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % THEME_CYCLE_ORDER.length;
  return THEME_CYCLE_ORDER[nextIndex];
};

