import Res_card from "./Res_Card";
import { useState , useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
let API_DATA = [];
 
const Body = () =>{

  const [LIST_OF_RESTRO , SET_LIST_OF_RESTRO] = useState([]);
  const [SEARCH_TEXT , SET_SEARCH_TEXT] = useState("");

  useEffect(()=>{
    fetchData();
  } , []);

  async function fetchData()
  {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3252639&lng=78.0412983&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const dataJson = await data.json();

      API_DATA = dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      SET_LIST_OF_RESTRO(API_DATA);
  }

  if(!API_DATA.length)
    {
      console.log("Shimmer");
      return <Shimmer/>
    }
  else
    return (
      <div className="body">
          <div className="filter">
            
            <div className="button-pair">
                <button className="filter-button" onClick={() => {
                  const Filtered_List = LIST_OF_RESTRO.filter((res_obj) => res_obj.info.avgRating > 4);
                  SET_LIST_OF_RESTRO(Filtered_List);
                }}>
                  Top Rated Restaurants
                </button>

                <hr/>

                <button className="filter-button" onClick={() => {
                  SET_LIST_OF_RESTRO(API_DATA);
                }}>
                  Reset Filter
                </button>
            </div>

            <div className="search-area">
              <input type="text" placeholder="Search Restauraunt" value={SEARCH_TEXT} onChange={(e)=>SET_SEARCH_TEXT(e.target.value)}/>

              <button onClick={ ()=>
              {
                const Filtered_List = API_DATA.filter((res_obj) => res_obj.info.name.toLowerCase().includes(SEARCH_TEXT.toLowerCase()));
                SET_LIST_OF_RESTRO(Filtered_List);
                SET_SEARCH_TEXT("");
              }}>
                Search🔍
              </button>
            </div>

          </div>
            
          <div className="res-container">
            {
              LIST_OF_RESTRO
              .map((res_obj , index) => {
                return <Link to={`/restaurants/${res_obj.info.id}`} key={index}>
                  <Res_card resData={res_obj} />
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

