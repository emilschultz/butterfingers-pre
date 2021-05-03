import firebase from "../config/firebase";
import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";

export default function Home() {
  // const [items, setItems] = useState();

  // get items from firestore
  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("items")
  //     .onSnapshot((querySnapshot) => {
  //       setItems(querySnapshot.docs.map((item) => item.data()));
  //     });
  // }, []);

  // console.log("ITEMS FROM FIRESTORE:", items);

  return (
    <>
      <NavBar />
      <p>Butterfingers</p>
    </>
  );
}
