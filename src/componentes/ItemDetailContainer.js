import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail.js';
import '../css/ItemDetailContainer.css';
import { getItem as getProducto } from '../firebase/firebaseConfig';


function ItemDetailContainer(){
  
  const [producto, setProducto] = useState();
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