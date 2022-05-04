import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Home from "./components/home.component.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='wrap-content'>
        <div className='container teal lighten-2'>
          <Routes>
            <Route path='/' exact element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
