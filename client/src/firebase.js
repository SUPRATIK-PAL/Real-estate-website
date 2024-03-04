// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-website-2dcc2.firebaseapp.com",
  projectId: "real-estate-website-2dcc2",
  storageBucket: "real-estate-website-2dcc2.appspot.com",
  messagingSenderId: "353408182607",
  appId: "1:353408182607:web:369d643cb70934b97e7d3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

