import React, { useState, useEffect } from "react";
import "../Cart/Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <section>
      {cart.map((item) => (
        <div className='cart_box' key={item.id}>
          <div className='cart_title'>
            <h1>{item.title}</h1>
          </div>
          <div className="qbuttons">
            <button className="quantity" onClick={() => handleChange(item, 1)}>+</button>
            <button className="quantity">{item.amount}</button>
            <button className="quantity" onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div className="price">
            <span className="removePrice">{item.price}</span><br/><br/>
            <button className="rbtn" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total</span>
        <span>Rs - {price}</span>
      </div>
    </section>
  );
};

export default Cart;
