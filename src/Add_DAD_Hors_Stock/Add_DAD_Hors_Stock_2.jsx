import React , { useState } from 'react'
import './Add_DAD_Hors_Stock.css'
import UserService from '../Services/UserService'
import { useNavigate } from 'react-router-dom';

const Add_DAD_Hors_Stock_2 = () => {
  const navigate = useNavigate();
  const [demande, setDemande] = useState({
    Aritcle: '',
    description1: '',
    description2: '',  
  //  JustifDemande: '',
    quantite: '',
    prix_unitaire: '',
    center_count: '',
    typeaxe1: '',
    typeaxe2: '',
    typeanalyse2: '',
    typeanalyse1: '',
    objetdecompte: '',

  });
  const handleChange = (e) => {
    setDemande({ ...demande, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the service function to add a demand
      const response = await UserService.adddetailDemande(demande);
      console.log(response); // Handle success message or redirect
      navigate("/Home_Super_Admin")
    } catch (error) {
      console.error(error); // Handle error
    }
  };
  return (
    <div>
        <div className='container'>
          <div className='glassXX'>
        <div className='header'>
        <div className='text2'>Plus Des Informations</div>
        </div>
        <div className='inputs'>
        <select name="Aritcle" className='list' onChange={handleChange}>
                      <option value="someOption" className='placeholderX' disabled selected>Article</option>
                      <option value="someOption" className='option'>hscln0033 - Cautionnement STEG</option>
                      <option value="otherOption" className='option'>hscln0002 - Carburants</option>     
                      <option value="otherOption" className='option'>Ajouter</option>                      
                </select>
                 <input type='text' name='quantite' placeholder='Quantité' value={demande.quantite}
              onChange={handleChange}/>
                 <input type='text' name='prix_unitaire' placeholder='Prix Unitaire' value={demande.prix_unitaire}
              onChange={handleChange} />
                 <textarea placeholder='Description 1' name='description1' value={demande.description1}
              onChange={handleChange}></textarea>
                 <textarea placeholder='Description 2' name='description2' value={demande.description2}
              onChange={handleChange}></textarea>
                 <input type='text' placeholder='Type Axe 1' name='typeaxe1'  value={demande.typeaxe1}
              onChange={handleChange}/>
                 <select name="typeanalyse1" className='list' onChange={handleChange}>
                      <option value="someOption" className='placeholderX' disabled selected>Axe Analyse 1</option>
                      <option value="someOption" className='option'>05ADAI00 - Direction Audit interne</option>
                      <option value="otherOption" className='option'>Ajouter</option>                     
                </select>
                <input type='text' name='typeaxe2' placeholder='Type Axe 2' value={demande.typeaxe2}
              onChange={handleChange} />
                 <select name="typeanalyse2" className='list' onChange={handleChange}>
                      <option value="someOption" className='placeholderX' disabled selected>Axe Analyse 2</option>
                      <option value="someOption" className='option'>hscln0033 - Cautionnement STEG</option>
                      <option value="otherOption" className='option'>Ajouter</option>                     
                </select>
                <input type='text' name="center_count" placeholder='Centre de Cout' value={demande.center_count}
              onChange={handleChange}/>
                <input type='text'  name="objetdecompte" placeholder='Objet de Compte' value={demande.objetdecompte}
              onChange={handleChange} />
                
                 <input type='submit' value="Suivant" className='suivantB' onClick={handleSubmit}/>
        </div>
        
      
    </div>
    <span className='littletitle'>Hors Stock</span>
    </div>
    </div>
  )
}

export default Add_DAD_Hors_Stock_2
