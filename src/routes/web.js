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
    router.get("/app/notes/2", appController.notesLevel2);

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

    //em
    router.get("/app/notes/1/em", appController.emFlow);
    router.get("/app/notes/1/em/em_books_flow", appController.emBooksFlow);
    router.get("/app/notes/1/em/em_ques_flow", appController.emQuesFlow);
    router.get("/app/notes/1/em/em_math_flow", appController.emMathFlow);
    router.get("/app/notes/1/em/em_blast_flow", appController.emBlastFurFlow);
    router.get("/app/notes/1/em/em_heat_flow", appController.emHeatTreatFlow);
    router.get("/app/notes/1/em/em_wrought_flow", appController.emHeatWroughtFlow);
    router.get("/app/notes/1/em/em_crystal_flow", appController.emCrystalFlow);
    router.get("/app/notes/1/em/em_iron_ceramic_flow", appController.emIronFlow);
    router.get("/app/notes/1/em/em_glass_flow", appController.emGlassFlow);
    router.get("/app/notes/1/em/em_ceramic_flow", appController.emCeramicsFlow);
    router.get("/app/notes/1/em/em_corrosion_flow", appController.emCorrosionFlow);
    router.get("/app/notes/1/em/em_alloy_flow", appController.emAlloyFlow);
    router.get("/app/notes/1/em/em_composites_flow", appController.emCompositesFlow);
    router.get("/app/notes/1/em/em_plastic_flow", appController.emPlasticsFlow);
    router.get("/app/notes/1/em/em_phaseDiag_flow", appController.emPhasediagFlow);
    router.get("/app/notes/1/em/em_atomic_struct_flow", appController.emAtomicFlow);

    //tmm
    router.get("/app/notes/1/tmm", appController.tmmFlow);
    router.get("/app/notes/1/tmm/tmm_quess_flow", appController.tmmQuesFlow);

    //fh
    router.get("/app/notes/1/fh", appController.fhFlow);
    router.get("/app/notes/1/fh/fh_art_des_flow", appController.fhArtDesFlow);
    router.get("/app/notes/1/fh/fh_roman_flow", appController.fhRomanFlow);
    router.get("/app/notes/1/fh/fh_elizabethian_flow", appController.fhElizaFlow);
    router.get("/app/notes/1/fh/fh_georigian_flow", appController.fhGeorigianFlow);
    router.get("/app/notes/1/fh/fh_greek_flow", appController.fhGreekFlow);
    router.get("/app/notes/1/fh/fh_egyptian_flow", appController.fhEgyptFlow);
    router.get("/app/notes/1/fh/fh_renaissance_flow", appController.fhRenasiFlow);
    router.get("/app/notes/1/fh/fh_silk_flow", appController.fhSilkFlow);
    router.get("/app/notes/1/fh/fh_jeans_his_flow", appController.fhJeansFlow);
    router.get("/app/notes/1/fh/fh_muslin_flow", appController.fhMuslinFlow);
    router.get("/app/notes/1/fh/fh_handloom_flow", appController.fhHandloomFlow);

    //pse
    router.get("/app/notes/1/pse", appController.pseFlow);
    router.get("/app/notes/1/pse/pse_books_flow", appController.pseBooksFlow);
    router.get("/app/notes/1/pse/pse_ques_flow", appController.pseQuesFlow);
    router.get("/app/notes/1/pse/pse_handnotes_flow", appController.pseHandNotesFlow);
    router.get("/app/notes/1/pse/pse_intro_flow", appController.pseIntroFlow);
    router.get("/app/notes/1/pse/pse_physical_struc_flow", appController.psePhyStructFlow);
    router.get("/app/notes/1/pse/pse_chemical_struc_flow", appController.pseChemStructFlow);
    router.get("/app/notes/1/pse/pse_molWei_flow", appController.pseMWFlow);
    router.get("/app/notes/1/pse/pse_step_growth_flow", appController.pseStepFlow);
    router.get("/app/notes/1/pse/pse_chain_growth_flow", appController.pseChainFlow);
    router.get("/app/notes/1/pse/pse_thermal_flow", appController.pseThermalFlow);
    router.get("/app/notes/1/pse/pse_degrad_flow", appController.pseDegradFlow);
    router.get("/app/notes/1/pse/pse_polymer_tec_flow", appController.psePolymTechFlow);
    router.get("/app/notes/1/pse/pse_application_flow", appController.pseAppPolyFlow);
    router.get("/app/notes/1/pse/pse_morpho_flow", appController.pseMorphoFlow);


    //ntf
    router.get("/app/notes/1/ntf", appController.ntfFlow);
    router.get("/app/notes/1/ntf/ntf_books_flow", appController.ntfBooksFlow);
    router.get("/app/notes/1/ntf/ntf_ques_flow", appController.ntfQuesFlow);
    router.get("/app/notes/1/ntf/ntf_hnotes_flow", appController.ntfNotesFlow);
    router.get("/app/notes/1/ntf/ntf_suggestion_flow", appController.ntfSuggFlow);
    router.get("/app/notes/1/ntf/ntf_intro_flow", appController.ntfIntroFlow);
    router.get("/app/notes/1/ntf/ntf_flax_flow", appController.ntfFlaxFlow);
    router.get("/app/notes/1/ntf/ntf_wool_flow", appController.ntfWoolFlow);
    router.get("/app/notes/1/ntf/ntf_jute_flow", appController.ntfJuteFlow);
    router.get("/app/notes/1/ntf/ntf_silk_flow", appController.ntfSilkFlow);
    router.get("/app/notes/1/ntf/ntf_sisal_flow", appController.ntfSisalFlow);
    router.get("/app/notes/1/ntf/ntf_hemp_flow", appController.ntfHempFlow);
    router.get("/app/notes/1/ntf/ntf_palf_flow", appController.ntfPalfFlow);
    router.get("/app/notes/1/ntf/ntf_kapok_flow", appController.ntfKapokFlow);
    router.get("/app/notes/1/ntf/ntf_asbestos_flow", appController.ntfAsbestosFlow);
    router.get("/app/notes/1/ntf/ntf_other_fib_flow", appController.ntfOtherFibFlow);

    //cp
    router.get("/app/notes/1/cp", appController.cpFlow);


    //bce
    router.get("/app/notes/1/bce", appController.bceFlow);
    router.get("/app/notes/1/bce/bce_ques_flow", appController.bceQuesFlow);
    router.get("/app/notes/1/bce/all_sheets_bce_flow", appController.bceAllSheetsFlow);
    router.get("/app/notes/1/bce/part_a_bce_flow", appController.bcePartAFlow);
    router.get("/app/notes/1/bce/part_b_bce_flow", appController.bcePartBFlow);
    router.get("/app/notes/1/bce/full_ab_bce_flow", appController.bceFullABFlow);
    router.get("/app/notes/1/bce/intro_bce_flow", appController.bceIntroFlow);
    router.get("/app/notes/1/bce/lang_func_bce_flow", appController.bceLangFuncFlow);
    router.get("/app/notes/1/bce/communi_bce_flow", appController.bceCommuniFlow);
    router.get("/app/notes/1/bce/letter_bce_flow", appController.bceBizLetterFlow);
    router.get("/app/notes/1/bce/report_bce_flow", appController.bceReportFlow);
    router.get("/app/notes/1/bce/read_write_bce_flow", appController.bceReadWriteFlow);




    router.get("/app/labs", appController.labs);

    



    return app.use("/", router);

}

module.exports = initWebRoutes;