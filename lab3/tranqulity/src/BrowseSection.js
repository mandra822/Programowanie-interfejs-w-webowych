// BrowseSection.js
import React from "react";
import HotelCard from "./HotelCard";
import { useUser } from "./data/UserAuth";
import { useEffect, useState } from "react";
import { hotelsList } from "./hotelsData";
import { getHotels } from "./data/HotelsData";
import { Link } from "react-router-dom";

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
        <Link to={''} className="link-style">
            <HotelCard
              location={hotel.city}
              name={hotel.name}
              description={hotel.cardText}
              rating={hotel.stars}
              price={hotel.price}
              cardImagePath={hotel.img_card}
              url={`/hotel/${hotel.id}`}
              
            />
            </Link>
        ))}
      </section>
    </section>
  );
}

export default BrowseSection;
