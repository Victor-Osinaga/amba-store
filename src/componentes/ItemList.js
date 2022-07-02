import React from 'react';
import Item from './Item';
import '../css/ItemList.css';

function ItemList( { productos } ) {
  return(
    <div className='itemList'>
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