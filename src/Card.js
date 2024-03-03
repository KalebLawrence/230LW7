import React from 'react';

function Card({ title, color }) {
  return (
    <div className={`card text-bg-${color} mb-3`} style={{ maxWidth: '18rem' }}>
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}

export default Card;
