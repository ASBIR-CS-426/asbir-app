import React from "react";
import { Home } from "./Home"
import { Dashboard } from "./Dashboard"
import { ErrorLog } from "./ErrorLog"
import { AboutUs } from "./AboutUs"
import { RobotLocation } from "./RobotLocation";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/robot-location" element={<RobotLocation />}></Route>
        <Route path="/error-log" element={<ErrorLog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
