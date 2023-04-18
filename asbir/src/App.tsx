import React from "react";
import { Home } from "./Home"
import { Dashboard } from "./Dashboard"
import { ASBIRModel } from "./ASBIRModel"
import { AboutUs } from "./AboutUs"
import { RobotLocation } from "./RobotLocation";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<AboutUs />}></Route>
        <Route path="/" element={<AboutUs />}></Route>
        <Route path="/login" element={<Home/>}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/robot-location" element={<RobotLocation />}></Route>
        <Route path="/asbir-model" element={<ASBIRModel />}></Route>
      </Routes>
    </div>
  );
}

export default App;
