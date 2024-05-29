import React from 'react';
import '../CssX/Admin_Side_Y.css';
import Amal from '../AssetsX/Images/Profiles/Amal.jpg';
import Achref from '../AssetsX/Images/Profiles/Achref.jpg';
import Samar from '../AssetsX/Images/Profiles/Samar.jpg';
import Ahmed from '../AssetsX/Images/Profiles/Ahmed.jpg';
import Unknow from '../AssetsX/Images/Profiles/Unknow.png';
import Admin from '../AssetsX/Images/Profiles/Admin.jpg';


const Admin_Side = () => {
  return (
    <div className="adminsides">
      <div className="traitement">

        <div className="traiting">Espace de Traitement</div>

        <div className="messagelist">


          <div className="messagerecu">
            <div className="imageprofile">
              <img src={Amal} alt="image here" className="theimage" />
            </div>
            <div className="nameandcontent">
              <div className="nameE">Amal Hannachi</div>
              <div className="contentT">
                J'ai un problème pour envoyer des demandes
              </div>
            </div>
          </div>

          <div className="messagerecu">
            <div className="imageprofile">
              <img src={Achref} alt="image here" className="theimage" />
            </div>
            <div className="nameandcontent">
              <div className="nameE">Amal Hannachi</div>
              <div className="contentT">
              J'ai du mal a suivre les demandes
              </div>
            </div>
          </div>

          <div className="messagerecu">
            <div className="imageprofile">
              <img src={Ahmed} alt="image here" className="theimage" />
            </div>
            <div className="nameandcontent">
              <div className="nameE">Amal Hannachi</div>
              <div className="contentT">
              Pouvez-vous vérifier la commande 658
              </div>
            </div>
          </div>

          <div className="messagerecu">
            <div className="imageprofile">
              <img src={Samar} alt="image here" className="theimage" />
            </div>
            <div className="nameandcontent">
              <div className="nameE">Amal Hannachi</div>
              <div className="contentT">
              Je ne peux pas voir l'historique de mes demandes
              </div>
            </div>
          </div>

          <div className="messagerecu">
            <div className="imageprofile">
              <img src={Unknow} alt="image here" className="theimage" />
            </div>
            <div className="nameandcontent">
              <div className="nameE">Unknow</div>
              <div className="contentT">
              Message
              </div>
            </div>
          </div>

          <div className="messagerecu">
            <div className="imageprofile">
              <img src={Unknow} alt="image here" className="theimage" />
            </div>
            <div className="nameandcontent">
              <div className="nameE">Unknow</div>
              <div className="contentT">
              Message
              </div>
            </div>
          </div>

          <div className="messagerecu">
            <div className="imageprofile">
              <img src={Unknow} alt="image here" className="theimage" />
            </div>
            <div className="nameandcontent">
              <div className="nameE">Unknow</div>
              <div className="contentT">
              Message
              </div>
            </div>
          </div>

          <div className="messagerecu">
            <div className="imageprofile">
              <img src={Unknow} alt="image here" className="theimage" />
            </div>
            <div className="nameandcontent">
              <div className="nameE">Unknow</div>
              <div className="contentT">
              Message
              </div>
            </div>
          </div>


        </div>

      </div>

      <div className="profile">

            <div className="UserProfile">
              <img src={Admin} alt="image here" className="userimage" />
            </div>
            <div className="userandrole">
              <div className="user">Gannouni Adam</div>
              <div className="role">
              Admin
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

export default Admin_Side;
