import React, { useState, useEffect } from "react";
import { AuthError } from "firebase/auth";

const useFriendlyError = (error: AuthError) => {
  const [friendlyError, setFriendlyError] = useState("");

  useEffect(() => {
    if (
      error.code === "auth/invalid-email" ||
      error.code === "auth/wrong-password"
    ) {
      setFriendlyError("Your email or password was incorrect");
    } else if (error.code === "auth/email-already-in-use") {
      setFriendlyError("An account with this email already exists");
    } else {
      setFriendlyError("There was a problem with your request");
    }
  }, [error]);

  return friendlyError;
};

export default useFriendlyError;
