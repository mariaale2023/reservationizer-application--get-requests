const cors = require("cors");

const port = process.env.API_ENDPOINT || 5001;
// const enpoint = process.env.API_ENDPOINT || 5001;
const connectionURI =
  process.env.DATABASE_URI || "mongodb://localhost:27017/mongo";
const app = require("./app");

app.use(cors({ origin: ["https://reservationizer-app.onrender.com/"] }));

const mongoose = require("mongoose");
mongoose.connect(connectionURI);

app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});
