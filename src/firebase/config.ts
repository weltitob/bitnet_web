// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, increment } from "firebase/firestore";
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
if (import.meta.env.DEV == true) {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

}
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LdqgS4rAAAAAKFgtcYebZ4jjWxCtV9p7sVBOpew'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});
const db = getFirestore(app);

const analytics = getAnalytics(app);
export { db, app, analytics, appCheck };
