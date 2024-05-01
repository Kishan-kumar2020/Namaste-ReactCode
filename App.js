import React from "react";
import ReactDOM from "react-dom/client";
import img from "./Assets/smoking-burger-with-lettuce-3624ld.png";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - RestaurantCard
 *     - Img
 *     - Name of res, Star Rating, Cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const resList = [
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	305819,
        name	:	"Barbeque Nation",
        cloudinaryImageId	:	"eqlv13396tnnwufweqpl",
        // costForTwo	:	₹350 for two,
        costForTwo	:	60000,
        cuisines    :	"North Indian",
        avgRating	:	3.9,
        deliveryTime	:	47,
    },
    {
        id	:	692100,
        name	:	"BOOM Sandwich - Sub of India",
        cloudinaryImageId	:	"96aaf72372ad1b0297b7cc304ced7e33",
        // costForTwo	:	₹350 for two,
        costForTwo	:	25000,
        cuisines    :	"Snacks, Indian",
        avgRating	:	4.4,
        deliveryTime	:	32,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    },
    {
        id	:	568728,
        name	:	"Pizza Hut",
        cloudinaryImageId	:	"2b4f62d606d1b2bfba9ba9e5386fabb7",
        // costForTwo	:	₹350 for two,
        costForTwo	:	35000,
        cuisines    :	"Pizzas",
        avgRating	:	4.1,
        deliveryTime	:	29,
    }
];

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={img} />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props;

    const {id, cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = resData;

    return (
        <div key={id} className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant =>
                    <RestaurantCard resData={restaurant} />)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

// React.createElement() ==> Object ==> HTMLElement(render)
const Heading = React.createElement("h1", {id: "heading"}, "Namaste React 🚀");


// jsx
// React Element
const jsxHeading = <h1 id="heading" className="head" tabIndex="2">Namaste React using JSX 🚀</h1>

//    Babel                  Parcel     Parcel
// JSX ==> React.createElement ==> Object ==> HTMLElement

// React Component
const HeadingComponent = () => {
    return (
        <h1>Namaste React Functional Component</h1>
    );
}

// A function which returns JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);