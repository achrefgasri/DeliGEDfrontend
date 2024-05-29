import React from 'react';
import '../CssX/Admin_Side_Y.css';
import Normal_User from '../AssetsX/Images/Profiles/Normal_User.jpg';


const Validateur_Side_General = () => {
  return (
    <div className="adminsides">
      <div className="traitement">

        <div className="traiting">Zone de demande</div>

        <div className="messagelist">

      <textarea className='contactta' placeholder='Se renseigner sur un problème'></textarea>
      <input type='submit' placeholder='Envoyer' className='Sendproblem' />
          


        </div>

      </div>

      <div className="profile">

            <div className="UserProfile">
              <img src={Normal_User} alt="image here" className="userimage" />
            </div>
            <div className="userandrole">
              <div className="user">Adem Gannouni</div>
              <div className="role">
              Validateur General
              </div>
            </div>
       

      </div>
      <div className="search">

      <div className="searchtitle">Rechercher</div>
      <div className="searchbar">
        <input type='text' placeholder='Tapez ici pour rechercher' className='searchhere'/>
      </div>


      </div>
    </div>
  );
};

export default Validateur_Side_General
