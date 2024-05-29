import React from 'react'
import SideBar from './SideBar_User'
import '../CssX/Content_Side_Y.css'
import Hors_Stock_tab from './Hors_Stock_tab'
import Investissement_tab from './Investissement_tab'
import Nouvelles_Taches_De_Validation from './Nouvelles_Taches_De_Validation'
import Modifier_Hors_Stock from './Modifier_Hors_Stock'
import Modifier_Investissement from './Modifier_Investissement'
import Processus_elaboration from './Processus_elaboration'
import Mes_Demandes from './Mes_Demandes'
import Non_Valide from './Non_Valide'
import Total_Demandes from './Total_Demandes'
import Page_des_evenements from './Page_des_evenements'
import Journal_des_evenements from './Journal_des_evenements'
import Propos from '../PagesX/Propos'
import SideBar_User from './SideBar_User'
import Admin_Messaging from './Admin_Messaging'
import Card_View from './Card_View'


const Content_Side_2 = () => {
  return (
    <div className='contentside'>
        <SideBar_User />
        <div className="block2"></div>

            {/*<Hors_Stock_tab />  */}
            {/* <Investissement_tab /> */}
            {/* <Card_View /> */}
            <Mes_Demandes /> 
            {/* <Total_Demandes /> */}
            {/* <Journal_des_evenements /> */}
            {/* <Propos /> */}
             {/* <Modifier_Hors_Stock /> */} 
            {/* <Modifier_Investissement /> */}
            {/* <Processus_elaboration /> */}
      
    </div>
  )
}

export default Content_Side_2
