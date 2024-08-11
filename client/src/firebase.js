// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4d697.firebaseapp.com",
  projectId: "mern-blog-4d697",
  storageBucket: "mern-blog-4d697.appspot.com",
  messagingSenderId: "279372494538",
  appId: "1:279372494538:web:c6cbbcc86a196ebcfa2633",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
