import React, { useContext } from "react";
import useCartContext from '../store/CartContext';
import { Link } from 'react-router-dom';

function CartView() {
  const { cart, removeFromCart, cleanCart, calcPriceCart } = useCartContext();
  console.log("Cart", cart)
  // acceder al CartContext
  // MOSTRAR EL CONTENIDO DE CartContext
  // mostrar una interfaz para eliminar items y/o vaciar el carrito
  if (cart.length === 0) {
    return(
      <section style={{margin: "70px 0 0"}}>
        <div>
          <h4>No hay items en el carrito.</h4>
          <Link to="/">Volver al catálogo</Link>
        </div>
      </section>
    )
  }else{
    return (
      <section className="CartView" style={{margin: "70px 0 0"}}>
        <div className="itemCartContainer">
          {cart.map( itemCart => {
            return  <div className="itemCart" key={itemCart.id}>
                      <h3>{itemCart.titulo}</h3>
                      <div><img style={{width: "100px"}} src={itemCart.img} /></div>
                      <h4>cantidad: {itemCart.cant}</h4>
                      <h4>${itemCart.cant * itemCart.precio}</h4>
                      <button onClick={ ()=> removeFromCart(itemCart.id) }>Eliminar</button>
                    </div>
          })}
        </div>
        <button onClick={cleanCart}>Vaciar carrito</button>
        <div><h3>Total: ${calcPriceCart()}</h3></div>
      </section>
    )
  }
}

export default CartView;