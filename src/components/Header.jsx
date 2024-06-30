import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

// Header
const Header = () =>{
    let [userStatus , setUserStatus] = useState("Login");
    let [showingNav , setShowingNav] = useState(false);
    return (
        <div className="w-full bg-white border-b">
            <div className=" flex  w-full  h-20 items-center justify-between  overflow-hidden max-w-[1300px] mx-auto px-3 ">
                <div className="w-[120px]  md:w-[120px] ">
                    <img className="w-full h-full scale-150 md:scale-[1.85]" src={LOGO_URL}/>
                </div>  
                <div>
                    <ul className="hidden md:flex gap-6 text-xl items-center ">
                        <li className="hover:text-blue-400 transition-all duration-150">
                            <Link to= "/" >Home</Link>
                        </li>
                        <li className="hover:text-blue-400 transition-all duration-150">
                            <Link to= "/about" >About</Link>
                        </li>
                        <li className="hover:text-blue-400 transition-all duration-150">
                            <a href="">Cart</a>
                        </li>
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
                        <li className=" w-full border-b border-b-[#dcdfe464] px-6 py-2">
                            <a href="">Cart</a>
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