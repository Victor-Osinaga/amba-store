import React from 'react';
import { useState } from "react";
import logo from '../imagenes/corona.png';
import '../css/NavBar.css';
import searchSvg from '../imagenes/search.svg';
import navMenuSvg from '../imagenes/menu.svg';
import CartWidget from './CartWidget';

function NavBar(){

  const [navVisible, setNavVisible] = useState(false);
  return (
    <nav id="nav">
      <div className='nav__Container'>
        <div className='nav__LogoSvgContainer'>
          <img id='nav__LogoSvg' src={logo}/>
        </div>
        <form className="nav__FormContainer">
          <i><img id='nav__SearchSvg' src={searchSvg}/></i>
          <input type="search" id="nav__Input" placeholder="Buscar..." />
        </form>
        <CartWidget />
        <ul className={
              navVisible ? "nav__Ul expanded" : "nav__Ul"
            }>
          <li><a href='#'>Inicio</a></li>
          <li className='submenu__container'>
            <a href='#'>Productos</a>
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
            <img id='nav__MenuSvg' className='nav__MenuSvg' src={navMenuSvg}/>
          </i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;