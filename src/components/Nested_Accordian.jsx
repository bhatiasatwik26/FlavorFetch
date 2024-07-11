import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { MenuList } from './MenuList';

const Nested_Accordian = ({ info }) => {

    const [isVisible , setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className=' mt-4 bg-[#e7eaee]  rounded-lg overflow-hidden  shadow-sm mb-4 pt-2 w-[95%] mx-auto'>
            <div className='bg-[#d6d7d8c4] flex items-center justify-between p-4 shadow-sm hover:bg-[#64646434] cursor-pointer' onClick={handleClick}>
                <h1 className='text-lg xl:text-2xl'>{info.title}</h1>
                <p>
                    <IoIosArrowUp className={`duration-200 ease-in-out ${isVisible ? 'rotate-180' : ''}`} />
                </p>
            </div>
                {info.itemCards !== undefined ? 
                <div>
                    {isVisible ? <MenuList list={info.itemCards} /> : null}
                </div> :
                <div>
                    {info.categories.map(dish => 
                        {  
                            return <Menu_Accordian info={dish}  />
                        }
                    )}
                </div>
             }
        </div>
    )
}

export default Nested_Accordian;
