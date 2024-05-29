import React from 'react'
import './Add_DAD_Investissement.css'

const Add_DAD_Investissement_2 = () => {
  return (
    <div>
        <div className='container'>
          <div className='glassXX'>
        <div className='header'>
        <div className='text2'>Plus Des Informations</div>
        </div>
        <div className='inputs'>
        <select className='list'>
                      <option value="someOption" className='placeholderX' disabled selected>Article</option>
                      <option value="someOption" className='option'>hscln0033 - Cautionnement STEG</option>
                      <option value="otherOption" className='option'>hscln0002 - Carburants</option>     
                      <option value="otherOption" className='option'>Ajouter</option>                      
                </select>
                 <input type='text' placeholder='Quantité' />
                 <input type='text' placeholder='Prix Unitaire' />
                 <textarea placeholder='Description 1'></textarea>
                 <textarea placeholder='Description 2'></textarea>
                <input type='text' placeholder='Centre de Cout' />
                <input type='text' placeholder='Objet de Compte' />
                <input type='text' placeholder='Sous Compte' />
                
                 <input type='submit' value="Suivant" className='suivantB' />
        </div>
        
      
    </div>
    <span className='littletitle'>Investissement</span>
    </div>
    </div>
  )
}

export default Add_DAD_Investissement_2
