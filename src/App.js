import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  let dataList = data;

  const [cartItems, setCartItems] = useState([]);

  const addInCart = (item) => {
    if (item.avalQty === 0) {
      alert("This item is unavailable.")
      return;
    }
    // step1: to remove data from item obj;
    dataList.map(currentItem => {
      if (currentItem.id === item.id) {
        return {
          ...currentItem,
          avalQty: currentItem.avalQty--
        }
      }
      return currentItem;
    })
// step2 : to add data in card obj
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1, avalQty: exist.avalQty-1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    dataList.map(currentItem => {
      if (currentItem.id === item.id) {
        return {
          ...currentItem,
          avalQty: currentItem.avalQty++
        }
      }
      return currentItem;
    })
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1, avalQty: exist.avalQty++ } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="row">

        <Main dataList={dataList} onAdd={addInCart}></Main>


        <Basket cartItems={cartItems} onAdd={addInCart} onRemove={removeFromCart}></Basket>
      </div>
    </div>
  );
}

export default App;