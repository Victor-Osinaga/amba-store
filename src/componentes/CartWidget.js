import React from "react";
import { BsBag  } from 'react-icons/bs';
import useCartContext from '../store/CartContext';
import '../css/CartWidget.css';

function CartWidget () {
  const { cantInCart } = useCartContext();
  return (
    <div className="nav__CartSvgContainer" >
      < BsBag className="cartIcon" />
      <span>{cantInCart()}</span>
    </div>
  )
}

export default CartWidget;