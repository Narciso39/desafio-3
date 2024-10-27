// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAgaxt7Ef2-D3ZXu4BJioHahTwsusqjYg",
  authDomain: "react-auth-96cc9.firebaseapp.com",
  projectId: "react-auth-96cc9",
  storageBucket: "react-auth-96cc9.appspot.com",
  messagingSenderId: "139566169306",
  appId: "1:139566169306:web:8d97bd8e6d4de7ca0f79e3",
  measurementId: "G-VSLQNHT2L2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
