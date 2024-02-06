import { useState, useEffect } from 'react'
import Habits from './Habits'
import NewHabit from './NewHabit';


import { habitData } from '/data/habitData.jsx?url';


let number = 1;

const HabitsList = ({habits}) =>  {

    let [newHabits, setNewHabits] = useState([])  


    useEffect(() => { 
    
        newHabits = habitData
     
        setNewHabits(newHabits => [...habitData])
        
       
      },
        
       []);
  
    
    function addHabit (newHabit) {
        setNewHabits(habits => [...habits, newHabit])
    }
     

    
    function handleDelete (key) {
   

        console.log(newHabits);
     
        newHabits = newHabits.filter(habit => habit.key !== key);
        setNewHabits(newHabits)
        console.log("removing " + key);
        console.log(newHabits);
      
      }
   
     

    return (
        <div className='habitsList w-full'>
        <h3>Habit List</h3>
        <NewHabit onAdd={addHabit} />
        <div className="w-full grid grid-cols-3 gap-4">
        {newHabits.map(habit => (
            <Habits
            key={habit.key}
            name={habit.name} 
            checked={habit.checked}
            question={habit.question}
            description={habit.description}
            deleteId={habit.key}
            repetitions={habit.numrepetitions}
            interval={habit.interval}
            color={habit.color}
            onDelete={() => handleDelete(habit.key)} 
            {...habit}  
            />))} 
            </div>
        </div>
        )
       
}


export default HabitsList