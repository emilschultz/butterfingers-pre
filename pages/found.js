import { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/router";
import updateAction from "../stateMachineActions/updateAction";

import PageTitle from "../components/PageTitle";
import Section from "../components/Section";
import Form from "../components/Form";

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
      <PageTitle>What did you find?</PageTitle>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" style={{ display: "none" }}>
          For example: Keys, mittens, ear ring
        </label>
        <br />
        <input
          id="name"
          placeholder="For example: Keys, mittens, ear ring"
          {...register("name", {
            required: true,
            maxLength: 30,
            minLength: 2,
          })}
          onChange={inputHandler}
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span>That's to many characters</span>
        )}
        <button type="submit">Next</button>
      </Form>
      <p>Step 1 / 5</p>
    </Section>
  );
}
