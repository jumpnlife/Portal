import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

import { H2 } from "../components/StyledText";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex-1 items-center justify-center")}>
      <H2>Tab One</H2>
    </View>
  );
}
