import { useCurrentItem } from "../context/EachItemContext";

export default function individualResult() {
  const currentItem = useCurrentItem();
  console.log("INDIVIDUAL RESULT PAGE =>");
  console.log(currentItem);
  return <p>Individual result</p>;
}
