import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Productos from './Screens/Productos';
import FormAdd from './Screens/FormAdd';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/addproduct" element={<FormAdd />} />
    </Routes>
  );
}

export default App;
