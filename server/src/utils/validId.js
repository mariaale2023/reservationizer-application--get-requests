const mongoose = require("mongoose");

const validId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = validId;

// https://stackoverflow.com/questions/13850819/can-i-determine-if-a-string-is-a-mongodb-objectid
