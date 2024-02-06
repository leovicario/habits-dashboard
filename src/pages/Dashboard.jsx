import React, { useState, useEffect } from 'react'

import { habitData } from '/data/habitData.jsx?url';
import HabitsList from '../components/habits/HabitsList.jsx';
import NewHabit from '../components/habits/NewHabit.jsx';


const Dashboard = () => {

const [habits, setHabits] = useState([])  

useEffect(() => { 

  
    let updatedHabits = habitData;
  
    setHabits(updatedHabits)
   
  },
    
   []);

  

  return (
    <div className="w-full">
       
        <HabitsList habits={habits}/>
    </div>
  )
}

export default Dashboard