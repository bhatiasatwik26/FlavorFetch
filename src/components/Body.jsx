import {Res_card , highRated} from "./Res_Card";
import { useState , useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PathContext from "../utils/PathContext";
let API_DATA = [];
 
const Body = () =>{

  const PathObj = useContext(PathContext);
  PathObj.setPath('/')

  const [LIST_OF_RESTRO , SET_LIST_OF_RESTRO] = useState([]);
  const [SEARCH_TEXT , SET_SEARCH_TEXT] = useState("");

  const lat  = useSelector(store => store.location.lat);
  const long  = useSelector(store => store.location.long);

  const RatedRestro = highRated(Res_card);

  useEffect(()=>{
        fetchData()
  },[lat , long])

  async function fetchData()
  {
    if(lat != 0 && long != 0)
    {
      console.log("calling.....")
      const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
      const dataJson = await data.json();
      API_DATA = dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      SET_LIST_OF_RESTRO(API_DATA);
    }
  }

  const searchList = ()=>
      {
        const Filtered_List = API_DATA.filter((res_obj) => res_obj.info.name.toLowerCase().includes(SEARCH_TEXT.toLowerCase()));
        SET_LIST_OF_RESTRO(Filtered_List);
        SET_SEARCH_TEXT("");
      }

  if(!API_DATA?.length)
    {
      return <Shimmer/>
    }
  else
    return (
      <div className=" bg-slate-100   pt-10 mx-auto max-w-[1300px]">
          <div className="flex flex-col-reverse gap-6 md:flex-row items-center md:justify-between w-full  px-4 lg:px-20 xl:px-40" >
            
            <div className=" flex gap-2 items-center justify-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-150" onClick={() => {
                  const Filtered_List = LIST_OF_RESTRO.filter((res_obj) => res_obj.info.avgRating > 4);
                  SET_LIST_OF_RESTRO(Filtered_List);
                }}>
                  Top Rated Restaurants
                </button>

                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition-all duration-150" onClick={() => {
                  SET_LIST_OF_RESTRO(API_DATA);
                }}>
                  Reset Filter
                </button>
            </div>

            <div className="flex  p-1 items-center justify-center ">
              <input className="h-9 px-3 text-lg outline-none rounded-l-2xl bg-slate-50 border border-[#1E2434]" type="text" placeholder="Restauraunt by name" value={SEARCH_TEXT}   onChange={
                    (e)=>{
                        SET_SEARCH_TEXT(e.target.value);
                    }
                }
               onKeyDown={(e)=>{
                    if(e.key === "Enter")
                    {
                        searchList();
                    }
               }}
                />

              <button className="h-9 bg-[#1E2434] text-white rounded-r-2xl px-3" onClick={searchList}>
                Search
              </button>
            </div>

          </div>
            
          <div className="flex flex-wrap items-center justify-center gap-4  md:gap-10 max-w-[1300px] mx-auto pt-10">
            {
              LIST_OF_RESTRO.length == 0 ?
                <h1 className="text-2xl font-light text-center mt-[10%] text-[#88666691]">🧭Looks like we're lost</h1> :
              LIST_OF_RESTRO
              .map((res_obj , index) => {
                return <Link to={`/restaurants/${res_obj.info.id}`} key={index}>
                  {res_obj.info.avgRating > 4.4 ? <RatedRestro resData={res_obj} sex={true}/> :  <Res_card resData={res_obj} />}
                </Link>
              })

              // or

              // API_Data.reduce((accumulator, res_obj) => {
              //   accumulator.push(<Res_card resData={res_obj} />);
              //   return accumulator;
              // }, [])

              /* For each se nai hoga kuki foreach return nai kr skta*/

              /* Map , reduce basically functions hai jo JSX return kre hai!!!!*/

            }
          </div>
      </div>
    )
}
export default Body;

