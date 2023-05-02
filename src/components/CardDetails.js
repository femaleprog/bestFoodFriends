import React from 'react';
import './CardDetails.css';
function CardDetails(props) {
  const { src, text, text2, label } = props.location.state;

  return (
    <div className='card-details'>
      <img src={src} alt={label} />
      <h2>{label}</h2>
      <p>{text}</p>
      <p>{text2}</p>
    </div>
  );
}

export default CardDetails;
