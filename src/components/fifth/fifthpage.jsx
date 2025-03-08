 import React, { useState } from "react";
import "../fifth/fifthpage.css";
import cardImage1 from "../../assets/Icon.png";
import cardImage2 from "../../assets/Icon2.png";
import cardImage3 from "../../assets/Icon3.png";
import cardImage4 from "../../assets/Icon4.png";
import cardImage5 from "../../assets/Icon1.png";
import vector from "../../assets/vector 5.png";

const cardsData = [
  {
    id: 1,
    image: cardImage4,
    title: "Cost-Effective",
    text: "Training Solution",
    description:
      "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achieve a faster return on investment with tailored, business-focused learning.",
   color:" #F65585",
  },
  {
    id: 2,
    image: cardImage1,
    title: "Minimal",
    text: "Training Solution",
    description:
      "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achieve a faster return on investment with tailored, business-focused learning.",
      color:" #8C7AFB" 
  },
  {
    id: 3,
    image: cardImage5,
    title: "Tailored for Your",
    text: "Industry & Team",
    description:
      "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achieve a faster return on investment with tailored, business-focused learning.",
color:'#45C6E8'
  },
  {
    id: 4,
    image: cardImage3,
    title: "Confidential &",
    text: "Secure Learning",
    description:
      "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achieve a faster return on investment with tailored, business-focused learning.",
 color: "#FF9D2A"
  },
  {
    id: 5,
    image: cardImage2,
    title: "Flexible",
    text: "Delivery Options",
    description:
      "Reduce costs per participant through group pricing, making it more affordable than individual enrolments. Virtual or on-site delivery eliminates travel and accommodation expenses. Customized programs accelerate compliance and boost team efficiency. Achieve a faster return on investment with tailored, business-focused learning.",
   color:' #36BE93'
  },
];

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(cardsData[0]);

  return (
    <div className="cards-container">
      <h1>
        <span className="tailored">
          The Benefits of Private In-House Training
          <img src={vector} className="effect-line-fifth" alt="Vector Line" />
        </span>
      </h1>

      <div className="cards">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCard.id === card.id ? "selected" : ""}`}
            style={{
              background: card.color,
              height: selectedCard.id === card.id ? "160px" : "140px",
              borderBottomLeftRadius: selectedCard.id === card.id ? "0px" : "10px",
              borderBottomRightRadius: selectedCard.id === card.id ? "0px" : "10px",
            }}
            onClick={() => setSelectedCard(card)}
          >
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 style={{ fontSize: '18px',
    margin: '-4px 8px',
    color: 'white',
    textAlign: 'left',
    paddingLeft: '10px'}}> {card.title}</h2>
            <small>{card.text}</small>
          </div>
        ))}
      </div>

      <div
        className="card-description"
        style={{ background: selectedCard.color }}
      >
        <p>{selectedCard.description}</p>
      </div>
    </div>
  );
};

export default Cards;
