const express = require('express');

const app = express();

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); //static folder
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}


module.exports = configViewEngine;