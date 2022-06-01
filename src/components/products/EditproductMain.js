import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import "./Product.css"
const EditProductMain = () => {
 
  const [nom,setNom]=useState("");
  const [prix_initial,setprix_initial]=useState("");
   const [prix_en_promo,setPrix_en_promo]=useState("")
  const [prix_dachat,setPrix_dachat]=useState("") 
  const [description,setDescription]=useState("")
  const [quantite,setquantite]=useState("")
   const { id } = useParams();
   const history = useHistory();
  const getProduct=()=>{
    axios.get('http://localhost:8080/api/product/findOneProduct/'+id).then((res)=>{
       setNom(res.data.nom)
       setprix_initial(res.data.prix_initial)
       setPrix_en_promo(res.data.prix_en_promo)
       setPrix_dachat(res.data.prix_dachat)
       setDescription(res.data.description)
       setquantite(res.data.quantite)

 
    }).catch(err=>{
      console.log(err)
    });
  }
  useEffect(()=>{
    getProduct();
  },[])

const updateProduit=(id_produit)=>{
  let data={
    nom:nom,
   prix_initial :prix_initial,
   prix_en_promo:prix_en_promo,
  prix_dachat :prix_dachat,
  description :description,
  quantite:quantite
  }
  axios.put("http://localhost:8080/api/product/updateProduct/"+id,data).
  then((response)=>{
   toast.success('Modifié avec succès !')   
    history.push("/products");
  })
}
 
  return (
    <>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Listes des produits
            </Link>
            <h2 className="content-title">Modifier Produit</h2>
            <div>
             
            </div>
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
                      id="nom"
                      required
                      
                     value={nom}
                     onChange={(event)=> {
                      setNom(event.target.value);
                     
                    }}
                     
                      
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
                  value={prix_initial}
                      onChange={(event)=> {
                        setprix_initial(event.target.value);
                       
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
                      id="prix_en_promo"
                      value={prix_en_promo}
                      onChange={(event)=> {
                        setPrix_en_promo(event.target.value);
                       
                      }}
                      required
                     
                      
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
                      value={prix_dachat}
                      onChange={(event)=> {
                        setPrix_dachat(event.target.value);
                       
                      }}
                      required
                      
                     
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                        Quantite
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      value={quantite}
                      onChange={(event)=> {
                        setquantite(event.target.value);
                       
                      }}
                      required
                      
                     
                    />
                  </div>
 
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      value={description}
                      onChange={(event)=> {
                        setDescription(event.target.value);
                       
                      }}
                      required
                     
                      
                    ></textarea>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </form>
        <button onClick={()=>{updateProduit()}} type="submit" className="btn btn-primary btnup">
                update
              </button>
      </section>
      <Toaster
  position="top-right"
  reverseOrder={false}
/> 
    </>
  );
};

export default EditProductMain;
