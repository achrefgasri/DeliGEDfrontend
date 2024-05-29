import React from 'react'
import '../CssX/Investissement_Tab_Y.css';
import Add from '../AssetsX/Icons/Add.png';

const Investissement_tab = () => {
  return (
    <div className='Maindiv'>




       <div className="One">
        <div className="divTitle">
            Investissement
        </div>
        <div className="Squares">


        <div className="Square">
        
        <div className="toppart">

            <div className="numbero">15</div>

        </div>
        <div className="bottompart">

            <div className="bureauname">Chef Hiérarchique</div>

        </div>

        </div>


        <div className="Square">
        
        <div className="toppart">

            <div className="numbero">20</div>

        </div>
        <div className="bottompart">

            <div className="bureauname">Chef Hiérarchique</div>

        </div>

        </div>


        <div className="Square">
        
        <div className="toppart">

            <div className="numbero">05</div>

        </div>
        <div className="bottompart">

            <div className="bureauname">Chef Hiérarchique</div>

        </div>

        </div>


        <div className="Square">
        
        <div className="toppart">

            <div className="numbero">60</div>

        </div>
        <div className="bottompart">

            <div className="bureauname">Chef Hiérarchique</div>

        </div>

        </div>


        <div className="Square">
        
        <div className="toppart">

            <div className="numbero">33</div>

        </div>
        <div className="bottompart">

            <div className="bureauname">Chef Hiérarchique</div>

        </div>

        </div>

            


        </div>
       </div>



       <div className="One">
        <div className="divTitle">
            Categories - Investissement
        </div>
        <div className="Squares">


            <div className="radiusS">
                <div className="topp"><div className="noumo">500</div></div>
                <div className="bottomm">Nouvelles Taches De Validation</div>


            </div>


            <div className="radiusS">
                <div className="topp"><div className="noumo">130</div></div>
                <div className="bottomm">Mes Demandes</div>



            </div>


            <div className="radiusS">
                <div className="topp"><div className="noumo">003</div></div>
                <div className="bottomm">Non Valide</div>


            </div>


            

            
        </div>
       </div>










       <div className="Onei">
        <div className="capsule">
           <div className="first_title">Total - Investissement</div>
           <div className="block3"></div>
           <div className="big_number">6500</div>
        </div>


        <div className="addS">
            <div className="ajouterSs">
                <img src={Add} alt='add' className='Adddd' />
            </div>
        </div>
        
       </div>

      
    </div>
  )
}

export default Investissement_tab
