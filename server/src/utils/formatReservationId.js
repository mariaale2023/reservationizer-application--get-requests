const formatReservationId = ({ _id: id, ...chirp }) => ({ id, ...chirp });

module.exports = formatReservationId;
