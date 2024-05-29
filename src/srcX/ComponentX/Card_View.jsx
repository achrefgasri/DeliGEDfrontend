import React from 'react'
import '../CssX/Card_View_Y.css'
import Card_Content from './Card_Content'
import Mine_Content from './Mine_Content'

const Card_View = () => {
  return (
    <div className='Maindiv'>
      <div className="tit">Parcourir les Donnees</div>
      <div className="event_cards">
        <Card_Content />
        <Mine_Content />
      </div>
      
    </div>
  )
}

export default Card_View
