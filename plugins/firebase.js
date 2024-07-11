// plugins/firebase.js
import { defineNuxtPlugin } from '#app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6u2TFcZtBZmxvFUkCAmXggTKLNG3Qk70",
  authDomain: "rental-mobil-8883f.firebaseapp.com",
  projectId: "rental-mobil-8883f",
  storageBucket: "rental-mobil-8883f.appspot.com",
  messagingSenderId: "435382029808",
  appId: "1:435382029808:web:e016ae74778bbbee57e135",
  measurementId: "G-XQBSQ4T9D6"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('firestore', firestore);
  nuxtApp.provide('auth', auth);
});
