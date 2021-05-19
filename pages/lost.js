import firebase from "../config/firebase";
import React, { useState } from "react";
import { useCurrentItem } from "../context/EachItemContext";
import { useRouter } from "next/router";

import Grid from "../components/Grid";
import PageTitle from "../components/PageTitle";
import HeadingOne from "../components/HeadingOne";
import Section from "../components/Section";
import Form from "../components/Form";

export default function Lost() {
  const currentItem = useCurrentItem();
  const router = useRouter();

  const [foundItems, setFoundItems] = useState([]);
  const [searchItem, setSearchItem] = useState("item");

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
        className="item-container"
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
        <img src={item.image}></img>
        <div>
          <HeadingOne>{item.name}</HeadingOne> <p> </p>
          <p>{item.description}</p>
          <p className="drop-location">
            The {item.name} was found at {item.droplocation}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <Section className="lost">
        <PageTitle>WHAT DID YOU LOOSE?</PageTitle>

        <Form>
          <label style={{ display: "none" }} htmlFor="lostItem">
            Type your lost item here:
          </label>
          <input
            placeholder="Keys, wallet, gloves, etc."
            type="text"
            name="lostItem"
            onChange={inputHandler}
          ></input>
          <br />
          <button type="submit" onClick={firebaseQuery}>
            SEARCH
          </button>
        </Form>
        <PageTitle>☟</PageTitle>
      </Section>

      <Grid>
        {foundItems.length < 1 ? (
          <p className="no-results">No {searchItem}s found yet. Sorry.</p>
        ) : (
          foundItemslist
        )}
      </Grid>
    </>
  );
}
