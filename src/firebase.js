import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA747Kr-QIxxKdcRAgrN-7MnRaSS5woZMk",
    authDomain: "react-todo-app-d39b2.firebaseapp.com",
    projectId: "react-todo-app-d39b2",
    storageBucket: "react-todo-app-d39b2.appspot.com",
    messagingSenderId: "187091839971",
    appId: "1:187091839971:web:72bf378be4f589f93f4ed6",
    measurementId: "G-M376MNH8TD" 
});

const db = firebaseApp.firestore();

export default db;