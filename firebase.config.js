import { getAuth } from "firebase/auth"; // Firebase v9
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATfbVK2A6Uae_LRF3uRh7TruPfd5u7ASM",
  authDomain: "test-f88d7.firebaseapp.com",
  projectId: "test-f88d7",
  storageBucket: "test-f88d7.appspot.com",
  messagingSenderId: "958126925992",
  appId: "1:958126925992:web:7db41507da46c95e8aba9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // Se crea la instancia de autenticación

//Initialize Firestore and create a reference to the service

export const db = getFirestore(app); // Se crea la instancia de Firestore