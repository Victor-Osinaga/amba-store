import React from 'react';
import ItemCount from './ItemCount.js'
import '../css/ItemDetail.css'


function ItemDetail( {producto} ) {
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
        <ItemCount
          titulo = 'Titulo 1'
          stock = {producto.stock}
          initial = {1}
        />
      </div>
    </section>
  )
}

export default ItemDetail;