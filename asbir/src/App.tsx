import React from "react";
import { Home } from "./Home"
import { Dashboard } from "./Dashboard"
import {Routes, Route, HashRouter, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/asbir-app" element={<Home />}></Route>
        <Route path="/asbir-app/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
