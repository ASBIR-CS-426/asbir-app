import React from "react";
import { Home } from "./Home"
import { Dashboard } from "./Dashboard"
import {Routes, Route, HashRouter, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
