import React from 'react';
import './footer.css';

function Footer () {
  return (
    <div className='footer'>
      <footer className='footer_name py-4 bg-pink fixed-bottom'>
        <div className='container'>
          <p className='m-0 text-center text-white'>
            Copyright &copy; Strawberry Clickers
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
