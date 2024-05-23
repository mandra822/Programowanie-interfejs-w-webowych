import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeclsiZuFzOnRXZb0M5jp8pCseh55XnSQ",
  authDomain: "piw-p915-2024.firebaseapp.com",
  projectId: "piw-p915-2024",
  storageBucket: "piw-p915-2024.appspot.com",
  messagingSenderId: "332652075336",
  appId: "1:332652075336:web:ed1e0262b4dcad34313b7d",
  measurementId: "G-DXJHJMLS3L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);