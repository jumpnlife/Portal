import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import { Button } from "./Themed";

export default function EmailAuthButton() {
  const navigation = useNavigation();
  const tailwind = useTailwind();

  return (
    <Button
      icon={() => (
        <MaterialCommunityIcons
          name="email-outline"
          size={24}
          style={tailwind("text-black dark:text-white")}
        />
      )}
      onPress={() => navigation.navigate("EmailLogin")}
    >
      Continue with Email
    </Button>
  );
}
