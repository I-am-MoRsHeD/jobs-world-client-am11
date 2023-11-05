// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0_Z1ATsZD3LrLNoVP9Xa6I1L1cnrvqPw",
  authDomain: "jobs-world-client-am11.firebaseapp.com",
  projectId: "jobs-world-client-am11",
  storageBucket: "jobs-world-client-am11.appspot.com",
  messagingSenderId: "416960636892",
  appId: "1:416960636892:web:1b96c7fdbb080c874cd119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;