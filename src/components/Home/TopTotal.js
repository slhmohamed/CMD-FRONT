import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
const TopTotal = () => {
  const [produitList,setProduitList]=useState([]);


  const getProduct=()=>{
    axios.get('http://localhost:4100/products').then((res)=>{
      setProduitList(res.data);
    }).catch(err=>{
      console.log(err)
    });
  }
  useEffect(()=>{
    getProduct();
  },[])
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-usd-circle"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Sales</h6> <span>$22,678</span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-success">
              <i className="text-success fas fa-bags-shopping"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Orders</h6>
              <span>130</span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-warning">
              <i className="text-warning fas fa-shopping-basket"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Products</h6>
              {produitList.map(product =>{
                return (<span>{product.id_produit}</span>)})}
              
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;
