import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "authexamsathi-6e80e.firebaseapp.com",
    projectId: "authexamsathi-6e80e",
    storageBucket: "authexamsathi-6e80e.firebasestorage.app",
    messagingSenderId: "11804475492",
    appId: "1:11804475492:web:e56d15c97c002812929f71"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider } 