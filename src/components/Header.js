import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/smoking-burger-with-lettuce-3624ld.png";

const Header = () => {

    const [loginName, setLoginName] = useState("LOGIN");
    console.log("Header render");

    // if no dependency array ==> useEffect is called on every render
    // if dependency array is empty = [] ==> useEffect is called on initial render and once
    // if depenency array is [{loginName}] ==> useEffect is called everytime loginName is updated 
    useEffect(()=>{
        console.log("useEffect Called");
    },[loginName])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={img} />
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        (loginName==="LOGIN") ? setLoginName("LOGOUT") : setLoginName("LOGIN")
                    }}>{loginName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;