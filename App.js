import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - RestaurantCard
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
                <img className="logo" src="./Assets/smoking-burger-with-lettuce-3624ld.png" />
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

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
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