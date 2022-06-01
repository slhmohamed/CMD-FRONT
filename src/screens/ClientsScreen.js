import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import Clients from "../components/users/Clients";

const ClientsScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Clients />
      </main>
    </>
  );
};

export default ClientsScreen;
