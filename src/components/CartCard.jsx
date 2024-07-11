import { useDispatch } from "react-redux";
import {addItem , removeItem} from "../utils/CartSlice"
import { CDN_URL } from "../utils/constants";

export const CartCard = ({list})=>{ 

    const dispatch = useDispatch();
    function handleAdd(item)
    {
        dispatch(addItem(item));
    }
    function handleDel(item)
    {
        dispatch(removeItem(item));
    }
    return (
        <div className="flex flex-col gap-4 p-2 w-full ">
            {Object.keys(list).map(listItem =>{
                console.log("->",list[listItem]);
                const {name , description , imageId , price , defaultPrice} = list[listItem]?.item?.card?.info;
                return(
                    <div key={listItem?.card?.info?.id} className={`bg-[#2e2e2e0e] flex gap-4 rounded-md items-center h-[100px]  relative`}>
                        <div className="w-4/12 h-full md:w-3/12">
                            <img src={CDN_URL + imageId} alt="Tasty Food" className="w-full h-full rounded-md max-h-40 object-cover sc"/>
                        </div>
                        <div className="w-8/12 md:w-9/12 pr-3  relative">
                            <h1 className="text-lg leading-4 font-medium mb-2 lg:mb-4 lg:text-xl" >
                                {name}
                            </h1>
                        </div>
                        <div className="absolute  flex items-center justify-center top-1/2 right-10 -translate-y-1/2 text-lg gap-2 bg-[#f1f5f9d5] shadow-inner bordder border-[#f1f5f9] rounded-3xl">
                            <div className="text-2xl cursor-pointer p-2 py-1 rounded-full duration-300 text-[#0ee03b79] hover:text-[#0ee03b]" onClick={()=>{handleAdd(list[listItem]?.item)}}>+</div>
                            <p className="border-l border-r border-l-black border-r-black px-3 bg-[#f1f5f9d5]">{`${list[listItem].qty}`}</p>
                            <div className="text-3xl cursor-pointer p-3 py-1 rounded-full hover:text-[#ff0202] duration-300 text-[#ff020281]" onClick={()=>{handleDel(list[listItem]?.item)}}>-</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}