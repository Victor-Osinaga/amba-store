import React from 'react';


function Item( {producto} ) {
  return (
    <div>
      <h3>Item</h3>
      <h2>{producto.titulo}</h2>
      <p>Precio: ${producto.precio}</p>
      <h4>Stock: {producto.stock}</h4>
      <hr/>
    </div>
  )
}

export default Item;