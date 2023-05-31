import React from 'react'
import { useState } from 'react'

function GroceryItems(props) {
    function handleClick(){
        alert(`${props.name} has been added to the basket`)
      }

  return (
      <div>
           <button onClick={handleClick}>{props.name}</button>

    </div>
  )
}

export default GroceryItems
