import React from 'react'
import './Add_DAD_Investissement.css'


const Add_DAD_Investissement = () => {
  return (
    <div>
        <div className='container'>
          <div className='glassS'>
        <div className='header'>
        <div className='text'>Informations</div>
        </div>
        <div className='inputs'>
        <select className='list'>
                      <option value="someOption" className='placeholderX' disabled selected>Département</option>
                      <option value="someOption" className='option'>D051018 - Sécurité</option>
                      <option value="otherOption" className='option'>D0510010 - STEP</option>
                      <option value="otherOption" className='option'>Ajouter</option>
                     
                </select>
                 <select className='list'>
                      <option value="someOption" className='placeholderX' disabled selected>Centre de coût</option>
                      <option value="someOption" className='option'>D051001 - Direction Indistrielle</option>
                      <option value="otherOption" className='option'>Ajouter</option>
                </select>
                <input type='text' placeholder='Cout estimé' />
                 <input type='text' placeholder='Delai Réception' />
                 <select className='list'>
                      <option value="someOption" className='placeholderX' disabled selected>Justificatif de la demande</option>
                      <option value="someOption" className='option'>Dépense Budgétisée</option>
                      <option value="otherOption" className='option'>Dépense Non Budgétisée</option>
                     
                </select>
                 <textarea placeholder='Proposition fournisseur'></textarea>
                 <textarea placeholder='Designation de la dépense'></textarea>
                 <textarea placeholder='justification de la dépense'></textarea>
                 <input type='submit' value="Suivant" className='suivantB' />
        </div>
        
      
    </div>
    <span className='littletitle'>Investissement</span>
    </div>
    </div>
  )
}

export default Add_DAD_Investissement
