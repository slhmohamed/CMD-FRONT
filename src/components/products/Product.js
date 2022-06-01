import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Product.css"
import toast, { Toaster } from 'react-hot-toast';
const Product = (props) => {
  
  const [produitList,setProduitList]=useState([]);


  const getProduct=()=>{
    axios.get('http://localhost:8080/api/product/getAllProducts').then((res)=>{
      setProduitList(res.data);
    }).catch(err=>{
      console.log(err)
    });
  }
  useEffect(()=>{
    getProduct();
  },[])

 const deleteProduct=(id_produit)=>{
   axios.delete(`http://localhost:8080/api/product/deleteProduct/${id_produit}`).then((response)=>{
    toast.success('Supprimé avec succès !')

   getProduct();
   });
 }

  return (
    <>
      {/*<div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        
          
   {produitList.map(product =>
   <div className="card card-product-grid shadow-sm">
   <Link to="#" className="img-wrap">
   <img src={product.image} alt="Product" />
</Link>
    <div className="info-wrap">
    <Link to="#" className="title text-truncate">
      {product.nom}
    </Link>
    <div className="price mb-2">{product.prix_initial} DNT</div>
    <div className="price mb-2">{product.prix_en_promo} DNT</div>
    <div className="price mb-2">{product.prix_dachat} DNT</div>
    <div className="price mb-2">{product.description} DNT</div>
    <div className="row">
      <Link
        to={`/product/${product.id_produit}/edit`}
        className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
      >
        <i className="fas fa-pen"></i>
      </Link>
      <Link
        to="#"
        className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
      >
        <i className="fas fa-trash-alt"></i>
      </Link>
    </div>
  </div>
  </div>
  )}

         
        
   </div>*/}
  
   <div className=" ">
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
            <th>Prix initial</th>
            <th>Prix en promo</th>
            <th>Prix d'achat</th>
            <th>categorie</th>
             <th >Action</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          
        
        {produitList.map(product =>{
                return (
                  
                  <tr>
                 <td><div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div></td>
                  <td >{product.id}</td>
                  <td >{product.nom}</td>
                  <td>{product.prix_initial}</td>
                  <td>{product.prix_en_promo}</td>
                  <td>{product.prix_dachat}</td>
                  <td>{product.category.name}</td>
                  {/* <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link  className="dropdown-item" to={'/update/${post.id_categorie}'}>
                    Edit info
                  </Link>
                  <Link onClick={deleteCategorie(post.id_categorie)} className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
                </td>*/}
                 <td>
                 <Link
        to={`/edit-product/${product.id}`}
        className="btn  btn-outline-success "
      >         Modifier    </Link> </td>
                <td>
                  <button onClick={()=>deleteProduct(product.id)} className="btn btn-outline-danger btnD"  >Supprimer</button>
                </td>
               
                  </tr>
                )
              })}
               
              
        </tbody>
      </table>
    </div>
    <Toaster
  position="top-right"
  reverseOrder={false}
/> 
    </>
  );
};

export default Product;
