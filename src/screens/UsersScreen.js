import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import AdminList from "../components/users/AdminList";

const UsersScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AdminList/>
      </main>
    </>
  );
};

export default UsersScreen;
