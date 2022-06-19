import React from 'react';
import { useState } from 'react';
import '../css/ItemCount.css';

function ItemCount ( {titulo, stock, initial, onAdd} ){
  const [count, setCount] = useState(initial);

  const countAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  const countRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className='contador'>
      <h4>{ titulo }</h4>
      <div>Cantidad</div>
      <div className='contadorControl'>
        <button onClick={ countRemove }>-</button>
        <strong>{ count }</strong>
        <button onClick={ countAdd }> + </button>
      </div>
      <button className='addCart' onClick={ ()=>onAdd(count) }><b>Añadir al carrito</b></button>
    </div>
  )
}
export default ItemCount;