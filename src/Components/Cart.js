import React from 'react';


function Cart({ cartItems }) {
  return (
    <div className="cart-container">
      <h2 className="cart-header">Cart</h2>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div>
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;