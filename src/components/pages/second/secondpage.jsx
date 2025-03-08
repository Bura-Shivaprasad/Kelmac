import React from 'react';
import '../../pages/second/secondpage.css';
import secondimage from '../../../assets/secondpage.png'
import frame from '../../../assets/frame.png'
import frame1 from '../../../assets/frame1.png'
import frame2 from '../../../assets/frame2.png'
import frame3 from '../../../assets/frame3.png'
import frame4 from '../../../assets/frame4.png'
import vectorbig from '../../../assets/vector_big.png'
import whatsapp from '../../../assets/whatsapp_icon.png';


const SecondPage = () => {
  return (
    <div className="page-container">
        <div className="background-image" style={{ backgroundImage: `linear-gradient( to right, rgb(252, 252, 252), rgba(255, 255, 255, 0) ) , url(${secondimage})`,}}></div>
<div className='main-left'>
      <h1 style={{marginLeft:'-6px'}}>Why Choose Private & In-House Training</h1>
      <p className="small-text" style={{marginLeft:'-1px'}}>Tailored Learning That Works for Your Business</p>
      <p className="big-text">
      Training isn’t just about ticking a box—it’s about equipping your team with the right skills and knowledge to drive real business impact. But public training courses often come with challenges that can make them less effective for organizations like yours:
      </p>
      
      <ul style={{marginLeft:'-20px'}}>
        <li> <img src={frame} className='img' />Generic content that doesn’t fully align with your business goals</li>
        <li> <img src={frame1}/>Inconvenient schedules that don’t fit your team’s availability</li>
        <li> <img src={frame2}/>Additional travel costs & time away from work</li>
        <li> <img src={frame3}/>Disruptions to daily business operations</li>
        <li> <img src={frame4}/>Lack of confidentiality when discussing company-specific challenges</li>
       
      </ul>

      <p className='para'>Private, in-house training eliminates these barriers by bringing the learning experience directly to your organization—on your schedule, with your priorities in mind.</p>

      <div className="button-group">
        <button className="btn blue-button" style={{width:'12%'}}>Get a Quote</button>
                    <button className="btn white-button " style={{border:'1px solid gray'}}><img src={whatsapp}/> <span className='button-text' style={{marginLeft:'10px'}}>Whatsapp Us</span> </button>
        
      </div>

       <div style={{marginTop:'60px'}}>
 <img src={vectorbig}    />  
      </div>
    </div>
    </div>
  );
};

export default SecondPage;