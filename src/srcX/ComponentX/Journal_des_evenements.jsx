import React from 'react'
import '../CssX/Journal_des_evenements_Y.css'
import Event_Card from './Event_Card'

const Journal_des_evenements = () => {
  return (
    <div className='journala'>
        <div className="tit">Journal Des Evenements</div>
        <div className="event_cards">


        <Event_Card />
        <Event_Card />
        <Event_Card />



        </div>
      
    </div>
  )
}

export default Journal_des_evenements
