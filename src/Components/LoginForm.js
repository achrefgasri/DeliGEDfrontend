// src/components/LoginForm.js
import React ,{ useState }  from 'react';
import './LoginForms.css';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UserService from '../Services/UserService'


function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [errors , setErrors] =useState({
      firstname : "",
      lastname : "",
      email : "",
      password : "",
      bio : "",
      birthdate : "",
      // picture : picture
  })
  const formValidation = () =>{
      let status = true;
      let localErrors = {...errors
      }
      if(email == ""){
          localErrors.email= " email is Required";
          status = false;
      }
      if(password == "" || password.length<8){
          localErrors.password= " password is Required and min 8 caractere";
          status = false;
      }
      setErrors(localErrors)
      console.log(localErrors)
      return status;
      
  }   
  const signin = async(e)=>{
    e.preventDefault();
    console.log("hello")
    if(formValidation()){
        const data = {    
            email : email,
            password : password,
        }
        try{
            const responce = await UserService.signin(data)
            console.log("responce",responce)
            // save user data localstorage
            localStorage.setItem('user_data' ,JSON.stringify(responce.data.user) )
            localStorage.setItem('token', responce.data.token )
            
            toast.success("user login succsesfully")
            setEmail('')
            setPassword('')
           
            navigate("/home")
            // setPicture('')
        }catch(err){
            console.log(err)
            toast.error("failed while Signup ...")
            // redirection
        }
    }else{
        console.log("form invalid");
    }
}
  return (
    <div className="login-container">
       <Toaster/>
      <div className="login-form">
        <center>
        <h1>GED</h1>
          </center>
        <h3>Identifiez-vous pour accéder à votre instance</h3>
        <form onSubmit={signin}>
          <label htmlFor="identifiant">Identifiant</label>
          {/* <input type="text" id="identifiant" name="identifiant" required /> */}
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                               {
      errors.email != " " ? <div style={{textAlign:"left"}} className='valid'>
          {
              errors.email
          }
          </div> :""
  }
          <label htmlFor="password">Password</label>
          {/* <input type="password" id="password" name="password" required /> */}
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                {
       errors.password != " " ? <div style={{textAlign:"left"}} className='valid'>
           {
               errors.password
           }
           </div> :""
   }
          <button type="submit">Login</button>
        </form>
        <center>
          <p className="forgot-password">
        <Link to="/password">Forgot your password?</Link>
      </p>
      </center>
        
      </div>
   
    </div>
  );
}

export default LoginForm;
