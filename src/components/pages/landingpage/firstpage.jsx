import React, { useState } from 'react';
import './firstpage.css';
import firstimage from '../../../assets/firstimage.png';
import effect from '../../../assets/effect.png'
import vector from '../../../assets/vector 5.png';
import whatsapp from '../../../assets/whatsapp_icon.png';
import trigger from '../../../assets/trigger.png'


const FirstPage = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    training: '',
    courseNature: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
   

  const payload = {
    fullName: formData.name,
    email: formData.email,
    trainingType: formData.training,
    courseNature: formData.courseNature,
    country: formData.country,
    message: formData.message,
  };

  console.log('Form Payload:', payload);



 setFormData({
  name: '',
  email: '',
  training: '',
  courseNature: '',
  country: '',
  message: ''
});
  alert('Form submitted successfully')
  };
  return (
    <div 
    className="container" 


    style={{ 
      background: `linear-gradient(  to right,
    rgba(53, 5, 55, 0.85),
    rgba(26, 11, 43, 0.85)), url(${effect}), url(${firstimage})`,
      backgroundSize: "cover, contain, cover", 
      backgroundPosition: "center, center, center",
      backgroundBlendMode: "multiply, normal",
      backgroundRepeat: "no-repeat, no-repeat, no-repeat",
     
    }}
  >
  

  
      <div className="sections">
        {/* Left Section */}
        <div className="left">
          <h1>Excellence Redefined: Kelmac's Traning  Solutions - <span style={{color:'#FED639'}} className='tailored' >Tailored <img src={vector} className='effect-line'/> </span> </h1>
          <p>ISO traning designed around your business need- delivered when you need it, focused on what matters, and built to deliver measurable results.</p>
          <div className="buttons">
            <button className="btn  blue-button" style={{fontSize:'14px',fontWeight:'700'}}>Get a Quote</button>
            <button className="btn white-button"><img src={whatsapp}/> <span className='button-text' style={{marginLeft:'5px', fontSize:'14px', color: "#6782FF",fontWeight:'700'}}>Whatsapp us</span> </button>
          </div>
        </div>

      
        <div className="right">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Full Name</label>
            <input 
              id="name" 
              type="text" 
              name="name"
              placeholder="enter full Name" 
              value={formData.name}
              onChange={handleChange} 
              required 
            />

            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              type="email" 
              name="email"
              placeholder="enter email id " 
              value={formData.email}
              onChange={handleChange} 
              required 
            />

            <label htmlFor="training">Training You Are Looking For</label>
            <select 
              id="training" 
              type="text" 
              name="training"
              placeholder="select training" 
              value={formData.training}
              onChange={handleChange} 
              required 
              style={{height:'40px'}}
            >
               <option value="" >select training</option>
            <option value="ISO 9001">ISO 9001</option>
            <option value="ISO 14001">ISO 14001</option>
            <option value="ISO 27001">ISO 27001</option>
            <option value="Custom Training">Custom Training</option>
          </select>

            <label htmlFor="courseNature">Course Nature</label>
            <select
              id="courseNature" 
              type="text" 
              name="courseNature"
              placeholder="select course nature" 
              value={formData.courseNature}
              onChange={handleChange} 
              required 
              style={{height:'40px'}}
            >
                <option value="">Select course nature</option>
            <option value="Online">Online</option>
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
          </select>

            <label htmlFor="country">Country</label>
            <select
              id="country" 
              type="text" 
              name="country"
              placeholder="select country" 
              value={formData.country}
              onChange={handleChange} 
              required 
              style={{height:'40px'}}
              >

<option value="">Select country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
          </select>

            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message"
              placeholder="write your message" 
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{height:'40px'}}
            ></textarea>

            <button type="submit" className="btn submit blue-button" style={{borderRadius:'4px'}}>Submit</button>
          </form>
        </div>
      </div>

   
      <div className="center">
        <h1>Excellence Redefined:<br /> Kelmac's Traning  Solutions - <span style={{color:'#FED639'}} className='tailored' >Tailored <img src={vector} className='effect-line'/> </span></h1>
        <p>We address the frustration of generic training by offering customized ISO solutions that focus only on your critical compliance and performance needs. Our flexible scheduling ensures training happens on your timeline, minimizing disruption while delivering immediate, actionable value. With expert-led sessions, we empower your team to achieve lasting improvements and certification success faster..</p>
      </div>

   <div className='trigger'>
    <img src={trigger}  />
   </div>
     
    </div>



  );
};

export default FirstPage;
