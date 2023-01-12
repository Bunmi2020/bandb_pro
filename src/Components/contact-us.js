import React from 'react';
import contact1  from '../media/image/contact1.png';
import contact21 from '../media/image/contact21.png';
import contact22 from '../media/image/contact22.png';
import contact3 from '../media/image/contact3.png';

import movie from '../media/image/merry.jfif';
import tw from '../media/image/twitter1.png';
import fb from '../media/image/facebook1.png';
import ins from '../media/image/instagram1.png';
import './contact-us.css';

const Contact = () => {
    
  return (
    
    <div className='contact' id='contact'>
    
     <h3 className='contact-heading'>Reach Out to Us</h3>
     
     <div className="App-contact">

            <div className="App-contact-form">
           
 
            <img src= {movie} alt='about B and B Pro Event' style={{position: 'relative', bottom: '0px', maxWidth: '400px', maxHeight: '300px', borderRadius: '360%', margin: 'auto', borderStyle: 'solid', borderColor: '#d4b3d3' }}/>
             
                
                
            </div>
            
            <div className='App-contact-details' >

                    <div className='contact1'>
                    <div className='contact-icon' style={{background: '#FD9843'}}>
                        <img src={contact1} alt='towing order' />
                    </div>
                
                <h5  className='contact-header'>Address</h5>
                <p className='contact-text'>Block 1, Flat 4, CBN quarters Alagbaka Akure.
P.O Box 1799</p>
                </div>

                <div className='contact2'>
                    <div className='contact2-1'>
                    <div className='contact-icon' style={{background: '#4DD4AC'}}>
                         <img src={contact21} alt='towing vehicle' />
                    </div>
                       
                        <h5 className='contact-header'>Phone number</h5>
                        <p className='contact-text'><a href="tel:+234738262634" >+234738262634</a></p>
                    </div>

                    <div className='contact2-2'>
                        <div className='contact-icon' style={{background: '#25d366'}}>
                            <img src={contact22} alt='towing vehicle' />
                        </div>
                        
                            <h5 className='contact-header'><a href="https://wa.me/+2348061143232" >WhatsApp</a></h5>
                            <p><a href="https://wa.me/+2348061143232" >Click to chat us</a></p>
                    </div>
                    <div className='contact3'>
                <div className='contact-icon' style={{background: '#F46036'}}>
                    <img src={contact3} alt='towing delivery' />
                </div>
                <h5  className='contact-header'>Socials</h5>
                <div className='socials'>
                            <a href="https://twitter.com/BBProEvents1" target="_blank" rel="noreferrer"><img src={tw} alt="twitter" /></a>
                            <a href="https://facebook.com/BandB-Ushers-101221829372576" target="_blank" rel="noreferrer"><img src={fb} alt="facebook" /></a>
                            <a href="https://www.instagram.com/bandbushers/" target="_blank" rel="noreferrer"><img src={ins} alt="linkedIn" /></a>

                    </div>
                </div>

                </div>

                
                
            </div> 

    </div>
        
    </div>
  )
        
};

export default Contact;