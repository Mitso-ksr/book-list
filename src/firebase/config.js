import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBEh-m16jVrOvfU-4wPMpnMEVAxegDfRb4",
  authDomain: "react-book-list-with-firebase.firebaseapp.com",
  projectId: "react-book-list-with-firebase",
  storageBucket: "react-book-list-with-firebase.appspot.com",
  messagingSenderId: "96073140596",
  appId: "1:96073140596:web:bf5e45a580a78a3ab04421"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)