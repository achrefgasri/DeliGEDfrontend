import React from 'react'
import Navbar_For_Super_Admin from '../ComponentX/Navbar_For_Super_Admin';
import Admin_Side from '../ComponentX/Admin_Side';
import Content_Side from '../ComponentX/Content_Side';
import Navbar_For_Normal_User from '../ComponentX/Navbar_For_Normal_User';
import User_Side from '../ComponentX/User_Side';
import SideBar_User from '../ComponentX/SideBar_User';
import '../CssX/Home_Super_Admin_Y.css'

const Home_Super_Admin = () => {
  return (
    <div className='containerY'>

      <Navbar_For_Super_Admin />
      <div className="middle">
        <Content_Side />
        
        <Admin_Side />
        
        
      </div>
    
    </div>
  )
}

export default Home_Super_Admin
