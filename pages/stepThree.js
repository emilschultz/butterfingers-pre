import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../stateMachineActions/updateAction";
import { useRouter } from "next/router";

import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Form from "../components/Form";

export default function stepThree() {
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
    router.push("/stepFour");
  };

  return (
    <Section>
      <PageTitle>Where did you find it?</PageTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="description" style={{ display: "none" }}>
          Eg. Youngstorgets
        </label>

        <input
          id="droplocation"
          placeholder="Eg: Youngstorget"
          {...register("droplocation", {
            required: true,
          })}
        />
        {errors.droplocation && errors.droplocation.type === "required" && (
          <span>This is required</span>
        )}
        <button type="submit">Next</button>
      </Form>
    </Section>
  );
}
