import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Platform, Pressable } from 'react-native';
import Animated, { FadeOut, ZoomIn } from 'react-native-reanimated';

import { THEME_CONFIGS, type ThemeName } from '@/constants/themes';
import { useUniwindTheme } from '@/lib/use-uniwind-theme';

export function ThemeToggle() {
  const { currentTheme, setTheme, colors } = useUniwindTheme();

  const handleThemeChange = () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    let nextTheme: ThemeName;

    switch (currentTheme) {
      case 'light':
        nextTheme = 'dark';
        break;
      case 'dark':
        nextTheme = 'premium';
        break;
      case 'premium':
        nextTheme = 'light';
        break;
      default:
        nextTheme = 'light';
    }

    setTheme(nextTheme);
  };

  const themeConfig = THEME_CONFIGS[currentTheme];

  return (
    <Pressable onPress={handleThemeChange} style={{ paddingHorizontal: 10 }}>
      <Animated.View key={themeConfig.key} entering={ZoomIn} exiting={FadeOut}>
        <Ionicons name={themeConfig.icon} size={20} color={colors.foreground} />
      </Animated.View>
    </Pressable>
  );
}
