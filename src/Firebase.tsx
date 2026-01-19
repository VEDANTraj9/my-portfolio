// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCO3xyz-_htTaO14v4bGyrURAI4tgjLIqE",
    authDomain: "portfolio-9e950.firebaseapp.com",
    projectId: "portfolio-9e950",
    storageBucket: "portfolio-9e950.firebasestorage.app",
    messagingSenderId: "589596044261",
    appId: "1:589596044261:web:323611eb1348777176dd0c",
    measurementId: "G-M88M2PB133"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
