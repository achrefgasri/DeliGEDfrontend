import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from "../JS/Actions/authActions";
import toast, { Toaster } from 'react-hot-toast';
import '../App.css';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errors = useSelector((state) => state.authReducer.errors);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const handleFormChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleConfim = () => {
      dispatch(login(formData, navigate));
      // navigate("/");
    };

    return (
        <div className='login'>
            <Toaster />
            <div className='login-cover'></div>
            <div className='login-content'>
                <div>
                    <h1>DARK SPACE</h1>
                    <p>Dark Space Social Media Application</p>
                </div>
                <div>
                    <form>
                        <div className='form-group'>
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                onChange={handleFormChange} 
                                required 
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                onChange={handleFormChange} 
                                required 
                            />
                        </div>
                        <button onClick={handleConfim} type="submit" className='btn signup'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
