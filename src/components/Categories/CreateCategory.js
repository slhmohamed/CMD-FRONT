import React from "react";
import { useState } from "react";
import axios from "axios";
import './Catgory.css'
const CreateCategory = () => {
  const [nom,setNom]=useState("");
  const [description,setDescription]=useState("");
 
 
 
 
  const addCategorie=()=>{
    
    axios.post('http://localhost:4100/category',{
      nom:nom,
      description:description
    }).then(()=>{
      console.log("succes");
    });
  };
  
  
  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="nom" className="form-label">
            nom
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
          <button onClick={addCategorie}  className="btn btn-dark py-3   ">Create category</button>
        
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
