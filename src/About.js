
import { NavLink } from 'react-router-dom';
import './App.css';

import Footer from './components/footer';
import Team from './components/team';

function About() {


  return (
    <div className="App">
      <header className="App-header">
      <div className="home">
      
                <h1><NavLink to="/">IDR Consult</NavLink></h1>
      
            </div>
            <div className="main-nav">
                <NavLink to="/about">About Us</NavLink>
            </div> 
      </header>

      <main className="App-body">
          <div className="header-subtitle">
          
            <div className="text">
              <h2>IDR Consult</h2>
              <h5>We design and development buildings</h5>
              <a href="mailto:email@example.com, secondemail@example.com" >Tell us about your project</a>
              
            </div>
          </div>
    <div>
          <div className='about-container'>
          <h2>About IDR Consult</h2>
          <p>We design and development buildings 
          We design and development buildings
          We design and development buildings
          We design and development buildings
          We design and development buildings
          We design and development buildings</p>

          </div>
          <div className="pow">
          <Team />
            
          </div>
        
          </div>
      </main>

    <footer>
    <Footer />
    </footer>
    </div>
  );
}

export default About;
