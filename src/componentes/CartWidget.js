import React from "react";
import '../css/CartWidget.css'
import cartSvg from '../imagenes/cart.svg';

function CartWidget () {
  return (
    <div className="nav__CartSvgContainer" >
      <i>
        <img id='nav__CartSvg' src={cartSvg}/>
        <p>0</p>
      </i>
    </div>
  )
}

export default CartWidget;