// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_qSE_Piou7KV8fikiQYCwV35QHMT9074",
  authDomain: "linkedin-clone-8df57.firebaseapp.com",
  projectId: "linkedin-clone-8df57",
  storageBucket: "linkedin-clone-8df57.appspot.com",
  messagingSenderId: "437060313496",
  appId: "1:437060313496:web:b35f7547dc932333f20bed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};
