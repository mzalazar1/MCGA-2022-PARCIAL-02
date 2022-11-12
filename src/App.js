import { Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Recursos from './Screens/Resource';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recursos" element={<Recursos />} />
    </Routes>
  );
}

export default App;
