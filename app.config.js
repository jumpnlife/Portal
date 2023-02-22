import 'dotenv/config';

const usesEmailSignIn = process.env.USES_EMAIL_SIGN_IN === 'true' ? true : false;
const usesAppleSignIn = process.env.USES_APPLE_SIGN_IN === 'true' ? true : false;
const usesGoogleSignIn = process.env.USES_GOOGLE_SIGN_IN === 'true' && process.env.GOOGLE_WEB_CLIENT_ID ? true : false;

export default {
  expo: {
    name: "Portal",
    slug: "portal",
    owner: "atomlab",
    version: "0.3.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      usesAppleSignIn: usesAppleSignIn,
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      favicon: "./assets/images/favicon.png"
    },
    extra: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY || "",
        authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
        databaseURL: process.env.FIREBASE_DATABASE_URL || "",
        projectId: process.env.FIREBASE_PROJECT_ID || "",
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
        appId: process.env.FIREBASE_APP_ID || "",
        measurementId: process.env.FIREBASE_MEASUREMENT_ID || "",
      },
      usesEmailSignIn: usesEmailSignIn,
      usesAppleSignIn: usesAppleSignIn,
      usesGoogleSignIn: usesGoogleSignIn,
      googleExpoClientId: process.env.GOOGLE_EXPO_CLIENT_ID || "",
      googleWebClientId: process.env.GOOGLE_WEB_CLIENT_ID || "",
    }
  }
}
