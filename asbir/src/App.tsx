import React from "react";
import { Home } from "./Home"
import { Dashboard } from "./Dashboard"
import { ErrorLog } from "./ErrorLog"
import { FAQ } from "./FAQ"
import { AboutUs } from "./AboutUs"
import { InspectionDatabase } from "./InspectionDatabase";
import {Routes, Route} from "react-router-dom";
import { Placeholder } from "./Placeholder";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/inspection-database" element={<InspectionDatabase />}></Route>
        <Route path="/error-log" element={<ErrorLog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
