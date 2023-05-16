import React, { useEffect } from "react";
import "./ReservationList.css";
import { Link } from "react-router-dom";

const ReservationList = () => {
  return (
    <>
      <h1>Upcoming reservations</h1>
      <ul>
        <li>
          <h2>Name Restaurant</h2>
          <p>6:30am Fri 17 Nov, 2023</p>
          <Link>View detail</Link>
        </li>
      </ul>
    </>
  );
};

export default ReservationList;
