import React from "react";
import { BsBag  } from 'react-icons/bs';
import useCartContext from '../store/CartContext';
import '../css/CartWidget.css';

function CartWidget () {
  const { calcPriceCart } = useCartContext();
  return (
    <div className="nav__CartSvgContainer" >
      < BsBag className="cartIcon" />
      <span>{calcPriceCart()}</span>
    </div>
  )
}

export default CartWidget;