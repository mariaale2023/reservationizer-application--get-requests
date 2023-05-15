const express = require("express");
const cors = require("cors");
const app = express();
const validId = require("./utils/validId");
const formatResevationId = require("./utils/formatReservationId");
const reservationModel = require("./models/ReservationModel");

app.use(cors());
app.use(express.json());

app.get("/reservations", async (request, response) => {
  const reservations = await reservationModel.find({}).lean();
  const formattedReservation = reservations.map((reservation) => {
    return formatResevationId(reservation);
  });

  response.send(formattedReservation);
});

app.get("/reservations/:id", async (request, response) => {
  const { id } = request.params;
  const reservations = await reservationModel.findById(id).lean();
  const formattedReservation = formatResevationId(reservations);
  response.send(formattedReservation);
});

module.exports = app;
