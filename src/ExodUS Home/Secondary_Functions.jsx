import React from 'react'
import clock from './Icons/clock.png';
import doc from './Icons/doc.png';
import close from './Icons/close.png';
import './ExodUS.css';

const Secondary_Functions = () => {
  return (
    <div className='ThirdPart'>
      <div className="bleft">

      <div className="bigelement">
        <div className="numberio">568</div>
        <div className="elementio">
          <div className="titre">Nouvelles 
          Taches De Validation</div>
          <div className="iconio"> <img src={clock} className='clock' /> </div>
        </div>
      </div>

      <div className="bigelement">
        <div className="numberio">122</div>
        <div className="elementio">
          <div className="titre">Mes 
          Demandes</div>
          <div className="iconio"> <img src={doc} className='clock' /> </div>
        </div>
      </div>

      <div className="bigelement">
        <div className="numberio">0</div>
        <div className="elementio">
          <div className="titre">Non 
          Vlidé</div>
          <div className="iconio"> <img src={close} className='clock' /> </div>
        </div>
      </div>



      </div>
      <div className="bright">
      <div className="topio">6500</div>
      <div className="bottomio">DAD Total</div>


      </div>

      </div>
  )
}

export default Secondary_Functions
