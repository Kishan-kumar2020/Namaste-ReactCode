import React from "react";
import ReactDOM from "react-dom/client";

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

root.render(<HeadingComponent />);