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

const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')


const btn = document.querySelector('#register')
btn.addEventListener('click', regitser)
function regitser(e) {
    e.preventDefault()
    var data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value
    }
    console.log(data)
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(function (success) {
            alert('Account Create Successfully')
        }).catch(function (error) {
            alert('error' || error)
        })
}



const userEmail = document.getElementById('useremail')
const userPassword = document.getElementById('userpassword')
const btnlogin = document.querySelector('#login')
btnlogin.addEventListener('click', login)
function login(e) {

    e.preventDefault()

    const signInEmail = userEmail.value;
    const signInPassword = userPassword.value;
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("You have signed in successfully!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
        })

}




