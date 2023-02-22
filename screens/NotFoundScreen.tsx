import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Text } from "../components/Themed";
import { auth } from "../firebase";
import { RootStackScreenProps } from "../types";

export default function NotFoundScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    if (auth && auth.currentUser) {
      navigation.navigate('Root');
    } else {
      navigation.navigate('Login');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => handlePress()}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
