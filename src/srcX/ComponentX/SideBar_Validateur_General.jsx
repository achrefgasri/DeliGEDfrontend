import React from 'react'
import '../CssX/SideBar_Y.css'

const SideBar_Validateur_General = () => {
  return (
    <div className='navbari'>
        
        <div className="tabs"><h1 className='tab'>Catégories</h1></div>
        <div className="tabslist">
        <h2 className='tabin'>Nouvelles Taches De Validation</h2>
        <h2 className='tabin'>Non Valide</h2>  
        <h2 className='tabin'>Les Factures</h2>  
        </div>
        

        
        <div className="tabs"><h1 className='tab'>Evenements</h1></div>
        <div className="tabslist">
        <h2 className='tabin'>Journal des evenements</h2>    
        </div>
        

        
        <div className="tabs"><h1 className='tab'>A Propos</h1></div>
        <div className="tabslist">
        <h2 className='tabin'>À propos de la candidature</h2>    
        </div>
        

      
    </div>
  )
}

export default SideBar_Validateur_General
