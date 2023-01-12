import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/image/logo.png';

import tw from '../media/image/twitter.png';
import fb from '../media/image/facebook.png';
import ins from '../media/image/instagram.png';

import './footer.css'

const Footer = () => {
    
  return (
    
    <div className='footer' id='footer'>
            <div className='footer-conclusion'>
                <img src={logo} alt='Motoring-NG' style={{maxWidth: '7vw', margin: 'auto 0%'}}/>
                <p>B&B Pro Events and Ushers is an event management and coordination service provider, tasked with bringing beauty and excellence to events in and outside Akure.</p>

            </div>

            <div className='footer-menu'>
                <li><Link to="/#work-steps">Our Services</Link></li>
                <li><Link to="/#about">About Us</Link></li>
               
                <li><Link to="/#contact">Contact</Link></li>
            </div>

                <span className='divider' style={{}}> </span>

            <div className='footer-socials'>
            
                <div className='copyrights'>
                <p>&copy; 2022 B&B Pro Events and Ushers.</p>

                </div>

                <div className='socials'>
                <a href="https://twitter.com/BBProEvents1" target="_blank" rel="noreferrer"><img src={tw} alt="twitter" /></a>
                            <a href="https://facebook.com/BandB-Ushers-101221829372576" target="_blank" rel="noreferrer"><img src={fb} alt="facebook" /></a>
                            <a href="https://www.instagram.com/bandbushers/" target="_blank" rel="noreferrer"><img src={ins} alt="instagram" /></a>

                </div>
            </div>
            <div className='footer-phrase'>
                <p>Powered by B&B Pro</p>
            </div>

    </div>
  )
};

export default Footer;