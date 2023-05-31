import React from 'react'
import ShoppingItem from './ShoppingItems'

function ShoppingItems(props) {

  return (
    <div>
       <h1>shopping Stuff</h1>
<div class="container">
<div class="row">
     
          {props.clothes.map(item => (
         <div class='col-md-3'> 
              <ShoppingItem item={item} key={item.id} addToCart={props.addToCart} addCount={props.addCount} />
              </div> 
          ))}
            
</div>
</div>
</div> 
  );
}
export default ShoppingItems
  
  
  
