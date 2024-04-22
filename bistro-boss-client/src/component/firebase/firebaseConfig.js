// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGDYlj7p0MWw1OMo8S1b0P_bzl33gljtQ",
  authDomain: "bistro-boss-practice-2dc82.firebaseapp.com",
  projectId: "bistro-boss-practice-2dc82",
  storageBucket: "bistro-boss-practice-2dc82.appspot.com",
  messagingSenderId: "424302941617",
  appId: "1:424302941617:web:007e287437c5580ce71990",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
