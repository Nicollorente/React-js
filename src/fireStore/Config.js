// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4nVJIAMzOrM7BhYa3tVDhc3a6eWulQdo",
  authDomain: "green-food-maker.firebaseapp.com",
  projectId: "green-food-maker",
  storageBucket: "green-food-maker.appspot.com",
  messagingSenderId: "879306153567",
  appId: "1:879306153567:web:35dcf7bde05b3cc1d385ea",
  measurementId: "G-MRHTZ9PJQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

