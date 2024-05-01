import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props;

    const {id, cloudinaryImageId, name, cuisines, costForTwo, avgRating, deliveryTime} = resData;

    return (
        <div key={id} className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>₹{costForTwo/100} for Two</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;