import React from 'react';
import ItemCount from './ItemCount.js';
import { useState } from 'react';
import '../css/ItemDetail.css';


function ItemDetail( {producto} ) {
  const [isInCart, setIsInCart] = useState(false);
  function onAdd(count){
    console.log(`agregaste al carrito ${count} items`);
    setIsInCart(true);
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