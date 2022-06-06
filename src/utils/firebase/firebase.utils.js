import { initializeApp } from "firebase/app";

// import Authentication module from firebase
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

// Sign in with Google Auth or Redirect
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// Google Redirect can be used with other authentication such as facebook, github - google auth
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Get FireStore DB
export const db = getFirestore();
export const createUserDocumentsFromAuth = async(userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

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
                createdAt,
                ...additionalInformation,
            });
        } catch (error){
            console.log('error creating the user', error.message);
        }
    }
    // if user data exists return userDocRef
    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}