// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzv1BpXzRIepR48Fdj3p1dZWsgJEh36Q8",
    authDomain: "netflix-clone-nextjs-aaefa.firebaseapp.com",
    projectId: "netflix-clone-nextjs-aaefa",
    storageBucket: "netflix-clone-nextjs-aaefa.appspot.com",
    messagingSenderId: "950940952766",
    appId: "1:950940952766:web:bb9bed2b4d133759af56ef",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export {auth, db};
