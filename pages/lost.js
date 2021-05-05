import PageTitle from "../components/PageTitle";
import firebase from "../config/firebase";
import { useState } from "react";

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
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    } catch {
      console.log("Item not found yet, sorry");
    }
  };

  const inputHandler = (event) => {
    event.preventDefault();
    setSearchItem(event.target.value);
  };

  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   console.log("searchHandler:", searchItem);
  // };

  // NO RESULTS = return this
  // if (foundItems.length === 0) {
  //   alert(
  //     `Your ${searchItem} has not been found yet. Sorry. Try again later.`
  //   );
  // }

  console.log("FOUND ITEMS:", foundItems);

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
        <button type="submit" onClick={firebaseQuery}></button>
      </form>
    </>
  );
}
