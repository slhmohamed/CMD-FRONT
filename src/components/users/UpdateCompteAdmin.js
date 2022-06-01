import React, { useState,useEffect } from 'react'
import axios from "axios";
import Header from "../Header";
import Sidebar from "../sidebar"; 
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { useHistory } from "react-router-dom";
function UpdareCompteAdmin() {
const [username,setUsername]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [tel,setTel]=useState('')
const [adress,setAdress]=useState('')
const { id } = useParams();
const getAdmin = async () => {
    
    axios.get('http://localhost:8080/api/user/getSingleAdmin/' + id).then((res) => {
      console.log(res.data);
      setUsername(res.data.username)
      setEmail(res.data.email)
      setTel(res.data.tel)
      setAdress(res.data.adress)

    
    }).catch(err => {
      console.log(err)
    })
  };
const updateAdmin=(e)=>{
    
  e.preventDefault();
  let data={
  username: username,
  email:  email,
  tel:tel,
 adress:adress,
  password: password
  }
  console.log(data);
  axios.put('http://localhost:8080/api/user/updateAdmin/'+id,data).then((res)=>{
    toast.success('Modifié avec succès !')   
    }).then((response)=>{
        console.log(response); 
    })
}
useEffect(() => {
    getAdmin()
  }, []);

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
         <div
        className="card shadow mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">Modifier un compte </h4>
          <form>
          <div className="mb-3">
              <input
                className="form-control"
                placeholder="Nom"
                type="text"
                value={username}
                onChange={(e)=>{setUsername(e.target.value )}}
                
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e)=>{setEmail(e.target.value )}}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Tel"
                type="text"
                  value={tel}
                onChange={(e)=>{setTel(e.target.value )}}
                
              />
            </div>
           
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Adresse"
                type="tetx"
                value={adress}
                onChange={(e)=>{setAdress(e.target.value )}}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Mot de passe"
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value )}}
              />
            </div>

            <div className="mb-4">
              <button onClick={updateAdmin} type="submit" className="btn btn-primary w-100 sub">
                Modifier compte
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/> 
      </main>
    </>
 
  )
}

export default UpdareCompteAdmin