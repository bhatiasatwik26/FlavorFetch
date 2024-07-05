import { useDispatch, useSelector } from "react-redux"
import {CartCard} from "./CartCard"
import { clearCart } from "../utils/CartSlice"

const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();

    const handleClear = () =>{
        dispatch(clearCart());
    }

    return(
        <div className="max-w-[1300px]  h-screen p-3 py-10 flex  mx-auto gap-4 justify-between">
            <div className="w-[60%]  h-full flex flex-col items-center py-2 ">
                <div className="flex  items-center justify-center gap-10 mb-8">
                    <h1 className=" text-3xl">Your Items</h1>
                    {cartItems.length > 0 ? 
                    <button className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-orange-800 transition-all duration-150 text-sm" onClick={handleClear}>
                    Clear
                    </button>
                    :
                    null}
                </div>

                { cartItems.length > 0 ?
                 <CartCard list={cartItems}/> :
                 <h1 className="text-xl font-light">🕸️Uhoh its too empty here🕸️</h1>
                }
            </div>
            <div className="w-[30%]   flex flex-col items-center py-2">
                <h1 className=" text-3xl mb-8">Bill Amount</h1>
                <div className="w-full h-full bg-[#2e2e2e0e] rounded-sm"></div>
            </div>
        </div>
    )
}
export default Cart