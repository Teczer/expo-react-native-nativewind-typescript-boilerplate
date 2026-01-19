import { View, Text } from 'react-native';
import { withUniwind } from 'uniwind';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';

const StyledSafeAreaView = withUniwind(SafeAreaView);

export default function TabOneScreen() {
  return (
    <StyledSafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">Home</Text>
      <Text className="text-xs font-mono text-foreground mt-4">
        Text with custom font (SpaceMono x Uniwind)
      </Text>
      <View className="h-[1px] w-4/5 my-8 bg-border" />
      <View className="mt-2 mx-5 items-center">
        <ExternalLink href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text className="text-center text-primary">
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </StyledSafeAreaView>
  );
}
