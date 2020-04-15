import firebase from "firebase/app";
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export {signInWithGoogle};

export default firebase;
