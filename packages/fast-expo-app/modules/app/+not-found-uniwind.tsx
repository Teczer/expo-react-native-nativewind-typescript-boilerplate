import { Link, Stack } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import { withUniwind } from 'uniwind';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledSafeAreaView = withUniwind(SafeAreaView);

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <StyledSafeAreaView className="flex-1 items-center justify-center p-5 bg-background">
        <Text className="text-xl font-bold text-foreground">
          This screen doesn't exist.
        </Text>
        <Link href="/" asChild>
          <Pressable className="mt-4 py-4">
            <Text className="text-base text-primary">Go to home screen!</Text>
          </Pressable>
        </Link>
      </StyledSafeAreaView>
    </>
  );
}
