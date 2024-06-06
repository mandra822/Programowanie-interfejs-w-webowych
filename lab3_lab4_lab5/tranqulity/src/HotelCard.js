import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";


function HotelCard({
  location,
  name,
  description,
  rating,
  price,
  cardImagePath,
  url
}) {

  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favHotels")) || []);
  const addToFavs = () => {
    const tmpHotel = favs.find((p) => p === url);
    let tmpFavs = favs;
    if (tmpHotel == null) {
      tmpFavs = [...favs, url]
    }
    else {
      tmpFavs = tmpFavs.filter(p => url !== p)
    }
    setFavs(tmpFavs)
    localStorage.setItem("favHotels", JSON.stringify(tmpFavs))
  }

  return (
    <article className="hotel-card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${require(`./Assets/${cardImagePath}`)})`,
        }}
      >


        <p className="chip">{location}</p>
        <div class="chip-round" onClick={addToFavs}><svg  
          width="23"
          height="21"
          viewBox="0 0 23 21"
          fill={favs.includes(url) ? "#50614A" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 7.15533C22 8.77914 21.3765 10.3388 20.2631 11.4925C17.7001 14.1492 15.2143 16.9194 12.5556 19.4797C11.9461 20.058 10.9794 20.0369 10.3962 19.4324L2.73645 11.4925C0.421185 9.09256 0.421185 5.21809 2.73645 2.81815C5.07446 0.394622 8.88333 0.394622 11.2213 2.81815L11.4998 3.10674L11.778 2.81832C12.899 1.65573 14.4257 1 16.0206 1C17.6154 1 19.142 1.65566 20.2631 2.81815C21.3766 3.97197 22 5.53156 22 7.15533Z"
            stroke="#50614A"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg></div>
      </div>
      <p className="text-middle">{name}</p>
      <p className="text-small">{description}</p>
      <div className="hotel-card-footer">
        <p className="text-middle">Rating: {rating}</p>
        <p className="text-middle">Price: {price}/room</p>
      </div>
      <div className="hotel-card-footer">
        <Link to={url} className="link-style">
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
        </Link>

      </div>
    </article>
  );
}

export default HotelCard;
