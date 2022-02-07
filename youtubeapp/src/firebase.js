// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDuW7u2lKauZ76_kABuHGIqpXODPuQt54",
  authDomain: "clone-project-333708.firebaseapp.com",
  projectId: "youtube-clone-project-333708",
  storageBucket: "youtube-clone-project-333708.appspot.com",
  messagingSenderId: "232119891219",
  appId: "1:232119891219:web:60011f5e68eb2ab14716e6",
  measurementId: "G-0PV7C15E4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



/*
=============================
=============================
Firebase Configs
=============================
=============================
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDuW7u2lKauZ76_kABuHGIqpXODPuQt54",
  authDomain: "clone-project-333708.firebaseapp.com",
  projectId: "youtube-clone-project-333708",
  storageBucket: "youtube-clone-project-333708.appspot.com",
  messagingSenderId: "232119891219",
  appId: "1:232119891219:web:60011f5e68eb2ab14716e6",
  measurementId: "G-0PV7C15E4E"
};

*/