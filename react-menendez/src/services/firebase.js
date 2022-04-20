import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCseNcah9BJtXvO4-Y-8s-qxovYbhUD4LU",
  authDomain: "reactmenendez.firebaseapp.com",
  projectId: "reactmenendez",
  storageBucket: "reactmenendez.appspot.com",
  messagingSenderId: "341337018174",
  appId: "1:341337018174:web:a2989d18f6583177b2e66f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)
