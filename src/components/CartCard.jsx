import { useDispatch } from "react-redux";
import {addItem} from "../utils/CartSlice"
import { CDN_URL } from "../utils/constants";

export const CartCard = ({list})=>{ 

    const dispatch = useDispatch();
    function handleAdd(item)
    {
        dispatch(addItem(item));
        console.log(item);
    }

    return (
        <div className="flex flex-col gap-4 p-2 w-full">
            {list.map(listItem =>{
                const {name , description , imageId , price , defaultPrice} = listItem?.card?.info;
                const isVeg = (listItem?.card?.info?.itemAttribute?.vegClassifier == "NONVEG");
                return(
                    <div key={listItem?.card?.info?.id} className={`bg-[#2e2e2e0e] flex gap-4 rounded-md items-center h-[100px]`}>
                        <div className="w-4/12 h-full md:w-3/12">
                            <img src={CDN_URL + imageId} alt="Tasty Food" className="w-full h-full rounded-md max-h-40 object-cover sc"/>
                        </div>
                        <div className="w-8/12 md:w-9/12 pr-3  relative">
                            <h1 className="text-lg leading-4 font-medium mb-2 lg:mb-4 lg:text-xl">
                                {name}
                            </h1>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}