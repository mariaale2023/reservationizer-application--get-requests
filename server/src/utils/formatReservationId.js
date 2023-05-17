const formatReservationId = (reservation) => {
  return {
    id: reservation._id,
    partySize: reservation.partySize,
    date: reservation.date,
    userId: reservation.userId,
    restaurantName: reservation.restaurantName,
  };
};

//   { _id: id, ...reservation }) => ({
//   id,
//   ...reservation,
// }

module.exports = formatReservationId;
