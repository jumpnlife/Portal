import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { onAuthStateChanged } from "firebase/auth";
import { TailwindProvider } from "tailwind-rn";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import utilities from "./tailwind.json";
import { auth } from "./firebase";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [loggedIn, setLoggedIn] = useState(false);

  console.log('auth', auth);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      setLoggedIn(true);
      // ...
    } else {
      // User is signed out
      // ...
      setLoggedIn(false);
    }
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <TailwindProvider utilities={utilities}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} loggedIn={loggedIn} />
          <StatusBar />
        </SafeAreaProvider>
      </TailwindProvider>
    );
  }
}
