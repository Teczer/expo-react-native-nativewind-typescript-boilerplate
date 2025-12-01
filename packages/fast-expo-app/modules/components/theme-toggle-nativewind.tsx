import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Platform, Pressable } from 'react-native';
import Animated, { FadeOut, ZoomIn } from 'react-native-reanimated';

import { usePersistedColorScheme } from '@/lib/use-persisted-color-scheme';

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = usePersistedColorScheme();

  const handleThemeChange = () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    const nextTheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(nextTheme);
  };

  const iconName = colorScheme === 'dark' ? 'moon' : 'sunny';
  const iconColor = colorScheme === 'dark' ? '#fff' : '#000';

  return (
    <Pressable onPress={handleThemeChange} style={{ paddingHorizontal: 10 }}>
      <Animated.View key={iconName} entering={ZoomIn} exiting={FadeOut}>
        <Ionicons name={iconName} size={20} color={iconColor} />
      </Animated.View>
    </Pressable>
  );
}

