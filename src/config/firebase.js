// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBqK99XGiBunUXveLPzVEK4Pbu4TCFo-dU",
   authDomain: "deutsch-card.firebaseapp.com",
   projectId: "deutsch-card",
   storageBucket: "deutsch-card.appspot.com",
   messagingSenderId: "455310855112",
   appId: "1:455310855112:web:f8bcb3a3bcaa575ac6cefd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
