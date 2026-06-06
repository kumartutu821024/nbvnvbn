// Firebase configuration for PW App
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyArF4gRB3UOaRuJgCwSAdBqi2s6nKotzuo",
  authDomain: "study-c0275.firebaseapp.com",
  databaseURL: "https://study-c0275-default-rtdb.firebaseio.com",
  projectId: "study-c0275",
  storageBucket: "study-c0275.firebasestorage.app",
  messagingSenderId: "1016067953808",
  appId: "1:1016067953808:web:6f018ddd0348ed1246f415",
  measurementId: "G-C6ZQV1DKKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Analytics (only in browser)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
