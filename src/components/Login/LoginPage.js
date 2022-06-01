import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import './Login.css';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from "react-router-dom";


 const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const history = useHistory();
    const login=(e)=>{
        e.preventDefault();
        let data={
        email:  email,
        password: password
        }
        axios.post('http://localhost:8080/api/auth/signin',data).then((res)=>{
            console.log(res.data.accessToken);
            localStorage.setItem('token',res.data.accessToken);
            history.push("/users");   
          }).catch((response)=>{
            toast.error("L’adresse e-mail ou le mot de passe que vous avez saisi(e) n’est pas associé(e) à un compte.")
          })
      }
      
    return (
     <div>
         <body className="body">
    
    <div className="containerr">
        <div className="forms">
            <div className="form login">
                <span className="title">Se connecter</span>

                <form action="#">
                    <div className="input-field">
                        <input type="text" placeholder="Email"  
                        onChange={(event)=> {
                            setEmail(event.target.value);
                          }}
                        
                        />
                        <i className="uil uil-envelope icon"></i>
                    </div>
                    <div className="input-field">
                        <input type="password" class="password" placeholder="Mot de passe"
                         onChange={(event)=> {
                            setPassword(event.target.value);
                          }}
                        
                        />
                        <i className="uil uil-lock icon"></i>
                     </div>

                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="logCheck"/>
                            <label for="logCheck" className="text">Remember me</label>
                          
                        </div>
                        
                   
                    </div>

                    <div className="input-field button">
                        <button onClick={login}   className='button' type="button" value="Login Now">Se connecter</button>
                    </div>
                </form>

                
            </div>

 
         
        </div>
    </div>

    

</body>
<Toaster
  position="top-right"
  reverseOrder={false}
/>
     </div>
    );
};

export default LoginPage;