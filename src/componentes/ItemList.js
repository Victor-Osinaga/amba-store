import React from 'react';
import Item from './Item';
import '../css/ItemList.css';

function ItemList( { productos } ) {
  return(
    <div className='itemListContainer'>
      <h1 className='titleItemList'>ItemList</h1>
      { productos.map(producto => {
        return(
            <Item producto={producto} key={producto.id} />
          )
        })
      }
    </div>
  )
}

export default ItemList;