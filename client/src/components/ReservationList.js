import React, { useState, useEffect } from "react";
import "./ReservationList.css";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      // const endpoint =
      //   process.env.REACT_APP_API_ENDPOINT || "http://localhost:5001";
      // const response = await fetch(`${endpoint}/reservations`);
      const response = await fetch("http://localhost:5001/reservations");
      const data = await response.json();
      setReservations(data);
    };

    // call the function
    fetchData();
    // make sure to catch any error
    // .catch(console.error);
  }, []);
  return (
    <>
      <h1>Upcoming reservations</h1>
      <ul className="grid">
        {reservations.map((reservation) => (
          <li className="reservation-single" key={reservation._id}>
            <h2>{reservation.restaurantName}</h2>
            <p>{formatDate(reservation.date)}</p>
            <Link to={`/reservations/${reservation.id}`}>View detail</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReservationList;
