// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBn2po6VflzVDxvPDY2EiJMZgkTtANKruc",
    authDomain: "slack-clone-42dec.firebaseapp.com",
    databaseURL: "https://slack-clone-42dec-default-rtdb.firebaseio.com",
    projectId: "slack-clone-42dec",
    storageBucket: "slack-clone-42dec.appspot.com",
    messagingSenderId: "446656958116",
    appId: "1:446656958116:web:71a5293139e39c60c4a031",
    measurementId: "G-ZKB6Q1G2PK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =  new firebase.auth.GoogleAuthProvider();

  export {auth, provider} ;
  export default db;