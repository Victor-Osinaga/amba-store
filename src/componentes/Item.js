import React from 'react';
import '../css/Item.css'


function Item( {producto} ) {
  return (
    <div className='itemContainer'>
      <h3>Item</h3>
      <h2 className='itemTitulo'>{producto.titulo}</h2>
      <div className='itemImgContainer'>
        <img className='itemImg' src={producto.img} type='image/jpeg' alt='foto' />
      </div>
      <p className='itemPrecio'>Precio: ${producto.precio}</p>
      <h4 className='itemStock'>Stock: {producto.stock}</h4>
    </div>
  )
}

export default Item;