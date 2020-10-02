import React from 'react';
import './footer.css';

function Footer () {
  return (
    <div className='footer'>
      <footer className='py-4 bg-dark fixed-bottom'>
        <div className='container'>
          <p className='m-0 text-center text-white'>
            Copyright &copy; Strawberry Clickers
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
