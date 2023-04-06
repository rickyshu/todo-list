// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAof3slnIfAZLfClVpfb-lJDWH7sTgZAAM",
  authDomain: "todolist-01-76383.firebaseapp.com",
  projectId: "todolist-01-76383",
  storageBucket: "todolist-01-76383.appspot.com",
  messagingSenderId: "422920788126",
  appId: "1:422920788126:web:273a257da04c75aea6038f",
  measurementId: "G-PXP50SXM47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
