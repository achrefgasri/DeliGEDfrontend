import { createBrowserRouter } from "react-router-dom";
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import pageNotFound from "../Pages/Pageerror";
import PageNotFound from "../Pages/Pageerror";
import LoginForm from "../Components/LoginForm";
import Add_DAD_Hors_Stock from "../Add_DAD_Hors_Stock/Add_DAD_Hors_Stock";
import Add_DAD_Hors_Stock_2 from "../Add_DAD_Hors_Stock/Add_DAD_Hors_Stock_2";
import Login from "../Components/Login";
import Add_DAD_Investissement_2 from "../Add_DAD_Investissement/Add_DAD_Investissement_2";
import Add_DAD_Investissement from "../Add_DAD_Investissement/Add_DAD_Investissement";
import ExodUS_Home from "../ExodUS Home/ExodUS_Home";
import Pro_NavBar from "../ExodUS Home/Pro_NavBar";
import Normal_NavBar from "../ExodUS Home/Normal_NavBar";
import DAD from "../ExodUS Home/DAD";
import DAD_Cycle from "../ExodUS Home/DAD_Cycle";
import Secondary_Functions from "../ExodUS Home/Secondary_Functions";
import ExodUS_NHome from "../ExodUS Home/ExodUS_NHome";
import Go_Back_NavBar from "../ExodUS Home/Go_Back_NavBar";
import LoginX from "../srcX/PagesX/LoginX";
import Navbar_For_Super_Admin from "../srcX/ComponentX/Navbar_For_Super_Admin";
import Home_Super_Admin from "../srcX/PagesX/Home_Super_Admin";
import Admin_Side from "../srcX/ComponentX/Admin_Side";
import Content_Side from "../srcX/ComponentX/Content_Side";
import SideBar from "../srcX/ComponentX/SideBar";
import Hors_Stock_tab from "../srcX/ComponentX/Hors_Stock_tab";
import Investissement_tab from "../srcX/ComponentX/Investissement_tab";
import Nouvelles_Taches_De_Validation from "../srcX/ComponentX/Nouvelles_Taches_De_Validation";
import Card_Content from "../srcX/ComponentX/Card_Content";
import Modifier_Hors_Stock from "../srcX/ComponentX/Modifier_Hors_Stock";
import Modifier_Investissement from "../srcX/ComponentX/Modifier_Investissement";
import Processus_elaboration from "../srcX/ComponentX/Processus_elaboration";
import Mes_Demandes from "../srcX/ComponentX/Mes_Demandes";
import Mine_Content from "../srcX/ComponentX/Mine_Content";
import Total_Demandes from "../srcX/ComponentX/Total_Demandes";
import Page_des_evenements from "../srcX/ComponentX/Page_des_evenements";
import Journal_des_evenements from "../srcX/ComponentX/Journal_des_evenements";
import Event_Card from "../srcX/ComponentX/Event_Card";
import Propos from "../srcX/PagesX/Propos";
import Non_Valide from "../srcX/ComponentX/Non_Valide";
import ExodUS_Pro_Vision from "../srcX/PagesX/ExodUS_Pro_Vision";
import Admin_Messaging from "../srcX/ComponentX/Admin_Messaging";
import Navbar_For_Normal_User from "../srcX/ComponentX/Navbar_For_Normal_User";
import User_Side from "../srcX/ComponentX/User_Side";
import SideBar_User from "../srcX/ComponentX/SideBar_User";
import Card_View from "../srcX/ComponentX/Card_View";
import Home_Normal_User from "../srcX/PagesX/Home_Normal_User";
import Content_Side_2 from "../srcX/ComponentX/Content_Side_2";
import Home_Validateur from "../srcX/PagesX/Home_Validateur";
import Content_Side_3 from "../srcX/ComponentX/Content_Side_3";
import Validateur_Side from "../srcX/ComponentX/Validateur_Side";
import SideBar_Validateur from "../srcX/ComponentX/SideBar_Validateur";
import Hors_Stock_tab_V from "../srcX/ComponentX/Hors_Stock_tab_V";
import Investissement_tab_V from "../srcX/ComponentX/Investissement_tab_V";
import ExodUS_Pro_Vision_G_Accounts from "../srcX/PagesX/ExodUS_Pro_Vision_G_Accounts";
import ExodUS_Pro_Vision_G_Roles from "../srcX/PagesX/ExodUS_Pro_Vision_G_Roles";
import ExodUS_Pro_Vision_G_Data from "../srcX/PagesX/ExodUS_Pro_Vision_G_Data";
import Accept_HS from "../srcX/ComponentX/Accept_HS";
import Refuse_Reason_HS from "../srcX/ComponentX/Refuse_Reason_HS";
import Accept_I from "../srcX/ComponentX/Accept_I";
import Refuse_Reason_I from "../srcX/ComponentX/Refuse_Reason_I";
import Home_BO from "../srcX/PagesX/Home_BO";
import Home_Validateur_General from "../srcX/PagesX/Home_Validateur_General";
import Content_Side_4 from "../srcX/ComponentX/Content_Side_4";
import Validateur_Side_General from "../srcX/ComponentX/Validateur_Side_General";
import See_Factures from "../srcX/ComponentX/See_Factures";
import Facture_Card from "../srcX/ComponentX/Facture_Card";
import SideBar_Validateur_General from "../srcX/ComponentX/SideBar_Validateur_General";
import Card_Content_For_Facture from "../srcX/ComponentX/Card_Content_For_Facture";
import Accept_Facture from "../srcX/ComponentX/Accept_Facture";
import Refuse_Reason_For_Facture from "../srcX/ComponentX/Refuse_Reason_For_Facture";




















const router = createBrowserRouter([
    // {path: "/login",
    //  element : <Login/>
    // },
  //   {path : "/" , element :<LoginForm/>,
  //   errorElement: <PageNotFound/>
  // },
    {path: "/register",
     element : <Register/>
    },
    {
      path : "/Add_DAD_Hors_Stock", element:<Add_DAD_Hors_Stock/>
    },
    {
      path : "/Add_DAD_Hors_Stock_2", element:<Add_DAD_Hors_Stock_2/>
    },
    {
      path : "/Login", element:<Login/>
    }
    ,
    {
      path : "/Add_DAD_Investissement", element:<Add_DAD_Investissement/>
    },
    {
      path : "/Add_DAD_Investissement_2", element:<Add_DAD_Investissement_2/>
    },
    {
      path : "/ExodUS_Home", element:<ExodUS_Home/>
    },
    {
      path : "/Pro_NavBar", element:<Pro_NavBar/>
    },
    {
      path : "/Normal_NavBar", element:<Normal_NavBar/>
    },
    {
      path : "/DAD", element:<DAD/>
    },
    {
      path : "/DAD_Cycle", element:<DAD_Cycle/>
    }
    ,
    {
      path : "/Secondary_Functions", element:<Secondary_Functions/>
    },
    {
      path : "/ExodUS_NHome", element:<ExodUS_NHome/>
    },
    {
      path : "/Go_Back_NavBar", element:<Go_Back_NavBar/>
    }
    ,
    {
      path : "/ExodUS_Pro_Vision", element:<ExodUS_Pro_Vision/>
    },





    {
      path : "/", element:<LoginX/>
    },
    {
      path : "/Navbar_For_Super_Admin", element:<Navbar_For_Super_Admin/>
    },
    {
      path : "/Home_Super_Admin", element:<Home_Super_Admin/>
    },
    {
      path : "/Admin_Side", element:<Admin_Side/>
    },
    {
      path : "/Content_Side", element:<Content_Side/>
    },
    {
      path : "/SideBar", element:<SideBar/>
    },
    {
      path : "/Hors_Stock_tab", element:<Hors_Stock_tab/>
    },
    {
      path : "/Investissement_tab", element:<Investissement_tab/>
    },
    {
      path : "/Nouvelles_Taches_De_Validation", element:<Nouvelles_Taches_De_Validation/>
    },
    {
      path : "/Card_Content", element:<Card_Content/>
    },
    {
      path : "/Modifier_Hors_Stock", element:<Modifier_Hors_Stock/>
    }
    ,
    {
      path : "/Modifier_Investissement", element:<Modifier_Investissement/>
    }
    ,
    {
      path : "/Processus_elaboration", element:<Processus_elaboration/>
    }
    ,
    {
      path : "/Mes_Demandes", element:<Mes_Demandes/>
    },
    {
      path : "/Mine_Content", element:<Mine_Content/>
    },
    {
      path : "/Total_Demandes", element:<Total_Demandes/>
    }
    ,
    {
      path : "/Page_des_evenements", element:<Page_des_evenements/>
    }
    ,
    {
      path : "/Journal_des_evenements", element:<Journal_des_evenements/>
    }
    ,
    {
      path : "/Event_Card", element:<Event_Card/>
    }
    ,
    {
      path : "/Propos", element:<Propos/>
    }
    ,
    {
      path : "/Non_Valide", element:<Non_Valide/>
    }
    ,
    {
      path : "/ExodUS_Pro_Vision", element:<ExodUS_Pro_Vision/>
    }
    ,
    {
      path : "/Admin_Messaging", element:<Admin_Messaging/>
    }
    ,
    {
      path : "/Navbar_For_Normal_User", element:<Navbar_For_Normal_User/>
    }
    ,
    {
      path : "/User_Side", element:<User_Side
      />
    }
    ,
    {
      path : "/SideBar_User", element:<SideBar_User/>
    }
    ,
    {
      path : "/Card_View", element:<Card_View/>
    }
    ,
    {
      path : "/Home_Normal_User", element:<Home_Normal_User/>
    }
    ,
    {
      path : "/Content_Side_2", element:<Content_Side_2/>
    }
    ,
    {
      path : "/Home_Validateur", element:<Home_Validateur/>
    }
    ,
    {
      path : "/Content_Side_3", element:<Content_Side_3/>
    }
    ,
    {
      path : "/Validateur_Side", element:<Validateur_Side/>
    }
    ,
    {
      path : "/SideBar_Validateur", element:<SideBar_Validateur/>
    }
    ,
    {
      path : "/Hors_Stock_tab_V", element:<Hors_Stock_tab_V/>
    }
    ,
    {
      path : "/Investissement_tab_V", element:<Investissement_tab_V/>
    }
    ,
    {
      path : "/ExodUS_Pro_Vision_G_Accounts", element:<ExodUS_Pro_Vision_G_Accounts/>
    }
    ,
    {
      path : "/ExodUS_Pro_Vision_G_Roles", element:<ExodUS_Pro_Vision_G_Roles/>
    }
    ,
    {
      path : "/ExodUS_Pro_Vision_G_Data", element:<ExodUS_Pro_Vision_G_Data/>
    }
    ,
    {
      path : "/Accept_HS", element:<Accept_HS/>
    }
    ,
    {
      path : "/Refuse_Reason_HS", element:<Refuse_Reason_HS/>
    }
    ,
    {
      path : "/Accept_I", element:<Accept_I/>
    }
    ,
    {
      path : "/Refuse_Reason_I", element:<Refuse_Reason_I/>
    }
    ,
    {
      path : "/Home_BO", element:<Home_BO/>
    }
    ,
    {
      path : "/Home_Validateur_General", element:<Home_Validateur_General/>
    }
    ,
    {
      path : "/SideBar_Validateur_General", element:<SideBar_Validateur_General/>
    }
    ,
    {
      path : "/Content_Side_4", element:<Content_Side_4/>
    }
    ,
    {
      path : "/Validateur_Side_General", element:<Validateur_Side_General/>
    }
    ,
    {
      path : "/See_Factures", element:<See_Factures/>
    }
    ,
    {
      path : "/Facture_Card", element:<Facture_Card/>
    }
    ,
    {
      path : "/Card_Content_For_Facture", element:<Card_Content_For_Facture/>
    }
    ,
    {
      path : "/Accept_Facture", element:<Accept_Facture/>
    }
    ,
    {
      path : "/Refuse_Reason_For_Facture", element:<Refuse_Reason_For_Facture/>
    }



























































 


  ])

  export default router;