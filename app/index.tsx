import { Fonts } from "@/enums/fonts.enum";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: Fonts.Inter }}>Root app</Text>
    </View>
  );
}
