 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCeu2QjiRrHUZpyzw2otH7QgkM1DR7Wak0",
   authDomain: "dtduy-jsi08.firebaseapp.com",
   projectId: "dtduy-jsi08",
   storageBucket: "dtduy-jsi08.appspot.com",
   messagingSenderId: "797022325661",
   appId: "1:797022325661:web:0617276bf7546b0a6a7d74",
   measurementId: "G-8KVGD54RFN"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth = getAuth(app);
 export const subscriptions = [];
