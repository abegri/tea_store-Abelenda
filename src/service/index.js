import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDn38Uzbrw9xvXZN7lF8mIiAr26HWnbNKE",
  authDomain: "teatime--ecommerce.firebaseapp.com",
  projectId: "teatime--ecommerce",
  storageBucket: "teatime--ecommerce.appspot.com",
  messagingSenderId: "892014565148",
  appId: "1:892014565148:web:6ba33bd046d7038b7b0cd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


