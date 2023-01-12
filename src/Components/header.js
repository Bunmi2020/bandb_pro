
import './header.css';
import logo from '../media/image/logo.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import menu from '../media/image/menu-bar.png';

function Header () {

  

 const [state, setState] = useState('none');
 const [screenWidth, setScreenWidth] = useState(window.innerWidth);

 
  /*  to toggle back mobile menu display upon screen size change*/
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 650) {
      setState('none');
    }
  }, [screenWidth]);


  /* when other part of the page is clicked and menu is open, it will close. 
  the square bracket is to ensure that the function unmounts after initial click
  so the menu button can reopen the menu when clicked again*/

  window.addEventListener ('mouseup', function (event) {
    let menu = document.getElementById('menu');
    if (event.target !== menu && event.target.parentNode !== menu ) {
      menu.style.display='none';
    }
    });

    function toggleDisplay () {
     
      if ( state === 'none') {
        setState('block');
      } else {
        setState('none');
      }
    };


    
  return ( 
   
      <header className="App-header" id='home'>

        <div className="App-nav">

            <div className='App-logo' >
            <Link to="/#"><img src={logo} alt='Motoring-NG'/></Link>
            </div>

            <div className='App-menu'>

            
            <button
                        className="mobile-menu-button"
                       onClick={toggleDisplay} 
                        style={{width: '45px', height: '30px', background: 'none'}}> 
                        <img src={menu} alt='Menu' style={{width: '30px', height: '25px'}} /> 
              </button>
           
            <div className='desktop-menu'> 
            <li><Link to="#work-steps">Our Services</Link></li>
                <li><Link to="#about">About Us</Link></li>
               
                <li><Link to="#contact">Contact</Link></li>
                
            </div>
            
               
            
            </div>
        </div>

        <div className='mobile-menu' style={{display: state}}
                        id="menu"> 
            <li><Link to="#work-steps">Our Services</Link></li>
                <li><Link to="#about">About Us</Link></li>
               
                <li><Link to="#contact">Contact</Link></li>
                
            </div>

      </header>
    
  );
}

export default Header;
