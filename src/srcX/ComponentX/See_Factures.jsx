import React from 'react'
import '../CssX/See_Factures_Y.css'
import Facture_Card from './Facture_Card'

const See_Factures = () => {
  return (
    <div className='fod'>
        <div className="les_facturesX">
            <Facture_Card />
        </div>
        <div className="les_facturesXY">
            <label className='showX'>Titre Facture : <span className='spani'>Facture Internet</span></label> 
            <label className='showX'>Date : <span className='spani'>05/21/2024</span></label> 
            <label className='showX'>Delai de Reception : <span className='spani'>06/21/2024</span></label> 
            <label className='showX'>Fournisseur : <span className='spani'>Telecome</span></label> 
            <label className='showX'>Designation : <span className='spani'>Informatique</span></label> 
            <label className='showX'>Commentaire : <span className='spani'>Optional</span></label> 
        </div>
      
    </div>
  )
}

export default See_Factures
