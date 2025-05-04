// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, increment } from "firebase/firestore";

// Your web app's Firebase configuration
// Using the BitNet project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjN44otvMhSGsLOQeDHduRw6x2KQgbYQY",
  authDomain: "bitnet-cb34f.firebaseapp.com",
  projectId: "bitnet-cb34f",
  storageBucket: "bitnet-cb34f.appspot.com",
  messagingSenderId: "466393582939",
  appId: "1:466393582939:web:01" // Note: This appId may be incomplete, you might need to update it
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };