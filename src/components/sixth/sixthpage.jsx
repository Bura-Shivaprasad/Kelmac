import React from "react";
import "../sixth/sixthpage.css";
import cardImage1 from "../../assets/card1.png";
import cardImage2 from "../../assets/card2.png";
import cardImage3 from "../../assets/card3.png";
import cardImage4 from "../../assets/card4.png";
import cardImage5 from "../../assets/card5.png";
import whatsapp from '../../assets/whatsapp_icon.png';
const cardsData = [
  { id: 1, description: "5" },
  { id: 2, image: cardImage1, title: "Greater Knowledge Transfer & Practical Application", description: "Employees learn best when they can connect training to their daily tasks. Our in-house programs align course content with your company’s systems, policies, and workflows, ensuring that training is immediately applicable", bgColor: '#FFF4F8' },
  { id: 3, image: cardImage2, title: "Stronger Teamwork & Company-Wide Alignment", description: "When employees train together, they develop a shared understanding of business goals, processes, and compliance requirements. This enhances collaboration, efficiency, and overall team performance.", bgColor: '#F7F6FF' },
  { id: 4, image: cardImage3, title: "Higher Retention & ROI on Training Investment", description: "Teams trained in-house retain more knowledge and engage better than those in external courses. This fosters active participation, knowledge-sharing, and higher ROI..", bgColor: '#F3FDFF' },
  { id: 5, image: cardImage4, title: "Industry-Specific & Custom-Designed Courses", description: "Your business is unique—your training should be too. We tailor courses to your industry’s regulations, ISO standards, and operational needs, ensuring that training adds real value to your organization.", bgColor: '#FFF9F3' },
  { id: 6, image: cardImage5, title: "Convenience & Maximum Flexibility", description: "Whether your team prefers onsite, online, or hybrid training, we work around your schedule to provide a seamless learning experience. You decide when and how training happens—we make it easy.", bgColor: '#EFFFFA' }
];

const SixthPage = () => {
  return (
    <div className="sixth-container">
     

      <div className="sixth-cards">
       
        <div className="sixth-row">
          <h5 className="sixth-intro-text" style={{fontSize:'170px',display:'flex', color:'#FFD019', marginTop:'50px', marginRight:'30px'}}>{cardsData[0].description} <p className="" style={{fontSize:'15%', fontWeight:'600',color:'blue', marginTop:'60px'}}>Key <br /> Reasons <br/>  To Choose <br/>  Private Traning</p></h5>
          {cardsData.slice(1, 3).map((card) => (
            <div key={card.id} className="sixth-card" style={{ backgroundColor: card.bgColor }}>
              <img src={card.image} alt={card.title} className="sixth-card-image" />
              <h1 className="sixth-card-title">{card.title}</h1>
              <p className="sixth-card-text">{card.description}</p>
            </div>
          ))}
        </div>

     
        <div className="sixth-row">
          {cardsData.slice(3).map((card) => (
            <div key={card.id} className="sixth-card" style={{ backgroundColor: card.bgColor }}>
              <img src={card.image} alt={card.title} className="sixth-card-image" />
              <h1 className="sixth-card-title">{card.title}</h1>
              <p className="sixth-card-text">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="button-sixth">
        <button className="btn blue-button" style={{marginRight:'10px', width:'14%'}}>Get a Quote</button>
            <button className="btn  " style={{border:'1px solid rgb(177, 177, 177)', width:'14%', display:'flex'}}><img src={whatsapp}/> <span className='button-text' style={{marginLeft:'10px'}}>Whatsapp Us</span> </button>
      </div>
    </div>
  );
};

export default SixthPage;
