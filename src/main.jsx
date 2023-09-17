import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: config.FIREBASE_KEY,
  authDomain: "shellhacksvanguardinvest.firebaseapp.com",
  databaseURL: "https://shellhacksvanguardinvest-default-rtdb.firebaseio.com",
  projectId: "shellhacksvanguardinvest",
  storageBucket: "shellhacksvanguardinvest.appspot.com",
  messagingSenderId: "86449418881",
  appId: "1:86449418881:web:80c7bdc10a53fb46709380",
  measurementId: "G-8GC9S5DEF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
