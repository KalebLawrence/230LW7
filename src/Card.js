import React from 'react';

function Card({ type }) {
  let cardTitle, cardBg;
  if (type === "primary") {
    cardTitle = "Card 01";
    cardBg = "text-bg-primary";
  } else if (type === "success") {
    cardTitle = "Card 02";
    cardBg = "text-bg-success";
  } else if (type === "danger") {
    cardTitle = "Card 03";
    cardBg = "text-bg-danger";
  }

  return (
    <div className={`card ${cardBg} mb-3`} style={{ maxWidth: '18rem' }}>
      <div className="card-header"></div>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default Card;
