import PageTitle from "../components/PageTitle";
import firebase from "../config/firebase";
import { useState } from "react";

import Grid from "../components/Grid";

export default function Lost() {
  const [foundItems, setFoundItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");

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

  // Due to case sensitivity and user mistakes when adding items to firestore, this function will capitalize the first letter in the search query, which the user types in. And then of course defines this as the input fields target value.
  const inputHandler = (event) => {
    event.preventDefault();
    let inputValue = event.target.value;
    let capitalizedFirstLetter =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

    setSearchItem(capitalizedFirstLetter);
  };

  console.log("FOUND ITEMS:", foundItems);

  const foundItemslist = foundItems.map((item) => {
    return (
      <div key={Math.random() * (100 - 1)}>
        <p>What: {item.name}</p>
        <p>{item.description}</p>
        <p>Now at: {item.currentlocation}</p>
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

      <PageTitle>Results:</PageTitle>
      <Grid>{foundItemslist}</Grid>
    </>
  );
}
