import { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/router";
import updateAction from "../stateMachineActions/updateAction";

import PageTitle from "../components/PageTitle";
import Section from "../components/Section";
import Form from "../components/Form";
import ErrorMessage from "../components/ErrorMessage";

export default function Found() {
  const [searchItem, setSearchItem] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    router.push("/stepTwo");
    // console.log("DATA:", data.name);
  };

  const inputHandler = (event) => {
    event.preventDefault();
    let inputValue = event.target.value;
    let capitalizedFirstLetter =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

    setSearchItem(capitalizedFirstLetter);
  };

  return (
    <Section>
      <PageTitle>WHAT DID YOU FIND?</PageTitle>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" style={{ display: "none" }}>
          For example: Keys, mittens, ear ring
        </label>
        <br />
        <input
          id="name"
          placeholder="Keys, wallet, ring, etc."
          {...register("name", {
            required: true,
            maxLength: 30,
            minLength: 2,
          })}
          onChange={inputHandler}
        />
        {errors.name && errors.name.type === "required" && (
          <ErrorMessage>This is required</ErrorMessage>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <ErrorMessage>That's to many characters</ErrorMessage>
        )}
        <button type="submit">Next</button>
      </Form>
      <br />
      <p>Step 1 / 5</p>
    </Section>
  );
}
