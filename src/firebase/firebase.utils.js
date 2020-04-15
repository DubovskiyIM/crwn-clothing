import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLLD4C4tl6nFvaQV-vHWCA5dVwWY2CT4w",
  authDomain: "crwn-db-8c441.firebaseapp.com",
  databaseURL: "https://crwn-db-8c441.firebaseio.com",
  projectId: "crwn-db-8c441",
  storageBucket: "crwn-db-8c441.appspot.com",
  messagingSenderId: "814039528253",
  appId: "1:814039528253:web:a7f84740a347f6aebb4b54",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export {signInWithGoogle};

export default firebase;
