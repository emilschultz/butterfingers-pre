import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/router";
import firebase from "../config/firebase";

import updateAction from "../stateMachineActions/updateAction";
import clearAction from "../stateMachineActions/clearAction";

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
  const { state, actions } = useStateMachine({ clearAction, updateAction });
  console.log("STATE:", state);

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
    actions.clearAction(data);
    router.push("/");
  };

  const clearData = (data) => {
    actions.clearAction(data);
  };

  return (
    <>
      <PageTitle>Anything else the owner should know?</PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="extrainfo">
          Desribe what you did with the item. Eg. “Handed it in at 7/11 by the
          court house” or “Placed in on the bench where I found it”
        </label>

        <input
          id="extrainfo"
          {...register("extrainfo", {
            required: true,
          })}
        />
        {errors.extrainfo && errors.extrainfo.type === "required" && (
          <span>This is required</span>
        )}
        <input type="submit" />
      </form>
    </>
  );
}
