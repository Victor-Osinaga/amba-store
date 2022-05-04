import React from "react";
import '../css/ItemListContainer.css'

function ItemListContainer(props){
  return (
    <div className="ItemListContainer">
      <div>
        <p>
          Hola soy <b>{props.greeting}</b>
        </p>
      </div>
    </div>
  )
}

export default ItemListContainer;