import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Catgory.css'
import Header from "../Header";
import Sidebar from "../sidebar";
import toast, { Toaster } from 'react-hot-toast';

const CategoriesTable = () => {
  const [categorieList,setCategorieList]=useState([]);
 
 
  const [name,setNom]=useState("");
  const [description,setDescription]=useState("");

  const getCategorie=async()=>{
    axios.get('http://localhost:8080/api/category/allCategory').then((res)=>{
    setCategorieList(res.data);
  }).catch(err=>{
    console.log(err)
  })};
  const addCategorie=async(e)=>{
    e.preventDefault();
    let data={
      name:name,
      description:description
    }
    console.log(data);
    axios.post('http://localhost:8080/api/category/addCategory',data).then((res)=>{
      toast.success('Ajouté avec succès !')   
      getCategorie()
  }).catch(err=>{
    console.log(err)
  })};
  useEffect(()=>{
    getCategorie()
    },[]);
  
 {/*} const updateCategorie=(id_categorie)=>{
    axios.put('http://localhost:4100/update'),{nom:nom,id_categorie:id_categorie}.then(
      (response)=>{
        alert("update");
      }
    )
  }*/}
  const deleteCategorie=(id_categorie)=>{
    axios.delete(`http://localhost:8080/api/category/deleteCategory/${id_categorie}`).then((response)=>{
      toast.success('Supprimé avec succès !')     
    getCategorie()
    });
  }

  
  return (
    <>
    <Sidebar />
    <main className="main-wrap">
      <Header />
  
 
    <div className="row"> 
    <div className="col-md-12 col-lg-4">
    <form>
      <div className="mb-4">
        <label htmlFor="nom" className="form-label">
          Nom
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="form-control py-3"
          onChange={(event)=> {
            setNom(event.target.value);
           
          }}
        />
      </div>
      
      <div className="mb-4">
        <label className="form-label">Description</label>
        <textarea
          placeholder="Type here"
          className="form-control"
          rows="4"
          onChange={(event)=> {
            setDescription(event.target.value);
            
          }}
        ></textarea>
      </div>

      <div className="d-grid">
        <button onClick={addCategorie}   className="btn btn-dark py-3  buttonC ">Create category</button>
      
      </div>
    </form>
  </div>
    <div className="col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th >Action</th>
           </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          
        
              {categorieList.map(post =>{
                return (
                  
                  <tr>
                 <td><div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div></td>
                  <td >{post.id_categorie}</td>
                  <td >{post.name}</td>
                  <td >{post.description}</td>
   
                 <td>
                  <Link
        to={`/edit/${post.id}`}
        className="btn  btn-outline-success "
      >         Modifier    </Link>
       <button onClick={() => deleteCategorie(post.id)} className="btn btn-outline-danger butd"  >Supprimer</button>
                </td>
               
               
                  </tr>
                )
              })}
               
              
        </tbody>
      </table>
    </div>
    </div>
    <Toaster
  position="top-right"
  reverseOrder={false}
/> 
    </main>
  </>
  );
};

export default CategoriesTable;
