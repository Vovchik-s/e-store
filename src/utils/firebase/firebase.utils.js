import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,

} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';



const firebaseConfig = {

    apiKey: "AIzaSyCcIASwLTtplcE5HLkoKfz6s_0Bo6dBvxw",

    authDomain: "crwn-db-2a658.firebaseapp.com",

    projectId: "crwn-db-2a658",

    storageBucket: "crwn-db-2a658.appspot.com",

    messagingSenderId: "340602499127",

    appId: "1:340602499127:web:74dfa735e433a7719ccfb2",

    measurementId: "G-WNHM5FSG3P"

};  


////// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig); // initializeApp is a function that takes in our configuration object and gives us back a reference to our application

const googleProvider = new GoogleAuthProvider();
// GoogleAuthProvider is a class from the auth library
// It must to be class in order to use it as a constructor multiple times

googleProvider.setCustomParameters({
    prompt: 'select_account'
}); // we want to always trigger the Google popup whenever we use this GoogleAuthProvider for authentication and sign in

export const auth = getAuth(); // getAuth is a function that returns the auth object from the firebase library

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider); // signInWithPopup is a function that takes in the auth object and the provider object and returns a promise

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider); // signInWithRedirect is a function that takes in the auth object and the provider object and returns a promise

export const db = getFirestore(); // getFirestore is a function that returns the firestore object from the firebase library. Directly points to the DATABASE



export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {

    if (!userAuth) return;
    
    const userRef = doc(db, 'users', userAuth.uid);
    // doc is a function that takes in the firestore object and the collection name and the document id and returns a document reference

    const userSnapshot = await getDoc(userRef);
    // getDoc is a function that takes in the document reference and returns a document snapshot
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
    // exists is a method that returns a boolean value indicating whether or not the data in DB exists


    //////// 1. if the user dont exists 
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        // userAuth is the user object that we get back from the auth library
        const createdAt = new Date();

        try {
            // setDoc is a function that takes in the document reference and the object that we want to set and returns a promise
            await setDoc(userRef, { 
                displayName,
                email,
                createdAt,
                ...additionalInformation // additionalInformation is an object that we pass in the function as a second argument and we want to spread it in the object that we want to set in the DB
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    //////// 2. if the user exists 
    return userRef;
}


// This utility file is used to initialize firebase and export the auth and firestore objects from the firebase library
// Its basically a layer in between my frontend and the firebase library
export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password);

    // 1. check for email and password
    // 2. create user with email and password
}

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return signInWithEmailAndPassword(auth, email, password);

    // 1. check for email and password
    // 2. create user with email and password
}

export const signOutUser = () => signOut(auth)