import React from 'react'
import { useState } from 'react';
let numberkey = 1;


const NewHabit = (props) => {
    
    const [description, setDescription] = useState([])
   

    const {onAdd} = props;

   let nameRef;
   
   function number () {
    numberkey ++;
    
   }

    function addHabit (e) {
        e.preventDefault();
       nameRef = description;
       
       number();
        let addHabit = {
            key:nameRef + numberkey,
            name: nameRef,
            description: "Did you even lift bro?",
            color: "#F9A825",
            checked: false}
        
        onAdd(addHabit)
    }

  return (
    <div id="newHabit" className="top-0 left-0 bg-white backdrop-blur-sm rounded-md h-full flex">
        <form>
      
        <div className="p-8 flex gap-8">
        <h2 className="text-2xl">Add new habit</h2>
          <input
            type="text"
            className="px-4 py-2 bg-slate-100 rounded-md"
            value={description}
            onChange={e => setDescription(e.target.value)}
            ref={e=> description}
          />
          <button
            onClick={addHabit}
            
            className="bg-amber-500 text-white"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
      
      </div>
    </form>
    </div>
  )
}

export default NewHabit