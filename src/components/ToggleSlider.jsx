import React, { useState } from 'react';
const ToggleSlider = ()=>{
    const [select , setSelect] = useState(false);
    return(
       <div className="toggleCont">
            <input type="checkbox" id="chk" onChange={(e)=>{
                console.log(e.target.checked);
            }}/>
            <label htmlFor="chk" className="toggleBtn">
            </label>
       </div>
    )
}
export default ToggleSlider;