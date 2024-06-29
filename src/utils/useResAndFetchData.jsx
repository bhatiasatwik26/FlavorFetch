import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

const useResAndFetchData = (resId) =>{
    const [resInfo , setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []); 
    async function fetchData ()
    {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3252639&lng=78.0412983&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const dataJson = await data.json();
        setTimeout(()=>{
            setResInfo(dataJson)
        }, 1000)
    }
    console.log(`returned ${resInfo}`)
    return resInfo;
}
export default useResAndFetchData