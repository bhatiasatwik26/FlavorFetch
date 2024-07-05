import { useDispatch } from "react-redux";
import {addItem} from "../utils/CartSlice"
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { FaBowlFood } from "react-icons/fa6";

export const MenuList = ({list})=>{ 


    const dispatch = useDispatch();

    function handleAdd(item)
    {
        dispatch(addItem(item));
    }

    if(MenuList!= undefined){
    return (
        <div className="flex flex-col gap-4 p-2">
            {list.map(listItem =>{

                const [showImg , setShowImg] = useState(true);

                const handleImageError = ()=>{
                    setShowImg(false);
                }

                const {name , description , imageId , price , defaultPrice} = listItem?.card?.info;
                const isVeg = (listItem?.card?.info?.itemAttribute?.vegClassifier == "NONVEG");
                return(
                    <div key={listItem?.card?.info?.id} className={`bg-[#2e2e2e0e] flex min-h-40 gap-4 rounded-md h-40`}>
                        <div className="w-4/12 h-full md:w-3/12 relative">
                        {
                            showImg == true ?
                            <img src={CDN_URL + imageId} alt="Tasty Food" className="w-full h-full rounded-md max-h-40 object-cover" onError={handleImageError}/> :
                            <img src="https://cdn3.vectorstock.com/i/1000x1000/79/82/delicious-food-logo-vector-25997982.jpg" className="w-full h-full rounded-md max-h-40 object-cover object"/>
                            
                        }
                        </div>
                        <div className="w-8/12 md:w-9/12 p-2  relative">
                            <h1 className="text-lg leading-6 font-medium mb-2 lg:mb-4 lg:text-xl">{name}<span className="font-bold text-right absolute top-2 right-2 z-20 scale-125 ">{isVeg ? '🟢' : '🔴'}</span></h1>
                            <p className="text-gray-600 leading-5 md:leading-6 xl:leading-7 mb-5 ">{description}</p>
                            <h2 className="font-medium text-right absolute bottom-2 right-1 bg-[#1E2532] text-[#F1F5F9] px-2 py-1 rounded-md hover:scale-[1.1] duration-200 hover:shadow-inner cursor-pointer text-sm" 
                            onClick={() => handleAdd(listItem)}>
                                {`₹${(price || defaultPrice)/100}.00 | Add +`}
                            </h2>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
}