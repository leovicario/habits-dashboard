import React, { useState, useRef  } from 'react'
import CheckHabit from './CheckHabit'
import DeleteHabit from './DeleteHabit'


const Habits = ({deleteId, color, name, description, checked, onDelete}) => {
  
  function handleDelete () {
    console.log(deleteId);
    onDelete(deleteId)
  
    
  }
    

  const habitRef = useRef({name})

  return (
    <div id={habitRef}>
        <div className="w-full relative z-10 py-8 px-8 rounded-lg " style={{background: color}}>
        
        <h2 className="text-4xl text-white font-light">{name}</h2> 
        <p className="text-white text-sm py-2">{description}</p>
        <CheckHabit />
        <DeleteHabit id={deleteId} onDelete={handleDelete}/>
        
        <div className="absolute top-0 left-0 z-[-1] h-full w-full blur-sm rounded-lg " style={{background: color}}></div>
      </div>

    </div>
    
  )

 }

export default Habits