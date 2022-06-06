import React, { useEffect, useState } from "react";
// import productosDB from '../data/productos.js';
import ItemList from './ItemList.js';
import { useParams } from "react-router-dom";
import '../css/ItemListContainer.css';
import { getAllItems as getProductos, getItemsByCategory} from '../firebase/firebaseConfig'

// function getProductos(categoryid) {
//   return new Promise( (resolve, reject) => {
//     setTimeout( () => {
//       if (categoryid){
//         const arrayFiltered = productosDB.filter( (producto)=>{
//           return producto.categoria === categoryid;
//         });
//         resolve(arrayFiltered)
//       }else {
//         resolve(productosDB);
//       }
//     }, 300);
//   });
// }

function ItemListContainer( {titulo} ){
  // console.log(productosDB);
  const [productos, setProductos] = useState([]);
  const { categoryid } = useParams();

  useEffect( () => {
    if (categoryid === undefined){
      getProductos().then( respuestaPromise => {
        setProductos(respuestaPromise);
      })
    }else{
      getItemsByCategory(categoryid).then( respuestaPromise => {
        setProductos(respuestaPromise);
      })
    }
    
    // .catch( (errorPromise) => console.error(errorPromise));
  }, [categoryid]);


  return (
    <div className="ItemListContainer">
      <h2 id='productos'>ItemListContainer</h2>
      <h1><b>{titulo}{categoryid}</b></h1>
      {/* <ItemCount
        titulo = 'Titulo 1'
        stock = {5}
        initial = {0} 
      /> */}
      <ItemList 
        productos={productos}
      />
    </div>
  )
}

export default ItemListContainer;