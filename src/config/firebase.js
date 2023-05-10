// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARiqn2JUg7Boe02J8Iik1V4qMzv78HSnI",
  authDomain: "jogofausto-5e79a.firebaseapp.com",
  projectId: "jogofausto-5e79a",
  storageBucket: "jogofausto-5e79a.appspot.com",
  messagingSenderId: "201238512934",
  appId: "1:201238512934:web:9099185d7bf1e51167ade7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const passwordReset = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

export const confirmPasswordReset = async (code, password) => {
  if (!code || !password)
    return Promise.reject("code and password are required");
  return await confirmPasswordReset(auth, code, password);
};
