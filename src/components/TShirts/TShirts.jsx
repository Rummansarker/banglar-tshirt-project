import React from 'react';
import './TShirts.css';

const TShirts = ({tshirt, handleBuyNowBtn}) => {
  const {name, picture, price} = tshirt;

  return (
    <div className='tshirt-container'>
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => handleBuyNowBtn(tshirt)}>Buy Now</button>
    </div>
  );
};

export default TShirts;