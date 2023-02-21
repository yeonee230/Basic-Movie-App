import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
import "./styles.css";

function App() {
 
  
  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
