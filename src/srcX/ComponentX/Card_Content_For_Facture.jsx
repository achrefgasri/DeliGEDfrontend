import React from 'react'
import '../CssX/Card_Content_Y.css'
import text from '../AssetsX/Icons/text.png';

const Card_Content_For_Facture = () => {
  return (
    <div className='The_Card'>
      <div className="Icon_Text">
        <img src={text} alt='image here' className='textp' />
        Facture / Titre / 05-20-2024


      </div>
      <div className="Icon_Button">
        <div className="ButtoT">
            <div className="circleE"></div>
        </div>
      </div>
    </div>
  )
}

export default Card_Content_For_Facture
