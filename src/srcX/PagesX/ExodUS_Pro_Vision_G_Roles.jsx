import React from 'react'
import '../CssX/ExodUS_Pro_Vision_Y.css'

const ExodUS_Pro_Vision_G_Roles = () => {
  return (
    <div className='exodus'>
        
        <div className="ProDo">
          <div className="ExodUSpRO">DeliGED Ultra Vision - Gerer Les Roles</div>
          <div className="ExodUSProDisplay">



          <div className="AM">
                <div className="the_top_title">Creation Du Role</div>
               
                    <form className='the_form'> 
                    <input type='text' placeholder='Nom Du Role' className='cform' />
                    <select  className='cformEE'>
                      <option value="someOption" className='placeholderX' disabled selected>Departement</option>
                      <option value="someOption">Validateur</option>
                      </select>
                    
                    <div className="checkboxX">
                    <input type="checkbox"  />
                    <label>Voir Tout Les Demandes</label>
                    </div>

                    <div className="checkboxX">
                    <input type="checkbox"  />
                    <label>Valider Les Demandes</label>
                    </div>

                    <div className="checkboxX">
                    <input type="checkbox"  />
                    <label>Lancer Des Factures</label>
                    </div>

          
                    
                   
                    <input type='submit' className='cformA' value='Ajouter' />
                    <input type='submit'  className='cformA' value='Confirmer' />
                    </form>
              
            </div>
            <div className="PM">
            <div className="the_top_title">Liste Des Roles</div>
                <table border='1px' width='50%'>
                    <tr>
                        <th>Roles</th> <th>Les Effets</th>
                    </tr>
                    <tr>
                        <th></th> 
                        
                        
                        <th>
                            <div className="thhh">
                            <input type='submit' value='Modifier' className='effectZ' />
                            <input type='submit' value='Supprimer' className='effectZR' />
                            </div>
                            
                        </th>
                    </tr>
                </table>
            </div>

         

          </div>
        </div>
      
    </div>
  )
}

export default ExodUS_Pro_Vision_G_Roles
