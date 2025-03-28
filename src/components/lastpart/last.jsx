import React, { useState } from 'react';
import './last.css';
import lastvector from '../../assets/lastvector.png'
import lastpartimage from '../../assets/lastpartimage.png'
const LastPage = () => {

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
    
    const payload ={
      fullName : formData.name,
      email: formData.email,
      trainingType: formData.training,
      courseNature: formData.courseNature,
      country: formData.country,
      message: formData.message,


    }

    console.log("FormData:",payload)
    setFormData({
  name: '',
  email: '',
  training: '',
  courseNature: '',
  country: '',
  message: ''
    })

    alert("Form Successfully Submitted")
  };

  return (
    <div 
    className="container_last" 
    style={{ 
      backgroundImage: `linear-gradient(rgb(105, 72, 139), rgba(53, 25, 83, 0.6)), url(${lastpartimage})`,
      backgroundSize: "cover, cover", 
      backgroundPosition: "center, center",
      backgroundBlendMode: "multiply, normal",
      backgroundRepeat: "no-repeat, no-repeat"
    }}
  >
  

  
      <div className="sections_last">
       
        <div className="left_last">
         <h1>
                <span className="tailored_last">
               Get A Quote
                  <img src={lastvector} style={{width:'100%'}} className="effect-line-last" alt="Vector Line"  />
                </span>
              </h1>
          <p>Please take the time to complete the following form and provide us with as much information as you are able to ensure we can deal with your request as promptly.</p>
         
        </div>

        <div className="right_last">
          <form onSubmit={handleSubmit}  style={{width:'100%'}} >
            <label htmlFor="name" > Full Name</label>
            <input 
              id="name" 
              type="text" 
              name="name"
              placeholder="enter full Name" 
              value={formData.name}
              onChange={handleChange} 
              required 
              style={{width:'95%', marginBottom:'15px', height:'36px'}}    
            />
<div className='label_flex'>
    <div>
            <label htmlFor="Email" style={{marginBottom:'4px'}} >Email</label>
            <input 
              id="email" 
              type="email" 
              name="email"
              placeholder="enter email id" 
              value={formData.email}
              onChange={handleChange} 
              required 
              style={{width:'80%',display:'flex' , marginBottom:'15px', marginTop:'5px', height:'37px'
              }}
            />
            </div>
            <div>
  <label htmlFor="country" style={{marginBottom:'4px', marginLeft:'35px'}}>Country</label>
            <select
              id="country" 
              type="text" 
              name="country"
              placeholder=" select country" 
              value={formData.country}
              onChange={handleChange} 
              required 
              style={{width:'95%',display:'flex', marginLeft:'35px', marginTop:'5px',height:'40px'
              }}
            >
                  <option value="">Select country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
          </select>
</div></div>
<div className='label_flex'>
    <div>
            <label htmlFor="training" style={{marginBottom:'4px'}}>Training You Are Looking For</label>
            <select 
              id="training" 
              type="text" 
              name="training"
              placeholder="select traning" 
              value={formData.training}
              onChange={handleChange} 
              required 
             style={{width:'98%',display:'flex', marginTop:'5px',height:'40px'
              }}
            >
                   <option value="" >select training</option>
            <option value="ISO 9001">ISO 9001</option>
            <option value="ISO 14001">ISO 14001</option>
            <option value="ISO 27001">ISO 27001</option>
            <option value="Custom Training">Custom Training</option>
          </select>


</div>
<div>
            <label htmlFor="courseNature" style={{marginBottom:'4px', marginLeft:'35px'}}>Course Nature</label>
            <select
              id="courseNature" 
              type="text" 
              name="courseNature"
              placeholder="course nature" 
              value={formData.courseNature}
              onChange={handleChange} 
              required 
              style={{width:'101%',display:'flex', marginLeft:'27px', marginTop:'5px',height:'40px'
              }}
            >

<option value=""> course nature</option>
            <option value="Online">Online</option>
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
          </select>

</div>
</div>
        <label htmlFor="message" style={{marginTop:'10px'}}>Message</label>
            <textarea 
              id="message" 
              name="message"
              placeholder="Message" 
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{width:'95%',height:'80px'}}
            ></textarea>

            <button type="submit" className="btn submit blue-button_last" style={{width:'106%', marginTop:'20px', borderRadius:'8px', height:'40px'}}>Submit</button>
          </form>
        </div>
      </div>

   


     
    </div>



  );
};

export default LastPage;
