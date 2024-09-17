// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzYB2kq76vYb44qN0dUL69_e0v6HIoaWE",
    authDomain: "von-games.firebaseapp.com",
    projectId: "von-games",
    storageBucket: "von-games.appspot.com",
    messagingSenderId: "11423841258",
    appId: "1:11423841258:web:5e45356c637ef6563e9093"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
