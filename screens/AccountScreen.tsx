import { View } from "react-native";
import { signOut } from "firebase/auth";
import { useTailwind } from "tailwind-rn";

import { Button } from "../components/Themed";
import { auth } from "../firebase";

export default function TabTwoScreen() {
  const tailwind = useTailwind();

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={tailwind("flex-1 items-center justify-center p-4")}>
      <Button onPress={() => signOutUser()}>Sign out</Button>
    </View>
  );
}
