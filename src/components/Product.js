import React from 'react';

function Product(props) {
  const {product, onAdd} = props;
  return (
    <div>
      <img className="small" src={product.img} alt={product.itemName} />
      <h3>{product.itemName}</h3>
      <div>{"Price: "}${product.itemPrice}</div>
      <div>{"Available Qty: "}{product.avalQty}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;