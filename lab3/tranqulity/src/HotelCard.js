// HotelCard.js
import React from 'react';

function HotelCard({ location, name, description, rating, price, heart }) {
  return (
    <article className="hotel-card">
      <div className="card-image">
        <p className="chip">{location}</p>
        <div class="chip-round">
                        {heart}                               
                </div>
      </div>
      <p className="text-middle">{name}</p>
      <p className="text-small">{description}</p>
      <div className="hotel-card-footer">
        <p className="text-middle">Rating: {rating}</p>
        <p className="text-middle">Price: {price}/room</p>
      </div>
      <div className="hotel-card-footer">
      <button className="button primary" style={{ width: "100%" }}>
  View offer
  <svg
    width="28"
    height="8"
    viewBox="0 0 28 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: "8px" }} 
  >
    <path
      d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM27.3536 4.35355C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464466C23.9763 0.269204 23.6597 0.269204 23.4645 0.464466C23.2692 0.659728 23.2692 0.976311 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53553C23.6597 7.7308 23.9763 7.7308 24.1716 7.53553L27.3536 4.35355ZM3 4.5H27V3.5H3V4.5Z"
      fill="#50614A"
    />
  </svg>
</button>

      </div>
    </article>
  );
}

export default HotelCard;