import { useState } from "react";
import img from "../../Assets/smoking-burger-with-lettuce-3624ld.png";

const Header = () => {

    const [loginName, setLoginName] = useState("LOGIN");

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
                    <button className="login" onClick={() => {
                        (loginName==="LOGIN") ? setLoginName("LOGOUT") : setLoginName("LOGIN")
                    }}>{loginName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;