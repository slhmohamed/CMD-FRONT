import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

import './Register.css'
 const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
 
    return (
     <div>
      <body className='body'>
    
    <div className="containerr">
        <div className="forms">
            <div className="form login">
                <span className="title">S’inscrire
</span>

                <form action="#">
                <div className="input-field">
                        <input type="password" class="password" placeholder="Username" />
                        <i className="uil uil-user"></i>
                     </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email"  />
                        <i className="uil uil-envelope icon"></i>
                    </div>
                    <div className="input-field">
                        <input type="password" class="password" placeholder="Mot de passe" />
                        <i className="uil uil-lock icon"></i>
                     </div>

                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="logCheck"/>
                            <label for="logCheck" className="text">Remember me</label>
                        </div>
                        
                   
                    </div>

                    <div className="input-field button">
                        <button className='button' type="button" value="">S’inscrire
</button>
                    </div>
                </form>

                <div className="login-signup">
                    <span class="text"> 
                        <a href="#" class="text signup-link"><Link to="/">J'ai déjà compte</Link></a>
                    </span>
                </div>
            </div>

 
         
        </div>
    </div>

    

</body>
     </div>
    );
};

export default RegisterPage;