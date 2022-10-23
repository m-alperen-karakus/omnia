// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP0cW-SELwaBI6FwrwCnF0yDYO8CoGfQ0",
  authDomain: "omnio-eb0f4.firebaseapp.com",
  projectId: "omnio-eb0f4",
  storageBucket: "omnio-eb0f4.appspot.com",
  messagingSenderId: "152142325714",
  appId: "1:152142325714:web:0dcdb655a293b153180a0b",
  measurementId: "G-MW5Q4C34V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);