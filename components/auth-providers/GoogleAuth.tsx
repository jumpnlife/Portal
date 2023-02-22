import React, { useEffect } from "react";
import { Image } from "react-native";
import Constants from "expo-constants";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { Button } from "../Themed";
import { auth } from "../../firebase";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleAuth() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId: Constants?.manifest?.extra?.googleExpoClientId,
    webClientId: Constants?.manifest?.extra?.googleWebClientId,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      // const provider = new GoogleAuthProvider();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      icon={() => (
        <Image
          style={{ width: 24, height: 24, marginRight: 6 }}
          source={require("../../assets/images/google.png")}
        />
      )}
      onPress={() => promptAsync()}
    >
      Continue with Google
    </Button>
  );
}
