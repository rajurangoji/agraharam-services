// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCbMEkd8mXCeZn8Dw_dbLEB32A1XxZUovY",
//   authDomain: "agraharammainservice.firebaseapp.com",
//   projectId: "agraharammainservice",
//   storageBucket: "agraharammainservice.appspot.com",
//   messagingSenderId: "370032254204",
//   appId: "1:370032254204:web:66dae1927fb9073deacb79",
//   measurementId: "G-W5QEHF6KK7",
// };

const firebaseConfig = {
    apiKey: "AIzaSyCbMEkd8mXCeZn8Dw_dbLEB32A1XxZUovY",
    authDomain: "agraharammainservice.firebaseapp.com",
    projectId: "agraharammainservice",
    storageBucket: "agraharammainservice.firebasestorage.app",
    messagingSenderId: "370032254204",
    appId: "1:370032254204:web:66dae1927fb9073deacb79",
    measurementId: "G-W5QEHF6KK7"
  };

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (only if supported by the environment)
let analytics: ReturnType<typeof getAnalytics> | undefined = undefined;
isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
  }
});

export { db, analytics };
