import React from 'react'
import { useState } from 'react'


function Input() {

const [change, setChange] = useState['']
function handlechange(e) {
    setChange(e.target.value, () => {
      console.log(change);
    });
  }
  

  return (
      <div>
       <input type='text' onChange={handlechange} value={change}/><button>Search</button>
    </div>
  )
}

export default Input