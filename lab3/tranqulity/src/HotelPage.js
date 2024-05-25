import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { hotelsList, getHotelById } from "./data/HotelsData";


function HotelPage() {
  const { id } = useParams();

  const [data, setData] = useState({}); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
   
     getHotelById(id).then((data) => {
       setData(data);
       setIsLoading(false);
     });

  }, [id]);

 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="entry">
        <p className="entry-text">{data.name}</p>
      </section>
      <section id="rent" className="footer grid">
        <div
          className="card-image2"
          style={{
            backgroundImage: `url(${require(`./Assets/${data.image_large}`)})`,
          }}
        >
          <div className="chip-right">
            {" "}
            Add to favourites
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
          </div>
        </div>
        <article className="footer-details">
          <p className="text-small">
            <span style={{ fontWeight: "bold" }}>Location:</span> {data.country}{" "}
            <br />
            <span style={{ fontWeight: "bold" }}>Local category:</span>{" "}
            {data.stars} <br />
            <span style={{ fontWeight: "bold" }}>Price</span> {data.price}{" "}
            <br />
            <span style={{ fontWeight: "bold" }}>Description:</span>
          </p>
          <p className="text-small">{data.description}</p>
          <button className="button primary">
            Contact{" "}
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99951 4.19998L8.99951 6.99998L12.9995 4.19998"
                stroke="#50614A"
                strokeWidth="1.26857"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 10.6V2.6C1 1.71634 1.71634 1 2.6 1H15.4C16.2837 1 17 1.71634 17 2.6V10.6C17 11.4837 16.2837 12.2 15.4 12.2H2.6C1.71634 12.2 1 11.4837 1 10.6Z"
                stroke="#50614A"
                strokeWidth="1.26857"
              />
            </svg>
          </button>
          <div className="hero-cards">
            <div
              className="card-image2"
              style={{
                backgroundImage: `url(${require(`./Assets/${data.image_small1}`)})`,
              }}
            ></div>
            <div
              className="card-image2"
              style={{
                backgroundImage: `url(${require(`./Assets/${data.image_small2}`)})`,
              }}
            ></div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default HotelPage;
