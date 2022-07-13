import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import GetMenu from "./Component/GetMenu/GetMenu";
import Cart from './Component/Cart/Cart'
import Description from "./Component/Description/Description";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      <Description></Description>

      {show ? (
        <GetMenu handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;
