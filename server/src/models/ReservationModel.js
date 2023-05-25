// FIXME export a model for Reservations
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationModel = new Schema({
  partySize: { type: Number, required: true },
  date: { type: Date, required: true },
  userId: { type: String, required: true },
  restaurantName: { type: String, required: true },
});

const Reservations = mongoose.model("Reservation", reservationModel);

module.exports = Reservations;
