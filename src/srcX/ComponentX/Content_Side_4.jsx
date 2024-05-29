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
import Hors_Stock_tab_V from './Hors_Stock_tab_V'
import Investissement_tab_V from './Investissement_tab_V'
import Accept_HS from './Accept_HS'
import Refuse_Reason_HS from './Refuse_Reason_HS'
import Accept_I from './Accept_I'
import Refuse_Reason_I from './Refuse_Reason_I'
import See_Factures from './See_Factures'
import SideBar_Validateur_General from './SideBar_Validateur_General'
import Accept_Facture from './Accept_Facture'
import Refuse_Reason_For_Facture from './Refuse_Reason_For_Facture'


const Content_Side_4 = () => {
  return (
    <div className='contentside'>
        <SideBar_Validateur_General/>
        <div className="block2"></div>

            {/* <Nouvelles_Taches_De_Validation /> */}
            {/* <Accept_Facture /> */}
            {/* <Refuse_Reason_For_Facture /> */}
            {/* <Non_Valide /> */}
            <See_Factures /> 
            {/* <Card_View /> */}
            {/* <Mes_Demandes /> */}
            {/* <Total_Demandes /> */}
            {/* <Journal_des_evenements /> */}
            {/* <Propos /> */}
            {/*<Accept_HS /> */}
            {/* <Refuse_Reason_HS /> */}
            {/* <Accept_I /> */}
            {/* <Refuse_Reason_I /> */}
            {/* <Processus_elaboration /> */}
      
    </div>
  )
}

export default Content_Side_4
