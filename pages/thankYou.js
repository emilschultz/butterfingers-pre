import { useStateMachine } from "little-state-machine";
import clearAction from "../stateMachineActions/clearAction";
import { useEffect } from "react";

export default function ThankYou() {
  const { state, actions } = useStateMachine({ clearAction });

  useEffect(() => {
    actions.clearAction();
  }, []);

  console.log(state);

  return (
    <>
      <p>Thank you!</p>
    </>
  );
}
