// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBMjGWnTcw1SYrhF4lcjBiELKmNNN0h3UE",

    authDomain: "chatup-e5ca6.firebaseapp.com",

    projectId: "chatup-e5ca6",

    storageBucket: "chatup-e5ca6.appspot.com",

    messagingSenderId: "871559886680",

    appId: "1:871559886680:web:4515742b67becd2d96572d",

    measurementId: "G-W1G0M0LKXW"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
