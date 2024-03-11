import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB2HcJFD3LudBLX8WNLkFeVtTpJoDK8u2U",
  authDomain: "react-fire-2c941.firebaseapp.com",
  projectId: "react-fire-2c941",
  storageBucket: "react-fire-2c941.appspot.com",
  messagingSenderId: "1062659427471",
  appId: "1:1062659427471:web:a3f67709f682cfc509f4fa",
  measurementId: "G-DMRXVSGRXS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
