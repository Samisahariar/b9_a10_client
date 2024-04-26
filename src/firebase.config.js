// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrjwd7n5tYeh-80RmrsFtJw3pbrbfHbyw",
  authDomain: "b9a10-7c0dd.firebaseapp.com",
  projectId: "b9a10-7c0dd",
  storageBucket: "b9a10-7c0dd.appspot.com",
  messagingSenderId: "755531995360",
  appId: "1:755531995360:web:0696605c874e7d4af3d885"
};

// Initialize Firebase
const auth = getAuth(initializeApp(firebaseConfig));
export default auth