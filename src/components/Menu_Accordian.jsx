import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { MenuList } from './MenuList';
import Nested_Accordian from './Nested_Accordian';

const Menu_Accordian = ({ info, showMenu, showFunction , hideFuction }) => {

    const handleClick = () => {
        showMenu ? hideFuction()  : showFunction();
    }


    return (
        <div className='bg-[#e7eaee] rounded-lg  shadow-sm mb-4 overflow-hidden'>
            <div className='bg-[#dedee0] flex items-center justify-between p-4 shadow-sm hover:bg-[#cfd0d3] cursor-pointer' onClick={handleClick}>
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
                    {showMenu ?
                        info.categories.map((dish , ind) => 
                        {  
                            return <Nested_Accordian info={dish}  key={ind}/>
                        }) :
                        null 
                    }
                </div>
             }
        </div>
    )
}

export default Menu_Accordian;
