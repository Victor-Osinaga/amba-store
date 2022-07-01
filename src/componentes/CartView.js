import React from "react";
import useCartContext from '../store/CartContext';
import { Link } from 'react-router-dom';
import '../css/CartView.css';

function CartView() {
  const { cart, removeFromCart, cleanCart, calcPriceCart } = useCartContext();

  if (cart.length === 0) {
    return(
      <section className="CartView" >
        <div>
          <h4>No hay items en el carrito.</h4>
          <Link to="/">Volver al catálogo</Link>
        </div>
      </section>
    )
  }else{
    return (
      <section className="CartView" >
        <div className="itemCartContainer">
          {cart.map( itemCart => {
            return  <div className="itemCart" key={itemCart.id}>
                      <h3>{itemCart.titulo}</h3>
                      <div className="itemDescription">
                        <div className="itemDescr1">
                          <img alt={itemCart.titulo} src={itemCart.img} />
                        </div>
                        <div className="itemDescr2">
                          <p>Cantidad: <b>{itemCart.cant}</b></p>
                          <p>Precio: <b>${itemCart.precio}</b></p>
                          <p>Precio final: <b>${itemCart.cant * itemCart.precio}</b></p>
                          <button className="btnEliminar" onClick={ ()=> removeFromCart(itemCart.id) }>Eliminar</button>
                        </div>
                      </div>
                    </div>
          })}
          <div className="infoFinal">
          <h3 className="precioFinal">Total: ${calcPriceCart()}</h3>
            <button className="btnVaciarCarrito" onClick={cleanCart}>Vaciar carrito</button>
            <Link to='/checkout'> <button className="btnComprar"><b>Checkout</b></button> </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default CartView;