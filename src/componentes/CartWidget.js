import React from "react";
import { BsBag  } from 'react-icons/bs';
import '../css/CartWidget.css';
import cartSvg from '../imagenes/cart.svg';

function CartWidget () {
  return (
    <div className="nav__CartSvgContainer" >
      < BsBag  />
      {/* <img type="image/svg+xml" id='nav__CartSvg' src={cartSvg}/> */}
      <span>0</span>
    </div>
  )
}

export default CartWidget;