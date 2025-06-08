import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const router = useRouter();

  return (
    <View
      className="bg-red-600"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text>Change route</Text>
      </TouchableOpacity>
    </View>
  );
}
