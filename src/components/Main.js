import React from 'react';
import Product from './Product';

function Main(props) {
  const {dataList, onAdd} = props;
  return (
    <main className="block col-2">
      <div className="row">
        {dataList.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}

export default Main;