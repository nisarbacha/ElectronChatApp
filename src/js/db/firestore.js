// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
  apiKey: "AIzaSyBwvzlh71iUxz2GJBvZvqv3h_QxSFaCm24",
  authDomain: "electronc-d2fc5.firebaseapp.com",
  projectId: "electronc-d2fc5",
  storageBucket: "electronc-d2fc5.appspot.com",
  messagingSenderId: "719803505517",
  appId: "1:719803505517:web:7a1368a212758416859864",
  measurementId: "G-KJKP1MDK4C"
};

// Initialize Firebase
export default firebase.initializeApp(Config).firestore();
