import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  AuthError,
} from "firebase/auth";

import { Button, TextInput, Link } from "../components/Themed";
import { auth } from "../firebase";
import { RootTabScreenProps } from "../types";
import AuthLayout from "../components/AuthLayout";

export default function SignupScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<AuthError | undefined>(undefined);

  const createUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error as AuthError);
    }
  };

  return (
    <AuthLayout
      title="Create New Account"
      footer={
        <Link onPress={() => navigation.navigate("EmailLogin")}>
          Login to Existing Account
        </Link>
      }
      error={error}
    >
      <TextInput
        placeholder="Enter email"
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(newEmail) => setEmail(newEmail)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        placeholder="Enter password"
        value={password}
        secureTextEntry
        onChangeText={(newPassword) => setPassword(newPassword)}
        style={{ marginBottom: 20 }}
      />
      <Button onPress={() => createUser()}>Create Account</Button>
    </AuthLayout>
  );
}
