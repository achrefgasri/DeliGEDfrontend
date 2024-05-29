import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { register } from "../../JS/Actions/authActions";
import '../CssX/ExodUS_Pro_Vision_Y.css'

const ExodUS_Pro_Vision_G_Accounts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.authReducer.errors) || [];

  const [formData, setFormData] = useState({
    Nom: "",
    Prénom: "",
    CIN: "",
    Telephone: "",
    Email: "",
    Département: "",
    Role: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(register(formData, navigate));
  };
  if (!Array.isArray(errors)) {
    console.error("Expected errors to be an array, but got", typeof errors);
    return null; // or handle the error accordingly
  }
  return (
    <div className='exodus'>
        
        <div className="ProDo">
          <div className="ExodUSpRO">DeliGED Ultra Vision - Gerer Les Comptes</div>
          <div className="ExodUSProDisplayi">

            <div className="AM">
                <div className="the_top_title">Creation Du Compte</div>
                {errors.map((error, index) => (
                  
      <div key={index}> <h6>{error.msg}</h6>
     </div>
    ))}
                    <form className='the_form' > 
                    <input type='text' placeholder='Nom' name="Nom" onChange={handleFormChange}className='cform' />
                    <input type='text' placeholder='Prénom'name="Prénom" onChange={handleFormChange}className='cform' />
                    <input type='text' placeholder='Cin' name="CIN" onChange={handleFormChange} className='cform' />
                    <input type='text' placeholder='Télephone' name="Telephone" onChange={handleFormChange}className='cform' />
                    <input type='email' placeholder='Email' name="Email" onChange={handleFormChange} className='cform' />
                
                    <select  className='cformEE' name="Département" onChange={handleFormChange}>
                      <option value="Département" className='placeholderX'>Département</option>
                      <option value="Informatique">Informatique</option>
                </select>

                    <select  className='cformEE' name="Role"  onChange={handleFormChange} >
                      <option value="Demandeur" className='placeholderX'>Demandeur</option>
                      <option value="Validateur">Validateur</option>
                      <option value="Validateur Génerale">Validateur Génerale</option>
                      <option value="BO">BO</option>
                </select>
                    <input type='submit' className='cformA'  onClick={handleConfirm}  />
                    </form>
              
            </div>
            <div className="PM">
            <div className="the_top_title">Liste Des Comptes</div>
                <table border='1px' width='50%'>
                    <tr>
                        <th>Utilisateur</th> <th>Les Effets</th>
                    </tr>
                    <tr>
                        <th></th> 
                        
                        
                        <th>
                            <div className="thhh">
                            <input type='submit' value='Modifier' className='effectZ' />
                            <input type='submit' value='Supprimer' className='effectZR' />
                            </div>
                            
                        </th>
                    </tr>
                </table>
            </div>
         

          </div>
        </div>
      
    </div>
  )
}

export default ExodUS_Pro_Vision_G_Accounts
