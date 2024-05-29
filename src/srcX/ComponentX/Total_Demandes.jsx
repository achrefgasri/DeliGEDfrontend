import React from 'react'
import '../CssX/Total_Demandes_Y.css'
import Card_Content from './Card_Content'
import Mine_Content from './Mine_Content'

const Total_Demandes = () => {
  return (
    <div className='totaa'>
        <div className="titil">
        Les Demandes Total
        </div>
        <div className="CardsSd">

        <Card_Content />
        <Mine_Content />

        
        </div>
        
      
    </div>
  )
}

export default Total_Demandes
