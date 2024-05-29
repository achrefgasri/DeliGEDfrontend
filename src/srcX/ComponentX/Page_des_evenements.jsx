import React from 'react'
import '../CssX/Page_des_evenements_Y.css'

const Page_des_evenements = () => {
  return (
    <div className='event'>
        <div className="titp">
            Pages Des Evenements
        </div>

        <div className="partieven">
            <span className='Evenement'>Créez Votre Evenement</span>
            <textarea placeholder='Ici' className='xa'></textarea>
            <input type='submit' value='Envoyer' className='send' />
        </div>
      
    </div>
  )
}

export default Page_des_evenements
