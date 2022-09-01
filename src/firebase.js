import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkujc61p_SrjDzgDxa4d80hh3s749-mnQ",
  authDomain: "react-slack-916ff.firebaseapp.com",
  projectId: "react-slack-916ff",
  storageBucket: "react-slack-916ff.appspot.com",
  messagingSenderId: "179519134476",
  appId: "1:179519134476:web:d3fe89889e477bedcc8729",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
