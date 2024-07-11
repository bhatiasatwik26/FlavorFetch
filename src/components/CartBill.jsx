import { useSelector } from "react-redux"

export const CartBill = ({list , valueSet}) =>{
    let value = 0;
    return(
        <div className="flex flex-col gap-4 p-2 w-full ">

            {Object.keys(list).map(listItem =>{
                const {name ,  defaultPrice , price} = list[listItem]?.item?.card?.info;
                value += (defaultPrice || price) * list[listItem].qty / 100;
                return(
                    <div key={listItem?.card?.info?.id} className={`bg-[#2e2e2e0e] flex gap-4 rounded-md items-center h-[100px]  relative px-2 justify-center text-lg`}>
                        <div className=" pr-3  relative">
                            <h1 className="tracking-wide" >
                                <span className="text-[#2e2e2e63]">₹{(defaultPrice || price) / 100} x {list[listItem].qty} =</span> 
                                ₹{(defaultPrice || price) * list[listItem].qty / 100}
                            </h1>
                        </div>
                    </div>
                )
            })}
            {valueSet(value)}
        </div>
    )
}
