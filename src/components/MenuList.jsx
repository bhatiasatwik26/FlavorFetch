import { CDN_URL } from "../utils/constants";

export const MenuList = ({list})=>{ 
    return (
        <div className="flex flex-col gap-4 p-2">
            {list.map(listItem =>{
                {console.log(listItem?.card?.info)}
                const {name , description , imageId , price , defaultPrice} = listItem?.card?.info;
                console.log(listItem?.card?.info?.itemAttribute?.vegClassifier)
                const isVeg = (listItem?.card?.info?.itemAttribute?.vegClassifier == "NONVEG");
                return(
                    <div key={listItem?.card?.info?.id} className={`bg-[#2e2e2e0e] flex min-h-40 gap-4 rounded-md hover:scale-95 duration-200 hover:shadow-inner`}>
                        <div className="w-4/12 h-full md:w-3/12">
                            <img src={CDN_URL + imageId} alt="Tasty Food" className="w-full h-full rounded-md max-h-40 object-cover sc"/>
                        </div>
                        <div className="w-8/12 md:w-9/12 p-2  relative">
                            <h1 className="text-lg leading-6 font-medium mb-2 lg:mb-4 lg:text-xl">{name}<span className="font-bold text-right absolute top-2 right-2 scale-125 ">{isVeg ? '🟩' : '🟥'}</span></h1>
                            <p className="text-gray-600 leading-5 md:leading-6 xl:leading-7 mb-5 ">{description}</p>
                            <h2 className="font-bold text-right absolute bottom-1 right-2">{`₹${(price || defaultPrice)/100}.00`}</h2>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}