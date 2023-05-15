const express = require("express");
const cors = require("cors");
const app = express();
const validId = require("./utils/validId");
const formatReservationId = require("./utils/formatReservationId");
const reservationModel = require("./models/ReservationModel");

app.use(cors());
app.use(express.json());

app.get("/reservations", async (request, response) => {
  const reservations = await reservationModel.find({}).lean();
  const formattedReservation = reservations.map((reservation) => {
    return formatReservationId(reservation);
  });

  response.send(formattedReservation);
});

app.get("/reservations/:id", async (request, response) => {
  const { id } = request.params;
  const isValidId = validId(id);

  // Find the reservation with the given id
  const singleReservation = await reservationModel.findById(id).lean();
  const formattedReservation = formatReservationId(singleReservation);

  // If the reservation is not found, return 404 status code
  if (!singleReservation) {
    return response.status(404).send("Reservation not found");

    // Check if id is valid
  } else if (!isValidId) {
    return response.status(400).send("Id reservation is not valid");

    // Format the reservation object and send it in the response
  } else {
    response.json(formattedReservation);
  }
});

module.exports = app;
