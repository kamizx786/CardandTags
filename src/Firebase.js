// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyAY7zmgVYkjhFnUIIvinq4-xe8akeyVSmE",
  authDomain: "tagmania-stormdeve.firebaseapp.com",
  databaseURL: "https://tagmania-stormdeve-default-rtdb.firebaseio.com",
  projectId: "tagmania-stormdeve",
  storageBucket: "tagmania-stormdeve.appspot.com",
  messagingSenderId: "558985019686",
  appId: "1:558985019686:web:f0692d0d5abc113656c1e7",
  measurementId: "G-FFTTZVFSZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app