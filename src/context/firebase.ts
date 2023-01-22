// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWb8fqyDDQekk2Bo8XixIsx7p0l2NFbkM",
  authDomain: "saga-netflix.firebaseapp.com",
  databaseURL: "https://saga-netflix.firebaseio.com",
  projectId: "saga-netflix",
  storageBucket: "saga-netflix.appspot.com",
  messagingSenderId: "565535460582",
  appId: "1:565535460582:web:99c123609543f7be8b7f27"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)