const express = require('express');

let router = express.Router();

let appIntro = (req, res) => {
    let appIntro = {
        msg: "Welcome to notebot app engine 😀",
        version: "0.1a"
    }

    return res.send(appIntro);
};



module.exports = {
    intro: appIntro
}