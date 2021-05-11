import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/router";
import firebase from "../config/firebase";

import updateAction from "../stateMachineActions/updateAction";

import PageTitle from "../components/PageTitle";

export default function stepFive() {
  const router = useRouter();

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // little state machine
  const { state, actions } = useStateMachine({ updateAction });

  const currentState = state;

  // add data to firestore
  const addToFirestore = () => {
    firebase
      .firestore()
      .collection("items")
      .add({
        name: `${currentState.data.name}`,
        description: `${currentState.data.description}`,
        droplocation: `${currentState.data.droplocation}`,
        currentlocation: `${currentState.data.currentlocation}`,
        extrainfo: `${currentState.data.extrainfo}`,
        image: `${currentState.data.image}`,
        // timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      })
      .then((docRef) => {
        console.log("DocRef ID:", docRef.id);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // submit
  const onSubmit = (data) => {
    actions.updateAction(data);
    addToFirestore();
    router.push("/thankYou");
  };

  const clearData = (data) => {
    actions.clearAction(data);
  };

  return (
    <>
      <PageTitle>Please upload an image of the item if possible</PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="image">
          Desribe what you did with the item. Eg. “Handed it in at 7/11 by the
          court house” or “Placed in on the bench where I found it”
        </label>

        <input
          type="file"
          id="image"
          {...register("image", {
            required: false,
          })}
        />
        <input type="submit" />
      </form>
      <button onClick={clearData}>CLEAR DATA</button>
    </>
  );
}
