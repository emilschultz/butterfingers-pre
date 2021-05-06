import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../stateMachineActions/updateAction";
import { useRouter } from "next/router";

import PageTitle from "../components/PageTitle";

export default function stepFive() {
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
    router.push("/stepFive");
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
