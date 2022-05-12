import React from 'react';
import Item from './Item';

function ItemList( { productos } ) {
  return(
    <div>
      <div>
        <h1>ItemList</h1>
      </div>

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