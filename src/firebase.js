import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCURqTUVXFIrXSiK76whRV4DAmsHzYipTo",
  authDomain: "burgerhouse-5a364.firebaseapp.com",
  projectId: "burgerhouse-5a364",
  storageBucket: "burgerhouse-5a364.firebasestorage.app",
  messagingSenderId: "76969103888",
  appId: "1:76969103888:web:47cb2d64ea24ff74c17095",
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
