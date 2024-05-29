import React from 'react'
import '../CssX/Modifier_Investissement_Y.css'

const Accept_I = () => {
  return (
    <div className='MainDiv'>
        <div className="titleoX">
        Examiner DAD Investissement
        </div>

        <div className="Modifier">
            <div className="e1">
            <select name="departement" className='listi' >
                      <option value="someOption" className='placeholderX' disabled selected>Département</option>
                      <option value="someOption" className='option'>D051018 - Sécurité</option>
                      <option value="otherOption" className='option'>D0510010 - STEP</option>
                      <option value="otherOption" className='option'>Ajouter</option>
                     
            </select>
            < input type='text' placeholder='Cout Estimé' required className='inputo' />
            < input type='text' placeholder='Delai Réception' required className='inputo' />
            </div>
            <div className="e2">
            <select name="Centre de Coût" className='listi' >
                      <option value="someOption" className='placeholderX' disabled selected>Centre de Coût</option>
                      <option value="someOption" className='option'>1</option>
                      <option value="otherOption" className='option'>2</option>       
            </select>
            < input type='text' placeholder='Quantité' required className='inputo' />
            < input type='text' placeholder='Prix Unitaire' required className='inputo' />
            </div>
            <div className="e3">
            <select name="Objet de Compte" className='listioo' >
                      <option value="someOption" className='placeholderX' disabled selected>Objet de Compte</option>
                      <option value="someOption" className='option'>1</option>
                      <option value="otherOption" className='option'>2</option>
            </select>
            </div>
            <div className="e4">
            <select name="Sous Compte" className='listioo' >
                      <option value="someOption" className='placeholderX' disabled selected>Sous Compte</option>
                      <option value="someOption" className='option'>1</option>
                      <option value="otherOption" className='option'>2</option>
            </select>
            </div>
            <div className="e5">
            <select name="Justification de la demande" className='listioo' >
                      <option value="someOption" className='placeholderX' disabled selected>Article</option>
                      <option value="someOption" className='option'>Article 1</option>
                      <option value="otherOption" className='option'>Article 2</option>
                      <option value="otherOption" className='option'>Ajouter</option>
                     
            </select>
            </div>
            <div className="e6">
              <textarea className='textaa' placeholder='Description 1'></textarea>
              <textarea className='textaa' placeholder='Description 2'></textarea>
            </div>
            <div className="e7">
            <textarea className='textaai' placeholder='Proposition Fournisseur'></textarea>
            <textarea className='textaai' placeholder='Designation de la dépense'></textarea>
            <textarea className='textaai' placeholder='Justification de la dépense'></textarea>
            </div>
            <div className="e8">
            < input type='submit' value='Sauvegarder'  className='sauvegarder' />
            < input type='submit' value="Accepte"  className='sauvegarder' />
            < input type='submit' value="Refuse"  className='sauvegarder' />

            </div>
        </div>
      
    </div>
  )
}

export default Accept_I
