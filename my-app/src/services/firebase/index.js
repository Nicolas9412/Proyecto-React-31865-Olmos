// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV5oM5MDCUneLEVhjX9AGOwDjc5Jiajbw",
  authDomain: "proyecto-react-31865-olm-9cee7.firebaseapp.com",
  projectId: "proyecto-react-31865-olm-9cee7",
  storageBucket: "proyecto-react-31865-olm-9cee7.appspot.com",
  messagingSenderId: "1038826040622",
  appId: "1:1038826040622:web:36ee974eb1c2785308debf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
