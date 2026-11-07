require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const csrf = require("csrf");
const viewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");
const cors = require("cors");

const tokens = new csrf();

// //json server
// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('data.json')
// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// server.use(router)

// server.listen(process.env.JSONDB_PORT, () => {
//     console.log(`JSONDB Started at ${process.env.JSONDB_PORT}`)
// })

let app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

//config view engine
viewEngine(app);

//config body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

//init web routes
initWebRoutes(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
