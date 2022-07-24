// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNNnCJ7Kc0BxiizRcSGKmmwAyTgqNKASc",
  authDomain: "mern-todo-app-bf569.firebaseapp.com",
  projectId: "mern-todo-app-bf569",
  storageBucket: "mern-todo-app-bf569.appspot.com",
  messagingSenderId: "484223390944",
  appId: "1:484223390944:web:9a70173a24a5b195c32c85",
  measurementId: "G-MEFKMSM0R9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

//Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics };
