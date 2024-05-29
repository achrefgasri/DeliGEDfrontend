import React from 'react'
import '../CssX/Admin_Messaging_Y.css'
import Amal from '../AssetsX/Images/Profiles/Amal.jpg';

const Admin_Messaging = () => {
  return (
    <div className='Messagerie'>
        <div className="messagetitleeee">Zone de Messages</div>
      <div className="messagerecive">
        <div className="sender">
            <img src={Amal} alt='here image' className='amalI' />
            Amal Hannachi
        </div>
        <div className="sendermessage">
        J'ai un problème pour envoyer des 
        demandes
        </div>
      </div>
      <div className="messagesend">
        <div className="messageadmin">
            <textarea className='textar' placeholder='Repondez ici' >
            </textarea>
        
        </div>
        <div className="sendit">
            <input type='submit' value='Envoyer' className='raise' />
        </div>
      </div>
    </div>
  )
}

export default Admin_Messaging
