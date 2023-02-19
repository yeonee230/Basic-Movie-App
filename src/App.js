//import {  Routes, Route, HashRouter } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`movie/:id`} element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
