import React, { useState } from "react";
import { View } from "react-native";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  AuthError,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn";

import { TextInput, Button, Link, Checkbox } from "../../components/Themed";
import { auth } from "../../firebase";
import AuthLayout from "../../components/AuthLayout";

export default function EmailAuth() {
  const navigation = useNavigation();
  const tailwind = useTailwind();

  console.log('!!! auth', auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [persist, setPersist] = useState(false);
  const [error, setError] = useState<AuthError | undefined>(undefined);

  const loginUser = async () => {
    console.log('loginUser');
    try {
      if (persist) {
        await setPersistence(auth, browserSessionPersistence);
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err as AuthError);
    }
  };

  return (
    <AuthLayout
      title="Login"
      footer={
        <Link onPress={() => navigation.navigate("Signup")}>
          Create a New Account
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
        style={tailwind("mb-4")}
      />
      <TextInput
        placeholder="Enter password"
        value={password}
        secureTextEntry
        onChangeText={(newPassword) => setPassword(newPassword)}
        style={tailwind("mb-8")}
      />

      <View style={tailwind("flex flex-row justify-between items-center mb-8")}>
        <Checkbox
          label="Remember me"
          value={persist}
          onValueChange={setPersist}
        />
        <Link onPress={() => navigation.navigate("ResetPassword")}>
          Reset Password
        </Link>
      </View>

      <Button onPress={() => loginUser()}>Login</Button>
    </AuthLayout>
  );
}
