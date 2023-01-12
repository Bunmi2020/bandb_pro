import React from 'react';

import step1 from '../media/image/step1.png';
import step2 from '../media/image/step2.png';
import step3 from '../media/image/step3.png';
import './work-steps.css'

const Steps = () => {
    
  return (
    
    <div className='work-steps' id='work-steps'>
     <h3>Our services</h3>

     <div className='work-steps-body'>
     
      <div className='step1'>
          <img src={step1} alt='towing order' className='services-icon'/>
          <h4 style={{ color: '#262C71'}} className='services-header'>Ushering & Coordination</h4>
                 </div>

        <div className='step2'>
        
        <img src={step2} alt='towing vehicle' className='services-icon'/>
          <h4 style={{ color: '#DE5C9D'}} className='services-header'>Securities & Protocol</h4>
          
        </div>

        <div className='step3'>
          
          
          <img src={step3} alt='towing delivery' className='services-icon'/>
          <h4 style={{ color: '#4DD4AC'}} className='services-header'>Planning & Management</h4>
               </div>
      </div>
        
    </div>
  )
        
};

export default Steps;