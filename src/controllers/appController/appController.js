const express = require('express');
const app = express();
let router = express.Router();


let noteLevel1Subs = require('./academic/notes/level1/level1Subs')
//math1
let math1Flow = require('./academic/notes/level1/subs/math1/math1')
let math1BooksFlow = require('./academic/notes/level1/subs/math1/topics/appMath1Books')

//math2
let math2Flow = require('./academic/notes/level1/subs/math2/math2')

let appIntro = (req, res) => {
    let appIntro = {
        msg: "Welcome to notebot app engine 😀",
        version: "0.1a"
    }

    return res.send(appIntro);
};


let notes = (req, res) => {
    let noteLevels = {
        noteLevels: [
            {
                noteLevel: 1,
                route: '/app/notes/1'
            },
            {
                noteLevel: 2,
                route: '/app/notes/2'
            },
            {
                noteLevel: 3,
                route: '/app/notes/3'
            },
            {
                noteLevel: 4,
                route: '/app/notes/4'
            }
        ]
    }
    return res.send(noteLevels);
};

//level1
let level1Notes = (req, res) => {
    return res.send(noteLevel1Subs);
};

//level1 -> math1
let math1 = (req, res) => {
    return res.send(math1Flow);
};

let math1Books = (req, res) => {
    return res.send(math1BooksFlow);
};

//level1 -> math2
let math2 = (req, res) => {
    return res.send(math2Flow);
};


let labs = (req, res) => {
    let labLevels = {
        labLevels: [
            {
                labLevel: 1,
                route: '/app/labs/1'
            },
            {
                labLevel: 2,
                route: '/app/labs/2'
            },
            {
                labLevel: 3,
                route: '/app/labs/3'
            },
            {
                labLevel: 4,
                route: '/app/labs/4'
            }
        ]
    }
    return res.send(labLevels);
};





module.exports = {
    intro: appIntro,
    notes: notes,
    labs: labs,
    notesLevel1: level1Notes,
    math1: math1,
    math1Books: math1Books,
    math2: math2,
}