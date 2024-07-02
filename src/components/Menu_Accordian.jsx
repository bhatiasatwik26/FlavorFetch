import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { MenuList } from './MenuList';

const Menu_Accordian = ({ info, showMenu, showFunction , hideFuction }) => {

    const [isVisible , setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible)
       isVisible ? hideFuction() : showFunction();
    }

    return (
        <div className='bg-[#36363613] rounded-sm cursor-pointer shadow-sm mb-4'>
            <div className='bg-[#cdcdcd0f] flex items-center justify-between p-4 shadow-sm hover:bg-[#64646425]' onClick={handleClick}>
                <h1 className='text-lg xl:text-2xl'>{info.title}</h1>
                <p>
                    <IoIosArrowUp className={`duration-200 ease-in-out ${showMenu ? 'rotate-180' : ''}`} />
                </p>
            </div>
            <div>
                {showMenu ? <MenuList list={info.itemCards} /> : null}
            </div>
        </div>
    )
}

export default Menu_Accordian;
