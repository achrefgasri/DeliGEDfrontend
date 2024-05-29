import React from 'react'
import '../CssX/Modifier_Investissement_Y.css'

const Accept_Facture = () => {
  return (
    <div className='MainDiv'>
        <div className="titleoX">
        Examiner Facture
        </div>

        <div className="Modifier">
            <div className="e1">

            < input type='text' placeholder='Titre' required className='inputo' />
            < input type='text' placeholder='Date' required className='inputo' />
            </div>
            <div className="e2">
            < input type='text' placeholder='Delai Reception' required className='inputo' />
            < input type='text' placeholder='Fournisseur' required className='inputo' />
            </div>
            <div className="e3">
            <textarea className='textaa' placeholder='Designation'></textarea>
            <textarea className='textaa' placeholder='Commentaire'></textarea>
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

export default Accept_Facture
