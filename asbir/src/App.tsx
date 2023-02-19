import React from "react";
import { Home } from "./Home"
import { Dashboard } from "./Dashboard"
import { ErrorLog } from "./ErrorLog"
import { AboutUs } from "./AboutUs"
import { InspectionDatabase } from "./InspectionDatabase";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/inspection-database" element={<InspectionDatabase />}></Route>
        <Route path="/error-log" element={<ErrorLog />}></Route>
      </Routes>
    </div>
  );
}

{/* <UnauthenticatedRoute exact path="/about-us" element={<Home />}></UnauthenticatedRoute>
<AuthenticatedRoute exact path="/about-us" element={<AboutUs />}></AuthenticatedRoute>
<AuthenticatedRoute exact path="/dashboard" element={<Dashboard />}></AuthenticatedRoute>
<AuthenticatedRoute exact path="/faq" element={<FAQ />}></AuthenticatedRoute>
<AuthenticatedRoute exact path="/inspection-database" element={<InspectionDatabase />}></AuthenticatedRoute>
<AuthenticatedRoute exact path="/error-log" element={<ErrorLog />}></AuthenticatedRoute> */}

export default App;
