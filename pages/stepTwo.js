import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../stateMachineActions/updateAction";
import { useRouter } from "next/router";

import PageTitle from "../components/PageTitle";

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
    <>
      <PageTitle>What are the key charactaristics?</PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="description">
          Short description of the found item. Eg. "Black Casio watch, unisex.
          Looks pretty worn. Scratches on right side of the display"{" "}
        </label>

        <input
          id="description"
          {...register("description", {
            required: true,
          })}
        />
        {errors.description && errors.description.type === "required" && (
          <span>This is required</span>
        )}
        <input type="submit" />
      </form>
    </>
  );
}
