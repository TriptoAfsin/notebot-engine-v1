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

    // router.get("/app/notices", appController.notice);

    router.get("/app/notes", appController.notes);
    router.get("/app/notes/1", appController.notesLevel1);
    router.get("/app/notes/2", appController.notesLevel2);
    router.get("/app/notes/3", appController.notesLevel3);
    router.get("/app/notes/4", appController.notesLevel4);

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


    //acfd
    router.get("/app/notes/3/acfd", appController.acfdFlow);

    //tcp
    router.get("/app/notes/3/tcp", appController.tcpFlow);
    router.get("/app/notes/3/tcp/tcp_kpc_flow", appController.tcpKpcFlow);


    //pcs
    router.get("/app/notes/3/pcs", appController.pcsFlow);
    router.get("/app/notes/3/pcs/pcs_books_flow", appController.pcsBooksFlow);


    //lss
    router.get("/app/notes/3/lss", appController.lssFlow);
    router.get("/app/notes/3/lss/lss_drawFrame_flow", appController.lssDrawFrameFlow);
    router.get("/app/notes/3/lss/lss_spreader_flow", appController.lssSpreaderFlow);

    //mpp
    router.get("/app/notes/3/mpp", appController.mppFlow);

    //knit1
    router.get("/app/notes/3/knit1", appController.knit1Flow);
    router.get("/app/notes/3/knit1/knit_lecture_flow", appController.knit1LectureFlow);


    //im
    router.get("/app/notes/3/im", appController.imFlow);
    router.get("/app/notes/3/im/im_lecture_flow", appController.imLectureFlow);
    router.get("/app/notes/3/im/im_lec2_flow", appController.imLec2Flow);
    router.get("/app/notes/3/im/im_lec3_flow", appController.imLec3Flow);
    router.get("/app/notes/3/im/im_lec4_flow", appController.imLec4Flow);
    router.get("/app/notes/3/im/im_market_flow", appController.imMarketFlow);
    router.get("/app/notes/3/im/im_marketMix_flow", appController.imMarketMixFlow);
    router.get("/app/notes/3/im/im_projectFeasible_flow", appController.imProjectFeasFlow);
    router.get("/app/notes/3/im/im_natureScope_flow", appController.imNatureScopeFlow);
    router.get("/app/notes/3/im/im_managementFunc_flow", appController.imManageFuncFlow);
    router.get("/app/notes/3/im/im_indusManage_flow", appController.imIndusManageFlow);
    router.get("/app/notes/3/im/im_techManage_flow", appController.imTechManageFlow);
    router.get("/app/notes/3/im/im_prodMange_flow", appController.imProdnManageFlow);


    //pd
    router.get("/app/notes/3/pd", appController.pdFlow);
    router.get("/app/notes/3/pd/pd_intro_flow", appController.pdIntroFlow);
    router.get("/app/notes/3/pd/pd_understandingCustomer_flow", appController.pdUnderstandingFlow);
    router.get("/app/notes/3/pd/pd_planningDesign_flow", appController.pdPlanningDesignFlow);
    router.get("/app/notes/3/pd/pd_qualityFunc_flow", appController.pdQualityFuncFlow);
    router.get("/app/notes/3/pd/pd_designAssembly_flow", appController.pdDesAssemFlow);
    router.get("/app/notes/3/pd/pd_designManu_flow", appController.pdDesManuFlow);
    router.get("/app/notes/3/pd/pd_fast_flow", appController.pdFastFlow);
    router.get("/app/notes/3/pd/pd_designReliability_flow", appController.pdDesRelFlow);
    router.get("/app/notes/3/pd/pd_books_flow", appController.pdBooksFlow);
    router.get("/app/notes/3/pd/pd_designMaintain_flow", appController.pdDesMainFlow);
    router.get("/app/notes/3/pd/pd_desTension_flow", appController.pdDesTensionFlow);
    router.get("/app/notes/3/pd/pd_loadStress_flow", appController.pdLoadStressFlow);


    //tqm
    router.get("/app/notes/3/tqm", appController.tqmFlow);
    router.get("/app/notes/3/tqm/tqm_totalQm_flow", appController.tqmTotalQMFlow);
    router.get("/app/notes/3/tqm/tqm_qualityReliability_flow", appController.tqmQualityReliabilityFlow);
    router.get("/app/notes/3/tqm/tqm_continuous_flow", appController.tqmContinuousImproveFlow);
    router.get("/app/notes/3/tqm/tqm_qualityStd_flow", appController.tqmQualityStdFlow);
    router.get("/app/notes/3/tqm/tqm_intro_flow", appController.tqmIntroQMFlow);
    router.get("/app/notes/3/tqm/tqm_control_flow", appController.tqmControlMeasureFlow);
    router.get("/app/notes/3/tqm/tqm_managementApproach_flow", appController.tqmManagementApproachFlow);
    router.get("/app/notes/3/tqm/tqm_qcTools_flow", appController.tqmQCToolsFlow);

    //ttm
    router.get("/app/notes/3/ttm", appController.ttmFlow);


    //mic
    router.get("/app/notes/3/mic", appController.micFlow);
    router.get("/app/notes/3/mic/mic_book_flow", appController.micBooksFlow);
    router.get("/app/notes/3/mic/mic_ch1_flow", appController.micIntroFlow);
    router.get("/app/notes/3/mic/mic_ch2_flow", appController.micSysElementFlow);
    router.get("/app/notes/3/mic/mic_ch4_flow", appController.micControlSysFlow);
    router.get("/app/notes/3/mic/mic_limitsFitsGauge_flow", appController.micLimitFitFlow);
    router.get("/app/notes/3/mic/mic_nonDestructive_flow", appController.micNonDesFlow);
    router.get("/app/notes/3/mic/mic_surfaceFinish_flow", appController.micSurfaceFinishFlow);
    router.get("/app/notes/3/mic/mic_threadMeasure_flow", appController.micThreadMeasureFlow);
    router.get("/app/notes/3/mic/mic_angularMeas_flow", appController.micAngularMeasFlow);
    router.get("/app/notes/3/mic/mic_LinearMeas_flow", appController.micLinearMeasFlow);
    router.get("/app/notes/3/mic/mic_ch5_flow", appController.micCh5Flow);
    router.get("/app/notes/3/mic/mic_gearMeas_flow", appController.micGearMeasFlow);
    router.get("/app/notes/3/mic/mic_fatigueFail_flow", appController.micFatigueFailFlow);


    //ace
    router.get("/app/notes/3/ace", appController.aceFlow);
    router.get("/app/notes/3/ace/ace_books_flow", appController.aceBooksFlow);
    router.get("/app/notes/3/ace/ace_introSys_flow", appController.aceIntroControlFlow);
    router.get("/app/notes/3/ace/ace_modleingFreq_flow", appController.aceModelFreqFlow);
    router.get("/app/notes/3/ace/ace_timeResponse_flow", appController.aceTimeResFlow);
    router.get("/app/notes/3/ace/ace_sensors_flow", appController.aceSensorsFlow);
    router.get("/app/notes/3/ace/ace_numberSys_flow", appController.aceNumberSysFlow);
    router.get("/app/notes/3/ace/ace_transferFunc_flow", appController.aceTransferFuncFlow);
    router.get("/app/notes/3/ace/ace_logicGate_flow", appController.aceLogicGateFlow);
    router.get("/app/notes/3/ace/ace_hydraulics_flow", appController.aceHydraulicsFlow);
    router.get("/app/notes/3/ace/ace_pneumatics_flow", appController.acePneumaticsFlow);
    router.get("/app/notes/3/ace/ace_introRobot_flow", appController.aceIntroRoboticsFlow);
    router.get("/app/notes/3/ace/ace_Joint_flow", appController.aceJointsFlow);
    router.get("/app/notes/3/ace/ace_Actuator_flow", appController.aceActuatorFlow);
    router.get("/app/notes/3/ace/ace_Grips_flow", appController.aceGripsFlow);
    router.get("/app/notes/3/ace/ace_StructElements_flow", appController.aceStructElementsFlow);


    //acm
    router.get("/app/notes/3/acm", appController.acmFlow);
    router.get("/app/notes/3/acm/acm_book_flow", appController.acmBooksFlow);
    router.get("/app/notes/3/acm/acm_introCostManage_flow", appController.acmIntroCostFlow);
    router.get("/app/notes/3/acm/acm_interestedUsers_flow", appController.acmInterestedUsersFlow);
    router.get("/app/notes/3/acm/acm_accountingAction_flow", appController.acmAccInActionFlow);
    router.get("/app/notes/3/acm/acm_recordingProcess_flow", appController.acmRecordingProcessFlow);
    router.get("/app/notes/3/acm/acm_CostBehav_flow", appController.acmCostBehaviourFlow);
    router.get("/app/notes/3/acm/acm_accMerchendizing_flow", appController.acmAccForMerchFlow);
    router.get("/app/notes/3/acm/acm_costAccSys_flow", appController.acmCostAccSysFlow);
    router.get("/app/notes/3/acm/acm_costTech_flow", appController.acmCostTechFlow);


    //fsd
    router.get("/app/notes/3/fsd", appController.fsdFlow);
    router.get("/app/notes/3/fsd/fsd_books_flow", appController.fsdBooksFlow);
    router.get("/app/notes/3/fsd/fsd_intro_flow", appController.fsdIntroFlow);
    router.get("/app/notes/3/fsd/fsd_plainWeave_flow", appController.fsdPlainWeaveFlow);
    router.get("/app/notes/3/fsd/fsd_twillWeave_flow", appController.fsdTwillFlow);
    router.get("/app/notes/3/fsd/fsd_fancyWeave_flow", appController.fsdFancyFlow);
    router.get("/app/notes/3/fsd/fsd_colorWeave_flow", appController.fsdColorWeaveFlow);
    router.get("/app/notes/3/fsd/fsd_satin_flow", appController.fsdSatinWeaveFlow);

    //am2
    router.get("/app/notes/3/am2", appController.am2Flow);
    router.get("/app/notes/3/am2/am2_books_flow", appController.am2BooksFlow);
    router.get("/app/notes/3/am2/am2_classlec_flow", appController.am2ClassLecFlow);
    router.get("/app/notes/3/am2/am2_lineBalancing_flow", appController.am2LineBalancingFlow);
    router.get("/app/notes/3/am2/am2_costingExcel_flow", appController.am2ExcelFlow);


    //ap2
    router.get("/app/notes/3/ap2", appController.ap2Flow);
    router.get("/app/notes/3/ap2/ap2_folding_flow", appController.ap2FoldingFlow);
    router.get("/app/notes/3/ap2/ap2_stitch_flow", appController.ap2StitchFlow);
    router.get("/app/notes/3/ap2/ap2_lockStitch_flow", appController.ap2LockStictchFlow);
    router.get("/app/notes/3/ap2/ap2_pressingFinish_flow", appController.ap2PressingFlow);
    router.get("/app/notes/3/ap2/ap2_Inspection_flow", appController.ap2InspectionFlow);


    //econo
    router.get("/app/notes/3/economics", appController.econoFlow);
    router.get("/app/notes/3/economics/econo_books_flow", appController.econoBooksFlow);
    router.get("/app/notes/3/economics/econo_classlec_flow", appController.econoClassLecFlow);


    //fm2
    router.get("/app/notes/3/fm2", appController.fm2Flow);
    router.get("/app/notes/3/fm2/fm2_books_flow", appController.fm2BooksFlow);
    router.get("/app/notes/3/fm2/fm2_classlec_flow", appController.fm2ClassLecFlow);
    router.get("/app/notes/3/fm2/fm2_note_flow", appController.fm2NotesFlow);
    router.get("/app/notes/3/fm2/fm2_basicWarp_flow", appController.fm2BasicWarpFlow);
    router.get("/app/notes/3/fm2/fm2_misc_flow", appController.fm2MiscFlow);


     //wp2
     router.get("/app/notes/3/wp2", appController.wp2Flow);
     router.get("/app/notes/3/wp2/wp2_books_flow", appController.wp2BooksFlow);
     router.get("/app/notes/3/wp2/wp2_classlec_flow", appController.wp2ClasLecFlow);

     //weave2
     router.get("/app/notes/3/weave2", appController.weave2Flow);


     //ym2
     router.get("/app/notes/3/ym2", appController.ym2Flow);
     router.get("/app/notes/3/ym2/ym2_books_flow", appController.ym2BooksFlow);
     router.get("/app/notes/3/ym2/ym2_classlec_flow", appController.ym2ClassLecFlow);
     router.get("/app/notes/3/ym2/ym2_note_flow", appController.ym2NotesFlow);
     router.get("/app/notes/3/ym2/ym2_specialYarns_flow", appController.ym2SpecialyarnsFlow);
     router.get("/app/notes/3/ym2/ym2_introSpin_flow", appController.ym2IntroFlow);
     router.get("/app/notes/3/ym2/ym2_rotor_flow", appController.ym2RotorFlow);
     router.get("/app/notes/3/ym2/ym2_spinning_flow", appController.ym2SpinningFlow);



     //bil
     router.get("/app/notes/4/bil", appController.bilFlow);
     router.get("/app/notes/4/bil/bil_labor_law_flow", appController.bilLaborFlow);


     //hrm
     router.get("/app/notes/4/hrm", appController.hrmFlow);

     //bs
     router.get("/app/notes/4/bs", appController.bsFlow);

     //epd
     router.get("/app/notes/4/epd", appController.epdFlow);


     //ir
     router.get("/app/notes/4/ir", appController.irFlow);
     router.get("/app/notes/4/ir/ir_ir_flow", appController.irIndusRelationFlow);


     //ppc
     router.get("/app/notes/4/ppc", appController.ppcFlow);

     //tam
     router.get("/app/notes/4/tam", appController.tamFlow);
     router.get("/app/notes/4/tam/tam_intro_merch_flow", appController.tamIntroMerchFlow);





    
















    router.get("/app/labs", appController.labs);
    router.get("/app/labs/1", appController.level1Labs);
    router.get("/app/labs/2", appController.level2Labs);
    router.get("/app/labs/3", appController.level3Labs);


    //lab- chem1
    router.get("/app/labs/1/chem1", appController.labChem1Flow);
    router.get("/app/labs/1/chem1/che1_procedureSheet_flow", appController.labChem1ProcedureFlow);
    router.get("/app/labs/1/chem1/che1_acidRadical_flow", appController.labChem1AcidFlow);
    router.get("/app/labs/1/chem1/che1_basicRadical_flow", appController.labChem1BasicFlow);
    router.get("/app/labs/1/chem1/che1_mohrsSalt_flow", appController.labChem1MohrFlow);
    router.get("/app/labs/1/chem1/che1_wetTest_flow", appController.labChem1WetTestFlow);
    router.get("/app/labs/1/chem1/che1_titration_flow", appController.labChem1TitrationFlow);

    //lab- chem2
    router.get("/app/labs/1/chem2", appController.labChem2Flow);
    router.get("/app/labs/1/chem2/che2_lab_physicalProp_flow", appController.labChem2PhysPropFlow);
    router.get("/app/labs/1/chem2/che2_lab_lassaignesTest_flow", appController.labChem2Lass1Flow);
    router.get("/app/labs/1/chem2/che2_lab_solubilityTest_flow", appController.labChem2SoluTestFlow);
    router.get("/app/labs/1/chem2/che2_lab_alcoholIdentify_flow", appController.labChem2AlcIdenFlow);
    router.get("/app/labs/1/chem2/che2_lab_lassaignesTest2_flow", appController.labChem2Lass2Flow);
    router.get("/app/labs/1/chem2/che2_lab_h2o2_flow", appController.labChem2StrengthH2O2Flow);
    router.get("/app/labs/1/chem2/che2_lab_amountofFe2_flow", appController.labChem2AmountFe2Flow);
    router.get("/app/labs/1/chem2/che2_lab_carbonylIdentify_flow", appController.labChem2CarbonylIdenFlow);
    router.get("/app/labs/1/chem2/che2_lab_Nidentity_flow", appController.labChem2NIdenFlow);
    router.get("/app/labs/1/chem2/che2_lab_amountna2co3_flow", appController.labChem2AmountNa2CO3Flow);
    router.get("/app/labs/1/chem2/che2_lab_carboxylicIdentity_flow", appController.labChem2CarboxyIdenFlow);


    //lab - phy1
    router.get("/app/labs/1/phy1", appController.labPhy1Flow);
    router.get("/app/labs/1/phy1/phy1_m1_flow", appController.labPhy1M1Flow);
    router.get("/app/labs/1/phy1/phy1_m2_flow", appController.labPhy1M2Flow);
    router.get("/app/labs/1/phy1/phy1_m3_flow", appController.labPhy1M3Flow);
    router.get("/app/labs/1/phy1/phy1_m4_flow", appController.labPhy1M4Flow);
    router.get("/app/labs/1/phy1/phy1_m5_flow", appController.labPhy1M5Flow);
    router.get("/app/labs/1/phy1/phy1_m6_flow", appController.labPhy1M6Flow);
    router.get("/app/labs/1/phy1/phy1_o1_flow", appController.labPhy1O1Flow);
    router.get("/app/labs/1/phy1/phy1_o2_flow", appController.labPhy1O2Flow);
    router.get("/app/labs/1/phy1/phy1_o3_flow", appController.labPhy1O3Flow);
    router.get("/app/labs/1/phy1/phy1_o4_flow", appController.labPhy1O4Flow);


    //lab - phy2
    router.get("/app/labs/1/phy2", appController.labPhy2Flow);
    router.get("/app/labs/1/phy2/phy2_lab_e1_flow", appController.labPhy2E1Flow);
    router.get("/app/labs/1/phy2/phy2_lab_e2_flow", appController.labPhy2E2Flow);
    router.get("/app/labs/1/phy2/phy2_lab_e3_flow", appController.labPhy2E3Flow);
    router.get("/app/labs/1/phy2/phy2_lab_e4_flow", appController.labPhy2E4Flow);
    router.get("/app/labs/1/phy2/phy2_lab_e5_flow", appController.labPhy2E5Flow);
    router.get("/app/labs/1/phy2/phy2_lab_e6_flow", appController.labPhy2E6Flow);
    router.get("/app/labs/1/phy2/phy2_lab_e7_flow", appController.labPhy2E7Flow);
    router.get("/app/labs/1/phy2/phy2_lab_e8_flow", appController.labPhy2E8Flow);
    router.get("/app/labs/1/phy2/phy2_lab_m1_flow", appController.labPhy2M1Flow);
    router.get("/app/labs/1/phy2/phy2_lab_h1_flow", appController.labPhy2H1Flow);
    router.get("/app/labs/1/phy2/phy2_lab_h2_flow", appController.labPhy2H2Flow);
    router.get("/app/labs/1/phy2/phy2_lab_h3_flow", appController.labPhy2H3Flow);

    //lab - msp
    router.get("/app/labs/1/msp", appController.labmspFlow);
    router.get("/app/labs/1/msp/msp_lab_layout_flow", appController.labMspLayoutFlow);
    router.get("/app/labs/1/msp/msp_lab_handTools_flow", appController.labMspHandToolsFlow);
    router.get("/app/labs/1/msp/msp_lab_grindingMC_flow", appController.labMspLabsGrindingFlow);
    router.get("/app/labs/1/msp/msp_lab_lathe_flow", appController.labMspLatheFlow);
    router.get("/app/labs/1/msp/msp_lab_sqKey_flow", appController.labMspSqKeyFlow);
    router.get("/app/labs/1/msp/msp_lab_matchingParts_flow", appController.labMspMatchingPartsFlow);
    router.get("/app/labs/1/msp/msp_lab_milling_flow", appController.labMspMillingFlow);
    router.get("/app/labs/1/msp/msp_lab_drilling_flow", appController.labMspDrillingFlow);
    router.get("/app/labs/1/msp/msp_lab_shaper_flow", appController.labMspShaperFlow);
    router.get("/app/labs/1/msp/msp_lab_welding_flow", appController.labMspWeldingFlow);
    router.get("/app/labs/1/msp/msp_lab_introLight_flow", appController.labMspLightMcFlow);
    router.get("/app/labs/1/msp/msp_lab_arcWelding_flow", appController.labMspArcWrldFlow);
    router.get("/app/labs/1/msp/msp_lab_manuAssm_flow", appController.labMspMfgAssmFlow);
    router.get("/app/labs/1/msp/msp_lab_mspQuiz_flow", appController.labMspQuizFlow);

    //lab - cp
    router.get("/app/labs/1/cp", appController.labCpFlow);
    router.get("/app/labs/1/cp/cp_lab_intro", appController.labCp1Flow);
    router.get("/app/labs/1/cp/cp_lab_condition", appController.labCp2Flow);
    router.get("/app/labs/1/cp/cp_lab_arithmetic", appController.labCp3Flow);
    router.get("/app/labs/1/cp/cp_lab_sumSeries", appController.labCp4Flow);
    router.get("/app/labs/1/cp/cp_lab_array", appController.labCp5Flow);
    router.get("/app/labs/1/cp/cp_lab_recursionFactorial", appController.labCp6Flow);
    router.get("/app/labs/1/cp/cp_lab_recursionFibo", appController.labCp7Flow);
    router.get("/app/labs/1/cp/cp_lab_Chapter", appController.labCp135Flow);

    //lab - ap1
    router.get("/app/labs/1/ap1", appController.labAp1Flow);
    router.get("/app/labs/1/ap1/ap1_lab_attachingInterline_flow", appController.labAp1InterliningFlow);
    router.get("/app/labs/1/ap1/ap1_lab_standardBody_flow", appController.labAp1StdBodyFlow);
    router.get("/app/labs/1/ap1/ap1_lab_continuousFusing_flow", appController.labAp1FusingFlow);
    router.get("/app/labs/1/ap1/ap1_lab_straightKnife_flow", appController.labAp1StrtKnifeFlow);

    //lab - bce
    router.get("/app/labs/1/bce", appController.labBceFlow);
    router.get("/app/labs/1/bce/bce_lab_read_flow", appController.labBceReadFlow);
    router.get("/app/labs/1/bce/bce_lab_listen_flow", appController.labBceListenFlow);
    router.get("/app/labs/1/bce/bce_lab_sheet_flow", appController.labBceSheetFlow);

    //lab - am1
    router.get("/app/labs/2/am1", appController.labAm1Flow);
    router.get("/app/labs/2/am1/am1_lab_layoutPlan_flow", appController.labAm1LayoutFlow);
    router.get("/app/labs/2/am1/am1_lab_standardBody_flow", appController.labAm1StdBodyFlow);
    router.get("/app/labs/2/am1/am1_lab_AllReport_flow", appController.labAm1AllFlow);


    //lab - wp1
    router.get("/app/labs/2/wp1", appController.labWp1Flow);

    //lab - fm1
    router.get("/app/labs/2/fm1", appController.labFm1Flow);
    router.get("/app/labs/2/fm1/fm1_lab_layout_flow", appController.labFm1LayoutFlow);
    router.get("/app/labs/2/fm1/fm1_lab_tappetShedding_flow", appController.labFm1TappetFlow);
    router.get("/app/labs/2/fm1/fm1_lab_looming_flow", appController.labFm1LoomingFlow);
    router.get("/app/labs/2/fm1/fm1_lab_package_flow", appController.labFm1PackageFlow);
    router.get("/app/labs/2/fm1/fm1_lab_cheesWinding_flow", appController.labFm1CheeseFlow);
    router.get("/app/labs/2/fm1/fm1_lab_highSpeedWarp_flow", appController.labFm1HighSpeedFlow);
    router.get("/app/labs/2/fm1/fm1_lab_sectionalWarping_flow", appController.labFm1SectionalFlow);
    router.get("/app/labs/2/fm1/fm1_lab_conventionalSizing_flow", appController.labFm1ConvSizingFlow);
    router.get("/app/labs/2/fm1/fm1_lab_dobby_flow", appController.labFm1DobbyFlow);
    router.get("/app/labs/2/fm1/fm1_lab_sizing_flow", appController.labFm1SizingFlow);

    //lab - ym1
    router.get("/app/labs/2/ym1", appController.labYm1Flow);

    //lab - feee
    router.get("/app/labs/2/feee", appController.labFeeeFlow);
    router.get("/app/labs/2/feee/feee_lab_multiMetre_flow", appController.labFeeeMultiFlow);
    router.get("/app/labs/2/feee/feee_lab_ohmslaw_flow", appController.labFeeeOhmFlow);
    router.get("/app/labs/2/feee/feee_lab_kirchoffsLaw_flow", appController.labFeeeKirchoffFlow);
    router.get("/app/labs/2/feee/feee_lab_rcCirct_flow", appController.labFeeeRCFlow);
    router.get("/app/labs/2/feee/feee_lab_rlCirct_flow", appController.labFeeeRLFlow);
    router.get("/app/labs/2/feee/feee_lab_rlcCirct_flow", appController.labFeeeRLCFlow);
    router.get("/app/labs/2/feee/feee_lab_carbonResistor_flow", appController.labFeeeCarbonResFlow);
    router.get("/app/labs/2/feee/feee_lab_fanRegulator_flow", appController.labFeeeFanRegFlow);
    router.get("/app/labs/2/feee/feee_lab_wiringTubelight_flow", appController.labFeeeWiringTubelightFlow);
    router.get("/app/labs/2/feee/feee_lab_fullBridgeRect_flow", appController.labFeeeFullBridgeFlow);
    router.get("/app/labs/2/feee/feee_lab_fuseSwitch_flow", appController.labFeeeFuseFlow);
    router.get("/app/labs/2/feee/feee_lab_Oscillosc_flow", appController.labFeeeOsciFlow);
    router.get("/app/labs/2/feee/feee_lab_wireGauge_flow", appController.labFeeeWireGaugeFlow);
    router.get("/app/labs/2/feee/feee_lab_2waySwitch_flow", appController.labFeee2WayLightFlow);


    //lab - acwp
    router.get("/app/labs/3/acwp", appController.labAcwpFlow);


    //lab - ym2
    router.get("/app/labs/3/ym2", appController.labYm2Flow);

    //lab - am2
    router.get("/app/labs/3/am2", appController.labAm2Flow);

     //lab - wp2
    router.get("/app/labs/3/wp2", appController.labWp2Flow);

     //lab - ap2
     router.get("/app/labs/3/ap2", appController.labAp2Flow);

      //lab - lss
      router.get("/app/labs/3/lss", appController.labAcwpFlow);

      //lab - apparelWash
      router.get("/app/labs/3/apparelWash", appController.labAcwpFlow);

      //lab - pm2
      router.get("/app/labs/3/pm2", appController.labAcwpFlow);

      //lab - fm2
      router.get("/app/labs/3/fm2", appController.labFm2Flow);

      //lab - fsd
      router.get("/app/labs/3/fsd", appController.labFsdFlow);

      //lab - mic
      router.get("/app/labs/3/mic", appController.labAcwpFlow);

      //lab - tc1
      router.get("/app/labs/3/tc1", appController.labAcwpFlow);


    // //lab - ap1
    // router.get("/app/labs/2/ap1", appController.labAp1Flow);

    //lab - ttqc
    router.get("/app/labs/2/ttqc", appController.labTtqcFlow);

    //lab - fme
    router.get("/app/labs/2/fme", appController.labFmeFlow);

    //lab - mp
    router.get("/app/labs/2/mp", appController.labMpFlow);

    //lab - pm1
    router.get("/app/labs/2/pm1", appController.labPm1Flow);

    //lab - sss1
    router.get("/app/labs/2/sss1", appController.labSss1Flow);

    //lab - sss2
    router.get("/app/labs/2/sss2", appController.labSss2Flow);

    //lab - wpp
    router.get("/app/labs/2/wpp", appController.labWppFlow);

    //lab - fe_wpp
    router.get("/app/labs/2/fe_wpp", appController.labFe_WppFlow);



    //syllabus
    router.get("/app/syllabus", appController.syllabusLevelFlow);
    router.get("/app/syllabus/45", appController.syllabusBatch45Flow);
    router.get("/app/syllabus/45/ae", appController.syllabusBatch45AeFlow);
    router.get("/app/syllabus/45/ye", appController.syllabusBatch45YeFlow);
    router.get("/app/syllabus/45/fe", appController.syllabusBatch45FeFlow);
    router.get("/app/syllabus/45/ipe", appController.syllabusBatch45IpeFlow);
    router.get("/app/syllabus/45/tem", appController.syllabusBatch45TemFlow);
    router.get("/app/syllabus/45/dce", appController.syllabusBatch45DceFlow);
    router.get("/app/syllabus/45/wpe", appController.syllabusBatch45WpeFlow);
    router.get("/app/syllabus/45/ese", appController.syllabusBatch45EseFlow);
    router.get("/app/syllabus/45/tfd", appController.syllabusBatch45TfdFlow);
    router.get("/app/syllabus/45/tmdm", appController.syllabusBatch45TmdmFlow);


    //jokes
    router.get("/app/jokes", appController.jokesFlow);

    //404 route
    router.get("*", appController.notFound);

    



    return app.use("/", router);

}

module.exports = initWebRoutes;