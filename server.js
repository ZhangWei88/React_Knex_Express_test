const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const morgan = require("morgan");

//routes import
const articleRoutes = require("./routes/article.routes");

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
app.use("/api/articles", articleRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
