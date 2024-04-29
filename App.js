import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div", {id: "parent"},
            [
                React.createElement("div", {id: "child"},
                [
                    React.createElement("h1", {}, "I'm a h1 tag from React"),
                    React.createElement("h2", {}, "I'm a h2 tag from React")
                ]),
                React.createElement("div", {id: "child"},
                [
                    React.createElement("h1", {}, "I'm a h1 tag from React"),
                    React.createElement("h2", {}, "I'm a h2 tag from React")
                ])
            ]
        );
        
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "HELLO WORLD FROM REACT");
// // const heading = React.createElement("TagName", {attributes}, {content inside the Tag // children});
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);