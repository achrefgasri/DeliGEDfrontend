import React from 'react';
import './ExodUS.css';

const Pro_NavBar = () => {
  return (
    <div className='navbar'>
      
      <div className='navbarleft'>
      <div className='DAD'>DAD</div>
      <div className='FF'>Factures Fournisseurs</div>
      </div>

      <div className="navbarmiddle">
      <div className='EPV'>ExodUS Pro Vision</div>
      </div>

      <div className="navbarright">
      <div className='More'></div>
      <div className='LogOut'>Déconnecter</div>
      </div>

      </div>
  )
}

export default Pro_NavBar
