import { useCurrentItem } from "../context/EachItemContext";
import IndividualResultItem from "../components/IndividualResultItem";

export default function individualResult() {
  const currentItem = useCurrentItem();

  return (
    <>
      {currentItem.currentItem.map((item) => {
        return (
          <IndividualResultItem key={Math.random() * (100 - 1)}>
            <img src={item.image} />
            <div>
              <h3>WHAT:</h3>
              <p>{item.name},</p>
              <p>{item.description}</p>
              <h3>FOUND AT:</h3>
              <p>{item.droplocation}</p>
              <h3>NOW AT:</h3>
              <p>{item.currentlocation}</p>
            </div>
          </IndividualResultItem>
        );
      })}
    </>
  );
}
