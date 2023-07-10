import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { gateDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjzPW3kXWVSxnvlFE2asJ6-2kvcIXXHqM",
  authDomain: "bus23-44cfc.firebaseapp.com",
  projectId: "bus23-44cfc",
  storageBucket: "bus23-44cfc.appspot.com",
  messagingSenderId: "608763563754",
  appId: "1:608763563754:web:465c4eb6b67b6df861d193",
  measurementId: "G-W4FKM7Y9BR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = gateDatabase(app);

export { app, auth, database };
