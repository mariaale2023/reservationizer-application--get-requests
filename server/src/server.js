const port = process.env.PORT || 5001;
const connectionURI = process.env.DATABASE_URI;
const app = require("./app");

const mongoose = require("mongoose");
mongoose.connect(connectionURI);

app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});
