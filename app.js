let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");


let indexRouter = require("./routes/index");

require("dotenv").config();

let { middleware } = require("./lib");

let app = express();

// view engine setup
app.set('view engine', 'html');

app.use(logger("dev"));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(middleware);
app.use("/", indexRouter);

const db = require(__dirname + "/models");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

app.get("/info-list", function (req, res, next) {
  db.Information.findAll().then(resp => {
    console.log(resp)
    res.send(resp);
  }).catch(err => {
    console.log(err)
    res.send({ success: false, err: err })
  })
});

app.put("/update-list/:id", function (req, res, next) {
  db.Information.update({
    Name: req.body.name,
    Phone: req.body.phone,
    Email: req.body.email,
  }, { where: { id: req.params.id } }
  ).then(function (rowsUpdated) {
    res.json(rowsUpdated);
  }).catch(next)
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
