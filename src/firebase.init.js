// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Jo4bxShbr_aiY9l5olM0y8P-QccAtN4",
  authDomain: "ema-john-shopping-fb71a.firebaseapp.com",
  projectId: "ema-john-shopping-fb71a",
  storageBucket: "ema-john-shopping-fb71a.appspot.com",
  messagingSenderId: "580857357623",
  appId: "1:580857357623:web:3f2535e93bb57313ef66b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
