import { StatusBar } from 'expo-status-bar';
import { Platform, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="flex-1 pt-2 items-center justify-start bg-white dark:bg-black">
      <Text className="text-xl font-bold text-dark dark:text-white">Settings screen</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </SafeAreaView>
  );
}
