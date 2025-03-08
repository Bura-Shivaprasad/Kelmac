import React from 'react';
import fourthimage from '../../assets/fourth.png'
import '../fourth/fourthpage.css'
const FourthPage = () => {
  return (
    <div className="fourthpage-container"  >
        <div className="background-image" style={{backgroundImage:`urL(${fourthimage})`}}></div>
<div className='box' style={{ backgroundImage: `linear-gradient(rgba(71, 0, 104, 0.86), rgba(185, 0, 176, 0.84))` }}> <h2> Customized programs <br/>
tailored to client requirements!</h2>
<p className='small-text-box'> Fully Tailored to Your Business Needs</p>
<h3> No two businesses are the same</h3>
<p className='small-para'> so why settle for a one-size-fits-all training program? Kelmac Group’s private training is designed specifically for you.</p>

<h3> Customized to Your Industry & Company Processe</h3>
<p className='small-para'> We take the time to understand your organization, your industry, and your unique challenges. Our courses are then tailored to focus on the specific skills and knowledge your team needs.</p>
<h3> Relevant, Real-World Training</h3>
<p className='small-para'> Instead of covering theoretical concepts that may not apply to your team, our training integrates real-world scenarios, case studies, and practical exercises related to your company’s operations.</p>
<h3> Targeted Learning for Different Teams</h3>
<p className='small-para'> Whether you need to train senior management, internal auditors, or frontline employees, we adjust the content to ensure each group gets the most value from the session.</p>
</div>

    </div>
  );
};

export default FourthPage;