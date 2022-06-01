import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";

import EditProductMain from "./../components/products/EditproductMain";

import products from "../data/Products";
const ProductEditScreen = ({ match }) => {
  
  const productId = products.find((p) => p.id_produit === match.params.id_produit);
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain/>
      </main>
    </>
  );
};
export default ProductEditScreen;