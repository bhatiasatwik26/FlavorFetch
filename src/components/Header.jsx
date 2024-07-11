import { useState , useContext, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import PathContext from "../utils/PathContext";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


// Header
const Header = () =>{

    // changing path in context to highlight nav


    const [userStatus , setUserStatus] = useState("Login");
    const [showingNav , setShowingNav] = useState(false);

    // getting curr path
    const currPath = useContext(PathContext);

    // Subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="w-full bg-white border-b">
            <div className=" flex  w-full  h-20 items-center justify-between  overflow-hidden max-w-[1200px] mx-auto px-3 ">
                <div className="w-[120px]  md:w-[120px] ">
                <NavLink to= "/" >
                    <img className="w-full h-full scale-150 md:scale-[1.85]" src={LOGO_URL}/>
                </NavLink>
                </div>  
                <div>
                    <ul className="hidden md:flex gap-6 text-xl items-center ">
                        <li className={`hover:text-[#1E2532] transition-all  duration-150
                            ${currPath.pathValue == '/' ? 'font-bold text-[#1E2532] underline text-2xl' : ''}`}>
                            <NavLink to= "/" >
                                Home
                            </NavLink>
                        </li>
                        <li className={`hover:text-[#1E2532] transition-all duration-150
                             ${currPath.pathValue == '/about' ? 'font-bold text-[#1E2532] underline text-2xl' : ''}`}>
                            <NavLink to= "/about" >
                                About
                            </NavLink>
                        </li>
                        <div className="flex items-center gap-1 text-base">
                        <li className={`hover:text-[#1E2532] transition-all duration-150cursor-pointer ${currPath.pathValue == '/cart' ? 'font-bold text-[#1E2532] text-2xl underline' : ''}`}>
                            <NavLink to= "/cart" className="active">
                                Cart 
                            </NavLink>
                        </li> <span>({Object.keys(cartItems).length})</span>
                        </div>
                    </ul>
                </div>
                <button className="hidden md:inline text-white px-4 py-1 text-xl rounded-full bg-green-600 mr-4 
                hover:bg-green-700 transition-all duration-150" onClick={()=>{
                if(userStatus === "Login")
                    setUserStatus("Logout");
                else
                    setUserStatus("Login");
                }}>{userStatus}
                </button>

                <ul className={`fixed top-0 h-screen bg-[#1e2532e4] w-[60%] flex flex-col  uppercase pt-40  gap-8 text-xl text-white backdrop-blur-sm pl-4 transition-all duration-500 ease-out  z-50 ${showingNav ? 'left-0' : '-left-[100%]'}`}>
                        <li className=" w-full border-b border-b-[#dcdfe464] px-6 py-2">
                            <Link to= "/" >Home</Link>
                        </li>
                        <li className=" w-full border-b border-b-[#dcdfe464] px-6 py-2">
                            <Link to= "/about" >About</Link>
                        </li>
                        <li className=" w-full border-b border-b-[#dcdfe464] px-6 py-2 font-medium">
                            <Link to= "/cart" > 
                            Cart <span>({Object.keys(cartItems).length})</span>
                            </Link>
                        </li>
                        <button className="px-4 py-2 text-xl rounded-full bg-green-600 mr-4 mt-4 
                        hover:bg-green-700"
                        onClick={()=>{
                            if(userStatus === "Login")
                                setUserStatus("Logout");
                            else
                                setUserStatus("Login");
                            }}>{userStatus}
                        </button>
                    </ul>
                    <div className="cursor-pointer md:hidden" onClick={()=>{setShowingNav(!showingNav);}}>
                        {showingNav ? <IoCloseSharp className="text-2xl"/> :  <IoMenu className="text-2xl"/>}
                    </div>
                </div>
        </div>
    )
}
export default Header;