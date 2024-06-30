import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDIOeQdZCYah1CIMBaPBUv5J-S0Vz8DUHg",
    authDomain: "blogging-website-e8777.firebaseapp.com",
    projectId: "blogging-website-e8777",
    storageBucket: "blogging-website-e8777.appspot.com",
    messagingSenderId: "804780589384",
    appId: "1:804780589384:web:3aa318697657c5ed73337d"
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}