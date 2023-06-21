
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
    getAuth, getRedirectResult, FacebookAuthProvider, signInWithPopup
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




const provider = new FacebookAuthProvider();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
    'display': 'popup'
});
signInWithPopup(auth, provider)


const btnfb = document.querySelector('#fb')
btnfb.addEventListener('click', loginfacebook)

function loginfacebook(e) {
    console.log('first')
    e.preventDefault
        .getRedirectResult(auth)
        .signInWithPopup(provider)
        .then((result) => {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(token)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            // ...
        });

}
