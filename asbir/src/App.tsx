import React from "react";
import { Home } from "./Home"
import { Dashboard } from "./Dashboard"
import { Placeholder } from "./Placeholder";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/about" element={<Placeholder />}></Route>
        <Route path="/events" element={<Placeholder />}></Route>
        <Route path="/annual" element={<Placeholder />}></Route>
        <Route path="/team" element={<Placeholder />}></Route>
        <Route path="/blogs" element={<Placeholder />}></Route>
      </Routes>
    </div>
  );
}

export default App;
