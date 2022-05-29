import React from 'react';
import { useState, useEffect } from "react";
import logo from '../imagenes/corona.png';
import '../css/NavBar.css';
import { FaSistrix } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import CartWidget from './CartWidget';
import Categorias from './Categorias';
import { Link } from 'react-router-dom';

import useCartContext from '../store/CartContext';


function NavBar(){

  const { contextFunction } = useCartContext();
  contextFunction();

  const [navVisible, setNavVisible] = useState(false);

  return (
    <nav id="nav">
    <Categorias /> 
      <div className='nav__Container'>
        <Link className='nav__LogoSvgContainer' to={'/'}>
          {/* <div className='noRotate'></div> */}
          <img id='nav__LogoSvg' src={logo}/>
        </Link>
        <form className="nav__FormContainer">
          <FaSistrix className='searchIco'/>
          {/* <i><img id='nav__SearchSvg' src={searchSvg}/></i> */}
          <input type="search" id="nav__Input" placeholder="Buscar..." />
        </form>
        <Link to="/cart"> <CartWidget /> </Link>
        <ul className={
              navVisible ? "nav__Ul expanded" : "nav__Ul"
            }>
          <li><Link to='/'>Inicio</Link></li>
          <li className='submenu__container'>
            <a href='#productos'>Productos</a>
            <ul className='submenu'>
              <li><a href='#'>Ojos</a></li>
              <li><a href='#'>Uñas</a></li>
              <li><a href='#'>Rostro</a></li>
              <li><a href='#'>Labiales</a></li>
            </ul>
          </li>
          <li><a href='#'>Contacto</a></li>
        </ul>
        <div id='nav__MenuSvgContainer' className='nav__MenuSvgContainer'
            onClick={() => {
              setNavVisible(!navVisible);
            }}>
          <i>
            <AiOutlineMenu id='nav__MenuSvg' className='nav__MenuSvg'/>
            {/* <img id='nav__MenuSvg' className='nav__MenuSvg' src={navMenuSvg}/> */}
          </i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;