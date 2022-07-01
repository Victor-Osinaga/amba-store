import React, { useEffect, useState } from "react";
import ItemList from './ItemList.js';
import { useParams } from "react-router-dom";
import '../css/ItemListContainer.css';
import { getAllItems as getProductos, getItemsByCategory} from '../firebase/firebaseConfig'


function ItemListContainer( {titulo} ){
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
  }, [categoryid]);


  return (
    <div className="ItemListContainer">
      <h2 id='productos'>ItemListContainer</h2>
      <h1><b>{titulo}{categoryid}</b></h1>
      <ItemList 
        productos={productos}
      />
    </div>
  )
}

export default ItemListContainer;