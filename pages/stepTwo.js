import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../stateMachineActions/updateAction";
import { useRouter } from "next/router";

import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Form from "../components/Form";

export default function stepTwo() {
  const router = useRouter();

  const { state } = useStateMachine(updateAction);
  console.log("STATE:", state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    router.push("/stepThree");
  };

  return (
    <Section>
      <PageTitle>What are the key charactaristics?</PageTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="description" style={{ display: "none" }}>
          Short description of the found item. Eg. "Black Casio watch, unisex.
          Looks pretty worn. Scratches on right side of the display"{" "}
        </label>
        <input
          id="description"
          placeholder="A short description of the found item:"
          {...register("description", {
            required: true,
          })}
        />
        {errors.description && errors.description.type === "required" && (
          <span>This is required</span>
        )}
        <button type="submit">Next</button>
      </Form>
    </Section>
  );
}
