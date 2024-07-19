import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { TouchableOpacity } from "react-native";

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Messages</Text>
      <View
        className="my-8 h-10 w-10"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity
        className="h-10 w-10 rounded-full bg-red-500 p-8"
        style={{
          borderWidth: 1,
          borderColor: "white",
        }}
      >
        <Text>Yo</Text>
      </TouchableOpacity>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
