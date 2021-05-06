import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../stateMachineActions/updateAction";
import { useRouter } from "next/router";

import PageTitle from "../components/PageTitle";

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
    <>
      <PageTitle>Where did you find it?</PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="description">Eg. Solli plass</label>

        <input
          id="droplocation"
          {...register("droplocation", {
            required: true,
          })}
        />
        {errors.droplocation && errors.droplocation.type === "required" && (
          <span>This is required</span>
        )}
        <input type="submit" />
      </form>
    </>
  );
}
