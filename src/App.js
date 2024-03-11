import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./Components/Auth";
import { db, auth, storage } from "./Config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

function App() {
  const [userlist, setUserlist] = useState([]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birth, setBirth] = useState(0);
  const [mature, setMature] = useState(true);

  //upload file
  const [fileupload, setFileupload] = useState(null);

  const getuserref = collection(db, "User");

  const Getuser = async () => {
    await getDocs(getuserref)
      .then((res) => {
        const result = res.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("get data:", result);
        setUserlist(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Getuser();
  }, []);

  const onsubmit = async () => {
    const senddata = {
      Firstname: firstname,
      Lastname: lastname,
      Birth_of_year: birth,
      Mathured: mature,
      Userid: auth?.currentUser?.uid,
    };
    await addDoc(getuserref, senddata)
      .then((res) => {
        console.log("success", res.doc);
        Getuser();
      })
      .catch((err) => {
        console.log("err", err.doc);
      });
  };

  const ondelete = async (id) => {
    const Userdoc = doc(db, "User", id);
    await deleteDoc(Userdoc);
    Getuser();
  };

  const onupload = async () => {
    if (!fileupload) return;
    const fileuploadref = ref(storage, `Myfiles/${fileupload.name}`);
    await uploadBytes(fileuploadref, fileupload)
      .then((res) => {
        console.log("file success", res.doc);
      })
      .catch((err) => {
        console.log("err", err.doc);
      });
  };

  return (
    <>
      <div style={{ textAlign: "center", width: "100vw" }}>
        <Auth />
      </div>
      <div style={{ textAlign: "center" }}>
        <input
          placeholder="firstname..."
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          placeholder="lastname..."
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          placeholder="Birth..."
          onChange={(e) => setBirth(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={mature}
          onChange={(e) => setMature(e.target.checked)}
        />
        <label>Checked</label>
        <button onClick={onsubmit}>Submit</button>
      </div>
      <div style={{ textAlign: "center" }}>
        {userlist.map((user) => (
          <>
            <h1 style={{ color: user.Mathured ? "green" : "red" }}>
              {user.Firstname} {user.Lastname}
            </h1>
            <p style={{ fontSize: "17px", fontWeight: "bold" }}>
              Birth of Year: {user.Birth_of_year}
            </p>
            <button onClick={() => ondelete(user.id)}>Delete</button>
          </>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <input type="file" onChange={(e) => setFileupload(e.target.files[0])} />
        <button onClick={() => onupload()}>Upload file</button>
      </div>
    </>
  );
}

export default App;
