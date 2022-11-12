import './App.css';
import BodySection from './Components/Body/Body';
import React from 'react';

function App() {
  return (
    <div>
      <header>
        <p>Acá va el componente header</p>
        <nav>
          <p>Barra de navegaciónn</p>
        </nav>
      </header>
      <BodySection />
      <footer>
          <p>Acá va el footer</p>
      </footer>
    </div>
  );
}

export default App;
