import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../stateMachineActions/updateAction";
import { useRouter } from "next/router";

import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Form from "../components/Form";

export default function stepFour() {
  const router = useRouter();

  // little state machine
  const { state } = useStateMachine(updateAction);
  console.log("STATE:", state);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions } = useStateMachine({ updateAction });

  // update global state - data object
  const onSubmit = (data) => {
    actions.updateAction(data);
    router.push("/stepFive");
  };

  return (
    <Section>
      <PageTitle>Where is it now?</PageTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="currentlocation" style={{ display: "none" }}>
          Desribe what you did with the item. Eg. “Handed it in at 7/11 by the
          court house”
        </label>

        <input
          id="currentlocation"
          placeholder="Desribe what you did with the item. Eg. “Handed it in at 7/11 by the
          court house”"
          {...register("currentlocation", {
            required: true,
          })}
        />
        {errors.currentlocation &&
          errors.currentlocation.type === "required" && (
            <span>This is required</span>
          )}
        <button type="submit">Next</button>
      </Form>
    </Section>
  );
}
