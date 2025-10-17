// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnFj0QlbrVK3cjNCg675SrLNw3ImBe8vU",
  authDomain: "fir-practice-b9a7d.firebaseapp.com",
  projectId: "fir-practice-b9a7d",
  storageBucket: "fir-practice-b9a7d.firebasestorage.app",
  messagingSenderId: "537810010345",
  appId: "1:537810010345:web:87764e906f249b5147f078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);