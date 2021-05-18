import PageTitle from "../components/PageTitle";
import firebase from "../config/firebase";
import React, { useState } from "react";
import { useStateMachine } from "little-state-machine";
import { useCurrentItem } from "../context/EachItemContext";
import { useRouter } from "next/router";

import updateResultAction from "../stateMachineActions/updateResultAction";

import Grid from "../components/Grid";

export default function Lost() {
  const currentItem = useCurrentItem();
  const router = useRouter();

  const [foundItems, setFoundItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  // little state machine
  const { state, actions } = useStateMachine({ updateResultAction });
  const currentState = state;

  console.log(currentState);
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
    // let capitalizedFirstLetter =
    //   inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setSearchItem(inputValue);
  };

  console.log("FOUND ITEMS:", foundItems);

  const foundItemslist = foundItems.map((item) => {
    return (
      <div key={Math.random() * (100 - 1)}>
        <p>What: {item.name}</p>
        <p>Description: {item.description}</p>
        <p>Now at: {item.currentlocation}</p>
        <img style={{ width: "250px" }} src={item.image}></img>
        {/* <p>Time: {item.timestamp.seconds}</p> */}
        <button
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
          Investigate
        </button>
      </div>
    );
  });
  console.log("CURRENT ITEM:", currentItem);

  // const goToResult = (result) => {
  //   actions.updateResultAction(result);
  //   console.log("RESULT DATA:", result, "STATE:", currentState);
  //   router.push("/individualResult");
  // };

  // const addToMyBooks = (item) => ({
  //   name: item.name,
  //   description: item.description,
  //   currentlocation: item.currentlocation,
  //   image: item.image,
  // });

  // adddNew.addToMyBooks({
  //   name: item.name,
  //   description: item.description,
  //   currentlocation: item.currentlocation,
  //   image: item.image,
  // });

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
