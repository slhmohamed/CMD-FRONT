import React from "react";
import {Bar} from "react-chartjs-2";

function SaleStatistics({chartData}) {
  return (
    <Bar data={chartData}  />
  );
};

export default SaleStatistics;
