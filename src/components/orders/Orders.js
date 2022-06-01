import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Moment from 'react-moment';


const Orders = () => {
  const [commandeList,setCommandeList]=useState([]);


  const getCommande=()=>{
    axios.get('http://localhost:8080/api/order/allOrder').then((res)=>{
      console.log(res.data);
      setCommandeList(res.data);
    }).catch(err=>{
      console.log(err)
    });
  }
  useEffect(()=>{
    getCommande();
  },[])
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Numero</th>
          <th scope="col">Adresse </th>
          <th scope="col">Date</th>
          <th scope="col">Télephone</th>
          <th>Status</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
      {commandeList.map( commande=>{
                return (
        <tr>
          <td>
            <b>{commande.id}</b>
          </td>
          <td>{commande.users.adress}</td>
         <td><Moment format='MMMM Do YYYY, h:mm  '>{commande.createdAt}</Moment></td>
          <td>{commande.users.tel} </td>
          <td>
            <span className="badge btn-success">{commande.status}</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr> )})}
        {/* Not paid Not delivered */}
               
      </tbody>
    </table>
  );
};

export default Orders;
