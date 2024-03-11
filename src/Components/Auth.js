import React, { useState } from "react";
import { auth, googleAuthProvider } from "../Config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.uid);

  const onsignin = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("error");
      });
  };
  const onsigninwithgoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("error");
      });
  };
  const onsignout = async () => {
    await signOut(auth)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <div>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onsignin}>Sign In</button>
      <button onClick={onsigninwithgoogle}>Sign In with google</button>
      <button onClick={onsignout}>Sign Out</button>
    </div>
  );
}

export default Auth;
