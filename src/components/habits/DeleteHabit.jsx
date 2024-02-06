import React, { useRef } from 'react'


const DeleteHabit = (props) => {

 function deleteHabit() {
    props.onDelete(props.id)
    
    return props.id
  
 }

  return (
    <div>
        <button className="bg-yellow-300 p-2 leading-3 text-lg absolute top-2 right-4 text-white" onClick={(deleteHabit)}>🔥</button>
    </div>
  )
}

export default DeleteHabit