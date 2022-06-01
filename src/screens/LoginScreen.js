import React, { useState } from "react";
import axios from "axios";
const Login = () => {
 
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [loginStatus,setLoginStatus]=useState("");
 const login=()=>{
  axios.post('http://localhost:4100/login',{
      email:email,
      password:password
  }).then((response)=>{
    if(response.data.message){
      setLoginStatus(response.data.message)
    }else{
      setLoginStatus(response.data[0].email)
    }
      
  })
}

  return (
    <>
      
     
      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">connexion</h4>
          <form>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                onChange={(e)=>{setEmail(e.target.value )}}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                onChange={(e)=>{setPassword(e.target.value )}}
              />
            </div>

            <div className="mb-4">
              <button  onClick={login} type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1>{loginStatus}</h1>
    </>
  );
};

export default Login;
