// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAoIL_m7PyFsDLYOZDyD4DD7cTehassNgA",
    authDomain: "clone-b72fe.firebaseapp.com",
    projectId: "clone-b72fe",
    storageBucket: "clone-b72fe.appspot.com",
    messagingSenderId: "333772820800",
    appId: "1:333772820800:web:8de8def9f2893071f8eaa5",
    measurementId: "G-KY1G1QSHVL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};