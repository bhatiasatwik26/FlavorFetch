import { useState , useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useResAndFetchData from "../utils/useResAndFetchData";
import Menu_Accordian from "./Menu_Accordian";
import LoadingSpinner from './LoadingSpinner';

const Restauraunt_menu = () => {

    const {resId} = useParams();
    const resInfo = useResAndFetchData(resId);
    const [showIndex , setShowIndex] = useState(-1);

    if(resInfo === null)
        return <LoadingSpinner />

    const {name , cuisines , costForTwoMessage , sla} = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const offer = resInfo?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
    const dishes = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((elem)=>{return elem?.card?.card?.['@type'].endsWith("ItemCategory")});

    return (
        <div className="px-2 w-full">
            <div className=" flex flex-col items-center pt-4 w-full max-w-[1200px] mx-auto">
                <h1 className="text-2xl font-semibold mb-2 md:text-3xl xl:text-4xl xl:mb-4">{name}</h1>
                <div className="bg-[#5e5e5e13] flex items-center justify-center gap-2 text-sm px-3 py-1 rounded-3xl font-medium mb-10 xl:text-base xl:mb-14">
                    <p>⏱️ {sla.slaString.toLowerCase()}</p>
                    <p className="pipe">|</p>
                    <p>🪙 {costForTwoMessage}</p>
                </div>
                <div className="w-full flex flex-col  justify-center gap-2">
                    {   dishes.map((dish , ind) => 
                        {   console.log(dish);
                            return <Menu_Accordian info={dish.card.card} showFunction={()=>{setShowIndex(ind)}} hideFuction={()=>{setShowIndex(-1)}} key={dish.card.card.title} showMenu={ind == showIndex ?  true : false} />
                        }
                    )}
                </div>
            </div>
        </div>
    )
}
export default Restauraunt_menu;