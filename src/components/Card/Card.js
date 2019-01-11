import React from "react";
import "./Card.css";

// Card component is  rendering the images to the screen
const Card = props => (
  <div className="card img-container hover">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
  </div>
);

export default Card;
