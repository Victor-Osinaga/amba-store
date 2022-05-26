import React from 'react';
import ItemCount from './ItemCount.js';
import { useState } from 'react';
import '../css/ItemDetail.css';
import useCartContext from '../store/CartContext.js';


function ItemDetail( {producto} ) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useCartContext();

  function onAdd(count){
    console.log(`agregaste al carrito ${count} items`);
    setIsInCart(true);
    addToCart(producto, count);
    console.log("agregado al cart: ", producto, count)
  }
  return (
    <section className='itemDetail'>
      <h3>Item Detail</h3>
      <div className='itemDetailLeft'>
        <img className='itemDetailImg' src={producto.img} type='image/jpeg' alt='foto' />
      </div>
      <div className='itemDetailRight'>
        <h2 className='itemDetailTitulo'>{producto.titulo}</h2>
        <p className='itemDetailPrecio'>Precio: ${producto.precio}</p>
        <h4 className='itemDetailStock'>Stock: {producto.stock}</h4>
        <p className='itemDetailDescripcion'>{producto.descripcion}</p>
        
        { isInCart ?
          <button>Ir al carrito</button>
         :  
          <ItemCount
            onAdd={onAdd}
            titulo = {producto.titulo}
            stock = {producto.stock}
            initial = {1}
          />
        }
      </div>
    </section>
  )
}

export default ItemDetail;