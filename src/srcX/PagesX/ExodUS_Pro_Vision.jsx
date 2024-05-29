import React from 'react'
import '../CssX/ExodUS_Pro_Vision_Y.css'
import donnees from '../AssetsX/Images/More/gerer_donnees.jpg';
import accounts from '../AssetsX/Images/More/gerer_accounts.jpg';
import roles from '../AssetsX/Images/More/gerer_role.jpg';



const ExodUS_Pro_Vision = () => {
  return (
    <div className='exodus'>
        
        <div className="ProDo">
          <div className="ExodUSpRO">DeliGED Ultra Vision</div>
          <div className="ExodUSProDisplay">

            <div className="Gerer">
              <div className="ga">
                <img src={accounts} alt='image here' className='imagena' />
              </div>
              <div className="ganame">
                Gerer Les Comptes
                <input type='submit' value='Entrer' className='goOn' />
              </div>
            </div>

            <div className="Gerer">
            <div className="ga">
            <img src={roles} alt='image here' className='imagena' />
            </div>
              <div className="ganame">
                Gerer Les Roles
                <input type='submit' value='Entrer' className='goOn' />
              </div>
            </div>

            <div className="Gerer">
            <div className="ga">
            <img src={donnees} alt='image here' className='imagena' />
            </div>
              <div className="ganame">
                Gerer Base Donnees
                <input type='submit' value='Entrer' className='goOn' />
              </div>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default ExodUS_Pro_Vision
