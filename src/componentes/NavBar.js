import React from 'react';
import logo from '../logo.svg';
import '../normalize.css';
import './NavBar.css';
import searchSvg from '../imagenes/search.svg';
import cartSvg from '../imagenes/cart.svg';
import navMenuSvg from '../imagenes/menu.svg';
import navCloseSvg from '../imagenes/close.svg';

function NavBar(){
  return (
    <nav id="nav">
      <div className='nav__Container'>
        <div className='nav__LogoSvgContainer'>
          <img id='nav__LogoSvg' src={logo}/>
        </div>
        <form className="nav__FormContainer">
          <i><img id='nav__SearchSvg' src={searchSvg}/></i>
          <input type="search" id="nav__Input" placeholder="Estoy buscando..." />
        </form>
        <div className="nav__CartSvgContainer" >
          <i>
            <img id='nav__CartSvg' src={cartSvg}/>
          </i>
        </div>
        <div id='nav__UlContainer' className='nav__UlContainer'>
          
          <ul className='nav__Ul'>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Productos</a></li>
            <li><a href='#'>Contacto</a></li>
          </ul>
        </div>
        <div id='nav__MenuSvgContainer' className='nav__MenuSvgContainer'>
          <i>
            <img id='nav__MenuSvg' className='nav__MenuSvg' src={navMenuSvg}/>
          </i>
        </div>
        <div className='nav__CloseSvgContainer'>
            <i>
              <img id='nav__CloseSvg' className='nav__CloseSvg' src={navCloseSvg} />
            </i>
          </div>
      </div>
    </nav>
  );
};


// function handleLlinks() {
//   let menu = document.getElementById('nav__UlContainer');
//   let links = document.getElementById('nav__MenuSvgContainer');
//   if (window.innerWidth <= 991) {
//     links.classList.toggle("visible");
//     console.log('ola')
//   }
// }

// menu.addEventListener("click", handleLlinks);
// links.addEventListener("click", handleLlinks);

export default NavBar;