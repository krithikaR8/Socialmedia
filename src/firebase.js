// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
  apiKey: "AIzaSyDSg12sGOj0QcNrZnSKmxnpQKcJ9tyZ2ZE",
  authDomain: "connectify-c2ceb.firebaseapp.com",
  databaseurl:"http://connectify-c2ceb.firebaseio.com",
  projectId: "connectify-c2ceb",
  storageBucket: "connectify-c2ceb.appspot.com",
  messagingSenderId: "456957423086",
  appId: "1:456957423086:web:5ea36fb78830e16412b2ff"

  
};

// Initialize Firebase


// Initialize Firebase
const app =  initializeApp(firebaseConfig) 
const auth =getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

;

export { auth,db,storage};