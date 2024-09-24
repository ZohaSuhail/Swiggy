import { LOGO_URL } from "../common/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../common/useOnlineStatus";
import UserContext from "../common/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnname, setbtnname] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { LoggedInUser } = useContext(UserContext);
    //console.log(data); 

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-green-400 shadow-lg">
            <div className="logo-container">

                <img
                    className="w-34 h-32"
                    src={LOGO_URL}>
                </img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">


                    <li className="p-4"><Link to="/">Home</Link></li>

                    <li className="p-4"><Link to="/about">About Us</Link></li>
                    <li className="p-4"><Link to="/contact"> Contact Us</Link></li>

                    <li className="p-4"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <button className="p-4"
                        onClick={() => {
                            btnname === "Login" ? setbtnname("Logout") : setbtnname("Login");
                        }}
                    >
                        {btnname}
                    </button>

                    <li className="p-4 font-bold">{LoggedInUser}</li>
                    <li className="p-4">
                        Online Status:{onlineStatus ? "✅" : "❓"}
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Header; 