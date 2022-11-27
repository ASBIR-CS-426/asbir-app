import React from "react";
import { Home } from "./Home"
import { Dashboard } from "./Dashboard"
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/asbir-app" element={<Home />}></Route>
          <Route path="/asbir-app/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
