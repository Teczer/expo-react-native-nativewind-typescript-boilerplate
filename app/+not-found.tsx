import { Link, Stack } from "expo-router";

import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-5 bg-white dark:bg-black">
        <Text className="text-xl font-bold text-dark dark:text-white">
          This screen doesn&apos;t exist.
        </Text>
        <Link href="/" className="mt-4 py-4">
          <Text className="text-sm text-[#2e78b7]">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
