import { View, Text } from "react-native";
import { useSession } from "@/ctx";
import { Tabs } from "expo-router";

export default function HomeScreen() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Tabs.Screen options={{ title: "Index" }} />
      <Text onPress={() => signOut()}>Sign out</Text>
    </View>
  );
}
