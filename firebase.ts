import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants?.manifest?.extra?.firebase?.apiKey,
  authDomain: Constants?.manifest?.extra?.firebase?.authDomain,
  databaseURL: Constants?.manifest?.extra?.firebase?.databaseURL,
  projectId: Constants?.manifest?.extra?.firebase?.projectId,
  storageBucket: Constants?.manifest?.extra?.firebase?.storageBucket,
  messagingSenderId: Constants?.manifest?.extra?.firebase?.messagingSenderId,
  appId: Constants?.manifest?.extra?.firebase?.appId,
  measurementId: Constants?.manifest?.extra?.firebase?.measurementId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
