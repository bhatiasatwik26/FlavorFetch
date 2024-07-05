import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { MenuList } from './MenuList';

const Menu_Accordian = ({ info, showMenu, showFunction , hideFuction }) => {

    const [isVisible , setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible)
       isVisible ? hideFuction() : showFunction();
    }

    // console.log(info.title)

    return (
        <div className='bg-[#36363613] rounded-sm  shadow-sm mb-4'>
            <div className='bg-[#cdcdcd0f] flex items-center justify-between p-4 shadow-sm hover:bg-[#64646425] cursor-pointer' onClick={handleClick}>
                <h1 className='text-lg xl:text-2xl'>{info.title}</h1>
                <p>
                    <IoIosArrowUp className={`duration-200 ease-in-out ${showMenu ? 'rotate-180' : ''}`} />
                </p>
            </div>
                {info.itemCards !== undefined ? 
                <div>
                    {showMenu ? <MenuList list={info.itemCards} /> : null}
                </div> :
                <div>
                </div>
             }
        </div>
    )
}

export default Menu_Accordian;
