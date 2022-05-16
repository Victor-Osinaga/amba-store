import React, { useEffect, useState } from "react";
import productosDB from '../data/productos.js'
import ItemCount from "./ItemCount";
import ItemList from './ItemList.js'
import '../css/ItemListContainer.css';

function getProductos() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(productosDB);
      // reject(new Error('Error de conexión'));
    }, 2000);
  });
}

function ItemListContainer(props){
  // console.log(productosDB);
  const [productos, setProductos] = useState([]);

  useEffect( () => {
    getProductos().then( respuestaPromise => {
      console.log(`respuesta${respuestaPromise}`);
      setProductos(respuestaPromise);
    })
    .catch( (errorPromise) => console.error(errorPromise));
  }, []);


  return (
    <div className="ItemListContainer">
      <div className='background'></div>
      <h2>ItemListContainer</h2>
      <h1>Hola soy <b>{props.greeting}</b></h1>
      <ItemCount
        titulo = 'Titulo 1'
        stock = {5}
        initial = {0} 
      />
      <ItemList 
        productos={productos}
      />
    </div>
  )
}

export default ItemListContainer;