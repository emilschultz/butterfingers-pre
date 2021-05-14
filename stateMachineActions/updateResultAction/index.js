export default function individualResultAction(state, payload) {
  console.log("state:", state);
  console.log("payload:", payload);
  return {
    ...state,
    individualResult: {
      ...state.data,
      ...payload,
    },
  };
}
