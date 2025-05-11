// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
// Using the BitNet project configuration

// Initialize Firebase

const firebaseConfig = {

  apiKey: "AIzaSyBcyvh_ub5KohvY3-O25XMVPjRPmVXiv28",

  authDomain: "bitnet-cb34f.firebaseapp.com",

  databaseURL: "https://bitnet-cb34f-default-rtdb.firebaseio.com",

  projectId: "bitnet-cb34f",

  storageBucket: "bitnet-cb34f.appspot.com",

  messagingSenderId: "466393582939",

  appId: "1:466393582939:web:16ff9fac7ae50e9ad8de7e",

  measurementId: "G-BW6W8M4M4J"

};

// Initialize Firebase
declare global {
  interface Global {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: string | boolean;
  }

  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: string | boolean;
  }
}
const app = initializeApp(firebaseConfig);
// Debug token will be set within the AppCheck initialization below
// Only initialize App Check in browser environments
let appCheck;
if (typeof window !== 'undefined') {
  try {
    // Register the debug token first
    if (import.meta.env.DEV) {
      window.FIREBASE_APPCHECK_DEBUG_TOKEN = 'c899894e-58fc-48eb-8714-ca3cf8e56800';
    }

    appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider('6LdqgS4rAAAAAKFgtcYebZ4jjWxCtV9p7sVBOpew'),
      isTokenAutoRefreshEnabled: true
    });

    console.log('Firebase AppCheck initialized successfully');
  } catch (error) {
    console.warn('Firebase AppCheck initialization failed:', error);
    // Fallback - create a placeholder for appCheck to prevent errors
    appCheck = { getToken: () => Promise.resolve({ token: 'test-token' }) };
  }
} else {
  // Server-side rendering scenario - create a placeholder
  appCheck = { getToken: () => Promise.resolve({ token: 'test-token' }) };
}
const db = getFirestore(app);

// Initialize analytics only in browser context to prevent SSR errors
let analytics;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn('Firebase Analytics initialization failed:', error);
    // Create a placeholder
    analytics = {};
  }
} else {
  analytics = {};
}
export { db, app, analytics, appCheck };
