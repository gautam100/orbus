import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spline from "./components/Spline";
import Column from "./components/Column";
import Scatter from "./components/Scatter";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Spline />
          </div>
          <div className="col">
            <Column />
          </div>
        </div>
        <div className="row">
          <div className="col" id="scatter_chart">
            <Scatter />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
