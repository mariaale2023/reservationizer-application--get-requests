const express = require("express");
const cors = require("cors");
const app = express();
const validId = require("./utils/validId");
const reservationModel = require("./models/ReservationModel");
const formatReservationId = require("./utils/formatReservationId");

app.use(cors());
app.use(express.json());

app.get("/reservations", async (request, response) => {
  // const reservations = await reservationModel.find({}).lean();
  // const formattedReservation = reservations.map((reservation) => {
  //   return formatReservationId(reservation);
  // });

  // response.send(formattedReservation);

  const reservations = await reservationModel.find({});
  const formattedReservations = reservations.map((reservation) => {
    return formatReservationId(reservation);
  });
  return response.status(200).send(formattedReservations);
});

app.get("/reservations/:id", async (request, response) => {
  const id = request.params.id;
  const isValidId = validId(id);

  // Find the reservation with the given id

  // Check if id is valid

  if (!isValidId) {
    return response.status(400).send("Id reservation is not valid");
  }

  // If the reservation is not found, return 404 status code
  const singleReservation = await reservationModel.findById(id);
  const formattedReservation = formatReservationId(singleReservation);
  if (!formattedReservation) {
    return response.status(404).send("Reservation not found");
  }

  // Format the reservation object and send it in the response
  response.json(formattedReservation);
});

module.exports = app;
