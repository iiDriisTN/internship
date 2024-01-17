// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWVtDlKFwUldLlCphg7DThZNk5wuUqlS4",
  authDomain: "internship-finder-f3ff8.firebaseapp.com",
  projectId: "internship-finder-f3ff8",
  storageBucket: "internship-finder-f3ff8.appspot.com",
  messagingSenderId: "419859528436",
  appId: "1:419859528436:web:3c8237dfa4553d4c23fca1",
  measurementId: "G-38EHWXZLLE"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
