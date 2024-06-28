import { useState , useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { log } from "math.js/lib/arithmetic";
import { off } from "process";
import toggleSlider from "./ToggleSlider"

const Restauraunt_menu = () => {

    const[resInfo , setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchData();
    }, []); 

    if(resInfo === null)
        return <h1 className="menu-load">Getting tasty treats for you...</h1>

    async function fetchData ()
    {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3252639&lng=78.0412983&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const dataJson = await data.json();
        setTimeout(()=>{
            setResInfo(dataJson);
        }, 1000)
    }

    // const dataJson = getResAndFetchData();

    const {name , cuisines , costForTwoMessage , sla} = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const offer = resInfo?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <toggleSlider/>
            <div className="res-menu-info">
                <p>⏱️ {sla.slaString.toLowerCase()}</p>
                <p className="pipe">|</p>
                <p>🪙 {costForTwoMessage}</p>
            </div>
            <div className="res-offer">
                {offer.map(({info} , ind)=>{
                    if(ind <= 5)
                    return(
                        <div className="offer-item" key={ind}>
                            <p className="offer-name">{info.header}</p>
                            <p className="offer-code">{info.couponCode}</p>
                        </div>
                    )
                })}
            </div>
            <ul className="res-menu-main">
                {itemCards.map((item) => 
                    {
                        return(
                            <li key={item.card.info.id}>
                                <div className="hover"></div>
                                <img src={MENU_URL + item.card.info.imageId} alt="Oops! Something's not right"/>
                                <p>{item.card.info.isVeg === 1 ? <span>🟢</span> : <span>🔴</span>}  {item.card.info.name}</p>
                                <p>Rs. {item.card.info.price/100}.00</p>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
export default Restauraunt_menu;