import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { H2 } from "../components/StyledText";

export default function ModalScreen() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex-1 items-center justify-center")}>
      <H2>Modal</H2>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
