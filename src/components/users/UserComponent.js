import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import './User.css'
const UserComponent = () => {
  const [adminList,setAdminList]=useState([]);

 
  const getAdmin=()=>{
    axios.get('http://localhost:8080/api/user/getAllAdmin').then((res)=>{
      setAdminList(res.data);
    }).catch(err=>{
      console.log(err)
    });
  }
  useEffect(()=>{
    getAdmin();
  },[])
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Liste des admin</h2>
        <div>
          <Link to="/registre" className="btn btn-primary">
            <i className="material-icons md-plus"></i> Nouveau Admin
          </Link>
        </div>
      </div>

      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
                <option>Show all</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status: all</option>
                <option>Active only</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </header>

        {/* Card */}
        <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom </th>
          <th scope="col">Email</th>
          <th scope="col">Tél</th>
           <th>actions</th>
        </tr>
      </thead>
      <tbody>
      {adminList.map( admin=>{
                return (
        <tr>
          <td>
            <b>{admin.id}</b>
          </td>
          <td>{admin.username}</td>
         <td>{admin.email}</td>
         
          <td>
            {admin.tel}
          </td>
        
          <td>
            <button    className="btn btn-success up" >modifier</button>
            <button   className="btn btn-danger delete">supprimer</button>
          </td>
          
        </tr> )})}
     
               
      </tbody>
    </table>
      
      </div>
    </section>
  );
};

export default UserComponent;
