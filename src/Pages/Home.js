import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import UsernameCard from '../UsernameCard';
import Sidebar from '../Components/Sidebar';
import Register from './Register';

const Home = () =>{

    const [connectedUser,setConnectedUser] = useState({})

    const navigate = useNavigate()

    const getConnectedUserData = () =>{

       setConnectedUser(JSON.parse(localStorage.getItem("user_data")) )
       //guard kif manjim na3mlow fil founction athya kif manjm fil useEffact
        if(localStorage.getItem("user_data")== undefined){// user not connected
            //redirection vers la page login
            navigate("/");
        }
         
        
    }

    useEffect(()=>{

        getConnectedUserData()

    },[]);

    return(
 <>
 <Navbar/>
 <div className='layout-app'>
    {/* left box */}
    <div style={{width : "25%"}}><UsernameCard user={connectedUser}/>
<Sidebar></Sidebar></div>
<Register></Register>
 </div>
 
 
 {/* <h1>hello {connectedUser.lastname+' '+connectedUser.firstname}</h1> */}
 </>
 );
}
export default Home;