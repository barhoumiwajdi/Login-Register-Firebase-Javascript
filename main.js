

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, getRedirectResult, FacebookAuthProvider,
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





const userEmail = document.getElementById('useremail')
const userPassword = document.getElementById('userpassword')
const btnlogin = document.querySelector('#login')
btnlogin.addEventListener('click', login)
function login(e) {

    e.preventDefault();
    var obj = {
        email: userEmail.value,
        password: userPassword.value,
    };

    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            alert("logined Successfully")
            var aaaa = (success.user.uid);
            const userData = localStorage.getItem('uid');
            localStorage.setItem("uid", aaaa)
            console.log(aaaa)




            window.location.replace("home.html");
        })
        .catch(function (err) {
            alert("login error" + err);
        });

    console.log(obj);

}

