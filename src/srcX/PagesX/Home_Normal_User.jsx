import React from 'react'
import '../CssX/Home_Super_Admin_Y.css'
import Navbar_For_Normal_User from '../ComponentX/Navbar_For_Normal_User'
import Content_Side_2 from '../ComponentX/Content_Side_2'
import User_Side from '../ComponentX/User_Side'

const Home_Normal_User = () => {
  return (
    <div className='containerY'>
      <Navbar_For_Normal_User />
      <div className="middle">
      <Content_Side_2 />
      <User_Side />
      
      </div>
    </div>
  )
}

export default Home_Normal_User
