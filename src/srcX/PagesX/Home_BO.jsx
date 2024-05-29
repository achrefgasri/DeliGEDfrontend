import React from 'react'
import '../CssX/Home_BO_Y.css'

const Home_BO = () => {
  return (
    <div className='MainDivp'>
      <div className="mininavbar">
        <input type='submit' value='Deconnecter' className='minid' />
      </div>
      <div className="minicontent">
        Ajouter Facture
        <input type='text' placeholder='Titre' className='BOO' required />
        <input type='text' placeholder='Date' className='BOO'  required />
        <input type='text' placeholder='Delai Reception' className='BOO' required />
        <input type='text' placeholder='Fournisseur' className='BOO' required />
        <textarea className='BOOO' placeholder='Designation'></textarea>
        <textarea className='BOOO' placeholder='Commentaire'></textarea>


        <input type='submit' value='Ajouter' className='BOOI' />
       
      </div>
    </div>
  )
}

export default Home_BO
