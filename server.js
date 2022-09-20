const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const morgan = require("morgan");

//routes import

//express app
const app = express();
const port = process.env.PORT || 5000;

//middleware define
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(morgan("dev"));

//routes

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
