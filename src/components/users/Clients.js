import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Clients = () => {
  const [clientList,setClientList]=useState([]);

 
  const getClients=()=>{
    axios.get('http://localhost:4100/clients').then((res)=>{
      setClientList(res.data);
    }).catch(err=>{
      console.log(err)
    });
  }
  useEffect(()=>{
    getClients();
  },[])
  const deleteClient=(id_client)=>{
    axios.delete(`http://localhost:4100/delete/${id_client}`).then((response)=>{
      setClientList(clientList.filter((client)=>{
        return client.id_client!=id_client
      }))
    });
  }


  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
        <div>
          <Link to="/registre" className="btn btn-primary">
            <i className="material-icons md-plus"></i> Create new
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
        <div className="card-body">
        <table className="table">
      <thead>
        <tr>
          <th scope="col">id client </th>
          <th scope="col">nom </th>
          <th scope="col">prenom</th>
          <th scope="col">date de naissance </th>
          <th scope="col">email</th>
          <th  scope="col" >id_compte</th>
          <th>actions</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
      {clientList.map( client=>{
                return (
        <tr>
          <td>
            <b>{client.id_client}</b>
          </td>
          <td>{client.nom}</td>
         <td>{client.prenom}</td>
          <td>{client.date_naiss} </td>
          <td>
            {client.email}
          </td>
          <td>
           {client.id_compte}
          </td>
          <td>
            <button  className="btn btn-success" >modifier</button>
          </td>
          <td><button onClick={()=>deleteClient(client.id_client)} className="btn btn-danger">supprimer</button></td>
        </tr> )})}
     
               
      </tbody>
    </table>
         
          
        </div>
      </div>
     
    </section>
  );
};

export default Clients;
