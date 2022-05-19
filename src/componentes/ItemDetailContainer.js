import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosDB from '../data/productos.js';
import ItemDetail from './ItemDetail.js';
import '../css/ItemDetailContainer.css';

function getProducto(id) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      const productoFound = productosDB.find( (producto)=>{
        return parseInt(id) === producto.id;
      })
      resolve(productoFound);
      // reject(new Error('Error de conexión'));
    }, 500);
  });
}

function ItemDetailContainer(){
  // console.log(productosDB);
  const [producto, setProducto] = useState([]);
  const { itemid } = useParams();

  useEffect( () => {
    getProducto(itemid).then( respuestaPromise => {
      setProducto(respuestaPromise)
    });
  }, [itemid]);


  return (
    <section className="ItemDetailContainer">
      <ItemDetail 
        producto = {producto}
      />
    </section>
  )
}

export default ItemDetailContainer;