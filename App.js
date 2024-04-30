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

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={img} alt="res-logo" />
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {/* Restaurant Card */}
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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