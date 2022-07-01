import React from "react";
import useCartContext from '../store/CartContext';
import '../css/Checkout.css';
import { createBuyOrder } from '../firebase/firebaseConfig';

function Checkout(){
  const { cart, cleanCart, calcPriceCart } = useCartContext();

  function handleBuy() {

    let nombre = document.getElementById('name').value;
    let mail = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;
    let envio = document.getElementById('envio').value;

    const itemsToBuy = cart.map( (item)=> ({
      titulo: item.titulo,
      cant: item.cant,
      precio: item.precio,
      id: item.id
      }
    ))

    const buyOrder = {
      buyer: {
        name: nombre,
        email: mail,
        phone: celular,
        direccion: envio
      },
      items: itemsToBuy,
      total: calcPriceCart()
    }

    createBuyOrder(buyOrder);
    cleanCart();
    // nombre.value = "";
    // mail.value = "";
    // celular.value = "";
    // envio.value = "";
  }
  const prevent = (event) => {
    event.preventDefault();
    handleBuy();
  };

  return(
    <section className="checkout">
      <form onSubmit={prevent} className="checkoutFormContainer">
        <h2>Formulario de Contacto</h2>
        <div className="grupo">
          <input className="checkInput" type="text" name="name" id="name" required />
          <label className="checkLabel">Nombre</label>
        </div>
        <div className="grupo">
          <input className="checkInput" type="email" name="email" id="email" required />
          <label className="checkLabel">Email</label>
        </div>
        <div className="grupo">
          <input className="checkInput" type="text" name="celular" id="celular" required />
          <label className="checkLabel">Celular</label>
        </div>
        <div className="grupo">
          <input className="checkInput" type="text" name="envio" id="envio" required />
          <label className="checkLabel">Dirección de envio</label>
        </div>
        <div>
          <input type="submit" value="¡COMPRAR!" className="btnComprar"  />
        </div>
      </form>
      <div id="content"></div>
    </section>
  )
}

export default Checkout;