import React , { useState } from 'react'
import './Add_DAD_Hors_Stock.css'
import UserService from '../Services/UserService'
import { useNavigate } from 'react-router-dom';


const Add_DAD_Hors_Stock = () => {
  const navigate = useNavigate();
  const [demande, setDemande] = useState({
    departement: '',
    Coutestime: '',
    Delai_Reception: '',
    JustifDemande: '',
    PropositionFour: '',
    DesignationDedepense: '',
    Justifdepense: ''
  });
  const handleChange = (e) => {
    setDemande({ ...demande, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the service function to add a demand
      const response = await UserService.adddemande(demande);
      console.log(response); // Handle success message or redirect
      navigate("/Add_DAD_Hors_Stock_2")
    } catch (error) {
      console.error(error); // Handle error
    }
  };
  return (
    <div>
        <div className='container'>
          <div className='glass'>
        <div className='header'>
        <div className='text'>Informations</div>
        <div className='underline'></div>
        </div>
        <div className='inputs'>
        <select name="departement" className='list' onChange={handleChange}>
                      <option value="someOption" className='placeholderX' disabled selected>Département</option>
                      <option value="someOption" className='option'>D051018 - Sécurité</option>
                      <option value="otherOption" className='option'>D0510010 - STEP</option>
                     
                </select>
                 <input type='text' name="Coutestime" placeholder='Cout estimé' value={demande.Coutestime}
              onChange={handleChange} />
                 <input type='text'  name="Delai_Reception" placeholder='Delai Réception' value={demande.Delai_Reception}
              onChange={handleChange} />
                 <select name="JustifDemande" className='list' onChange={handleChange}>
                      <option value="someOption" className='placeholderX' disabled selected>Justificatif de la demande</option>
                      <option value="someOption" className='option'>Dépense Budgétisée</option>
                      <option value="otherOption" className='option'>Dépense Non Budgétisée</option>
                     
                </select>
                 <textarea name="PropositionFour" placeholder='Proposition fournisseur' value={demande.PropositionFour}
              onChange={handleChange}></textarea>
                 <textarea name='DesignationDedepense' placeholder='Designation de la dépense' value={demande.DesignationDedepense}
              onChange={handleChange}></textarea>
                 <textarea  name="Justifdepense" placeholder='justification de la dépense'  value={demande.Justifdepense}
              onChange={handleChange}></textarea>
                 <input type='submit' value="Suivant" className='suivantB' onClick={handleSubmit} />
        </div>
        
      
    </div>
    <span className='littletitle'>Hors Stock</span>
    </div>
    </div>
  )
}

export default Add_DAD_Hors_Stock
