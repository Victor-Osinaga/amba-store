import React from 'react';
import '../css/Footer.css';

function Footer (){
  return(
    <section className='Footer'>
      <div className='footer__container'>
        <p className='footer__text'>
          Sitio web desarrollado en React por 
          <a target='_BLANK' rel='noreferrer' className='footer__link' href='https://victor-osinaga.github.io/Portfolio/'>
            <b> Victor Osinaga</b>
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer;