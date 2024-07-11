import { useDispatch, useSelector } from "react-redux"
import {CartCard} from "./CartCard"
import {CartBill} from "./CartBill"
import { clearCart } from "../utils/CartSlice"
import { useContext, useState } from "react";
import PathContext from "../utils/PathContext";

const Cart = () =>{

    const PathObj = useContext(PathContext);
    PathObj.setPath('/cart')

    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();

    const handleClear = () =>{
        dispatch(clearCart());
        setValue(0);
    }

    const [value , setValue] = useState(0)

    return(
        <div className="max-w-[1300px]  h-screen p-3 py-10 flex  mx-auto gap-4 justify-between">
            <div className="w-[60%]  h-full flex flex-col items-center py-2 ">
                <div className="flex  items-center justify-center gap-10 mb-8">
                    <h1 className=" text-3xl">Your Items🛒</h1>
                    {Object.keys(cartItems).length > 0 ? 
                    <button className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-orange-800 transition-all duration-150 text-sm" onClick={handleClear}>
                    Clear
                    </button>
                    :
                    null}
                </div>
                { Object.keys(cartItems).length > 0 ?
                 <CartCard list={cartItems}/> :
                 <h1 className="text-xl font-light mt-2 mb-2">🕸️Uhoh its too empty here🕸️</h1>
                }
            </div>
            <div className="w-[30%]   flex flex-col items-center py-2">
                <h1 className=" text-3xl mb-8">Bill Amount</h1>
                <div className="w-full  bg-[#2e2e2e0e] rounded-sm">
                { Object.keys(cartItems).length > 0 ?
                 <CartBill list={cartItems} valueSet={setValue}/> :
                 <h1 className="text-xl font-light text-center">💲Lets go eating !!!</h1>
                } 
                </div>
                <div>
                    <p className="uppercase text-xl font-medium mt-3"><span className="text-[#2e2e2e85]">Total Amount : </span>₹{value}.00</p>
                    
                </div>
            </div>
        </div>
    )
}
export default Cart