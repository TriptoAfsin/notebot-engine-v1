const express = require('express');
const app = express();
let router = express.Router();

require("dotenv").config();




let deploymentEnvDetector = () => {
    let appProduction = process.env.appProduction;
    console.log(`App Production: ${appProduction}`)
    let urlModifier
    if(appProduction === 'true'){
        return urlModifier = 's://'
    }
    else{
        return urlModifier = '://'
    }

}


let noteLevel1Subs = require('./academic/notes/level1/level1Subs')
//math1
let math1Flow = require('./academic/notes/level1/subs/math1/math1')
let math1BooksFlow = require('./academic/notes/level1/subs/math1/topics/appMath1Books')
let math1QuesFlow = require('./academic/notes/level1/subs/math1/topics/appMath1Ques')
let math1Conver = require('./academic/notes/level1/subs/math1/topics/appMath1Conv')
let math1Expan = require('./academic/notes/level1/subs/math1/topics/appMath1Expansion')
let math1Diff = require('./academic/notes/level1/subs/math1/topics/math1Diff')
let math1Inte = require('./academic/notes/level1/subs/math1/topics/math1Integretion')
let math1Extrerma = require('./academic/notes/level1/subs/math1/topics/appMath1Extreme')
let math1Conics = require('./academic/notes/level1/subs/math1/topics/appMath1Conics')
let math1Vector = require('./academic/notes/level1/subs/math1/topics/appMath1Vector')
let math1CoOrd = require('./academic/notes/level1/subs/math1/topics/appMath1CoOrd')
let math1Matrix = require('./academic/notes/level1/subs/math1/topics/appMath1Matrix')
let math1Linear = require('./academic/notes/level1/subs/math1/topics/appMath1Linear')
let math1Axes = require('./academic/notes/level1/subs/math1/topics/appMath1ChangeofAxes')


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

    var fullUrl = req.protocol + deploymentEnvDetector() + req.get('host') + req.originalUrl;

    let noteLevels = {
        noteLevels: [
            {
                noteLevel: 1,
                route: `${fullUrl}/1`
            },
            {
                noteLevel: 2,
                route: `${fullUrl}/2`
            },
            {
                noteLevel: 3,
                route: `${fullUrl}/3`
            },
            {
                noteLevel: 4,
                route: `${fullUrl}/4`
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

let math1Ques = (req, res) => {
    return res.send(math1QuesFlow);
};

let math1Convergence = (req, res) => {
    return res.send(math1Conver);
};

let math1Expansion = (req, res) => {
    return res.send(math1Expan);
};

let math1Differen = (req, res) => {
    return res.send(math1Diff);
};

let math1Integretion = (req, res) => {
    return res.send(math1Inte);
};

let math1Extrema = (req, res) => {
    return res.send(math1Extrerma);
};

let math1Conic = (req, res) => {
    return res.send(math1Conics);
};

let math1VectorFlow = (req, res) => {
    return res.send(math1Vector);
};

let math1CoOrdFlow = (req, res) => {
    return res.send(math1CoOrd);
};

let math1MatrixFlow = (req, res) => {
    return res.send(math1Matrix);
};

let math1LinearFlow = (req, res) => {
    return res.send(math1Linear);
};

let math1ChangeofAxesFlow = (req, res) => {
    return res.send(math1Axes);
};

//level1 -> math2
let math2 = (req, res) => {
    return res.send(math2Flow);
};


let labs = (req, res) => {

    var fullUrl = req.protocol + deploymentEnvDetector() + req.get('host') + req.originalUrl;


    let labLevels = {
        labLevels: [
            {
                labLevel: 1,
                route: `${fullUrl}/1`
            },
            {
                labLevel: 2,
                route: `${fullUrl}/2`
            },
            {
                labLevel: 3,
                route: `${fullUrl}/3`
            },
            {
                labLevel: 4,
                route: `${fullUrl}/4`
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

    //math1
    math1: math1,
    math1Books: math1Books,
    math1Ques: math1Ques,
    math1Conver: math1Convergence,
    math1Exapnsion: math1Expansion,
    math1Diff: math1Differen,
    math1Int: math1Integretion,
    math1Extrema: math1Extrema,
    math1Conic: math1Conic,
    math1VectorFlow: math1VectorFlow,
    math1CoOrdFlow: math1CoOrdFlow,
    math1MatrixFlow: math1MatrixFlow,
    math1LinearFlow: math1LinearFlow,
    math1ChangeofAxesFlow: math1ChangeofAxesFlow,

    math2: math2,
}