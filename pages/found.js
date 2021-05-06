import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/router";
import updateAction from "../stateMachineActions/updateAction";
import PageTitle from "../components/PageTitle";

export default function Found() {
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

  // const Name = () => {
  //   const { state } = useStateMachine();
  //   return <h1>{state.data.name}</h1>;
  // };

  return (
    <>
      <PageTitle>Cool, what did you find?</PageTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">For example: Keys, mittens, ear ring</label>

        <input
          id="name"
          {...register("name", {
            required: true,
            maxLength: 30,
            minLength: 2,
          })}
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span>Max length exceeded</span>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <span>Must be more than one character</span>
        )}
        <input type="submit" />
      </form>
    </>
  );
}
