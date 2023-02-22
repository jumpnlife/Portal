import React from "react";
import { Text } from "react-native";
import { AuthError } from "firebase/auth";
import useFriendlyError from "../hooks/useFriendlyError";

interface ErrorBoxProps {
  error: AuthError;
}

export default function ErrorBox({ error }: ErrorBoxProps) {
  const displayError = useFriendlyError(error);

  return (
    <Text style={{ color: "#e57373", marginTop: 20, fontWeight: "bold" }}>
      {displayError}
    </Text>
  );
}
