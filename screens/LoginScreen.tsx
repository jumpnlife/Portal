import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import { useTailwind } from "tailwind-rn";

import AppleAuth from "../components/auth-providers/AppleAuth";
import GoogleAuth from "../components/auth-providers/GoogleAuth";
import EmailAuthButton from "../components/EmailAuthButton";
import AuthHeader from "../components/AuthHeader";

export default function LoginScreen() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex-1 flex flex-col items-center")}>
      <View style={tailwind("flex-1 flex items-center justify-center py-4")}>
        <AuthHeader />
      </View>

      <View
        style={tailwind(
          "flex-1 flex items-center justify-center py-4 max-w-xs w-full"
        )}
      >
        {Constants?.manifest?.extra?.usesAppleSignIn && (
          <View style={tailwind("button-container")}>
            <AppleAuth />
          </View>
        )}

        {Constants?.manifest?.extra?.usesGoogleSignIn && (
          <View style={tailwind("button-container")}>
            <GoogleAuth />
          </View>
        )}

        {
          (Constants?.manifest?.extra?.usesAppleSignIn || Constants?.manifest?.extra?.usesGoogleSignIn) && Constants?.manifest?.extra?.usesEmailSignIn && (
            <View style={tailwind("w-full my-4 flex flex-row items-center")}>
              <View
                style={tailwind("flex-1 h-0.5 rounded-full bg-black dark:bg-white")}
              />
              <Text style={tailwind("text-black dark:text-white mx-4 text-base")}>
                Or
              </Text>
              <View
                style={tailwind("flex-1 h-0.5 rounded-full bg-black dark:bg-white")}
              />
            </View>
          )
        }

        {Constants?.manifest?.extra?.usesEmailSignIn && (
          <View style={tailwind("button-container")}>
            <EmailAuthButton />
          </View>
        )}
      </View>
    </View>
  );
}
