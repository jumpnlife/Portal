import { View, Image } from "react-native";
import Constants from "expo-constants";
import { useTailwind } from "tailwind-rn";

import { H1 } from "../components/StyledText";

export default function AuthHeader() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex flex-col items-center")}>
      <Image
        style={tailwind("w-20 h-20 mb-8")}
        source={require("../assets/images/icon.png")}
      />
      <H1 style={tailwind("mb-3")}>{Constants?.manifest?.name || "Portal"}</H1>
    </View>
  );
}
