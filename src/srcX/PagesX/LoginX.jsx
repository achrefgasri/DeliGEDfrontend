
import React, { useState } from "react";
import UserService from '../Service/UserService';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../JS/Actions/authActions"
import '../CssX/LoginY.css';

const LoginX = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errors = useSelector((state) => state.authReducer.errors);
    const [formData, setFormData] = useState({
      email: "",
      motdepasse: "",
    });
  
    const handleFormChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleConfim = () => {
      dispatch(login(formData, navigate));
      // navigate("/");
    };
    if (!Array.isArray(errors)) {
      console.error("Expected errors to be an array, but got", typeof errors);
      return null; // or handle the error accordingly
    }
  return (
    <div className="container">
      <div className='GlassLogin'>
      <Toaster/>
        <div className="name"><h1>DeliGED</h1></div>
        {errors.map((error, index) => (
                  
                  <div key={index}> <h6>{error.msg}</h6>
                 </div>
                ))}
        <form  className='forme' >
        <div className="idenpass">
        <input type='text' placeholder='Identifiant' className='LogInput' name="email"  onChange={handleFormChange} required />
        <input type='password' placeholder='Mot de passe' className='LogInput' name="motdepasse"   onChange={handleFormChange}  required />
        </div>



        <div className="logbut"> <input   type='submit'  className='LogButton' onClick={handleConfim} /></div>



        <div className="logfor">Mot de passe oublié</div>
        
        </form>

       
      </div>
    </div>
  );
}

export default LoginX;
