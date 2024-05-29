import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { register } from "../JS/Actions/authActions";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.authReducer.errors) || {};

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "User",
    bio: "",
    picture: "",
    birthdate: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(register(formData, navigate));
  };

  return (
    <div className='register'>
      <Toaster />
      <div className='register-cover'></div>
      <div className='register-content'>
        <div>
          <h1>Delice</h1>
          <p>Hello Genie</p>
        </div>
        <div>
          <form onSubmit={handleConfirm}>
            <div className='form-group'>
              <label>Firstname</label>
              <input type="text" name="firstname" onChange={handleFormChange} required />
              {errors.firstname && (
                <div style={{ textAlign: "left" }} className='valid'>
                  {errors.firstname}
                </div>
              )}
            </div>
            <div className='form-group'>
              <label>Lastname</label>
              <input type="text" name="lastname" onChange={handleFormChange} required />
              {errors.lastname && (
                <div style={{ textAlign: "left" }} className='valid'>
                  {errors.lastname}
                </div>
              )}
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input type="email" name="email" onChange={handleFormChange} required />
              {errors.email && (
                <div style={{ textAlign: "left" }} className='valid'>
                  {errors.email}
                </div>
              )}
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input type="password" name="password" onChange={handleFormChange} required />
              {errors.password && (
                <div style={{ textAlign: "left" }} className='valid'>
                  {errors.password}
                </div>
              )}
            </div>
            <div className='form-group'>
              <label>Role</label>
              <select name="role" onChange={handleFormChange} required>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && (
                <div style={{ textAlign: "left" }} className='valid'>
                  {errors.role}
                </div>
              )}
            </div>
            <div className='form-group'>
              <label>Bio</label>
              <textarea name="bio" onChange={handleFormChange} required></textarea>
            </div>
            <div className='form-group'>
              <label>Picture</label>
              <input type="file" name="picture"  />
            </div>
            <div className='form-group'>
              <label>Birthdate</label>
              <input type="date" name="birthdate" onChange={handleFormChange} required />
            </div>
            <button className='btn signup' type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
