/**
 * Color utilities for NativeWind
 * Provides consistent color values across the app
 */

export const colors = {
  light: {
    primary: '#2f95dc',
    background: '#fff',
    text: '#000',
    tabIconDefault: '#ccc',
    tabIconSelected: '#2f95dc',
    border: '#e5e5e5',
  },
  dark: {
    primary: '#fff',
    background: '#000',
    text: '#fff',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff',
    border: '#333',
  },
} as const;

/**
 * Get color value based on color scheme
 */
export function getColor(
  colorScheme: 'light' | 'dark' | null | undefined,
  key: keyof typeof colors.light
): string {
  const scheme = colorScheme === 'dark' ? 'dark' : 'light';
  return colors[scheme][key];
}

