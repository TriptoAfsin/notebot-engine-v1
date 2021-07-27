const express = require('express');
const chatbotController = require('../controllers/chatbotController');
const homepageController = require('../controllers/homepageController');
const appController = require('../controllers/appController/appController');

let router = express.Router();

let initWebRoutes = (app) => {


    //get routes
    router.get("/", chatbotController.testMsg);

    router.get("/webhook", chatbotController.getWebhook);

    router.get("/homepage", homepageController.getHomepage);

    router.get("/profile", homepageController.getFacebookUserProfile);



    //post routes
    router.post("/webhook", chatbotController.postWebhook);

    router.post("/set-up-user-fb-profile", homepageController.setUpUserFacebookProfile);



    //app routes
    router.get("/app", appController.intro);
    router.get("/app/notes", appController.notes);
    router.get("/app/notes/1", appController.notesLevel1);

    //math1
    router.get("/app/notes/1/math1", appController.math1);
    router.get("/app/notes/1/math1/math1_books_flow", appController.math1Books);
    router.get("/app/notes/1/math1/math1_solve18_flow", appController.math1Solve2018Flow);
    router.get("/app/notes/1/math1/math1_ques_flow", appController.math1Ques);
    router.get("/app/notes/1/math1/math1_conv_div_flow", appController.math1Conver);
    router.get("/app/notes/1/math1/math1_exapnsion_flow", appController.math1Exapnsion);
    router.get("/app/notes/1/math1/math1_diff_flow", appController.math1Diff);
    router.get("/app/notes/1/math1/math1_integre_flow", appController.math1Int);
    router.get("/app/notes/1/math1/math1_extreme_flow", appController.math1Extrema);
    router.get("/app/notes/1/math1/math1_conics_flow", appController.math1Conic);
    router.get("/app/notes/1/math1/math1_vector_flow", appController.math1VectorFlow);
    router.get("/app/notes/1/math1/math1_co_ord_flow", appController.math1CoOrdFlow);
    router.get("/app/notes/1/math1/math1_matrix_flow", appController.math1MatrixFlow);
    router.get("/app/notes/1/math1/math1_linear_flow", appController.math1LinearFlow);
    router.get("/app/notes/1/math1/math1_change_axes_flow", appController.math1ChangeofAxesFlow);

    //math2
    router.get("/app/notes/1/math2", appController.math2);
    router.get("/app/notes/1/math2/math2_books_flow", appController.math2BooksFlow);
    router.get("/app/notes/1/math2/math2_ques_flow", appController.math2QuesFlow);
    router.get("/app/notes/1/math2/math2_suggestion_flow", appController.math2SuggFlow);
    router.get("/app/notes/1/math2/math2_moivre_flow", appController.math2moivreFlow);
    router.get("/app/notes/1/math2/math2_homo_flow", appController.math2HomoFlow);
    router.get("/app/notes/1/math2/math2_lde_flow", appController.math2LDEFlow);
    router.get("/app/notes/1/math2/math2_exact_flow", appController.math2ExactFlow);
    router.get("/app/notes/1/math2/math2_red_homo_flow", appController.math2RedHomoFlow);
    router.get("/app/notes/1/math2/math2_dif_eqn_flow", appController.math2DiffEqnFlow);
    router.get("/app/notes/1/math2/math2_linear_eqn_flow", appController.math2linEqnFlow);
    router.get("/app/notes/1/math2/math2_residue_flow", appController.math2residueFlow);
    router.get("/app/notes/1/math2/math2_line_int_flow", appController.math2LineIntFlow);
    router.get("/app/notes/1/math2/math2_method_var_flow", appController.math2methodVarFlow);
    router.get("/app/notes/1/math2/math2_analy_func_flow", appController.math2AnalyFuncFlow);
    router.get("/app/notes/1/math2/math2_vector_flow", appController.math2VectorFlow);
    router.get("/app/notes/1/math2/math2_ode_flow", appController.math2odeFlow);
    router.get("/app/notes/1/math2/math2_separation_flow", appController.math2SepaVarFlow);
    router.get("/app/notes/1/math2/math2_laplace_flow", appController.math2laplaceFlow);
    router.get("/app/notes/1/math2/math2_cx_num_flow", appController.math2ComplexFlow);


    //chem1
    router.get("/app/notes/1/chem1", appController.chem1Flow);
    router.get("/app/notes/1/chem1/chem1_books_flow", appController.chem1BooksFlow);
    router.get("/app/notes/1/chem1/chem1_ques_flow", appController.chem1QuesFlow);
    router.get("/app/notes/1/chem1/chem1_periodic_flow", appController.chem1PeriodicFlow);
    router.get("/app/notes/1/chem1/chem1_dilute_flow", appController.chem1DiluFlow);
    router.get("/app/notes/1/chem1/chem1_complx_flow", appController.chem1CxCompFlow);
    router.get("/app/notes/1/chem1/chem1_bond_flow", appController.chem1BondFlow);
    router.get("/app/notes/1/chem1/chem1_kinetics_flow", appController.chem1KineticsFlow);
    router.get("/app/notes/1/chem1/chem1_equi_flow", appController.chem1EquiFlow);
    router.get("/app/notes/1/chem1/chem1_photo_flow", appController.chem1PhotoFlow);
    router.get("/app/notes/1/chem1/chem1_analy_flow", appController.chem1AnalyFlow);
    router.get("/app/notes/1/chem1/chem1_coll_flow", appController.chem1CollFlow);
    router.get("/app/notes/1/chem1/chem1_acid_base_flow", appController.chem1AcidBaseFlow);


    //chem2
    router.get("/app/notes/1/chem2", appController.chem2Flow);
    router.get("/app/notes/1/chem2/chem2_books_flow", appController.chem2BooksFlow);
    router.get("/app/notes/1/chem2/chem2_ques_flow", appController.chem2QuesFlow);
    router.get("/app/notes/1/chem2/chem2_org_meta_flow", appController.chem2OrganMetalFlow);
    router.get("/app/notes/1/chem2/chem2_carbonyl_flow", appController.chem2CarboNylFlow);
    router.get("/app/notes/1/chem2/chem2_org_reac_flow", appController.chem2orgRecFlow);
    router.get("/app/notes/1/chem2/chem2_alc_phe_flow", appController.chem2AlcPhenFlow);
    router.get("/app/notes/1/chem2/chem2_amino_flow", appController.chem2AminoFlow);
    router.get("/app/notes/1/chem2/chem2_carbo_flow", appController.chem2CarboHyFlow);
    router.get("/app/notes/1/chem2/chem2_color_dye_flow", appController.chem2ColorDyeFlow);
    router.get("/app/notes/1/chem2/chem2_carboxylic_flow", appController.chem2CarboxylicAcidFlow);
    router.get("/app/notes/1/chem2/chem2_amine_flow", appController.chem2AmineFlow);
    router.get("/app/notes/1/chem2/chem2_solubulity_flow", appController.chem2SolubilityFlow);


    //phy1
    router.get("/app/notes/1/phy1", appController.phy1Flow);
    router.get("/app/notes/1/phy1/phy1_books_flow", appController.phy1BooksFlow);
    router.get("/app/notes/1/phy1/phy1_ques_flow", appController.phy1QuesFlow);
    router.get("/app/notes/1/phy1/phy1_circular_flow", appController.phy1CircularFlow);
    router.get("/app/notes/1/phy1/phy1_hydro_flow", appController.phy1HydroFlow);
    router.get("/app/notes/1/phy1/phy1_diffraction_flow", appController.phy1DiffracFlow);
    router.get("/app/notes/1/phy1/phy1_interfer_flow", appController.phy1InterFlow);
    router.get("/app/notes/1/phy1/phy1_polar_flow", appController.phy1PolarFlow);
    router.get("/app/notes/1/phy1/phy1_elas_flow", appController.phy1ElasticityFlow);
    router.get("/app/notes/1/phy1/phy1_visco_flow", appController.phy1ViscoFlow);
    router.get("/app/notes/1/phy1/phy1_surface_flow", appController.phy1SurfaceFlow);


    //phy2
    router.get("/app/notes/1/phy2", appController.phy2Flow);
    router.get("/app/notes/1/phy2/phy2_books_flow", appController.phy2BooksFlow);
    router.get("/app/notes/1/phy2/phy2_ques_flow", appController.phy2QuesFlow);
    router.get("/app/notes/1/phy2/phy2_kinetic_flow", appController.phy2KineticFlow);
    router.get("/app/notes/1/phy2/phy2_electricity_flow", appController.phy2ElectricFlow);
    router.get("/app/notes/1/phy2/phy2_thermodynamics_flow", appController.phy2ThermoFlow);
    router.get("/app/notes/1/phy2/phy2_radiation_flow", appController.phy2RadFlow);
    router.get("/app/notes/1/phy2/phy2_magnet_flow", appController.phy2MagFlow);
    router.get("/app/notes/1/phy2/phy2_modern_flow", appController.phy2ModernFlow);
    router.get("/app/notes/1/phy2/phy2_entropy_flow", appController.phy2EntropyFlow);


    router.get("/app/labs", appController.labs);

    



    return app.use("/", router);

}

module.exports = initWebRoutes;