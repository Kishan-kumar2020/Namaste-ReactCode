import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false);

  const handleOnClick = () => {
    // showItem ? setShowItem(false) : setShowItem(true);
    setShowIndex();
  }

  return (
    <div className="w-6/12 p-4 m-2 mx-auto bg-gray-50 shadow-md">
      <div
        className="accordionHeader flex justify-between"
        onClick={handleOnClick}
      >
        <div>
          <span className="font-bold text-xl">{data?.card?.card?.title}</span>
          <span className="font-bold"> ({data?.card?.card?.itemCards.length})</span>
        </div>
        <div>
          <span>{showItem ? "⬆️" : "⬇️"}</span>
          {/* <span>Ok</span> */}
        </div>
      </div>
      <div className="accordionContent">{showItem && <ItemList items={data?.card?.card?.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
