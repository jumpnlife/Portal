import { useState } from "react";
import { StyleSheet } from "react-native";
import { sendPasswordResetEmail, AuthError } from "firebase/auth";

import { Text, TextInput, Button, Link } from "../components/Themed";
import { auth } from "../firebase";
import { RootTabScreenProps } from "../types";
import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import { useNavigation } from "@react-navigation/native";

export default function ResetPasswordScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [error, setError] = useState<AuthError | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const doSendResetPasswordEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Please check your email to finish resetting your password");
    } catch (err) {
      setError(err as AuthError);
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      footer={
        <Link onPress={() => navigation.navigate("EmailLogin")}>
          Back to Login
        </Link>
      }
      error={error}
      success={success}
    >
      <TextInput
        placeholder="Enter email"
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(newEmail) => setEmail(newEmail)}
        style={{ marginBottom: 20 }}
      />
      <Button onPress={() => doSendResetPasswordEmail()}>Reset Password</Button>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
