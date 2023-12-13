import { AppBar } from "@mui/material";
import "./dashboard-home.css";
import PrimarySearchAppBar from "./AppBar";
import MainDrawer from "./MainDrawer";
import React, { FC } from "react";
import Charts from "./charts.tsx";
import Gauge1 from "./gauge1.tsx";
import Gauge2 from "./gauge2.tsx";



const Home: FC<{}> = () => {
  return (
    <>

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.990)",
          minHeight: "100vh"
        }}
      >

        <MainDrawer />  
        <div class="dashboard-chart-container">
        <Charts/>
        <Gauge1/>
        <Gauge2/>

        </div>   
      </div>






    </>
  );
};

export default Home;
