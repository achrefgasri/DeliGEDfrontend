import React from 'react'
import Navbar_For_Normal_User from '../ComponentX/Navbar_For_Normal_User'
import '../CssX/Home_Super_Admin_Y.css'
import Content_Side_3 from '../ComponentX/Content_Side_3'
import Validateur_Side from '../ComponentX/Validateur_Side'
import Validateur_Side_General from '../ComponentX/Validateur_Side_General'
import Content_Side_4 from '../ComponentX/Content_Side_4'



const Home_Validateur_General = () => {
  return (
    <div className='containerY'>
      <Navbar_For_Normal_User />
      <div className="middle">
        <Content_Side_4 />
        <Validateur_Side_General />




      </div>
      
    </div>
  )
}

export default Home_Validateur_General
