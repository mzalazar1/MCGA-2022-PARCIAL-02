import BodySection from '../../Components/Body/Body';
import React from 'react';

const Home = () => {
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
    )
}


export default Home;