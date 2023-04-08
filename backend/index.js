const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");

const port = 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongo();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/web", require("./routes/web"));
app.use("/api/follow", require("./routes/follow"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello There !");
});
