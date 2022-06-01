import React, { useState } from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LatestOrder";
import SaleStatistics from "./SalesStatistics";
import { UserData } from "../../data/ChartData";
import PieChart from "./PieChart";

const Main = () => {
  const [userData,setUserData]=useState({
    labels:UserData.map((data)=>data.year),
    datasets:[{
      label:"statistique",
      data:UserData.map((data)=>data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    }]
  })
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>
        {/* Top Total */}
        <TopTotal />

        <div className="row">
          {/* STATICS */}
          <div style={{ width: 700 }}>
          <SaleStatistics chartData={userData}/>
          </div>
          <div style={{ width: 600 }}>
          <PieChart chartData={userData}/>
          </div>
          
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder />
        </div>
      </section>
    </>
  );
};

export default Main;
