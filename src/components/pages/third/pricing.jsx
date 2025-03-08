//     import React from "react";
//     import '../../pages/third/pricing.css';
//     import logo from "../../../assets/card_logo.png"; 
//     import { FaArrowRightLong } from "react-icons/fa6";
//     import { FiHome} from "react-icons/fi";
//     import { FaRegClock } from "react-icons/fa";
//     import { LuCalendar } from "react-icons/lu";
// import pagination from '../../../assets/pagination.png'
//     const plans = [
//     { price: "₹32500", title: "ISO 9001:2015 Lead Auditor Training Course", description: "Quality Management", features: ["Virtual", "3 Mar 25 to 9 Mar 25", "4 days", "English"] },
//     { price: "₹32500", title: "ISO 9001:2015 Lead Auditor Training Course", description: "Great for businesses.",  features: ["Virtual", "3 Mar 25 to 9 Mar 25", "4 days", "English"] },
//     { price: "₹32500", title: "ISO 9001:2015 Lead Auditor Training Course", description: "Best for professionals.",  features: ["Virtual", "3 Mar 25 to 9 Mar 25", "4 days", "English"]},
//     { price: "₹32500", title: "ISO 9001:2015 Lead Auditor Training Course", description: "For large enterprises.",  features: ["Virtual", "3 Mar 25 to 9 Mar 25", "4 days", "English"]},
//     ];

//     const featureIcons = [<FiHome />, <LuCalendar />,<FaRegClock />, ]

//     const PricingCards = () => (
//     <div className="pricing-container">
//         {plans.map((plan, index) => (
//         <div key={index} className="pricing-card">
//             <div className="price">{plan.price}</div>
//             <img src={logo} alt="Logo" className="logo"  />
//             <h2 style={{margin: "100px 20px 10px", color: "#333" , fontSize: "18px", textAlign: "left"}}>{plan.title}</h2>
//             <p style={{fontSize: "14px", color: "#666", marginLeft: "-100px",marginTop: "-8px" }}>{plan.description}</p>
//             <hr />
//             <ul className="priing_ul" style={{listStyle:'none',textAlign:'left'}}>{plan.features.map((feature, idx) =>    <li key={idx} className="pricing_li" style={{marginBottom:'12px'}} >
//             <span className="feature-icon" style={{ marginRight:'10px'}}>{featureIcons[idx % featureIcons.length]}</span> {feature}
//                 </li>)}</ul>
//             <h3 className="view-details">
//                 View Details <FaArrowRightLong className="icon-arrow" />
//             </h3>      </div>
//         ))}

//         <div style={{marginLeft:'1000px', marginTop:'60px' }}> <img src={pagination}/></div>
//     </div>
//     );

//     export default PricingCards;
import React, { useState } from "react";
import '../../pages/third/pricing.css';
import logo from "../../../assets/card_logo.png"; 
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";  
import { LuCalendar } from "react-icons/lu";

const plans = [
  { price: "₹32500", title: "ISO 9001:2015 Lead Auditor Training Course", description: "Quality Management", features: ["Virtual", "3 Mar 25 to 9 Mar 25", "4 days", "English"] },
  { price: "₹32500", title: "ISO 9001:2015 Lead Auditor Training Course", description: "Great for businesses.", features: ["Virtual", "3 Mar 25 to 9 Mar 25", "4 days", "English"] },
  { price: "₹32500", title: "ISO 9001:2015 Lead Auditor Training Course", description: "Best for professionals.", features: ["Virtual", "3 Mar 25 to 9 Mar 25", "4 days", "English"] },
  { price: "₹32500", title: "ISO 9001:2015 Lead Auditor Training Course", description: "For large enterprises.", features: ["Virtual", "3 Mar 25 to 9 Mar 25", "4 days", "English"] },
  { price: "₹32000", title: "ISO 14001:2015 Lead Auditor Course", description: "Environmental Management", features: ["Onsite", "15 Apr 25 to 19 Apr 25", "5 days", "English"] },
  { price: "₹31000", title: "ISO 27001:2015 Lead Auditor Course", description: "Information Security", features: ["Online", "10 May 25 to 14 May 25", "5 days", "English"] },
  { price: "₹30000", title: "ISO 45001:2018 Lead Auditor Course", description: "Occupational Health & Safety", features: ["Hybrid", "22 Jun 25 to 26 Jun 25", "5 days", "English"] },
  { price: "₹29000", title: "ISO 22000:2018 Lead Auditor Course", description: "Food Safety Management", features: ["Virtual", "5 Jul 25 to 9 Jul 25", "5 days", "English"] },
];

const featureIcons = [<FiHome />, <LuCalendar />, <FaRegClock />];

const PricingCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  
  const totalPages = Math.ceil(plans.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = plans.slice(indexOfFirstCard, indexOfLastCard);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pricing-container">
      {currentCards.map((plan, index) => (
        <div key={index} className="pricing-card">
          <div className="price">{plan.price}</div>
          <img src={logo} alt="Logo" className="logo" />
          <h2 style={{marginTop:'80px'}}>{plan.title}</h2>
          <p>{plan.description}</p>
          <hr />
          <ul className="pricing-ul">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="pricing-li">
                <span className="feature-icon">{featureIcons[idx % featureIcons.length]}</span> {feature}
              </li>
            ))}
          </ul>
          <h3 className="view-details">
            View Details <FaArrowRightLong className="icon-arrow" />
          </h3>
        </div>
      ))}

      <div className="pagination-container">
        <FaArrowLeftLong  className={`arrow ${currentPage === 1 ? "disabled" : ""} arrow-icon`} onClick={prevPage} />
        
       
        <div className="dot-pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span 
              key={index} 
              className={`dot ${currentPage === index + 1 ? "active" : ""}`} 
              onClick={() => setCurrentPage(index + 1)}
            ></span>
          ))}
        </div>

        <FaArrowRightLong  className={`arrow ${currentPage === totalPages ? "disabled" : ""} arrow-icon`} onClick={nextPage} />
      </div>
    </div>
  );
};

export default PricingCards;
