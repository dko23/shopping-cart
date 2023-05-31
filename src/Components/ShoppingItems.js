import React from 'react';

export default function ShoppingItem(props) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <div key={props.item.id} className="image-container">
            <img src={props.item.image} className="picture" alt="Item" />
          </div>
          <h4>{props.item.title}</h4>
          <p>${props.item.price}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              props.addToCart(props.item);
              props.addCount();
            }}
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}



