import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, onDelete, onEmpty} = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.itemPrice, 0);
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((product) => (
          <div key={product.id} className="row">
            <div className="col-2">
              <img className="cart" src={product.img} alt={product.itemName}  loading="lazy"  height={16} width={16}/> {product.itemName}</div>
            <div className="col-2">
              <button onClick={() => onRemove(product)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(product)} className="add">
                +
              </button>
              <button onClick={() => onDelete(product)} className="remove">
                Del
              </button>
            </div>
            <div className="col-2 text-right">
              {"Quantity: "}{product.qty}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <div className="row">
            <button onClick={() => onEmpty()} className="empty">
                Empty Cart
              </button>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
          </>
        )}
      </div>
    </aside>
  );
}