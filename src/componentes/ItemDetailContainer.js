import React, { useEffect, useState } from "react";
import productosDB from '../data/productos.js'
import ItemDetail from './ItemDetail.js'
// import '../css/ItemListContainer.css';

function getProducto() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(productosDB);
      // reject(new Error('Error de conexión'));
    }, 2000);
  });
}

function ItemDetailContainer( {id} ){
  // console.log(productosDB);
  const [producto, setProducto] = useState([]);

  useEffect( () => {
    getProducto().then( respuestaPromise => {
      console.log(`respuesta${respuestaPromise}`);
      setProducto(respuestaPromise[id]);
    })
    .catch( (errorPromise) => console.error(errorPromise));
  }, []);


  return (
    <section className="ItemDetailContainer">
      <ItemDetail 
        producto={producto}
      />
    </section>
  )
}

export default ItemDetailContainer;