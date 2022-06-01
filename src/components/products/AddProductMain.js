import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import "./Product.css"
import toast, { Toaster } from 'react-hot-toast';
const AddProductMain = () => {
  const [nom,setNom]=useState("");
  const [prix_initial,setPrix_initial]=useState("");
  const [description,setDescription]=useState("");
  const [prix_en_promo,setPrix_en_promo]=useState("");
  const [prix_dachat,setPrix_dachat]=useState("");
  const [categoryId,setId_categorie]=useState("");
  const [quantite,setQuantité]=useState("");
   const [file, setFile] = useState();
   const [fileName, setFileName] = useState("");
  const [categorieListe,setCategorieListe]=useState([]);
 
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
    setFileName(e.target.files[0].name);
   };

  useEffect(()=>{
  axios.get('http://localhost:8080/api/category/allCategory').then((res)=>{
      setCategorieListe(res.data);
  }).catch(err=>{
    console.log(err)
  })
  })

  
  const addproduct=(e)=>{
    e.preventDefault();
    console.log(file);
    const formData = new FormData();
     formData.append("prix_initial", prix_initial);
    formData.append("prix_en_promo", prix_en_promo);
    formData.append("prix_dachat", prix_dachat);
    formData.append("nom", nom);
    formData.append("description", description);
    formData.append("categoryId", categoryId);
    formData.append("quantite",quantite);
    formData.append("file", file);
    formData.append("fileName", fileName);
 
    console.log(formData);
     axios.post('http://localhost:8080/api/product/addProduct',formData).then((res)=>{
      toast.success('Produit ajouté avec succes!')
    }).catch(err=>{
      console.log(err)
    })};

 

  return(
    <>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form>
          <div className="content-header">
            <Link  to="/products" className="btn btn-danger text-white">
              Tous les produits
            </Link>
            <h2 className="content-title">Ajouter Un Produit</h2>
           
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                     Nom 
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      onChange={(event)=> {
                        setNom(event.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Prix initial 
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      onChange={(event)=> {
                        setPrix_initial(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Prix en promo
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      onChange={(event)=> {
                        setPrix_en_promo(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Prix d'achat
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      onChange={(event)=> {
                        setPrix_dachat(event.target.value);
                      }}
                    />
                  </div>
               <div className="mb4"> 
                  <label htmlFor="product_categorie" className="form-label">
                      Selectionne categorie
                  </label><br></br>
                  
               
                
                  <select  className="form-label sel" onChange={(event)=> {
                        setId_categorie(event.target.value);
                      }} > 
    {categorieListe.map(cat =>
      <option value={cat.id}>{cat.name}</option>
    )}
  </select>
                
                </div>
             <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                     Quantité
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      onChange={(event)=> {
                        setQuantité(event.target.value);
                      }}
                    />
                    </div>
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      required
                      onChange={(event)=> {
                        setDescription(event.target.value);
                      }}
                    ></textarea>
                  </div>

                <div className="mb-4">
           

                    <label className="form-label">Images</label>
                   
                    <input className="form-control mt-3" type="file"  onChange={saveFile}   />
                  
       

                  </div>
                  <button className="btnA" onClick={addproduct}>Ajouter produit</button>
                </div>
              </div>
            </div>
          </div>
          <Toaster
  position="top-right"
  reverseOrder={false}
/> 
        </form>
      </section>

    </>
    
  );
};

export default AddProductMain ;
