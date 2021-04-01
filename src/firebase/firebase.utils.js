import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyD6fIht7s-1WJmfe54lPFn-MWYn320XvLE",
    authDomain: "crwn-db-58989.firebaseapp.com",
    projectId: "crwn-db-58989",
    storageBucket: "crwn-db-58989.appspot.com",
    messagingSenderId: "291072960863",
    appId: "1:291072960863:web:c39348b6fbb9523720eeea",
    measurementId: "G-SNL8JL5L9Z"
  };
  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;
