
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAU4r_czH5z8qtU28lats3rZZPJ3pMuqRs",
    authDomain: "training-1ed49.firebaseapp.com",
    projectId: "training-1ed49",
    storageBucket: "training-1ed49.appspot.com",
    messagingSenderId: "188283211513",
    appId: "1:188283211513:web:6fa7e1cdab51f201989c28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
function verify() {
    const userData = localStorage.getItem('uid');
    console.log(localStorage.getItem(0))
    localStorage.key(0);
    console.log(userData);
    if (!userData) {
        window.location.replace("login.html");
    }
}
verify()



function current_user() {
    getAuth()
        .getUser(uid)
        .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
        })
        .catch((error) => {
            console.log('Error fetching user data:', error);
        });
}


current_user()