// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaOy8P3SS66evA1kZrVhIX-H0tmUHh7KI",
  authDomain: "basic-banking-e3b64.firebaseapp.com",
  databaseURL: "https://basic-banking-e3b64-default-rtdb.firebaseio.com",
  projectId: "basic-banking-e3b64",
  storageBucket: "basic-banking-e3b64.appspot.com",
  messagingSenderId: "1010734845646",
  appId: "1:1010734845646:web:dc9e4ded088fa5b9d88a9f",
  measurementId: "G-FLQFDX1NEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
// Get a reference to the database service
export const database = getDatabase(app);
