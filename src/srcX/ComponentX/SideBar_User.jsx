import React from 'react'
import '../CssX/SideBar_Y.css'

const SideBar_User = () => {
  return (
    <div className='navbari'>
        <div className="tabs"><h1 className='tab'>Demande Autorisation Dépenses</h1></div>
        <div className="tabslist">
        <h2 className='tabin'>DAD - Hors Stock</h2> 
        <h2 className='tabin'>DAD - Investissement</h2>   
        </div>
        

        
        <div className="tabs"><h1 className='tab'>Catégories</h1></div>
        <div className="tabslist">
        <h2 className='tabin'>Mes Demandes</h2>
        <h2 className='tabin'>Les Demandes Total</h2>    
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

export default SideBar_User
