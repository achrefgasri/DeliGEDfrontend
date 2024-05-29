import React from "react";
import "./style.css"
import Delice from './img/Delice.jpg';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import {faMagnifyingGlass, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
const Navbar = ()=>{
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user_data');
        localStorage.removeItem('token');
        navigate("/"); // Redirect to login page after logout
    };
    return(
        <>
        <div className="navbar">
            <div className="navbar_left">
                <b>Delice</b>
            </div>
            <div className="navbar_right">
            <div className="navbar_search">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="ico"/>
                <input type="text"  placeholder="Search ..."/>
            </div>
            <button className="navbar_profile_button" onClick={logout}>
                    <FontAwesomeIcon icon={faSquarePlus}/>{' '}
                    Logout
            </button>
            <div className="navbar_profile_image">
            <img
   src={Delice} 
   alt="Your Image"
   className='image'
 />            </div>
            </div>
        </div>
        </>
    )


}
export default Navbar;