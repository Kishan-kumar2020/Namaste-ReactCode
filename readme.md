# Namaste React 🚀

<!-- Episode 1 notes Starts from here -->
# FOR EPISODE 1

PART 01

PART 02
# After including CDN links, building basic hellow world program using react

# index.html
creating a element is the core thing of react that comes from react.development.js
creating a root is comes from the react-dom.development.js

PART 03
# Creating a new js file to put all the js code inside that named as App.js

%% React was build with a philosophy that we have to manipulate our DOM using JavaScript
--> The most costly operation in the webpage is when the DOM nodes needs to be manipulated

What are the powers of head Tag
What is the tailwind css

React.createElement() is an object
heading react element // react h1 element

props are children + attributes

PART 04
# Creating nested Elements using React.createElement

[] are used to create the element at the same level,  we have to convert children as array
We directly pass React.createElement to children to create the nested elements

Code structure becomes messy if we create in this way
So, there is JSX

What is this root.render() is doing
--> putting the heading tag inside the root tag
--> This will totally replace the root with only content that heading element (whatever we are passing in the root.render method) is bringing
    that are replaced not appended

Why react is called a library?
As, it can work in the small portion of the app as well
while
A framework is that which comes with all things while react is the library

<!-- Episode 1 Notes Completed -->

<!-- Episode 2 notes Starts from here -->
# FOR EPISODE 2

PART 01
--> Creating a readme.md file

What is the difference between git and github?

--> CODE THAT IS PRODUCTION READY
--> HOW YOU CAN CREATE YOUR OWN PRODUCTION READY CREATE REACT APP

Can react itself do the production ready app --> runs faster also
No, react is one of them, there are many other packages that are making our application faster

What is NPM
NODE PACKAGE MANAGER (NOT CORRECT)
npm manages the packages but not stands for node package manager

npn init

// npm is the standard repository for all the packages
// package.json is the configuration for npm

What is a bundler?
example: webpack, wheat, bable, parcel

create-react-app  uses webpack bundler behind the scenes

# npm install -D parcel

what is -D?
There are two dependencies
--> Dev dependency
--> Normal dependency --> used in production also

"parel": "^2.8.3"
^ carot --> upgrade minor versions generally
~ tilde --> upgrade major versions generally
What are that why are there?

What is package-lock.json?
As installed, why this file is created
This keeps the record of every version that is being installed
"parcel": "2.8.3."

What is the difference between package.json and package-lock.json?
approx version and exact version

!! IT IS WORKING IN MY LOCAL NOT WORKING IN PRODUCTION !!
"integrity": "                                                 "

package-lock.json keeps the track of exact version that is in my local and also for production

transitive dependencies
1:16 left

For package and package-lock .json we can keep on git
As these are maintaining the exact version/exact integrity/exact hash so what is in my local same as in production

We don't required to put nodemodules

npx parcel index.html

npx is executing a package

npm install react
npm install react-dom

Browser scripts cannot have imports and exports
type="module"
<script type="module" src="./app.js"></script>

parcel
--> Dev Build for you
--> Local Server
--> HMR = Hot Module Replacement
--> File Watching Algorithm written in C++
--> Caching - Faster Builds
--> Image Optimization
--> Minification
--> Bundling
--> Compress
--> Consistent Hashing
--> Code Spliting
--> Differential Bundling - support older browsers
--> Error Handling
--> To host your app on HTTPS
--> Tree Shaking Algorithm
--> Different Dev and Prod bundles

Production Build
npx parcel build index.html

Error in package.json --> remove this
,
  "main": "App.js",

<!-- Episode 2 Notes Completed -->

<!-- Episode 3 notes Starts from here -->
# For Episode 3

[AppStructure] --> [FoodOrderingApp]

* Header
* - Logo
* - Nav Items
* Body
* - Search
* - RestaurantContainer
*   - RestaurantCard
*   * - Img
*   * - Name of res, Star Rating, Cuisine, delivery time
* Footer
* - Copyright
* - Links
* - Address
* - Contact

part 01
# Creating a script to run the project
package.json
scripts {
    "start": "parcel index.html",
    "build": "parcel build index.html"
}

npm run start = npm start ✅
npm run build = npm build ❌

part 02
Recap of React.createElement("", {}, "");
Recap of ReactDOM.createRoot(document.getElementById());
Recap of root.render();

part 03
#JSX
--> JavaScript Syntax which is easier to create React Elements
--> JSX is not the part of JSX

JSX is HTML inside JavaScript ❌
JSX is HTML like or XML like Syntax 

// const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>
[JS Engine will not understand this piece of code as JSX is not pure JavaScript]
As, JS Engine understand ES6 === ECHMAScript 6
than how??
Parcel is doing the job

//JSX code is transpiled before it reaches to JS Engine
Parcel transpiled
Parcel -- Babel is doing the transpilation

part 04
# React Components
--> Class Based Components - OLD
--> Functional Component - NEW

part 05

<!-- Episode 3 Notes Completed -->

<!-- Episode 4 notes Starts from here -->
# For Episode 4

part 01
# Building Food Ordering App

# How to write inline css in JSX

part 02
# Making the card content dynamic

[props]
As passing the props to a component is same as passing an argument to a function

What is config driven UI
UI is config driven
data is the config

Smallest example of config driven UI

<!-- Episode 4 Notes Completed -->

<!-- Episode 5 notes Starts from here -->
part 01
# React Hooks

First
--> Separate Files for separate components

Folder Structure
currently, we have all files at root folder

creating a src folder

[// React.createElement() ==> Object ==> HTMLElement(render)
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

// A function which returns JSX]

# Two types of import and export
# Default export/import
export deafult Component;
import Component from "path";

# Named export/import
const CDN_URL = "";
--> export default CDN_URL; ❌
--> export CDN_URL; ❌

export const CDN_URL = ""; ✅
import { CDN_URL } from "path";

Q. Can we do both types of export togather?

part 02
Why react is faster?
--> DOM Manipulation
--> Virtual DOM
--> Diff Algorithm
--> Reconsiliation (React Fiber)

# React Hooks
Normal JS Utility Function

useState()
useEffect()

Whenever a state variable changes react rerenders the component

<!-- Episode 5 Notes Completed -->

<!-- Episode 6 notes Starts from here -->
part 01
# Monolith and Microservice Architecture

There are many services that are in the same repository

part 02

Loads ==> API ==> Render
Loads ==> Render ==> API ==> Render

part 03
the useEffect() hook will be called after page loads
api calls
fetchData();

part 04
Shimmer UI

part 05
Search

# 6.1
Swiggy API

# 6.2
CORS Plugin

<!-- Episode 6 Notes Completed -->

<!-- Episode 7 notes Starts from here -->
part 01
useState()
useEffect()

part 02
npm i react-router-dom

part 03
import { createBrowserRouter } from "react-router-dom";

we create a appRouter

const appRouter = createBrowserRouter([
    {
        path: "",
        element: <App />,
        errorElement: <Error />
    }
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/about",
        element: <About />,
    }
])

creating a About Us page

app.js
import { RouterProvider } from "react-router-dom"
This will provide the routing configration appRouter to our app

<RouterProvider router={appRouter} />

read more about react-router-dom

useRouteError

part 04
# Pages Intact
# children Routes

part 05

GraphQL
useParams


Episode 8
Class Based Components

import React from "react"; || import { Component } from "react";

class ComponentName extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (

        )
    }
}

|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

class ComponentName extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (

        )
    }
}

React renders ==> React updates

renders ==> commits