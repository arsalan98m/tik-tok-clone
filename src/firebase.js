import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBEJopl94oJJ6yyjCPSTOg5zqIgWoWb8wo",
  authDomain: "tik-tok-clone-6f4c5.firebaseapp.com",
  projectId: "tik-tok-clone-6f4c5",
  storageBucket: "tik-tok-clone-6f4c5.appspot.com",
  messagingSenderId: "625186114166",
  appId: "1:625186114166:web:362d0a351a18229f446d57",
  measurementId: "G-QRWD3WC2P2",
});

const db = firebaseApp.firestore();

export default db;
