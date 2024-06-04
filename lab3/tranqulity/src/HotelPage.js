import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import { hotelsList, getHotelById } from "./data/HotelsData";
import {toast} from "react-toastify";



function HotelPage() {
  const { id } = useParams();

  const fromRef = useRef();
  const toRef = useRef();
  const themeRef = useRef();
  const textRef = useRef();

  const [data, setData] = useState({}); 
  const [isLoading, setIsLoading] = useState(true); 
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const sendEmail = () =>{
    toast.info("Wysłano pomyślnie!");
    setModalVisible(false);
  }


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
          
        </div>
        <article className="footer-details">
          <p className="text-small">
            <span style={{ fontWeight: "bold" }}>Location:</span> {data.city}{" "}
            <br />
            <span style={{ fontWeight: "bold" }}>Local category:</span>{" "}
            {data.stars} <br />
            <span style={{ fontWeight: "bold" }}>Price</span> {data.price}{" "}
            <br />
            <span style={{ fontWeight: "bold" }}>Description:</span>
          </p>
          <p className="text-small">{data.description}</p>
          <button onClick = {toggleModal} className="button primary">
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
      <Modal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        className="auth-modal"
      >
        <h2>Send Email</h2>
        <form onSubmit={sendEmail}>
          <label>
            From:
            <input
              type="email"
              required ref={fromRef}
            />
          </label>

          <label>
            To:
            <input
              type="email"
              required ref={toRef}
            />
          </label>

          <label>
            Theme:
            <input
              type="text"
              required ref={themeRef}
            />
          </label>

          <label>
            <input
              type="text"
              required ref={textRef}
            />
          </label>

          <button type="submit" className="button primary">
            Send email
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default HotelPage;
