import firebase from "../config/firebase";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState();

  useEffect(() => {
    firebase
      .firestore()
      .collection("items")
      .onSnapshot((querySnapshot) => {
        setItems(querySnapshot.docs.map((item) => item.data()));
      });
  }, []);

  console.log("ITEMS FROM FIRESTORE:", items);

  return (
    <>
      <p>Butterfingers</p>
    </>
  );
}
