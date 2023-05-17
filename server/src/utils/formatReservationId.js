const formatReservationId = (reservation) => {
  if (!reservation) {
    return null; // Or handle the case in an appropriate way
  }

  return {
    id: reservation._id,
    partySize: reservation.partySize,
    date: reservation.date,
    userId: reservation.userId,
    restaurantName: reservation.restaurantName,
  };
};

module.exports = formatReservationId;
