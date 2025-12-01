import React from 'react';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Container({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <Animated.View
        className="flex-1"
        style={{ paddingBottom: insets.bottom }}
      >
        {children}
      </Animated.View>
    </SafeAreaView>
  );
}

