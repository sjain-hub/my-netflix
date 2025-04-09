// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUvLeioUHN4C9iKWQjJEGkcqbdP1D5bng",
  authDomain: "netflixgpt-eb32b.firebaseapp.com",
  projectId: "netflixgpt-eb32b",
  storageBucket: "netflixgpt-eb32b.firebasestorage.app",
  messagingSenderId: "415861926671",
  appId: "1:415861926671:web:0f6c22142f8f47fa086c7a",
  measurementId: "G-NZZJCLVP4R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
