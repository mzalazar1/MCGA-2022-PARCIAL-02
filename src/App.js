import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Productos from './Screens/Productos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
  );
}

export default App;
