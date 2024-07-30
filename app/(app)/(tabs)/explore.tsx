import { View, Text } from "react-native";
import { useSession } from "@/ctx";

export default function TabTwoScreen() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => signOut()}>Sign out</Text>
    </View>
  );
}
