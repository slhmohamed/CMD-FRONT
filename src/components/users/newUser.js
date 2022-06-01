import React, { useState } from 'react'
import axios from "axios";
import Header from "../Header";
import Sidebar from "../sidebar"; 
import toast, { Toaster } from 'react-hot-toast';
function NewUser() {
const [username,setUsername]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [tel,setTel]=useState('')
const [adress,setAdress]=useState('')


const registre=(e)=>{
  e.preventDefault();
  let data={
   
  username: username,
  email:  email,
  tel:tel,
  role:"Admin",
  adress:adress,
  password: password
  }
  console.log(data);
  axios.post('http://localhost:8080/api/auth/register',data).then((res)=>{
    toast.success('Ajouté avec succès !')   
    }).catch((err)=>{
      toast.error('Email déja utlisé !')   
    })
}

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
          <h4 className="card-title mb-4 text-center">créer un compte </h4>
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
              <button onClick={registre} type="submit" className="btn btn-primary w-100 sub">
                Créer
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

export default NewUser