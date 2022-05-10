import React from 'react';
import { useState } from 'react';
import '../css/ItemCount.css'

function ItemCount (props){
  const [count, setCount] = useState(props.initial);

  const countAdd = () => {
    if (count >= 0 && count < props.stock) {
      setCount(count + 1);
    }
  }
  const countRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className='contador'>
      <h4>{ props.titulo }</h4>
      <div>IMG</div>
      <div>
        <button onClick={ countRemove }>-</button>
        <strong>{ count }</strong>
        <button onClick={ countAdd }> + </button>
      </div>
    </div>
  )
}
export default ItemCount;