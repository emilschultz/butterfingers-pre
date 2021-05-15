import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../stateMachineActions/updateAction";
import { useRouter } from "next/router";

import PageTitle from "../components/PageTitle";

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
    <>
      <PageTitle>Where is it now?</PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="currentlocation">
          Desribe what you did with the item. Eg. “Handed it in at 7/11 by the
          court house” or “Placed in on the bench where I found it”
        </label>

        <input
          id="currentlocation"
          {...register("currentlocation", {
            required: true,
          })}
        />
        {errors.currentlocation &&
          errors.currentlocation.type === "required" && (
            <span>This is required</span>
          )}
        <input type="submit" />
      </form>
    </>
  );
}
