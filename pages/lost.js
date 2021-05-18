import firebase from "../config/firebase";
import React, { useState } from "react";
import { useCurrentItem } from "../context/EachItemContext";
import { useRouter } from "next/router";

import Grid from "../components/Grid";
import PageTitle from "../components/PageTitle";
import HeadingOne from "../components/HeadingOne";

export default function Lost() {
  const currentItem = useCurrentItem();
  const router = useRouter();

  const [foundItems, setFoundItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  // get
  const firebaseQuery = (e) => {
    e.preventDefault();
    try {
      firebase
        .firestore()
        .collection("items")
        .where("name", "==", `${searchItem}`)
        .get()
        .then((querySnapshot) => {
          setFoundItems(querySnapshot.docs.map((item) => item.data()));
        });
    } catch {
      console.log("Item not found yet, sorry");
    }
  };

  // input with capitalized first letter
  const inputHandler = (event) => {
    event.preventDefault();
    let inputValue = event.target.value;
    let capitalizedFirstLetter =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setSearchItem(capitalizedFirstLetter);
  };

  // map out items from firebase
  const foundItemslist = foundItems.map((item) => {
    return (
      <div
        key={Math.random() * (100 - 1)}
        onClick={() => {
          currentItem.addItem({
            name: item.name,
            description: item.description,
            droplocation: item.droplocation,
            currentlocation: item.currentlocation,
            image: item.image,
          });
          router.push("/individualResult");
        }}
      >
        <HeadingOne>{item.name}</HeadingOne> <p> </p>
        <p>{item.description}</p>
        <p className="drop-location">
          The {item.name} was found at {item.droplocation}
        </p>
        <img src={item.image}></img>
        {/* <p>Time: {item.timestamp.seconds}</p> */}
      </div>
    );
  });

  return (
    <>
      <PageTitle>What did you lose?</PageTitle>

      <form>
        <label htmlFor="lostItem">Type your lost item here:</label>
        <input
          placeholder="Keys, wallet, mittens, hat etc."
          type="text"
          name="lostItem"
          onChange={inputHandler}
        ></input>
        <input type="submit" onClick={firebaseQuery}></input>
      </form>

      {/* <PageTitle>Results:</PageTitle> */}
      <Grid>{foundItemslist}</Grid>
    </>
  );
}
