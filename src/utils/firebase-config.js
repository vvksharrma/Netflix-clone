import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB_GYkwntz6iGWLlh_pvl0FgcO5HZcU50M",
  authDomain: "netflix-clone-b1c79.firebaseapp.com",
  projectId: "netflix-clone-b1c79",
  storageBucket: "netflix-clone-b1c79.appspot.com",
  messagingSenderId: "127410011413",
  appId: "1:127410011413:web:fb33715317970caff33d1c",
  measurementId: "G-VXBECPJ4B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app); 