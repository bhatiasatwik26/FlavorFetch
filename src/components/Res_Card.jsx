import { CDN_URL } from "../utils/constants";

// Res - card - with inline style 
const Res_card = (props) => {

    const {resData} = props;
    const {name , locality , avgRating , cloudinaryImageId , costForTwo} = resData?.info;

    return (
        <div className="res-card" /*style={{backgroundColor:"#f0f0f0"}}*/>
            <img src={CDN_URL + cloudinaryImageId}/>
            <div className="res-card-text">
            <h3>{name}</h3>
            <p><i className="ri-map-pin-2-fill"></i>: {locality}</p>
            </div>
            <div className="res-card-text-info">
                <p>{costForTwo}</p>
                <p>|</p>
                <p className="rating">{avgRating} <i className="ri-star-fill"></i></p>
            </div>
        </div>
    )
}
export default Res_card;

