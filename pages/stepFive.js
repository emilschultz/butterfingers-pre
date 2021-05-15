import { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/router";
import firebase from "../config/firebase";

import updateAction from "../stateMachineActions/updateAction";
import clearAction from "../stateMachineActions/clearAction";

// components
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Form from "../components/Form";
import Label from "../components/Label";

export default function stepFive() {
  const router = useRouter();

  const [fileUrl, setFileUrl] = useState(null);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // little state machine
  const { state, actions } = useStateMachine({ clearAction, updateAction });
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
        image: `${fileUrl}`,
        // timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      })
      .then((docRef) => {
        console.log("DocRef ID:", docRef.id);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // submit and update current state, add data from state to Firestore and route to confirmation page
  const onSubmit = (data) => {
    actions.updateAction(data);
    addToFirestore();
    router.push("/thankYou");
  };

  // upload image/file to storage
  const onFileChange = async (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const fileRefUrl = await fileRef.getDownloadURL();
    setFileUrl(fileRefUrl);
  };

  const clearData = (data) => {
    actions.clearAction(data);
  };

  return (
    <Section>
      <PageTitle>Please upload an image of the item if possible</PageTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="image">
          Choose file:
          <input
            style={{ display: "none" }}
            type="file"
            id="image"
            {...register("image", {
              required: false,
            })}
            onChange={onFileChange}
          />
        </Label>

        <button type="submit">Finish</button>
        <button onClick={clearData}>Delete everything and start over</button>
      </Form>
    </Section>
  );
}
