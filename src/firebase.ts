import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLXA8W_dsoNDds5N88MwdAMHcIidAEpho",
  authDomain: "workouts-graphs.firebaseapp.com",
  projectId: "workouts-graphs",
  storageBucket: "workouts-graphs.appspot.com",
  messagingSenderId: "295798521086",
  appId: "1:295798521086:web:7e795ddd170e137d4879af",
  measurementId: "G-8B50TE9Z0K",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
