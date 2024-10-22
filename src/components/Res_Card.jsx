import { CDN_URL } from "../utils/constants";

// Res - card - with inline style 
export const Res_card = (props) => {

    const {resData} = props;
    const {name , locality , avgRating , cloudinaryImageId , costForTwo} = resData?.info;

    return (
        <div className=" flex-col flex bg-[#36363613] mb-3 items-center justify-between w-[250px] h-[400px] ml-4 rounded-2xl overflow-hidden gap-1 text-center sm:w-[270px] sm:h-[400px] hover:scale-105 duration-150 shadow-md">
            <div className="flex flex-col items-center justify-start gap-1 w-full">
                <img className="w-full h-[255px] object-cover" src={CDN_URL + cloudinaryImageId} alt="photo of tasty food here"/>
                <h3 className="text-2xl font-medium">{name}</h3>
            </div>
            <p className="text-lg font-light"><i className="ri-map-pin-2-fill text-red-600 text-center text-xl"></i>: {locality}</p>
            <div className="flex gap-2 text-sm font-normal bg-[#f1f5f98b] mb-3 p-1 px-3 rounded-2xl border border-[#6969692a] shadow-inner">
                <p className="">{costForTwo}</p>
                <p className="text-black">|</p>
                <p className="rating ">{avgRating} <i className="ri-star-fill text-yellow-400 font-bold"></i></p>
            </div>
        </div>
    )
}

// Higher Order Component for high rated restaurants
export const highRated = (Res_card) =>{
    return (props) => {
        return (
            < div className="relative">
                <label className="absolute bg-[#101010dd] text-white px-2 py-1 rounded-tr-xl rounded-bl-xl rounded-tl-xl -top-[13px] left-0 z-10 text-[0.9rem] font-light cursor-pointer italic">High Rated👍🏻</label>
                <Res_card {...props}/>
            </div>
        )
    }
}

export default Res_card;

