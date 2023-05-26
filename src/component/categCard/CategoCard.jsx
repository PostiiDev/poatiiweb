import React from "react";
import { Link } from "react-router-dom";
import "./CategoCard.scss";

const CategoCard = ({ card }) => {
  return (
      <Link to="/alloffres">
      <div className="categoCard" >
        <img src={card.img} alt="not found" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
      </Link>
  );
}
export default CategoCard;