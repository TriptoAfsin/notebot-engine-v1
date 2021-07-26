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
let math2Books = require('./academic/notes/level1/subs/math2/topics/appMath2Books')
let math2Ques = require('./academic/notes/level1/subs/math2/topics/appMath2Ques')
let math2Sugg = require('./academic/notes/level1/subs/math2/topics/appMath2Sugg')
let math2moivre = require('./academic/notes/level1/subs/math2/topics/appMath2Moivre')
let math2Homo = require('./academic/notes/level1/subs/math2/topics/appMath2Homo')
let math2LDE = require('./academic/notes/level1/subs/math2/topics/appMath2Lde')
let math2Exact = require('./academic/notes/level1/subs/math2/topics/appMath2Exact')
let math2RedHomo = require('./academic/notes/level1/subs/math2/topics/appMath2RedHomo')
let math2DiffEqn = require('./academic/notes/level1/subs/math2/topics/appMath2DiffEqn')
let math2linEqn = require('./academic/notes/level1/subs/math2/topics/appMath2LinearEqn')
let math2Residue = require('./academic/notes/level1/subs/math2/topics/appMath2Residue')
let math2lineInt = require('./academic/notes/level1/subs/math2/topics/appMath2LineInt')
let math2MethodVar = require('./academic/notes/level1/subs/math2/topics/appMath2Methodvar')
let math2AnnalyFunc = require('./academic/notes/level1/subs/math2/topics/math2AnalyFunc')
let math2Vector = require('./academic/notes/level1/subs/math2/topics/appMath2Vector')
let math2ode = require('./academic/notes/level1/subs/math2/topics/appMath2Ode')
let math2SepaVar = require('./academic/notes/level1/subs/math2/topics/appMath2SepaVar')
let math2laplace = require('./academic/notes/level1/subs/math2/topics/appMath2Laplace')
let math2Complex = require('./academic/notes/level1/subs/math2/topics/appMath2Complex')


//chem1
let chem1appFlow = require('./academic/notes/level1/subs/chem1/chem1')
let chem1Books = require('./academic/notes/level1/subs/chem1/topics/appChem1Books')
let chem1Ques = require('./academic/notes/level1/subs/chem1/topics/appChem1Questions')
let chem1Periodic = require('./academic/notes/level1/subs/chem1/topics/chem1PeriodicProp')
let chem1Dilu = require('./academic/notes/level1/subs/chem1/topics/appChem1Dil')
let chem1Complex = require('./academic/notes/level1/subs/chem1/topics/appChem1CxComp')
let chem1Bond = require('./academic/notes/level1/subs/chem1/topics/appChem1Bond')
let chem1Kinetics = require('./academic/notes/level1/subs/chem1/topics/appChem1Kinetic')
let chem1ChemicalEqui = require('./academic/notes/level1/subs/chem1/topics/appChem1ChemEqui')
let chem1Photo = require('./academic/notes/level1/subs/chem1/topics/appChem1Photo')
let chem1Analy = require('./academic/notes/level1/subs/chem1/topics/appChem1Analy')
let chem1Colloid = require('./academic/notes/level1/subs/chem1/topics/appChem1Coll')
let chem1AcidBase = require('./academic/notes/level1/subs/chem1/topics/appChem1AcidBase')


//chem2
let chem2appFlow = require('./academic/notes/level1/subs/chem2/chem2')
let chem2Books = require('./academic/notes/level1/subs/chem2/topics/appChem2Books')
let chem2Ques = require('./academic/notes/level1/subs/chem2/topics/appChem2Ques')
let chem2OrganMetal = require('./academic/notes/level1/subs/chem2/topics/appChem2OrganMet')
let chem2Carbonyl = require('./academic/notes/level1/subs/chem2/topics/appChem2Carbonyl')
let chem2OrgReac = require('./academic/notes/level1/subs/chem2/topics/appChem2OrgRecMech')
let chem2AlcPhen = require('./academic/notes/level1/subs/chem2/topics/appChem2AlcPhenol')
let chem2Amino = require('./academic/notes/level1/subs/chem2/topics/appChem2Amino')
let chem2Carboh = require('./academic/notes/level1/subs/chem2/topics/appChem2Carbo')
let chem2ColorDye = require('./academic/notes/level1/subs/chem2/topics/appChem2ColorDye')
let chem2CarboxylicAcid = require('./academic/notes/level1/subs/chem2/topics/appChem2CarboxAcid')
let chem2Amine = require('./academic/notes/level1/subs/chem2/topics/appChem2Amine')
let chem2Sollubility = require('./academic/notes/level1/subs/chem2/topics/appChem2Solu')




/*--------------------------------------------------------------------------*/ 


let routeFunc = (objectToSend) => {
    (req, res) => {
        console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
        return res.send(objectToSend);
    }
}

/*---------------------------------------------------------------------------*/

let appIntro = (req, res) => {
    let appIntro = {
        msg: "Welcome to notebot app engine 😀",
        version: "0.1a"
    }

    console.log("🟠 App Platform Called")

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

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)

    return res.send(noteLevel1Subs);
};

//level1 -> math1
let math1 = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Flow);
};

let math1Books = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1BooksFlow);
};

let math1Ques = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1QuesFlow);
};

let math1Convergence = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Conver);
};

let math1Expansion = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Expan);
};

let math1Differen = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Diff);
};

let math1Integretion = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Inte);
};

let math1Extrema = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Extrerma);
};

let math1Conic = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Conics);
};

let math1VectorFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Vector);
};

let math1CoOrdFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1CoOrd);
};

let math1MatrixFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Matrix);
};

let math1LinearFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Linear);
};

let math1ChangeofAxesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Axes);
};

//level1 -> math2
let math2 = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Flow);
};

let math2BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Books);
};

let math2QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Ques);
};

let math2SuggFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Sugg);
};

let math2moivreFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2moivre);
};

let math2HomoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Homo);
};

let math2LDEFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2LDE);
};

let math2ExactFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Exact);
};

let math2RedHomoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2RedHomo);
};

let math2DiffEqnFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2DiffEqn);
};

let math2linEqnFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2linEqn);
};

let math2residueFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Residue);
};

let math2LineIntFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2lineInt);
};

let math2methodVarFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2MethodVar);
};

let math2AnalyFuncFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2AnnalyFunc);
};

let math2VectorFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Vector);
};

let math2odeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2ode);
};

let math2SepaVarFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2SepaVar);
};

let math2laplaceFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2laplace);
};

let math2ComplexFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Complex);
};

//chem1
let chem1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1appFlow);
};

let chem1BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Books);
};

let chem1QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Ques);
};


let chem1PeriodicFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Periodic);
};


let chem1DiluFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Dilu);
};

let chem1CxCompFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Complex);
};

let chem1BondFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Bond);
};

let chem1KineticsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Kinetics);
};


let chem1EquiFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1ChemicalEqui);
};

let chem1PhotoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Photo);
};


let chem1AnalyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Analy);
};


let chem1CollFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Colloid);
};

let chem1AcidBaseFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1AcidBase);
};


//chem2
let chem2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2appFlow);
};

let chem2BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Books);
};

let chem2QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Ques);
};

let chem2OrganMetalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2OrganMetal);
};

let chem2CarboNylFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Carbonyl);
};


let chem2orgRecFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2OrgReac);
};

let chem2AlcPhenFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2AlcPhen);
};

let chem2AminoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Amino);
};

let chem2CarboHyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Carboh);
};

let chem2ColorDyeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2ColorDye);
};

let chem2CarboxylicAcidFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2CarboxylicAcid);
};

let chem2AmineFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Amine);
};

let chem2SolubilityFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Sollubility);
};


/*-----------------------------------------------------------------------------------------------------------------------------------*/ 

let labs = (req, res) => {

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)

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
    math2BooksFlow: math2BooksFlow,
    math2QuesFlow: math2QuesFlow,
    math2SuggFlow: math2SuggFlow,
    math2moivreFlow: math2moivreFlow,
    math2HomoFlow: math2HomoFlow,
    math2LDEFlow: math2LDEFlow,
    math2ExactFlow: math2ExactFlow,
    math2RedHomoFlow: math2RedHomoFlow,
    math2DiffEqnFlow: math2DiffEqnFlow,
    math2linEqnFlow: math2linEqnFlow,
    math2residueFlow: math2residueFlow,
    math2LineIntFlow: math2LineIntFlow,
    math2methodVarFlow: math2methodVarFlow,
    math2AnalyFuncFlow: math2AnalyFuncFlow,
    math2VectorFlow: math2VectorFlow,
    math2odeFlow: math2odeFlow,
    math2SepaVarFlow: math2SepaVarFlow,
    math2laplaceFlow: math2laplaceFlow,
    math2ComplexFlow: math2ComplexFlow,


    chem1Flow: chem1Flow,
    chem1BooksFlow: chem1BooksFlow,
    chem1QuesFlow: chem1QuesFlow,
    chem1PeriodicFlow: chem1PeriodicFlow,
    chem1DiluFlow: chem1DiluFlow,
    chem1CxCompFlow: chem1CxCompFlow,
    chem1BondFlow: chem1BondFlow,
    chem1KineticsFlow: chem1KineticsFlow,
    chem1EquiFlow: chem1EquiFlow,
    chem1PhotoFlow: chem1PhotoFlow,
    chem1AnalyFlow: chem1AnalyFlow,
    chem1CollFlow: chem1CollFlow,
    chem1AcidBaseFlow: chem1AcidBaseFlow,


    chem2Flow: chem2Flow,
    chem2BooksFlow: chem2BooksFlow,
    chem2QuesFlow: chem2QuesFlow,
    chem2OrganMetalFlow: chem2OrganMetalFlow,
    chem2CarboNylFlow: chem2CarboNylFlow,
    chem2orgRecFlow: chem2orgRecFlow,
    chem2AlcPhenFlow: chem2AlcPhenFlow,
    chem2AminoFlow: chem2AminoFlow,
    chem2CarboHyFlow: chem2CarboHyFlow,
    chem2ColorDyeFlow: chem2ColorDyeFlow,
    chem2CarboxylicAcidFlow: chem2CarboxylicAcidFlow,
    chem2AmineFlow: chem2AmineFlow,
    chem2SolubilityFlow: chem2SolubilityFlow,
}