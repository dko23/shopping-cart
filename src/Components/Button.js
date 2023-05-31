import React from 'react'
import Basket from './Basket'

function Button() {
  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={() => alert('hi')}>Add to Basket</button> 
    </div>
  )
}

export default Button
