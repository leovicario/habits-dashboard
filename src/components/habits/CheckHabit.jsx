import React from 'react'
import { useState } from 'react'


const CheckHabit = () => {
  const [checked, setChecked] = useState(false);

  let btnClass = "bg-black-500 text-white";
  let btnText = "Check"

  if (checked) {
    btnClass = 'bg-white text-black-500';
    btnText = '🔥';  
  }
  

  function checkHabit(e) {
    e.preventDefault();
    setChecked (!checked);
   
    // {checked ?  e.target.className = "bg-white text-black"  : 
    //   e.target.className = "bg-black-500 text-white" 

    // }
    console.log("habit checked" + checked)

  }
    

  return (
    <div>
        <button className={btnClass} onClick={checkHabit}>{btnText}</button>
    </div>
  )
}

export default CheckHabit