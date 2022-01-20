import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCggE8bbTVVdTgLOFKOwuO_KsK88CcuOlI",
    authDomain: "facebook-clone-be403.firebaseapp.com",
    projectId: "facebook-clone-be403",
    storageBucket: "facebook-clone-be403.appspot.com",
    messagingSenderId: "887343793572",
    appId: "1:887343793572:web:7554f4b7abf393d8eb2d31",
    measurementId: "G-WN2WJ1QJHH"
  };    

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {  auth,provider  };
  export default db;