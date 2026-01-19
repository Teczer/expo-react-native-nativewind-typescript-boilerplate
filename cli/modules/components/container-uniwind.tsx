import React from 'react';
import Animated from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { withUniwind } from 'uniwind';

const StyledSafeAreaView = withUniwind(SafeAreaView);

export function Container({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();

  return (
    <StyledSafeAreaView className="flex-1 bg-background">
      <Animated.View
        className="flex-1"
        style={{ paddingBottom: insets.bottom }}
      >
        {children}
      </Animated.View>
    </StyledSafeAreaView>
  );
}
