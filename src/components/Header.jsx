import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

// Header
const Header = () =>{
    let [userStatus , setUserStatus] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to= "/">Home</Link>
                    </li>
                    <li>
                         <Link to= "/about">About</Link>
                    </li>
                    <li>
                        <a href="">Cart</a>
                    </li>
                </ul>
            </div>
            <button className="nav-button" onClick={()=>{
                        if(userStatus === "Login")
                            setUserStatus("Logout");
                        else
                            setUserStatus("Login");
                    }}>{userStatus}</button>
        </div>
    )
}
export default Header;