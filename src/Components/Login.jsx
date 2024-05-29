import React from 'react'
import './LoginForms.css';

const Login = () => {
  return (
    <div>
        <div className='container'>
          <div className='glassL'>
        <div className='header'>
        <div className='ExodUS'>ExodUS</div>
        </div>
        <div className='inputsx'>
                 <input type='text' placeholder='Identifiant' className='tt' />
                 <input type='text' placeholder='Mot de passe' className='tt' />
                 <input type='submit' value="LogIn" className='next' />
                 <div className='forget'>Mot de passe oublié</div>
        </div>
        
      
    </div>
    </div>
    </div>
  )
}

export default Login
