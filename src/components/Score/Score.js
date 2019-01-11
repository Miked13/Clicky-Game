import React from "react";
import "./Score.css";
import {FaCaretRight} from 'react-icons/fa';

// Score component
const Score = props => (
  <div className="gameScore">
    <h3 className="score">Your Score <FaCaretRight /> {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);
export default Score;
