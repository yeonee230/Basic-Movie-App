import {  Routes, Route, HashRouter } from "react-router-dom";
import Home from "./routers/Home";
import Detail from "./routers/Detail";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`movie/:id`} element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
