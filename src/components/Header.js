import img from "../../Assets/smoking-burger-with-lettuce-3624ld.png";

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

export default Header;