const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const FileUpload = require("express-fileupload");

const indexRouter = require("./routes/index");
const carsRouter = require("./routes/cars");

const app = express();

app.use(cors());
app.use(FileUpload());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');

//by view
app.use(express.static(path.join(__dirname, "views")));
app.use("/", indexRouter);

//by api
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", carsRouter);

// module.exports = app;

var port = process.env.PORT || '8000';
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));