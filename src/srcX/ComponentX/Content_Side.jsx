import React from 'react'
import SideBar from './SideBar'
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
import See_Factures from './See_Factures'




const Content_Side = () => {
  return (
    <div className="contentside">
            <SideBar />
            <div className="block2"></div>






             <Hors_Stock_tab />  
            {/* <Investissement_tab /> */}
            {/* <See_Factures />  */}
            {/* <Card_View /> */}
            {/* <Nouvelles_Taches_De_Validation /> */} 
            {/* <Modifier_Hors_Stock />  */}
            {/* <Modifier_Investissement /> */}
            {/* <Processus_elaboration /> */}
            {/* <Mes_Demandes /> */}
            {/* <Non_Valide /> */} 
            {/* <Total_Demandes /> */}
            {/* <Page_des_evenements /> */}
            {/* <Journal_des_evenements /> */}
            {/* <Propos />  */}
            {/* <Admin_Messaging /> */}

        </div>
  )
}

export default Content_Side
