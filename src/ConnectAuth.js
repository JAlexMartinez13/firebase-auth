// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWtu9ZJKpG0n8QYnpxmQUwNqRljXWRZtA",
  authDomain: "fir-auth-am.firebaseapp.com",
  projectId: "fir-auth-am",
  storageBucket: "fir-auth-am.appspot.com",
  messagingSenderId: "814744383835",
  appId: "1:814744383835:web:9257cfc97f605435606a7e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);