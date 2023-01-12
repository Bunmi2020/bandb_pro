import React from 'react';
import about from '../media/image/about-main.jpg'

import './about-us.css'

const About = () => {
    
  return (
    
    <div className='about' id='about'>
     <h3 className='about-heading'>About Us</h3>
     
     <div className="App-about">

            <div className="App-about-text">
                <h3>Our major work is <br/>taking <span className='h-red'>pressure and stress off you.</span></h3>
                <p>We are team of professional event coordinator,
event managers, event host and hostess and event
securities brand known for excellence delivery in
discharging our duties of event management and
coordination diligently.<br/> We
have successfully delivered over 100 events with
positive reviews</p>
                <button><a href="tel:+234738262634" >Call Now</a></button>
                
            </div>
            
            <div className='App-about-image' style={{position: 'relative'}}>

           
                <img src= {about} alt='about B and B Pro Event' style={{position: 'relative', bottom: '0px', maxWidth: '400px', maxHeight: '400px', borderRadius: '360%', margin: 'auto', borderStyle: 'solid', borderColor: '#642061' }}/>
             
                
                
            </div> 

    </div>
        
    </div>
  )
        
};

export default About;