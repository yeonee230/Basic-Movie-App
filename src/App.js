import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
import "./styles.css";

function App() {
 
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/basic-movie-app" exact={true} element={<Home />} />
        <Route path="/basic-movie-app/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
