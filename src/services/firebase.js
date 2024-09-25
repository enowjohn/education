// services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
  // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgqLFQUWdGPyAiGbNy2wtfBC5MT6z-Kq8",
  authDomain: "education-d928e.firebaseapp.com",
  projectId: "education-d928e",
  storageBucket: "education-d928e.appspot.com",
  messagingSenderId: "563575813828",
  appId: "1:563575813828:web:e76971310a24d830edbb91"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
