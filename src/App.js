import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from '../src/srcX/PagesX/LoginX';
import Register from './Pages/Register';
import ErrorPage from './Pages/Pageerror';
import PrivateRoute from "./Router/PrivateRoute";
import AdminRoute from "./Router/AdminRoute";
import HomeSuperAdmin from "../src/srcX/PagesX/Home_Super_Admin";
import HomeNormalUser from "../src/srcX/PagesX/Home_Normal_User";
import ExodUSProVisionGAccounts from "../src/srcX/PagesX/ExodUS_Pro_Vision_G_Accounts";
import ExodUSProVisionGRoles from "../src/srcX/PagesX/ExodUS_Pro_Vision_G_Roles";
import ExodUSProVisionGData from "../src/srcX/PagesX/ExodUS_Pro_Vision_G_Data";
function App() {
  const isAuthenticated = true;
  const isAdmin = true;
  return (
  


    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Register />} />
      <Route path="/Home_Super_Admin" element={<HomeSuperAdmin   />} />
      <Route path="/Home_Normal_User" element={<HomeNormalUser    />} />
      <Route path="/ExodUS_Pro_Vision_G_Accounts" element={<ExodUSProVisionGAccounts    />} />
      <Route path="/ExodUS_Pro_Vision_G_Roles" element={<ExodUSProVisionGRoles  />} />
      <Route path="/ExodUS_Pro_Vision_G_Data" element={<ExodUSProVisionGData  />} />
      {/* <Route path="/Signup"  element={
            <AdminRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin}>
              <Register  />
            </AdminRoute>
             } 
             /> */}
      {/* <Route path="/Home_Super_Admin"   element={
            <AdminRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin}>
              <HomeSuperAdmin  />
            </AdminRoute>
             }  /> */}
      {/* <Route path="/Home_Normal_User" element={
            <PrivateRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin}>
              <HomeNormalUser  />
            </PrivateRoute>
  
}  /> */}
    </Routes>

);
}

export default App;
