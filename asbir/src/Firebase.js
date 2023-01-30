import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD_pDdLgIxWP_vstmxnQ2ahhhdtLgRsoCA",
  authDomain: "asbir-app-auth.firebaseapp.com",
  projectId: "asbir-app-auth",
  storageBucket: "asbir-app-auth.appspot.com",
  messagingSenderId: "277000373162",
  appId: "1:277000373162:web:e3d05411ccc5849a1c61d3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).then((result) => {
        console.log(result);
        console.log(localStorage.getItem("name"));
        localStorage.setItem("name", result.user.displayName);
        localStorage.setItem("email", result.user.email);
        console.log(localStorage.getItem("name"));
    }).catch((error) => {
        console.log(error);
    });
}