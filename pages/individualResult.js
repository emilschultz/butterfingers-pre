import { useCurrentItem } from "../context/EachItemContext";

export default function individualResult() {
  const currentItem = useCurrentItem();

  return (
    <div>
      {currentItem.currentItem.map((item) => {
        return (
          <div key={Math.random() * (100 - 1)}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.droplocation}</p>
            <p>{item.currentlocation}</p>
            <img src={item.image} />
          </div>
        );
      })}
    </div>
  );
}
