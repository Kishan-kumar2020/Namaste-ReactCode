import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchResMenu();
    }, []);

    const fetchResMenu = async () => {
        const data = await fetch(RES_URL + 66810);
        const json = await data.json();
        setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
    }

    console.log(resMenu);

    if(resMenu === null) {
        return <Shimmer />
    }

    return (
        <div>
            RestaurantMenu
        </div>
    );
};

export default RestaurantMenu;