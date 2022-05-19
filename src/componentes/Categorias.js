import React from 'react';
import { Link } from 'react-router-dom';

function Categorias(){
  return (
    <section className='Categorias'>
      <div className='categoriasContainer'>
        <Link to='/category/Ojos'>Ojos</Link>
        <Link to='/category/Unias'>Uñas</Link>
        <Link to='/category/Rostro'>Rostro</Link>
        <Link to='/category/Labiales'>Labiales</Link>
      </div>
    </section>
  );
}

export default Categorias;