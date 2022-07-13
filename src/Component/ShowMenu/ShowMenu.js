import React from "react";
import "../ShowMenu/ShowMenu.css";

const ShowMenu = ({ item, handleClick }) => {
  const { title, description, price } = item;
  return (
    <div className='main'>
      <div className='outerDiv'>
        <h3 className='media z'>{title}</h3>
        <i className='media p'>{description}</i>
        <h3 className='amount'>${price}</h3>
      </div>
      <div className='outerDiv quantity'>
        {/* <div className='inner'>
          <h4 className='quantity_heading'>Quantity</h4>
          <input classname='quan_num' type='number' step='1' min='1' max='5' />
        </div> */}
        <div>
          <button className='addBtn' onClick={() => handleClick(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowMenu;
