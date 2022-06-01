import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
 import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
 import UsersScreen from "./screens/UsersScreen";

import NotFound from "./screens/NotFound";
import UpdareCompteAdmin from "./components/users/UpdateCompteAdmin";
import NewUser from "./components/users/newUser"; 
import ClientsScreen from "./screens/ClientsScreen";
 import EditCategory from "./components/Categories/EditCategory";
import ProductEditScreen from "./screens/ProductEditScreen";
 import LoginPage from "./components/Login/LoginPage";
 import RegisterPage from "./components/Register/RegisterPage";
 import CategoriesTable from './components/Categories/CategoriesTable';
function App() {
  return (
    <>
      <Router>
        <Switch>
         <Route path="/" component={LoginPage} exact />

          <Route path="/home" component={HomeScreen} exact />
          <Route path="/products" component={ProductScreen} />
          <Route path="/category" component={CategoriesTable} />
          <Route path="/orders" component={OrderScreen} />
          <Route path="/order" component={OrderDetailScreen} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/users" component={UsersScreen} /> 
          <Route path="/edit-product/:id" component={ProductEditScreen} />
          <Route path="/edit/:id" component={EditCategory}/>
           <Route path="/registre" component={NewUser}/>
           <Route path="/edit-admin/:id" component={UpdareCompteAdmin}/>
          <Route path="/client" component={ClientsScreen}/>
          <Route path="*" component={NotFound} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
