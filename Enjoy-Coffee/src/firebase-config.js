import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa7IMpDT4qoT-H3NJPxElfCfbHpRsBQtQ",
  authDomain: "enjoy-coffee-3e7cb.firebaseapp.com",
  projectId: "enjoy-coffee-3e7cb",
  storageBucket: "enjoy-coffee-3e7cb.appspot.com",
  messagingSenderId: "104649285341",
  appId: "1:104649285341:web:985661ea6e80de60328534",
  measurementId: "G-H2XJ6C6VSY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
