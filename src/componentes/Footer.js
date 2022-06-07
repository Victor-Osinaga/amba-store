import React from 'react';
import '../css/Footer.css';

function Footer (){
  return(
    <section className='Footer'>
      <div className='footer__container'>
        <p className='footer__text'>
          Sitio web hecho en React por 
          <a className='footer__link' href='https://youtube.com'>
            <b> Victor Osinaga</b>
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer;