// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"
import "firebase/firestore"

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyBbQAd-8kvUzjqsW4mx7xfS2ei32JjYMh8",
    authDomain: "portfolio-2021-4c6f4.firebaseapp.com",
    projectId: "portfolio-2021-4c6f4",
    storageBucket: "portfolio-2021-4c6f4.appspot.com",
    messagingSenderId: "176721454164",
    appId: "1:176721454164:web:910d93da47372e2a99b9c1",
    measurementId: "G-ZK5M5MBS5W"
  };
firebase.initializeApp(firebaseConfig);
export const firestore= firebase.firestore();

export default firebase

