// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlpChdLGk08KHOhucdeu3-pVA5rL0nCzw",
  authDomain: "netflix-gpt-6a7d2.firebaseapp.com",
  projectId: "netflix-gpt-6a7d2",
  storageBucket: "netflix-gpt-6a7d2.appspot.com",
  messagingSenderId: "204597442254",
  appId: "1:204597442254:web:f76084b9d1947640c8829f",
  measurementId: "G-RMFR8B3P43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth =getAuth(); 