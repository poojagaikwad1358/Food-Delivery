import React from "react";
import "../Navbar/Navbar.css";
import cart from "../Navbar/img/cart.png";

const Navbar = ({ setShow, size }) => {
  return (
    <div className='heading'>
      <h1 onClick={() => setShow(true)}>Zoomato</h1>
      <div className='innerDiv'>
        <img src={cart} alt='cart' />
        <p className='cart' onClick={() => setShow(false)}>
          Your Cart
        </p>
        <button className='button_cart'>{size}</button>
      </div>
    </div>
  );
};

export default Navbar;
