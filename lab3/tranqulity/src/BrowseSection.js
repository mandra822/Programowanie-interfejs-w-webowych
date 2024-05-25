// BrowseSection.js
import React from "react";
import HotelCard from "./HotelCard";
import { Link } from "react-router-dom";
import { useUser } from "./data/UserAuth";
import { useEffect, useState } from "react";
import { hotelsList } from "./hotelsData";
import { getHotels } from "./data/HotelsData";

function BrowseSection() {
  const [hotels, setHotels] = useState([]);
  const user = useUser();
  useEffect(() => {
   
    getHotels().then((data) => setHotels(data));

  }, [user]);

  return (
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      <input
        className="searchbar"
        placeholder="Search by hotel name, place etc."
      />
      <section className="grid hotel-cards">
        {hotels.map((hotel) => (
          <Link to={`/hotel/${hotel.id}`} className="link-style">
            <HotelCard
              location={hotel.city}
              name={hotel.name}
              description={hotel.cardText}
              rating={hotel.stars}
              price={hotel.price}
              cardImagePath={hotel.img_card}
              heart={
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7.15533C22 8.77914 21.3765 10.3388 20.2631 11.4925C17.7001 14.1492 15.2143 16.9194 12.5556 19.4797C11.9461 20.058 10.9794 20.0369 10.3962 19.4324L2.73645 11.4925C0.421185 9.09256 0.421185 5.21809 2.73645 2.81815C5.07446 0.394622 8.88333 0.394622 11.2213 2.81815L11.4998 3.10674L11.778 2.81832C12.899 1.65573 14.4257 1 16.0206 1C17.6154 1 19.142 1.65566 20.2631 2.81815C21.3766 3.97197 22 5.53156 22 7.15533Z"
                    stroke="#50614A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </Link>
        ))}
      </section>
    </section>
  );
}

export default BrowseSection;
