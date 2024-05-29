import React from 'react'
import '../CssX/Nouvelles_Taches_De_Validation_Y.css'
import Card_Content from './Card_Content';
import Mine_Content from './Mine_Content';
import text from '../AssetsX/Icons/text.png';
import user from '../AssetsX/Icons/user.png';
import Card_Content_For_Facture from './Card_Content_For_Facture';

const Nouvelles_Taches_De_Validation = () => {
  return (
    <div className='Maino'>
        <div className="topo">
        <div className="titl_cadre">
            <div className="titl">Nouvelles Taches De Validation</div>
        </div>

        </div>

        <div className="nouvelle">


        <Card_Content />
        <Mine_Content />
        <Card_Content_For_Facture />
      

        </div>
      
    </div>
  )
}

export default Nouvelles_Taches_De_Validation
