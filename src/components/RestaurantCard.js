import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;

  const { id, cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;

  return (
    <div
      key={id}
      className="res-card m-4 p-4 w-[250px]"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo w-[100%] h-[150px] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

// Higher order component

// input = RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white left-4 px-2 border border-solid border-[#f0f0f0] rounded-r-md">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;
