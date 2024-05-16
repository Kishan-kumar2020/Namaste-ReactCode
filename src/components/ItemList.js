import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  
  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {items.map((item) => {
        return (
          <div className="border-b-2 my-2 py-2 flex justify-between gap-4">
            <div key={item?.card?.info?.id}>
              <div className="flex items-start flex-col">
                <div className="font-semibold text-lg">
                  {item?.card?.info?.name}
                </div>
                <div className="font-semibold text-md">
                  ₹
                  {item?.card?.info.price
                    ? item?.card?.info.price / 100
                    : item?.card?.info.defaultPrice / 100}
                </div>
              </div>
              <p className="text-left text-sm">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="relative">
              <div
                onClick={() => handleAddItem(item)}
                className="absolute border border-gray bg-white px-2 bottom-1 rounded-smz left-[60px] shadow-md cursor-pointer hover:bg-black hover:text-pink-200"
              >
                ADD +{" "}
              </div>
              <img
                className="max-w-[200px] h-[150px]"
                src={CDN_URL + item?.card?.info?.imageId}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
