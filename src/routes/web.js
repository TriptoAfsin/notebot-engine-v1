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
    router.get("/app/notes/1/ntf/quiz_flow", appController.ntfQuizFlow);

    //cp
    router.get("/app/notes/1/cp", appController.cpFlow);
    router.get("/app/notes/1/cp/books_cp_flow", appController.cpBooksFlow);
    router.get("/app/notes/1/cp/ques_cp_flow", appController.cpQuesFlow);
    router.get("/app/notes/1/cp/fundamental_cp_flow", appController.cpFundaFlow);
    router.get("/app/notes/1/cp/condition_cp_flow", appController.cpConditionalFlow);
    router.get("/app/notes/1/cp/loop_cp_flow", appController.cpLoopFlow);
    router.get("/app/notes/1/cp/array_cp_flow", appController.cpArrayFlow);
    router.get("/app/notes/1/cp/function_cp_flow", appController.cpFunctionFlow);
    router.get("/app/notes/1/cp/string_cp_flow", appController.cpStringFlow);
    router.get("/app/notes/1/cp/suggestion_cp_flow", appController.cpSuggFlow);


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

    //iae
    router.get("/app/notes/1/iae", appController.iaeFlow);
    router.get("/app/notes/1/iae/iae_books_flow", appController.iaeBooksFlow);
    router.get("/app/notes/1/iae/iae_ques_flow", appController.iaeQuesFlow);
    router.get("/app/notes/1/iae/iae_intro_flow", appController.iaeIntroFlow);
    router.get("/app/notes/1/iae/iae_full_slide_flow", appController.iaeFullSlideFlow);
    router.get("/app/notes/1/iae/iae_diff_woven_flow", appController.iaeDiffWovenFlow);
    router.get("/app/notes/1/iae/iae_brands_flow", appController.iaeBrandsFlow);
    router.get("/app/notes/1/iae/iae_cam_flow", appController.iaeCadFlow);
    router.get("/app/notes/1/iae/iae_shirt_flow", appController.iaeShirtFlow);

    //bfs
    router.get("/app/notes/1/bfs", appController.bfsFlow);
    router.get("/app/notes/1/bfs/bfs_lec3_flow", appController.bfsLec3Flow);

    //tpm
    router.get("/app/notes/1/tpm", appController.tpmFlow);
    router.get("/app/notes/1/tpm/tpm_ques_flow", appController.tpmQuesFlow);
    router.get("/app/notes/1/tpm/tpm_wov_fab_wet_flow", appController.tpmFabWetFlow);
    router.get("/app/notes/1/tpm/tpm_wov_fab_manu_flow", appController.tpmFabManuFlow);

    //fmg
    router.get("/app/notes/1/fmg", appController.fmgFlow);

    //iee
    router.get("/app/notes/1/iee", appController.ieeFlow);
    router.get("/app/notes/1/iee/iee_books_flow", appController.ieeBooksFlow);
    router.get("/app/notes/1/iee/iee_sheets_flow", appController.ieeSheetsFlow);
    router.get("/app/notes/1/iee/iee_handnotes_flow", appController.ieeNotesFlow);
    router.get("/app/notes/1/iee/iee_man_env_flow", appController.ieeManEnvFlow);
    router.get("/app/notes/1/iee/iee_soil_flow", appController.ieeSoilFlow);
    router.get("/app/notes/1/iee/iee_env_issue_flow", appController.ieeEnvIssueFlow);
    router.get("/app/notes/1/iee/iee_nature_env_flow", appController.ieeNatureEnvFlow);
    router.get("/app/notes/1/iee/iee_spf_upf_flow", appController.ieeSPFFlow);

    //ecb
    router.get("/app/notes/1/ecb", appController.ecbFlow);
    router.get("/app/notes/1/ecb/ecb_handNote_flow", appController.ecbNotesFlow);
    router.get("/app/notes/1/ecb/ecb_intro_flow", appController.ecbIntroFlow);


    //sss1
    router.get("/app/notes/2/sss1", appController.sss1Flow);
    router.get("/app/notes/2/sss1/sss1_books_flow", appController.sss1BooksFlow);
    router.get("/app/notes/2/sss1/sss1_blowRoom_flow", appController.sss1BlowRoomFlow);
    router.get("/app/notes/2/sss1/sss1_drawFrame_flow", appController.sss1DrawframeFlow);
    router.get("/app/notes/2/sss1/sss1_carding_flow", appController.sss1CardingFlow);
    router.get("/app/notes/2/sss1/sss1_intro_flow", appController.sss1IntroFlow);
    router.get("/app/notes/2/sss1/sss1_introFibre_flow", appController.sss1IntroFibFlow);


    //sss2
    router.get("/app/notes/2/sss2", appController.sss2Flow);
    router.get("/app/notes/2/sss2/sss2_ringFrame_flow", appController.sss2RingframeFlow);
    router.get("/app/notes/2/sss2/sss2_notes_flow", appController.sss2NotesFlow);


    //fyt
    router.get("/app/notes/2/fyt", appController.fytFlow);
    router.get("/app/notes/2/fyt/fyt_books_flow", appController.fytBooksFlow);
    router.get("/app/notes/2/fyt/fyt_hnotes_flow", appController.fytNotesFlow);
    router.get("/app/notes/2/fyt/fyt_sugg_flow", appController.fytSuggFlow);
    router.get("/app/notes/2/fyt/fyt_yarnNum_flow", appController.fytYarnNumFlow);
    router.get("/app/notes/2/fyt/fyt_yarnTwist_flow", appController.fytYarnTwistFlow);
    router.get("/app/notes/2/fyt/fyt_evennessTester_flow", appController.fytEvennessFlow);
    router.get("/app/notes/2/fyt/fyt_yarnCounting_flow", appController.fytCountFlow);
    router.get("/app/notes/2/fyt/fyt_afis_flow", appController.fytAfisFlow);
    router.get("/app/notes/2/fyt/fyt_iso_flow", appController.fytISOFlow);
    router.get("/app/notes/2/fyt/fyt_capaOptical_flow", appController.fytCapaOpticalFlow);

    //marketing
    router.get("/app/notes/2/marketing", appController.marketingFlow);
    router.get("/app/notes/2/marketing/marketing_books_flow", appController.marketingBooksFlow);
    router.get("/app/notes/2/marketing/marketing_notes_flow", appController.marketingNotesFlow);
    router.get("/app/notes/2/marketing/marketing_ques_flow", appController.marketingQuesFlow);
    router.get("/app/notes/2/marketing/marketing_suggestion_flow", appController.marketingSuggFlow);
    router.get("/app/notes/2/marketing/marketing_intro_flow", appController.marketingIntroFlow);
    router.get("/app/notes/2/marketing/marketing_func_flow", appController.marketingFuncMarketFlow);
    router.get("/app/notes/2/marketing/marketing_field_flow", appController.marketingFieldFlow);
    router.get("/app/notes/2/marketing/marketing_concept_flow", appController.marketingConceptFlow);
    router.get("/app/notes/2/marketing/marketing_market_orientation_flow", appController.marketingOrientationFlow);
    router.get("/app/notes/2/marketing/marketing_micro_env_flow", appController.marketingMicroEnvFlow);
    router.get("/app/notes/2/marketing/marketing_macro_env_flow", appController.marketingMacroEnvFlow);
    router.get("/app/notes/2/marketing/marketing_market_segment_flow", appController.marketingSegmentFlow);
    router.get("/app/notes/2/marketing/marketing_market_targeting_flow", appController.marketingTargetFlow);
    router.get("/app/notes/2/marketing/marketing_diff_pos_flow", appController.marketingDiffPosFlow);
    router.get("/app/notes/2/marketing/marketing_channel_distri_flow", appController.marketingChannelDistFlow);
    router.get("/app/notes/2/marketing/marketing_retailing_flow", appController.marketingRetailFlow);
    router.get("/app/notes/2/marketing/marketing_price_sys_flow", appController.marketingPriceFlow);
    router.get("/app/notes/2/marketing/marketing_consumer_buyer_flow", appController.marketingConsumerBuyerFlow);
    router.get("/app/notes/2/marketing/marketing_branding_pack_flow", appController.marketingBrandFlow);
    router.get("/app/notes/2/marketing/marketing_new_product_flow", appController.marketingNewProdFlow);
    router.get("/app/notes/2/marketing/marketing_competitive_flow", appController.marketingCompStartFlow);
    router.get("/app/notes/2/marketing/marketing_major_pricing_flow", appController.marketingMajorPriceFlow);


    //am1
    router.get("/app/notes/2/am1", appController.am1Flow);
    router.get("/app/notes/2/am1/am1_books_flow", appController.am1BooksFlow);
    router.get("/app/notes/2/am1/am1_hnotes_flow", appController.am1NotesFlow);
    router.get("/app/notes/2/am1/am1_ques_flow", appController.am1QuesFlow);
    router.get("/app/notes/2/am1/am1_structure_tex_flow", appController.am1StructTexFlow);
    router.get("/app/notes/2/am1/am1_sizing_sys_flow", appController.am1SizingFlow);
    router.get("/app/notes/2/am1/am1_seam_stitch_flow", appController.am1SeamFlow);
    router.get("/app/notes/2/am1/am1_trim_acces_flow", appController.am1TrimFlow);
    router.get("/app/notes/2/am1/am1_interlining_flow", appController.am1InterFlow);
    router.get("/app/notes/2/am1/am1_pattern_flow", appController.am1PatternFlow);
    router.get("/app/notes/2/am1/am1_marker_flow", appController.am1MarkerFlow);
    router.get("/app/notes/2/am1/am1_fabricInspection_flow", appController.am1FabInspectionFlow);

    //stat
    router.get("/app/notes/2/stat", appController.statFlow);
    router.get("/app/notes/2/stat/stat_books_flow", appController.statBooksFlow);
    router.get("/app/notes/2/stat/stat_hnotes_flow", appController.statNotesFlow);
    router.get("/app/notes/2/stat/stat_probab_flow", appController.statProbabFlow);
    router.get("/app/notes/2/stat/stat_intro_flow", appController.statIntroFlow);
    router.get("/app/notes/2/stat/stat_central_tend_flow", appController.statCentralFlow);
    router.get("/app/notes/2/stat/stat_cv_sd_flow", appController.statCVFlow);
    router.get("/app/notes/2/stat/stat_moments_flow", appController.statMomentsFlow);
    router.get("/app/notes/2/stat/stat_shapes_flow", appController.statShapeFlow);
    router.get("/app/notes/2/stat/stat_design_exp_flow", appController.statDesignExpFlow);
    router.get("/app/notes/2/stat/stat_normal_distri_flow", appController.statNormalFlow);
    router.get("/app/notes/2/stat/stat_binomial_distri_flow", appController.statBinomialFlow);
    router.get("/app/notes/2/stat/stat_poission_flow", appController.statPoissionFlow);
    router.get("/app/notes/2/stat/stat_regression_flow", appController.statRegressionFlow);

    //fm1
    router.get("/app/notes/2/fm1", appController.fm1Flow);
    router.get("/app/notes/2/fm1/fm1_books_flow", appController.fm1BooksFlow);
    router.get("/app/notes/2/fm1/fm1_hnotes_flow", appController.fm1NotesFlow);
    router.get("/app/notes/2/fm1/fm1_sugg_flow", appController.fm1SuggFlow);
    router.get("/app/notes/2/fm1/fm1_ques_flow", appController.fm1QuesFlow);
    router.get("/app/notes/2/fm1/fm1_loom_flow", appController.fm1LoomFlow);
    router.get("/app/notes/2/fm1/fm1_motion_weav_flow", appController.fm1MotionsWeavFlow);
    router.get("/app/notes/2/fm1/fm1_intro_fm_flow", appController.fm1IntroFlow);
    router.get("/app/notes/2/fm1/fm1_shedding_flow", appController.fm1SheddingFlow);
    router.get("/app/notes/2/fm1/fm1_weaving_flow", appController.fm1WeavingFlow);
    router.get("/app/notes/2/fm1/fm1_sizing_flow", appController.fm1SizingFlow);
    router.get("/app/notes/2/fm1/fm1_winding_flow", appController.fm1WindingFlow);
    router.get("/app/notes/2/fm1/fm1_dobby_flow", appController.fm1DobbyFlow);
    router.get("/app/notes/2/fm1/fm1_warping_flow", appController.fm1WarpingFlow);
    router.get("/app/notes/2/fm1/fm1_tappet_flow", appController.fm1TappetFlow);
    router.get("/app/notes/2/fm1/fm1_picking_flow", appController.fm1PickingFlow);
    router.get("/app/notes/2/fm1/fm1_beatup_flow", appController.fm1BeatupFlow);
    router.get("/app/notes/2/fm1/fm1_selvedgeFaults_flow", appController.fm1SelvedgeFlow);
    router.get("/app/notes/2/fm1/fm1_takeup_flow", appController.fm1TakeupFlow);
    router.get("/app/notes/2/fm1/fm1_letOff_flow", appController.fm1LetoffFlow);
    router.get("/app/notes/2/fm1/fm1_denim_flow", appController.fm1DenimFlow);
    router.get("/app/notes/2/fm1/fm1_stopMotion_flow", appController.fm1StopMotionsFlow);
    router.get("/app/notes/2/fm1/fm1_jacquard_flow", appController.fm1JaquardFlow);

    //ym1
    router.get("/app/notes/2/ym1", appController.ym1Flow);
    router.get("/app/notes/2/ym1/ym1_intro_flow", appController.ym1IntroFlow);
    router.get("/app/notes/2/ym1/ym1_indeterminer_flow", appController.ym1IndeterStrFlow);
    router.get("/app/notes/2/ym1/ym1_blowroom_flow", appController.ym1BlowroomFlow);
    router.get("/app/notes/2/ym1/ym1_mixing_blend_flow", appController.ym1MixingFlow);
    router.get("/app/notes/2/ym1/ym1_fibreProp_flow", appController.ym1FibPropFlow);
    router.get("/app/notes/2/ym1/ym1_yarnCondi_flow", appController.ym1YarnCondFlow);
    router.get("/app/notes/2/ym1/ym1_comber_flow", appController.ym1ComberFlow);
    router.get("/app/notes/2/ym1/ym1_drawFrame_flow", appController.ym1DrawframeFlow);
    router.get("/app/notes/2/ym1/ym1_winding_flow", appController.ym1WindingFlow);
    router.get("/app/notes/2/ym1/ym1_lapFormer_flow", appController.ym1LapFormerFlow);
    router.get("/app/notes/2/ym1/ym1_carding_flow", appController.ym1CardingFlow);
    router.get("/app/notes/2/ym1/ym1_ringFrame_flow", appController.ym1RingFrameFlow);
    router.get("/app/notes/2/ym1/ym1_speedFrame_flow", appController.ym1SpeedSimplexFlow);

    //ttqc
    router.get("/app/notes/2/ttqc", appController.ttqcFlow);
    router.get("/app/notes/2/ttqc/ttqc_books_flow", appController.ttqcBooksFlow);
    router.get("/app/notes/2/ttqc/ttqc_hnotes_flow", appController.ttqcNotesFlow);
    router.get("/app/notes/2/ttqc/ttqc_count_flow", appController.ttqcCountFlow);
    router.get("/app/notes/2/ttqc/ttqc_crimp_flow", appController.ttqcCrimpFlow);
    router.get("/app/notes/2/ttqc/ttqc_twist_flow", appController.ttqcTwistFlow);
    router.get("/app/notes/2/ttqc/ttqc_intro_flow", appController.ttqcIntroFlow);
    router.get("/app/notes/2/ttqc/ttqc_mositure_flow", appController.ttqcMoistureRHFlow);
    router.get("/app/notes/2/ttqc/ttqc_neps_flow", appController.ttqcNepsFlow);
    router.get("/app/notes/2/ttqc/ttqc_sampling_flow", appController.ttqcSamplingFlow);
    router.get("/app/notes/2/ttqc/ttqc_fibre_prop_flow", appController.ttqcFibPropFlow);
    router.get("/app/notes/2/ttqc/ttqc_hvi_flow", appController.ttqcHVIFlow);
    router.get("/app/notes/2/ttqc/ttqc_afis_flow", appController.ttqcAfisFlow);


    //tp
    router.get("/app/notes/2/tp", appController.tpFlow);
    router.get("/app/notes/2/tp/tp_books_flow", appController.tpBooksFlow);
    router.get("/app/notes/2/tp/tp_notes_flow", appController.tpNotesFlow);
    router.get("/app/notes/2/tp/tp_sugg_flow", appController.tpSuggFlow);
    router.get("/app/notes/2/tp/tp_ques_flow", appController.tpQuesFlow);
    router.get("/app/notes/2/tp/tp_swelling_flow", appController.tpSwellingFlow);
    router.get("/app/notes/2/tp/tp_friction_flow", appController.tpFrictionFlow);
    router.get("/app/notes/2/tp/tp_yarnJamming_flow", appController.tpJammingFlow);
    router.get("/app/notes/2/tp/tp_optical_flow", appController.tpOpticalFlow);
    router.get("/app/notes/2/tp/tp_fibreMig_flow", appController.tpFibMigFlow);
    router.get("/app/notes/2/tp/tp_thermalProp_flow", appController.tpThermalPropFlow);
    router.get("/app/notes/2/tp/tp_fibredraw_flow", appController.tpFibDrawFlow);
    router.get("/app/notes/2/tp/tp_x_ray_flow", appController.tpXrayFlow);
    router.get("/app/notes/2/tp/tp_yarnStructure_flow", appController.tpYarnStructFlow);
    router.get("/app/notes/2/tp/tp_fabgemometry_flow", appController.tpFabGeoFlow);
    router.get("/app/notes/2/tp/tp_tensile_flow", appController.tpTensilePropFlow);

    //feee
    router.get("/app/notes/2/eee", appController.feeeFlow);
    router.get("/app/notes/2/eee/eee_books_flow", appController.feeeBooksFlow);
    router.get("/app/notes/2/eee/eee_hnotes_flow", appController.feeeNotesFlow);
    router.get("/app/notes/2/eee/eee_ques_flow", appController.feeeQuesFlow);
    router.get("/app/notes/2/eee/eee_ch1_flow", appController.feeeCh1Flow);
    router.get("/app/notes/2/eee/eee_ch2_flow", appController.feeeCh2Flow);
    router.get("/app/notes/2/eee/eee_ch3_flow", appController.feeeCh3Flow);
    router.get("/app/notes/2/eee/eee_ch4_flow", appController.feeeCh4Flow);
    router.get("/app/notes/2/eee/eee_ch5_flow", appController.feeeCh5Flow);
    router.get("/app/notes/2/eee/eee_ch8_flow", appController.feeeCh8Flow);
    router.get("/app/notes/2/eee/eee_wye_delta_flow", appController.feeeWyeDeltaFlow);
    router.get("/app/notes/2/eee/eee_rms_flow", appController.feeeRMSFlow);
    router.get("/app/notes/2/eee/eee_circuit_analy_flow", appController.feeeCirAnalFlow);

    //mmtf
    router.get("/app/notes/2/mmtf", appController.mmtfFlow);
    router.get("/app/notes/2/mmtf/mmtf_books_flow", appController.mmtfBooksFlow);
    router.get("/app/notes/2/mmtf/mmtf_hnotes_flow", appController.mmtfNotesFlow);
    router.get("/app/notes/2/mmtf/mmtf_sugg_flow", appController.mmtfSuggFlow);
    router.get("/app/notes/2/mmtf/mmtf_intro_flow", appController.mmtfIntroFlow);
    router.get("/app/notes/2/mmtf/mmtf_rayon_flow", appController.mmtfViscoseRayonFlow);
    router.get("/app/notes/2/mmtf/mmtf_spinning_sys_flow", appController.mmtfSpinSysFlow);
    router.get("/app/notes/2/mmtf/mmtf_high_perf_flow", appController.mmtfHighPerfFlow);
    router.get("/app/notes/2/mmtf/mmtf_polyamaide_flow", appController.mmtfPolyamideFlow);
    router.get("/app/notes/2/mmtf/mmtf_modal_flow", appController.mmtfModalFlow);
    router.get("/app/notes/2/mmtf/mmtf_elastomer_flow", appController.mmtfElastomerFlow);
    router.get("/app/notes/2/mmtf/mmtf_polyolefin_flow", appController.mmtfPolyolefinFlow);
    router.get("/app/notes/2/mmtf/mmtf_carbon_fibre_flow", appController.mmtfCarbonFibFlow);
    router.get("/app/notes/2/mmtf/mmtf_acetate_flow", appController.mmtfAcetateFlow);
    router.get("/app/notes/2/mmtf/mmtf_bio_fibre_flow", appController.mmtfBiCompFlow);
    router.get("/app/notes/2/mmtf/mmtf_polyester_flow", appController.mmtfPolyesterFlow);
    router.get("/app/notes/2/mmtf/mmtf_acrylic_flow", appController.mmtfAcrylicFlow);
    router.get("/app/notes/2/mmtf/mmtf_vectran_flow", appController.mmtfVectranFlow);
    router.get("/app/notes/2/mmtf/mmtf_regen_protein_fibre_flow", appController.mmtfRegenProteinFlow);
    router.get("/app/notes/2/mmtf/mmtf_glassfib_flow", appController.mmtfGlassFibFlow);
    router.get("/app/notes/2/mmtf/mmtf_lyocell_flow", appController.mmtfLyocellFlow);
    router.get("/app/notes/2/mmtf/mmtf_nylon_flow", appController.mmtfNylonFlow);

    //mp
    router.get("/app/notes/2/mp", appController.mpFlow);
    router.get("/app/notes/2/mp/mp_defects_flow", appController.mpDefectsFlow);
    router.get("/app/notes/2/mp/mp_latheMc_flow", appController.mpLatheFlow);
    router.get("/app/notes/2/mp/mp_millingMc_flow", appController.mpMillingFlow);
    router.get("/app/notes/2/mp/mp_castingVideo_flow", appController.mpCastingVideoFlow);
    router.get("/app/notes/2/mp/mp_welding_flow", appController.mpWeldingFlow);
    router.get("/app/notes/2/mp/mp_hotCold_flow", appController.mpHotColdFlow);
    router.get("/app/notes/2/mp/mp_ceramics_flow", appController.mpCeramicsFlow);
    router.get("/app/notes/2/mp/mp_plastic_flow", appController.mpPlasticsFlow);
    router.get("/app/notes/2/mp/mp_slideways_flow", appController.mpSlideWaysFlow);
    router.get("/app/notes/2/mp/mp_shaperMc_flow", appController.mpShaperFlow);
    router.get("/app/notes/2/mp/mp_edm_flow", appController.mpEDMFlow);
    router.get("/app/notes/2/mp/mp_non_conventional_flow", appController.mpNonConvFlow);
    router.get("/app/notes/2/mp/mp_mcEconomics_flow", appController.mpMCEconoFlow);
    router.get("/app/notes/2/mp/mp_casting_flow", appController.mpCastingFlow);


    //fme
    router.get("/app/notes/2/fme", appController.fmeFlow);
    router.get("/app/notes/2/fme/fme_books_flow", appController.fmeBooksFlow);
    router.get("/app/notes/2/fme/fme_notes_flow", appController.fmeNotesFlow);
    router.get("/app/notes/2/fme/fme_ques_flow", appController.fmeQuesFlow);
    router.get("/app/notes/2/fme/fme_sugg_flow", appController.fmeSuggFlow);
    router.get("/app/notes/2/fme/fme_boiler_flow", appController.fmeBoilerFlow);
    router.get("/app/notes/2/fme/fme_powerRefre_flow", appController.fmePowerRefFlow);
    router.get("/app/notes/2/fme/fme_steam_flow", appController.fmeSteamTurbFlow);
    router.get("/app/notes/2/fme/fme_thermalEng_flow", appController.fmeThermalEngFlow);
    router.get("/app/notes/2/fme/fme_fluidMecha_flow", appController.fmeFluidMechFlow);
    router.get("/app/notes/2/fme/fme_energyProcess_flow", appController.fmeEnergProcFlow);
    router.get("/app/notes/2/fme/fme_solid_flow", appController.fmeSolidFlow);
    router.get("/app/notes/2/fme/fme_gearTrain_flow", appController.fmeGearTrainFlow);
    router.get("/app/notes/2/fme/fme_pumpCompressor_flow", appController.fmePumpFlow);
    router.get("/app/notes/2/fme/fme_stressStrain_flow", appController.fmeStressFlow);
    router.get("/app/notes/2/fme/fme_enginePetrol_flow", appController.fmeEngPetrolFlow);
    router.get("/app/notes/2/fme/fme_engineCombus_flow", appController.fmeEngCombusFlow);
    router.get("/app/notes/2/fme/fme_beam_flow", appController.fmeBeamFlow);
    router.get("/app/notes/2/fme/fme_belt_flow", appController.fmeBeltFlow);
    router.get("/app/notes/2/fme/fme_centroid_flow", appController.fmeCentroidFlow);
    router.get("/app/notes/2/fme/fme_momentInnertia_flow", appController.fmeMOIFlow);
    router.get("/app/notes/2/fme/fme_cloumn_flow", appController.fmeColumnFlow);



    //ap1
    router.get("/app/notes/2/ap1", appController.ap1Flow);
    router.get("/app/notes/2/ap1/ap1_books_flow", appController.ap1BooksFlow);
    router.get("/app/notes/2/ap1/ap1_ques_flow", appController.ap1QuesFlow);
    router.get("/app/notes/2/ap1/ap1_sizing_flow", appController.ap1SizingFlow);
    router.get("/app/notes/2/ap1/ap1_trimmimg_flow", appController.ap1TrimmingFlow);
    router.get("/app/notes/2/ap1/ap1_interlining_flow", appController.ap1InterFlow);
    router.get("/app/notes/2/ap1/ap1_fabricCut_flow", appController.ap1FabCutFlow);
    router.get("/app/notes/2/ap1/ap1_patternMaking_flow", appController.ap1PatternFlow);
    router.get("/app/notes/2/ap1/ap1_fabricSpreading_flow", appController.ap1FabSpreadFlow);
    router.get("/app/notes/2/ap1/ap1_markerMaking_flow", appController.ap1MarkerFlow);
    router.get("/app/notes/2/ap1/ap1_sewingTherad_flow", appController.ap1SewingFlow);


    //ctca
    router.get("/app/notes/2/ctca", appController.ctcaFlow);
    router.get("/app/notes/2/ctca/ctca_books_flow", appController.ctcaBooksFlow);
    router.get("/app/notes/2/ctca/ctca_sheets_flow", appController.ctcaSheetsFlow);
    router.get("/app/notes/2/ctca/ctca_thickAge_flow", appController.ctcaThickFlow);
    router.get("/app/notes/2/ctca/ctca_water_flow", appController.ctcaWaterFlow);
    router.get("/app/notes/2/ctca/ctca_surfactants_flow", appController.ctcaSurfactantFlow);
    router.get("/app/notes/2/ctca/ctca_bleach_flow", appController.ctcaBleachFlow);
    router.get("/app/notes/2/ctca/ctca_solutions_flow", appController.ctcaSolutionsFlow);
    router.get("/app/notes/2/ctca/ctca_colloid_flow", appController.ctcaColloidFlow);


    //fdce
    router.get("/app/notes/2/fdce", appController.fdceFlow);
    router.get("/app/notes/2/fdce/fdce_dyesPigments_flow", appController.fdceDyesFlow);
    router.get("/app/notes/2/fdce/fdce_chromatography_flow", appController.fdceChromatoFlow);
    router.get("/app/notes/2/fdce/fdce_polarity_flow", appController.fdcePolarityFlow);
    router.get("/app/notes/2/fdce/fdce_sepaPurifi_flow", appController.fdceSepaPuriFlow);
    router.get("/app/notes/2/fdce/fdce_balancingChem_flow", appController.fdceBalanceChemFlow);
    router.get("/app/notes/2/fdce/fdce_filtration_flow", appController.fdceFiltrationFlow);


    //fd2
    router.get("/app/notes/2/fd2", appController.fd2Flow);


    //weaving prep
    router.get("/app/notes/2/weaving_prep", appController.weavingPrepFlow);
    router.get("/app/notes/2/weav_books_flow", appController.weavingPrepBooksFlow);


    //wpp
    router.get("/app/notes/2/wpp", appController.wppFlow);
    router.get("/app/notes/2/wpp/wpp_quess_flow", appController.wppQuesFlow);
    router.get("/app/notes/2/wpp/wpp_pretreatment_flow", appController.wppPretreatmentFlow);
    router.get("/app/notes/2/wpp/wpp_singeing_flow", appController.wppSingeingFlow);
    router.get("/app/notes/2/wpp/wpp_desizing_flow", appController.wppDesizingFlow);
    router.get("/app/notes/2/wpp/wpp_impurities_flow", appController.wppImpuritiesFlow);
    router.get("/app/notes/2/wpp/wpp_bioScouring", appController.wppBioScouringFlow);



    //wp1
    router.get("/app/notes/2/wp1", appController.wp1Flow);
    router.get("/app/notes/2/wp1/wp1_books_flow", appController.wp1BooksFlow);
    router.get("/app/notes/2/wp1/wp1_notes_flow", appController.wp1NotesFlow);
    router.get("/app/notes/2/wp1/wp1_ques_flow", appController.wp1QuesFlow);
    router.get("/app/notes/2/wp1/wp1_intro_flow", appController.wp1IntroFlow);
    router.get("/app/notes/2/wp1/wp1_water_flow", appController.wp1WaterFlow);
    router.get("/app/notes/2/wp1/wp1_introDye_flow", appController.wp1IntroDyeFlow);
    router.get("/app/notes/2/wp1/wp1_generalConcepts_flow", appController.wp1GenConceptsFlow);
    router.get("/app/notes/2/wp1/wp1_colorFastness_flow", appController.wp1ColorFastnessFlow);
    router.get("/app/notes/2/wp1/wp1_stripping_flow", appController.wp1StrippingFlow);
    router.get("/app/notes/2/wp1/wp1_singeing_flow", appController.wp1SingeingFlow);
    router.get("/app/notes/2/wp1/wp1_scouring_flow", appController.wp1ScouringFlow);
    router.get("/app/notes/2/wp1/wp1_pigment_flow", appController.wp1PigmentFlow);
    router.get("/app/notes/2/wp1/wp1_textileFinishing_flow", appController.wp1TexFinishFlow);
    router.get("/app/notes/2/wp1/wp1_vatDyes_flow", appController.wp1VatDyesFlow);
    router.get("/app/notes/2/wp1/wp1_desizing_flow", appController.wp1DesizingFlow);
    router.get("/app/notes/2/wp1/wp1_basicDye_flow", appController.wp1BasicDyeFlow);
    router.get("/app/notes/2/wp1/wp1_acidDye_flow", appController.wp1AcidDyeFlow);
    router.get("/app/notes/2/wp1/wp1_bleaching_flow", appController.wp1BleachFlow);
    router.get("/app/notes/2/wp1/wp1_disperseDye_flow", appController.wp1DisperseDyeFlow);
    router.get("/app/notes/2/wp1/wp1_kierBoiler_flow", appController.wp1KierBoilerFlow);
    router.get("/app/notes/2/wp1/wp1_dyeingFault_flow", appController.wp1DyeingFaultFlow);
    router.get("/app/notes/2/wp1/wp1_reactiveDye_flow", appController.wp1ReactiveDyeFlow);
    router.get("/app/notes/2/wp1/wp1_directDye_flow", appController.wp1DirectDyeFlow);
    router.get("/app/notes/2/wp1/wp1_jiggerMachine_flow", appController.wp1JiggerMCFlow);
    router.get("/app/notes/2/wp1/wp1_colorTest_flow", appController.wp1ColorTestFlow);
    router.get("/app/notes/2/wp1/wp1_foldingTest_flow", appController.wp1FoldingTestFlow);
    router.get("/app/notes/2/wp1/wp1_washingMachine_flow", appController.wp1WashingMCFlow);













    router.get("/app/labs", appController.labs);

    



    return app.use("/", router);

}

module.exports = initWebRoutes;