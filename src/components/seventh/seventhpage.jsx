import React from "react";
import "../seventh/seventhpage.css";
import champ from '../../assets/champ.png';

import seventhimage2  from  '../../assets/seventhimage2.png';
import seventhimage3 from  '../../assets/seventhimage3.png';
import seventhimage4 from  '../../assets/seventhimage4.png';
import seventhimage5 from  '../../assets/seventhimage5.png';

const SeventhPage = () => {
  return (
    <div className="seventh-section">
      <div className="seventh-content">
        {/* Left Side: Heading + Two Paragraphs */}
        <div className="seventh-left">
          <h1 className="seventh-title">Why Kelmac Group is the
Right Training Partner for
Your Business?</h1>
              <div style={{display:"flex"}}>  
<img src={champ} width={75} height={75} style={{marginTop:'20px'}}/>  <h2>  Certified  <br/>& Accredited Courses</h2></div>  
          <p className="seventh-paragraph">
            
          Our training is internationally recognised, ensuring compliance with ISO standards and other industry regulations.          </p>
          <div style={{display:"flex"}}>  <img src={seventhimage2} width={75} height={75} style={{marginTop:'20px'}}/>
          <h2> Tailored Content <br />
          That Delivers Result</h2></div>
          <p className="seventh-paragraph">
          We customise every course to address your company’s unique needs, ensuring relevant and immediately applicable training.
          </p>
        </div>

        {/* Right Side: Three Paragraphs */}
        <div className="seventh-right">
        <div style={{display:"flex"}}>  <img src={seventhimage3} width={75} height={75} style={{marginTop:'20px'}}/>
        <h2>30+ Years  <br />
        of Expertise </h2></div>


          <p className="seventh-right-paragraph">
          We have trained thousands of professionals worldwide, helping businesses improve compliance,
          quality, and efficiency.
          
                    </p>

                    <div style={{display:"flex"}}>  <img src={seventhimage4} width={75} height={75} style={{marginTop:'20px'}}/>

          <h2> Expert Instructors with <br />Real-World Experience</h2></div>
          <p className="seventh-right-paragraph">
          Our trainers aren’t just educators—they’re industry professionals who understand your challenges and provide practical, actionable insights
          </p>
          <div style={{display:"flex"}}>  <img src={seventhimage5} width={75} height={75} style={{marginTop:'20px'}}/>

          <h2> Proven Track <br /> Record of Success</h2></div>
          <p className="seventh-right-paragraph">
          Companies that train with Kelmac Group see increased employee performance, compliance improvement, and better operational efficiency.          </p>
        </div>
      </div>
    </div>
  );
};

export default SeventhPage;
