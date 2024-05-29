// ExodUS_Home.js
import React from 'react';
import './ExodUS.css';
import Pro_NavBar from './Pro_NavBar';
import DAD from './DAD';
import DAD_Cycle from './DAD_Cycle';
import Secondary_Functions from './Secondary_Functions';

const ExodUS_Home = () => {
  return (
    <div className='container'>


      {/* This is the NavBar component */}
      <Pro_NavBar />


      {/* This is the second part component */}
      <div className='SecondPart'>
        <DAD />
        <DAD_Cycle />

      </div>


      {/* This is the Last part component */}
      <Secondary_Functions />
      
    </div>
  );
};

export default ExodUS_Home;