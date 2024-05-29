import React from 'react'
import Navbar_For_Normal_User from '../ComponentX/Navbar_For_Normal_User'
import '../CssX/Home_Super_Admin_Y.css'
import Content_Side_3 from '../ComponentX/Content_Side_3'
import Validateur_Side from '../ComponentX/Validateur_Side'


const Home_Validateur = () => {
  return (
    <div className='containerY'>
      <Navbar_For_Normal_User />
      <div className="middle">
        <Content_Side_3 />
        <Validateur_Side />




      </div>
      
    </div>
  )
}

export default Home_Validateur
