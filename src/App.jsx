import React, { useState, useEffect } from 'react'
import Papa from "papaparse"

import './App.css'

import Dashboard from './pages/Dashboard.jsx'




function App() {

  const [habits, setHabits] = useState([])


  // useEffect(() =>{ Papa.parse('./data/Habits.csv' , {
  //   header: true,
  //   download: true,
  //   complete: (habits) => {
  //       setHabits(habits.data)
  //   }}, []);
  
  // })  




  return (
    
 
      <div className="w-full">

        <Dashboard />
        <h1>wassup bitches</h1>
      </div>
  )
}

export default App
