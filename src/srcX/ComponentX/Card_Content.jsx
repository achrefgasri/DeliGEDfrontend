import React from 'react'
import '../CssX/Card_Content_Y.css'
import text from '../AssetsX/Icons/text.png';

const Card_Content = () => {
  return (
    <div className='The_Card'>
      <div className="Icon_Text">
        <img src={text} alt='image here' className='textp' />
        DAD - Hors Stock / From Oussema Mannai / 05-20-2024 /Reference : 24900308 / Etat : 0 Sur 6


      </div>
      <div className="Icon_Button">
        <div className="ButtoT">
            <div className="circleE"></div>
        </div>
      </div>
    </div>
  )
}

export default Card_Content
