import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Categorias.css'

function Categorias(){
  return (
    <section className='Categorias'>
      <div className='categoriasContainer'>
        <Link to='/category/Ojos' className='link'>Ojos</Link>
        <Link to='/category/Unias' className='link'>Uñas</Link>
        <Link to='/category/Rostro' className='link'>Rostro</Link>
        <Link to='/category/Labiales' className='link'>Labiales</Link>
      </div>
    </section>
  );
}

export default Categorias;