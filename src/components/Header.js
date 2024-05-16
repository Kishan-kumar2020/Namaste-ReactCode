import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/smoking-burger-with-lettuce-3624ld.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginName, setLoginName] = useState("LOGIN");
  console.log("Header render");

  // if no dependency array ==> useEffect is called on every render
  // if dependency array is empty = [] ==> useEffect is called on initial render and once
  // if depenency array is [{loginName}] ==> useEffect is called everytime loginName is updated
  useEffect(() => {
    console.log("useEffect Called");
  }, [loginName]);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" src={img} />
      </div>
      <div className="self-center">
        <ul className="flex">
          <li className="px-6 text-xl font-semibold">
            {onlineStatus ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li className="px-6 text-xl font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6 text-xl font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-6 text-xl font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-6 text-xl font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <Link to="/cart">
            <li className="px-6 text-xl font-semibold">
              Cart - ({cartItems.length} items)
            </li>
          </Link>
          <button
            className="w-24 pr-6 text-xl font-semibold"
            onClick={() => {
              loginName === "LOGIN"
                ? setLoginName("LOGOUT")
                : setLoginName("LOGIN");
            }}
          >
            {loginName}
          </button>
          <li className="px-6 text-xl font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
