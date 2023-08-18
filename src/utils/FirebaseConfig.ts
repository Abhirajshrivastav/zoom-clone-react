// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection,getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBLpYXfgxpo8JRmCXIWQm11goJVC-7UXE",
  authDomain: "zoom-clone-reac-t.firebaseapp.com",
  projectId: "zoom-clone-reac-t",
  storageBucket: "zoom-clone-reac-t.appspot.com",
  messagingSenderId: "861928618407",
  appId: "1:861928618407:web:7d9408bc31465f88a39e82",
  measurementId: "G-P73SL610NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
export const FirebaseDb = getFirestore(app);