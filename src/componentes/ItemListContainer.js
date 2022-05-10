import React from "react";
import ItemCount from "./ItemCount";
import '../css/ItemListContainer.css';

function ItemListContainer(props){
  return (
    <div className="ItemListContainer">
      <h1>Hola soy <b>{props.greeting}</b></h1>
      <div className="contadorContainer">
        <ItemCount
          titulo = 'Titulo 1'
          stock = {5}
          initial = {0} />
        <ItemCount
          titulo = 'Titulo 2'
          stock = {8}
          initial = {0} />
        <ItemCount
          titulo = 'Titulo 3'
          stock = {10}
          initial = {0} />
        <ItemCount
          titulo = 'Titulo 4'
          stock = {15}
          initial = {0} />
          <ItemCount
          titulo = 'Titulo 5'
          stock = {25}
          initial = {0} />
      </div>
    </div>
  )
}

export default ItemListContainer;