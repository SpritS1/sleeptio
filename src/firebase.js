// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTfbO8nH4p3sXTsHImu2iP2nEK6olIqtI",
  authDomain: "sleeptio.firebaseapp.com",
  projectId: "sleeptio",
  storageBucket: "sleeptio.appspot.com",
  messagingSenderId: "646679945449",
  appId: "1:646679945449:web:618799e337c43c208f1078",
  measurementId: "G-5GHQW6KRB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {app, analytics}