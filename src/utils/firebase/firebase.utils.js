import { initializeApp } from "firebase/app";

// import Authentication module from firebase
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// import Firestore
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9wd-0NvxCAs0d03uoUn-KpRoUAkUP2Rw",
  authDomain: "crwn-clothing-db-3837d.firebaseapp.com",
  projectId: "crwn-clothing-db-3837d",
  storageBucket: "crwn-clothing-db-3837d.appspot.com",
  messagingSenderId: "93588998529",
  appId: "1:93588998529:web:dcebc71629c9049999c080",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Customize provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

// Sign in with Google Auth
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Get FireStore DB
export const db = getFirestore();
export const createUserDocumentsFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
    // if user data does not exist
    // create /set the document with the data from user data in my cllections
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error){
            console.log('error creating the user', error.message);
        }
    }
    // if user data exists return userDocRef
    return userDocRef;

}