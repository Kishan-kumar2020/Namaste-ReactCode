import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props;

    const {id, cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla} = resData?.info;

    return (
        <div key={id} className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;