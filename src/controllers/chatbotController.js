require("dotenv").config();


const request = require('request');

//services
const chatBotService = require('../services/chatBotService');

//keywords
const positiveKeywords = require('./keywords/positiveKeywords');
const negativeKeywords = require('./keywords/negativeKeywords');
const loveMojis = require('./keywords/loveMoji.js');
const greetWords = require('./keywords/greetWords');
//academic
const noteWords = require('./keywords/academic_words/noteWords');
const level_1_note_words = require('./keywords/academic_words/level1_word_note');
const level_2_note_words = require('./keywords/academic_words/level2_word_note');
const level_3_note_words = require('./keywords/academic_words/level3_word_note');
const level_4_note_words = require('./keywords/academic_words/level4_word_note');
//academic -> bce
const bce_words = require('./keywords/academic_words/subjects/bceWords');
//academic -> cp
const cp_words = require('./keywords/academic_words/subjects/cpWords');
//academic -> chem1
const chem1_words = require('./keywords/academic_words/subjects/chem1Words');
//academic -> chem2
const chem2_words = require('./keywords/academic_words/subjects/chem2Words');
//academic -> phy1
const phy1_words = require('./keywords/academic_words/subjects/phy1Words');
//academic -> phy2
const phy2_words = require('./keywords/academic_words/subjects/phy2Words');
//academic -> math1
const math1_words = require('./keywords/academic_words/subjects/math1Words');
//academic -> math2
const math2_words = require('./keywords/academic_words/subjects/math2Words');
//academic -> ntf
const ntf_words = require('./keywords/academic_words/subjects/ntfWords');
//academic -> ntf
const pse_words = require('./keywords/academic_words/subjects/pseWords');
//academic -> em
const em_words = require('./keywords/academic_words/subjects/emWords');
//academic -> bfs
const bfs_words = require('./keywords/academic_words/subjects/bfsWords');
//academic -> tpm
const tpm_words = require('./keywords/academic_words/subjects/tpmWords');
//academic -> fmg
const fmg_words = require('./keywords/academic_words/subjects/fmgWords');
//academic -> tmm
const tmm_words = require('./keywords/academic_words/subjects/tmmWords');
//academic -> iae
const iae_words = require('./keywords/academic_words/subjects/iaeWords');
//academic -> tee
const iee_words = require('./keywords/academic_words/subjects/ieeWords');
//academic -> epd
const epd_words = require('./keywords/academic_words/subjects/epdWords');
//academic -> ir
const ir_words = require('./keywords/academic_words/subjects/irWords');
//academic -> tam
const tam_words = require('./keywords/academic_words/subjects/tamWords');
//academic -> ppc
const ppc4_words = require('./keywords/academic_words/subjects/ppc4Words');
//academic -> hrm
const hrm_words = require('./keywords/academic_words/subjects/hrmWords');
//academic -> bs
const bs_words = require('./keywords/academic_words/subjects/bsWords');
//academic -> bil
const bil_words = require('./keywords/academic_words/subjects/bilWords');
//academic -> fm1
const fm1_words = require('./keywords/academic_words/subjects/fm1Words');
//academic -> fm2
const fm2_words = require('./keywords/academic_words/subjects/fm2Words');
//academic -> ctca
const ctca_words = require('./keywords/academic_words/subjects/ctacaWords');
//academic -> wpp
const wpp_words = require('./keywords/academic_words/subjects/wppWords');
//academic -> weav prep
const weav_prep_words = require('./keywords/academic_words/subjects/weavPrepWords');
//academic -> mp
const mp_words = require('./keywords/academic_words/subjects/mpWords');
//academic -> fd2
const fd2_words = require('./keywords/academic_words/subjects/fd2Words');
//academic -> ap1
const ap1_words = require('./keywords/academic_words/subjects/ap1Words');
//academic -> ap2
const ap2_words = require('./keywords/academic_words/subjects/ap2Words');
//academic -> am1
const am1_words = require('./keywords/academic_words/subjects/am1Words');
//academic -> am2
const am2_words = require('./keywords/academic_words/subjects/am2Words');
//academic -> stat
const stat_words = require('./keywords/academic_words/subjects/statWords');
//academic -> ym1
const ym1_words = require('./keywords/academic_words/subjects/ym1Words');
//academic -> ym2
const ym2_words = require('./keywords/academic_words/subjects/ym2Words');
//academic -> wp1
const wp1_words = require('./keywords/academic_words/subjects/wp1Words');
//academic -> wp2
const wp2_words = require('./keywords/academic_words/subjects/wp2Words');
//academic -> marketing
const marketing_words = require('./keywords/academic_words/subjects/marketingWords');
//academic -> tp
const tp_words = require('./keywords/academic_words/subjects/tpWords');
//academic -> ttqc
const ttqc_words = require('./keywords/academic_words/subjects/ttqcWords');
//academic -> fdce
const fdce_words = require('./keywords/academic_words/subjects/fdceWords');
//academic -> economics
const econo_words = require('./keywords/academic_words/subjects/econoWords');
//academic -> tqm
const tqm_words = require('./keywords/academic_words/subjects/tqmWords');
//academic -> tcp
const tcp_words = require('./keywords/academic_words/subjects/tcpWords');
//academic -> ace
const ace_words = require('./keywords/academic_words/subjects/aceWords');
//academic -> pd
const pd_words = require('./keywords/academic_words/subjects/pdWords');
//academic -> mic
const mic_words = require('./keywords/academic_words/subjects/micWords');
//academic -> fsd
const fsd_words = require('./keywords/academic_words/subjects/fsdWords');
//academic -> lss
const lss_words = require('./keywords/academic_words/subjects/lssWords');
//academic -> pcs
const pcs_words = require('./keywords/academic_words/subjects/pcsWords');
//academic -> knit1
const knit1_words = require('./keywords/academic_words/subjects/knit1Words');
//academic -> mmtf
const mmtf_words = require('./keywords/academic_words/subjects/mmtfWords');
//academic -> eee
const eee_words = require('./keywords/academic_words/subjects/eeeWords');
//academic -> fyt
const fyt_words = require('./keywords/academic_words/subjects/fytWords');
//academic -> fme
const fme_words = require('./keywords/academic_words/subjects/fmeWords');
//academic -> sss1
const sss1_words = require('./keywords/academic_words/subjects/sss1Words');
//academic -> sss2
const sss2_words = require('./keywords/academic_words/subjects/sss2Words');
//academic -> weavPrepWords
const weavPrep_words = require('./keywords/academic_words/subjects/weavPrepWords');



//both subjs
const bothChem_words = require('./keywords/academic_words/subjects/bothChem');
const bothPhy_words = require('./keywords/academic_words/subjects/bothPhysics');
const bothMath_words = require('./keywords/academic_words/subjects/bothMath');

const quiz_words = require('./keywords/academic_words/quizWords');
const labWords = require('./keywords/academic_words/labWords');

const routineWords = require('./keywords/academic_words/routineWords');
const resultWords = require('./keywords/academic_words/resultWords');
const syllabusWords = require('./keywords/academic_words/syllabusWords');

//default reply
const defaultReply = require('./keywords/replies/defaultReply');
const getStartedMsg = require('./flows/botReplies/welcome/getStarted');

const testReply = require('./keywords/replies/testReply');


//toss
const tossWords = require('./keywords/tossWords');
const tossReplies = require('./keywords/replies/tossReply');

//reply words
const loveMojiReplies = require('./keywords/replies/lovemojiReply');
const sadStuffReply = require('./keywords/replies/sadReplies');
const greetReplies = require('./keywords/replies/greetingsReply');

//global replies
const notAvailable = require('./flows/botReplies/notAvailable');


//keyword flows
const notesFlow = require('./flows/botReplies/noteFlow');
const quizFlow = require('./flows/botReplies/quizFlow');
const level_1_notes = require('./flows/botReplies/note_levels/level_1/level_1_flow');
const level_2_notes = require('./flows/botReplies/note_levels/level_2/level_2_flow');
const level_3_notes = require('./flows/botReplies/note_levels/level_3/level_3_flow');
const level_4_notes = require('./flows/botReplies/note_levels/level_4/level_4_flow');

//academic flows -> bce
const bce_flow = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/bce_flow');
const bce_allsheets = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/allsheetsBce');
const bce_part_a = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/partABce');
const bce_part_b = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/partBBce');
const full_part_bce = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/fullabpartBce');
const bce_questions = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/bceQuestions');
const bce_letter = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/letterBce');
const bce_report = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/reportBce');
const bce_read_writing = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/reading_writingBce');
const bce_intro = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/introBce');
const bce_lang_func = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/langFuncBce');
const bce_comm = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/communicationBce');

//academic flows -> cp
const cp_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/cp_flow");
const cp_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/booksCp");
const cp_ques = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/quesCp");
const cp_condition = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/conditionCp");
const cp_fundamental = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/fundamentalCp");
const cp_loops = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/loopCp");
const cp_array = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/arrayCp");
const cp_function = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/funcCp");
const cp_string = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/stringCp");
const cp_suggestion = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/suggestionCp");

//academic flows -> chem1
const chem1_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/chem1_flow");
const chem1_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Books");
const chem1_ques = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Ques");
const chem1_period = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Perio");
const chem1_dilute = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Dilu");
const chem1_complex = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Complx");
const chem1_bond = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/cehm1Bond");
const chem1_kinetic = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/cehm1Kinetics");
const chem1_equilibrium = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Equi");
const chem1_photo = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Photo");
const chem1_analy = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Analy");
const chem1_colloid = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Coll");
const chem1_acid_base = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Acibas");

//academic flows -> chem2
const chem2_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/chem2_flow");
const chem2_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2Books");
const chem2_question = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2Ques");
const chem2_orgMetalic = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2OrgMet");
const chem2_carbonyl = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2Carbonyl");
const chem2_orgReac = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2OrgReac");
const chem2_AlcPhenol = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2AlcPhe");
const chem2_AminoAcid = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2Amino");
const chem2_carbohydrates = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2CarboHy");
const chem2_color_dye = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2ColorDye");
const chem2_carboxylic = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2Carboxylic");
const chem2_amine = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2Amine");
const chem2_solubulity = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem2/topics/chem2Solubility");




//academic flows -> phy1
const phy1_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/phy1_flow");
const phy1_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Books");
const phy1_ques = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Ques");
const phy1_circular = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Circular");
const phy1_hydro = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Hydro");
const phy1_diffraction = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Diffrac");
const phy1_interferrence = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Interfe");
const phy1_polar = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Polar");
const phy1_elasticity = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Elasti");
const phy1_viscosity = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Visco");
const phy1_surface = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Surface");

//academic flows -> phy2
const phy2_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/phy2_flow");
const phy2_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/phy2Books");
const phy2_question = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/phy2Ques");
const phy2_Kinetic = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/phy2Kinetic");
const phy2_Elctricity = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/electric/phy2Electric");
const phy2_Elctricity_slides = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/electric/electric_topics/electricSlides");
const phy2_Elctricity_notes = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/electric/electric_topics/electricNotes");
const phy2_Thermo = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/phy2Thermodynamic");
const phy2_Radiation = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/phy2Radiation");
const phy2_magnet = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/phy2Magnet");
const phy2_modern = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/phy2Modern");
const phy2_entropy = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/phy2Entropy");

const bothPhy_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/bothPhysics");
const bothChem_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/bothChem");
const bothMath_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/bothMath");


//academic flows -> math1
const math1_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/math1_flow");
const math1_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Books");
const math1_question = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Ques");
const math1_solve = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Solve/math1Solve");
const math1_solve_diff = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Solve/solves/diffSolve");
const math1_solve_coord = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Solve/solves/coOrdSolve");
const math1_solve_integre = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Solve/solves/integrationSolve");
const math1_solve_linear = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Solve/solves/linearSolve");
const math1_convergence = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Conver");
const math1_expansion = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Exapnasion");
const math1_differntitation = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Differnti");
const math1_integration = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Integreation");
const math1_extrema = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Extremea");
const math1_conics = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Conics");
const math1_vector = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Vector");
const math1_matrix = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Matrix");
const math1_coOrd = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1CoOrd");
const math1_linear = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Linear");
const math1_axes = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Axes");

//academic flows -> math2
const math2_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/math2_flow");
const math2_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2Books");
const math2_question = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2Ques");
const math2_suggestion = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2Sugg");
const math2_moivre = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2Moivre");
const math2_homo = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2Homo");
const math2_exact = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2Exact");
const math2_lde = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2LDE");
const math2_redhomo = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2RedHomo");
const math2_diffeqn = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/diffEqn/math2DifEqn");
const math2_diffeqn_note = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/diffEqn/diffEqn_Topics/diffEqnNote");
const math2_diffeqn_book = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/diffEqn/diffEqn_Topics/diffeqnBook");
const math2_linEqn = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2LinearEqn");
const math2_residue = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2Residue");
const math2_lineInt = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2LineInt");
const math2_methodVar = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2MethodVar");
const math2_analy = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2AnnalyFunc");
const math2_vector = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2Vector");
const math2_ode = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2ODe");
const math2_sepaVar = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2Separ");
const math2_laplace = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2Laplace");
const math2_cxNum = require("./flows/botReplies/note_levels/level_1/level_1_subs/math2/topics/math2CxNum");



//academic flows -> ntf
const ntf_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/ntf_flow");
const ntf_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfBooks");
const ntf_hand_notes = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfHandNotes");
const ntf_question = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfQues");
const ntf_suggestion = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfSuggestion");
const ntf_intro = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfIntro");
const ntf_cotton = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/cotton/ntfCotton");
const ntf_cotton_handNote = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/cotton/cotton_topics/cottonNotes");
const ntf_cotton_slide = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/cotton/cotton_topics/cottonSlides");
const ntf_cotton_video = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/cotton/cotton_topics/cottonVideos");
const ntf_flax = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfFlax");
const ntf_wool = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/wool/ntfWool");
const ntf_wool_handNote = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/wool/wool_topics/woolNotes");
const ntf_wool_slides = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/wool/wool_topics/woolSlides");
const ntf_wool_videos = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/wool/wool_topics/woolVideos");
const ntf_jute = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfJute");
const ntf_silk = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfSilk");
const ntf_sisal = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfSisal");
const ntf_hemp = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfHemp");
const ntf_palf = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfPalf");
const ntf_kapok = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfKapok");
const ntf_asbestos = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfAsbestos");
const ntf_other_fibre = require("./flows/botReplies/note_levels/level_1/level_1_subs/ntf/topics/ntfOtherFibres");


//academic flows -> em
const em_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/em_flow");
const em_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emBooks");
const em_question = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emQuestions");
const em_math = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emMath");
const em_blastFur = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emBlastFur");
const em_heatTreat = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emHeattreat");
const em_wrought = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emWroughtCast");
const em_crystal = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emCrystal");
const em_iron = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emIron");
const em_glass = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emGlass");
const em_ceramic = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emCeramic");
const em_corrosion = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emCorrosion");
const em_alloy = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emAlloy");
const em_composites = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emComposites");


//academic flows -> pse
const pse_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/pse_flow");
const pse_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseBooks");
const pse_questions = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseQuestions");
const pse_handnotes = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseHandNotes");
const pse_intro = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseIntro");
const pse_physical = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/psePhysical");
const pse_chemical = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseChemical");
const pse_moleWeight = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseMoleWeight");
const pse_step = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseStepGrowth");
const pse_chain = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseChainGrowth");
const pse_thermal = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseThermalTran");
const pse_degrad = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseDegradation");
const pse_polyTech = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/psePolymerizationTech");
const pse_application = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseAppliPoly");
const pse_morpho = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseMorpho");

//academic flows -> bfs
const bfs_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/bfs/bfs_flow");
const bfs_lec3 = require("./flows/botReplies/note_levels/level_1/level_1_subs/bfs/topics/bfsLec3");

//academic flows -> fmg
const fmg_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/fmg/fmg_flow");

//academic flows -> tmm
const tmm_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/tmm/tmm_flow");
const tmm_questions = require("./flows/botReplies/note_levels/level_1/level_1_subs/tmm/topics/tmmQues");

//academic flows -> tpm
const tpm_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/tpm/tpm_flow");
const tpm_ques = require("./flows/botReplies/note_levels/level_1/level_1_subs/tpm/topics/tpmQues");
const tpm_fabWet = require("./flows/botReplies/note_levels/level_1/level_1_subs/tpm/topics/tpmWovFabWet");
const tpm_fabManu = require("./flows/botReplies/note_levels/level_1/level_1_subs/tpm/topics/tpmWovFabManu");

//academic flows -> iae
const iae_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/iae/iae_flow");
const iae_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/iae/topics/iaeBooks");
const iae_question = require("./flows/botReplies/note_levels/level_1/level_1_subs/iae/topics/iaeQues");
const iae_intro = require("./flows/botReplies/note_levels/level_1/level_1_subs/iae/topics/iaeIntro");
const iae_fullSlide = require("./flows/botReplies/note_levels/level_1/level_1_subs/iae/topics/iaeFullSlide");
const iae_diffWov = require("./flows/botReplies/note_levels/level_1/level_1_subs/iae/topics/iaeDiffWoven");
const iae_brands = require("./flows/botReplies/note_levels/level_1/level_1_subs/iae/topics/iaeBrands");
const iae_quota = require("./flows/botReplies/note_levels/level_1/level_1_subs/iae/topics/iaeQuota");
const iae_cam = require("./flows/botReplies/note_levels/level_1/level_1_subs/iae/topics/iaeCam");
const iae_shirt = require("./flows/botReplies/note_levels/level_1/level_1_subs/iae/topics/iaeShirt");

//academic flows -> iee
const iee_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/iee/iee_flow");
const iee_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/iee/topics/ieeBooks");
const iee_sheets = require("./flows/botReplies/note_levels/level_1/level_1_subs/iee/topics/ieeSheets");
const iee_notes = require("./flows/botReplies/note_levels/level_1/level_1_subs/iee/topics/ieeHandNotes");
const iee_manEnv = require("./flows/botReplies/note_levels/level_1/level_1_subs/iee/topics/ieeManEnv");
const iee_soil = require("./flows/botReplies/note_levels/level_1/level_1_subs/iee/topics/ieeSoil");
const iee_envIssues = require("./flows/botReplies/note_levels/level_1/level_1_subs/iee/topics/ieeSheets");
const iee_natureEnv = require("./flows/botReplies/note_levels/level_1/level_1_subs/iee/topics/ieeNatureEnv");
const iee_spf = require("./flows/botReplies/note_levels/level_1/level_1_subs/iee/topics/ieeSPF");


//level2
//fm1
const fm1_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/fm1_flow");
const fm1_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Books");
const fm1_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1HandNotes");
const fm1_question = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Ques");
const fm1_sugg = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Sugg");
const fm1_loom = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Loom");
const fm1_motionWeav = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1MotionWeav");
const fm1_weaving = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Weav");
const fm1_intro = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Intro");
const fm1_shedding = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Shedding");
const fm1_sizing = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Sizing");
const fm1_dobby= require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Dobby");
const fm1_winding = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Winding");
const fm1_warping = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Warping");


//mmtf
const mmtf_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/mmtf_flow");
const mmtf_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfBooks");
const mmtf_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfNotes");
const mmtf_suggestion = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfSuggestion");
const mmtf_intro = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfIntro");
const mmtf_rayon = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfRayon");
const mmtf_spin_sys = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfSpinningSys");
const mmtf_highperf = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfHighPerf");
const mmtf_polyamide = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfPolyamaide");
const mmtf_modal = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfModal");
const mmtf_elastomer = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfElastomer");
const mmtf_polyolefin = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfPolyolefin");
const mmtf_carbonFib = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfCarbonFib");
const mmtf_acetate = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfAcetate");
const mmtf_biofib = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfBioFib");
const mmtf_lyocell = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfLyocell");
const mmtf_glassfib = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfGlassFib");
const mmtf_nylon = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfNylon");
const mmtf_polyester = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfPolyester");
const mmtf_acrylic = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfAcrylic");
const mmtf_vectran = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfVectran");
const mmtf_regenFib = require("./flows/botReplies/note_levels/level_2/level_2_subs/mmtf/topics/mmtfRegen");

//ttqc
const ttqc_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/ttqc_flow");
const ttqc_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcBooks");
const ttqc_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcNotes");
const ttqc_count = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcCount");
const ttqc_crimp = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcCrimp");
const ttqc_twist = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcTwist");
const ttqc_intro = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcIntro");
const ttqc_moisture = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcIntro");
const ttqc_neps = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcNeps");
const ttqc_sampling = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcSampling");
const ttqc_fibre_prop = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcFibreProp");
const ttqc_hvi = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcHvi");
const ttqc_afis = require("./flows/botReplies/note_levels/level_2/level_2_subs/ttqc/topics/ttqcAfis");

//stat
const stat_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/stat_flow");
const stat_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statBooks");
const stat_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statNotes");
const stat_probab = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statProbab");
const stat_intro = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statIntro");
const stat_central_tend = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statCentralTend");
const stat_cv = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statCv");
const stat_moments = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statMoments");
const stat_shape = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statShape");
const stat_design = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statDesignExp");
const stat_normal = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statNormalDistri");
const stat_binomial = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statBinomial");
const stat_poission = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statPoission");
const stat_regression = require("./flows/botReplies/note_levels/level_2/level_2_subs/stat/topics/statRegression");


//eee
const eee_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/eee_flow");
const eee_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeBooks");
const eee_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeNotes");
const eee_ques = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeQues");
const eee_ch1 = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeCh1");
const eee_ch2 = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeCh2");
const eee_ch3 = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeCh3");
const eee_ch4 = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeCh4");
const eee_ch5 = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeCh5");
const eee_ch8 = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeCh8");
const eee_wye = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeWye");
const eee_rms = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeRms");
const eee_circuit = require("./flows/botReplies/note_levels/level_2/level_2_subs/eee/topics/eeeCircuit");


//am1
const am1_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/am1_flow");
const am1_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Books");
const am1_question = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Ques");
const am1_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Notes");
const am1_intro = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Intro");
const am1_strucTex = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Structure");
const am1_sizing = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Sizing");
const am1_seam = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Seam");
const am1_trims = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Trim");
const am1_interlining = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Interlining");
const am1_pattern = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Pattern");
const am1_marker = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Marker");
const am1_spreading = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Spread");
const am1_fabricCut = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1FabricCut");
const am1_fabricInspection = require("./flows/botReplies/note_levels/level_2/level_2_subs/am1/topics/am1Inspection");


//marketing
const marketing_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/marketing_flow");
const marketing_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketBooks");
const marketing_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketNotes");
const marketing_ques = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketQues");
const marketing_sugg = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketSugg");
const marketing_intro = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketIntro");
const marketing_field = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketField");
const marketing_function = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketFunc");
const marketing_concept = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketConcept");
const marketing_orientation = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketOrientation");
const marketing_micro = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketMicroEnv");
const marketing_macro = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketMacroEnv");
const marketing_segment = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketSegment");
const marketing_target = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketTargeting");
const marketing_diffPoss = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketDiffPos");
const marketing_channelDist = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketChannelDist");
const marketing_retail = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketRetailing");
const marketing_priceSys = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketPrice");
const marketing_consumer_buyer = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketConsumerBuyer");
const marketing_branding = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketBranding");
const marketing_newProd = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketNewProduct");
const marketing_advert = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketAdvert");
const marketing_compStrat = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketCompetetive");
const marketing_priceStrat = require("./flows/botReplies/note_levels/level_2/level_2_subs/marketing/topics/marketPriceStart");

//fyt
const fyt_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/fyt_flow");
const fyt_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/topics/fytBooks");
const fyt_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/topics/fytNotes");
const fyt_sugg = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/topics/fytSugg");
const fyt_number = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/topics/fytNumbering");
const fyt_twist = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/topics/fytTwist");
const fyt_evenness = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/topics/fytEvenness");
const fyt_count = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/topics/fytCounting");
const fyt_afis = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/topics/fytAfis");
const fyt_iso = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/topics/fytIso");
const fyt_capaOp = require("./flows/botReplies/note_levels/level_2/level_2_subs/fyt/topics/fytcapaOptical");

//ctca
const ctca_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/ctca/ctca_flow");
const ctca_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/ctca/topics/ctcaBooks");
const ctca_sheets = require("./flows/botReplies/note_levels/level_2/level_2_subs/ctca/topics/ctcaSheets");
const ctca_thickAgents = require("./flows/botReplies/note_levels/level_2/level_2_subs/ctca/topics/ctcaThickAgent");
const ctca_water = require("./flows/botReplies/note_levels/level_2/level_2_subs/ctca/topics/ctcaWater");
const ctca_surfact = require("./flows/botReplies/note_levels/level_2/level_2_subs/ctca/topics/ctcaSurfactant");
const ctca_bleach = require("./flows/botReplies/note_levels/level_2/level_2_subs/ctca/topics/ctcaBleach");
const ctca_solutions = require("./flows/botReplies/note_levels/level_2/level_2_subs/ctca/topics/ctcaSolutions");
const ctca_colloid = require("./flows/botReplies/note_levels/level_2/level_2_subs/ctca/topics/ctcaColloid");


//fme
const fme_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/fme_flow");
const fme_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeBooks");
const fme_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeNotes");
const fme_ques = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeQues");
const fme_sugg = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeSugg");
const fme_boiler = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeBoiler");
const fme_powerRefre = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmePowerRef");
const fme_steamTurb = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeSteamTurb");
const fme_thermalEng = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeThermalEng");
const fme_fluidMecha = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeFluidMech");
const fme_energyProc = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeEnergProc");
const fme_solid = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeSolid");
const fme_gearTrain = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeGearTrain");
const fme_pumpCompressor = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmePump");
const fme_stress = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeStress");
const fme_enginePetrol = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeEnginePetrol");
const fme_engineCombus = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeEngineCombus");
const fme_beam = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeBeam");
const fme_belt = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeBelt");
const fme_centroid = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeCentroid");
const fme_momentofInnertia = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeMomentInnertia");
const fme_column = require("./flows/botReplies/note_levels/level_2/level_2_subs/fme/topics/fmeColumn");


//sss1
const sss1_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/sss1/sss1_flow");
const sss1_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/sss1/topics/sss1Books");
const sss1_blowRoom = require("./flows/botReplies/note_levels/level_2/level_2_subs/sss1/topics/sss1BlowRoom");
const sss1_DrawFrame = require("./flows/botReplies/note_levels/level_2/level_2_subs/sss1/topics/sss1DrawFrame");
const sss1_Carding = require("./flows/botReplies/note_levels/level_2/level_2_subs/sss1/topics/sss1Carding");
const sss1_intro = require("./flows/botReplies/note_levels/level_2/level_2_subs/sss1/topics/sss1Intro");
const sss1_introFib = require("./flows/botReplies/note_levels/level_2/level_2_subs/sss1/topics/sss1IntroFib");

//sss2
const sss2_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/sss2/sss2_flow");
const sss2_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/sss2/topics/sss2Notes");
const sss2_ringFrame = require("./flows/botReplies/note_levels/level_2/level_2_subs/sss2/topics/sss2Ringframe");


//ym1
const ym1_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/ym1_flow");
const ym1_intro = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1Intro");
const ym1_indeter = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1Indeterminer");
const ym1_blowroom = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1Blowroom");
const ym1_mixBlend = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1MixBlend");
const ym1_fibreProp = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1FibreProp");
const ym1_yarnCondi = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1YarnCond");
const ym1_comber = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1Comber");
const ym1_ringFrame = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1RingFrame");
const ym1_speedFrame = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1SpeedFrame");
const ym1_carding = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1Carding");
const ym1_drawFrame = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1Drawframe");
const ym1_winding = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1Winding");
const ym1_lapFormer = require("./flows/botReplies/note_levels/level_2/level_2_subs/ym1/topics/ym1LapFormer");

//fdce
const fdce_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/fdce/fdce_flow");
const fdce_DyesPig = require("./flows/botReplies/note_levels/level_2/level_2_subs/fdce/topics/fdceDyesPig");
const fdce_Chroamto = require("./flows/botReplies/note_levels/level_2/level_2_subs/fdce/topics/fdceChromato");
const fdce_Polarity = require("./flows/botReplies/note_levels/level_2/level_2_subs/fdce/topics/fdcePolarity");
const fdce_SepaPuri = require("./flows/botReplies/note_levels/level_2/level_2_subs/fdce/topics/fdceSeparationPuri");
const fdce_BalanceChem = require("./flows/botReplies/note_levels/level_2/level_2_subs/fdce/topics/fdceBalancingChem");
const fdce_filtrationMethod = require("./flows/botReplies/note_levels/level_2/level_2_subs/fdce/topics/fdceFiltrationMethod");

//tp
const tp_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/tp_flow");
const tp_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpBooks");
const tp_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpNotes");
const tp_sugg = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpSugg");
const tp_questions = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpQues");
const tp_swelling = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpSwelling");
const tp_friction = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpFriction");
const tp_yarnJamming = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpYarnJamming");
const tp_Optical = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpOptical");
const tp_fibreMig = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpfibMigration");
const tp_tehrmalProp = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpThermalProp");
const tp_fibreDraw = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpFibreDraw");
const tp_xray = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpXray");
const tp_yarnStructure = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpYarnStruc");
const tp_fabricGeometry = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpFabgeometry");
const tp_tensileProp = require("./flows/botReplies/note_levels/level_2/level_2_subs/tp/topics/tpTensileProp");


//wpp
const wpp_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/wpp/wpp_flow");
const wpp_ques = require("./flows/botReplies/note_levels/level_2/level_2_subs/wpp/topics/wppQues");
const wpp_pretreatment = require("./flows/botReplies/note_levels/level_2/level_2_subs/wpp/topics/wppPretreatment");
const wpp_singeing = require("./flows/botReplies/note_levels/level_2/level_2_subs/wpp/topics/wppSingeing");
const wpp_desizing = require("./flows/botReplies/note_levels/level_2/level_2_subs/wpp/topics/wppDesizing");


//fd2
const fd2_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/fd2/fd2_flow");


//weav_prep
const weavPrep_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/weaving_prep/weaving_prep_flow");
const weavPrep_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/weaving_prep/topics/weavBooks")
















//level4-
//epd
//academic flows -> epd
const epd_flow = require("./flows/botReplies/note_levels/level_4/level_4_subs/epd/epd_flow");

//academic flows -> ir
const ir_flow = require("./flows/botReplies/note_levels/level_4/level_4_subs/ir/ir_flow");
const ir_ir_flow = require("./flows/botReplies/note_levels/level_4/level_4_subs/ir/topics/irIndustrialRelation");

//academic flows -> tam
const tam_flow = require("./flows/botReplies/note_levels/level_4/level_4_subs/tam/tam_flow");
const tam_intro_merch = require("./flows/botReplies/note_levels/level_4/level_4_subs/tam/topics/tamIntroMerch");


//academic flows -> ppc
const ppc_flow = require("./flows/botReplies/note_levels/level_4/level_4_subs/ppc/ppc_flow");

//academic flows -> hrm
const hrm_flow = require("./flows/botReplies/note_levels/level_4/level_4_subs/hrm/hrm_flow");

//academic flows -> bs
const bs_flow = require("./flows/botReplies/note_levels/level_4/level_4_subs/bs/bs_flow");

//academic flows -> bil
const bil_flow = require("./flows/botReplies/note_levels/level_4/level_4_subs/bil/bil_flow");
const bil_laborlaw = require("./flows/botReplies/note_levels/level_4/level_4_subs/bil/topics/bilLaborLaw");





const labFlow = require('./flows/botReplies/labFlow');

//routine
const routineFlow = require('./flows/botReplies/routineFlow');
const routine_level1 = require('./flows/botReplies/routine_levels/level_1/level_1_routine_flow');
const routine_l1t1 = require('./flows/botReplies/routine_levels/level_1/terms/l1t1Routine');
const routine_l1t2 = require('./flows/botReplies/routine_levels/level_1/terms/l1t2Routine');
const routine_level2 = require('./flows/botReplies/routine_levels/level_2/level_2_routine_flow');
const routine_l2t1 = require('./flows/botReplies/routine_levels/level_2/terms/l2t1Routine');
const routine_l2t2 = require('./flows/botReplies/routine_levels/level_2/terms/l2t2Routine');
const routine_level3 = require('./flows/botReplies/routine_levels/level_3/level_3_routine_flow');
const routine_l3t1 = require('./flows/botReplies/routine_levels/level_3/terms/l3t1Routine');
const routine_l3t2 = require('./flows/botReplies/routine_levels/level_3/terms/l3t2Routine');
const routine_level4 = require('./flows/botReplies/routine_levels/level_4/level_4_routine_flow');
const routine_l4t1 = require('./flows/botReplies/routine_levels/level_4/terms/l4t1Routine');
const routine_l4t2 = require('./flows/botReplies/routine_levels/level_4/terms/l4t2Routine');
const routine_online_2_1 = require('./flows/botReplies/routine_levels/online_routine/level2/onlineL2T1');
const routine_online_3_1 = require('./flows/botReplies/routine_levels/online_routine/level3/onlineL3T1');

//results
const resultFlow = require('./flows/botReplies/resultFlow');
const result_Academic = require('./flows/botReplies/result_flows/academic_result/acdemicResult');
const result_Academic_2018 = require('./flows/botReplies/result_flows/academic_result/years/2018AcaResult');
const result_Academic_2019 = require('./flows/botReplies/result_flows/academic_result/years/2019AcaResult');
const result_Admission = require('./flows/botReplies/result_flows/admission_result/admissionResult');
const result_Retake = require('./flows/botReplies/result_flows/retake_result/retakeResult');
const result_Retake_2018 = require('./flows/botReplies/result_flows/retake_result/years/retake2018Res');
const result_Retake_2019 = require('./flows/botReplies/result_flows/retake_result/years/retake2019Res');
const result_Affli = require('./flows/botReplies/result_flows/affli_result/affliResult');
const result_Affli_2019 = require('./flows/botReplies/result_flows/affli_result/years/affli2019Res');
const result_Affli_2020 = require('./flows/botReplies/result_flows/affli_result/years/affli2020Res');


//syllabus
const syllabusFlow = require('./flows/botReplies/syllabusFlow');
//45
const syllabus_45 = require('./flows/botReplies/syllabus_batches/45/syllabus45');
const syllabus_45_ae = require('./flows/botReplies/syllabus_batches/45/depts/ae_45/ae45Syllabus');
const syllabus_45_ye = require('./flows/botReplies/syllabus_batches/45/depts/ye_45/ye45Syllabus');
const syllabus_45_fe = require('./flows/botReplies/syllabus_batches/45/depts/fe_45/fe45Syllabus');
const syllabus_45_tem = require('./flows/botReplies/syllabus_batches/45/depts/tem_45/tem45Syllabus');
const syllabus_45_ipe = require('./flows/botReplies/syllabus_batches/45/depts/ipe_45/ipe45Syllabus');
const syllabus_45_tfd = require('./flows/botReplies/syllabus_batches/45/depts/tfd_45/tfd45Syllabus');
const syllabus_45_ese = require('./flows/botReplies/syllabus_batches/45/depts/ese_45/ese45Syllabus');
const syllabus_45_tmdm = require('./flows/botReplies/syllabus_batches/45/depts/tmdm_45/tmdm45Syllabus');
const syllabus_45_dce = require('./flows/botReplies/syllabus_batches/45/depts/dce_45/dce45Syllabus');
const syllabus_45_wpe = require('./flows/botReplies/syllabus_batches/45/depts/wpe_45/wpe45Syllabus');











const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;

let testMsg = (req, res) => {
    return res.status(200).send(`Hello from notebot engine v1 ✔✔\n here are some routes - \n/profile\n/homepage`)
}

//get webhook
let getWebhook = (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = MY_VERIFY_TOKEN;

    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);

        }
        else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
}


//post webhook
let postWebhook = (req, res) => {

    let body = req.body;

    // Checks this is an event from a page subscription
    if (body.object === 'page') {

        // Iterates over each entry - there may be multiple if batched
        body.entry.forEach(function(entry) {

            // Gets the message. entry.messaging is an array, but 
            // will only ever contain one message, so we get index 0
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);

            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            console.log('Sender PSID: ' + sender_psid);

            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }
        });

    // Returns a '200 OK' response to all requests
        res.status(200).send('EVENT_RECEIVED');
  } 
    else {
        // Returns a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    } 
    
}



// Handles messages events
function handleMessage(sender_psid, received_message) {

    let response;
    
    //keywords
    const greets = greetWords;

    //academic
    const notes = noteWords;
    const level1 = level_1_note_words;
    const level2 = level_2_note_words;
    const level3 = level_3_note_words;
    const level4 = level_4_note_words;
    const bce = bce_words;
    const chem1 = chem1_words;
    const chem2 = chem2_words;
    const phy1 = phy1_words;
    const phy2 = phy2_words;
    const math1 = math1_words;
    const math2 = math2_words;
    const cp = cp_words;
    const ntf = ntf_words;
    const em = em_words;
    const bfs = bfs_words;
    const pse = pse_words;
    const tpm = tpm_words;
    const fmg = fmg_words;
    const tmm = tmm_words;
    const iae = iae_words;
    const iee = iee_words;
    const epd = epd_words;
    const ir = ir_words;
    const tam = tam_words;
    const ppc = ppc4_words;
    const hrm = hrm_words;
    const bs = bs_words;
    const bil = bil_words;
    const fm1 = fm1_words;
    const mmtf = mmtf_words;
    const ttqc = ttqc_words;
    const stat = stat_words;
    const feee = eee_words;
    const am1 = am1_words;
    const marketing = marketing_words;
    const fyt = fyt_words;
    const ctca = ctca_words;
    const fme = fme_words;
    const sss1 = sss1_words;
    const sss2 = sss2_words;
    const ym1 = ym1_words;
    const fdce = fdce_words;
    const tp = tp_words;
    const wpp = wpp_words;
    const fd2 = fd2_words;
    const weavPrep = weavPrep_words;

  

    const bothChem = bothChem_words;
    const bothMath = bothMath_words;
    const bothPhy = bothPhy_words;
    

    const quiz = quiz_words;
    const lab_report = labWords;
    const result = resultWords;
    const routine = routineWords;
    const syllabus = syllabusWords;


    const greetReply = greetReplies;
    const loveMoji = loveMojis;
    const loveReply = loveMojiReplies;
    const sadReply = sadStuffReply;
    const positive = positiveKeywords;
    const negative = negativeKeywords;
    const toss = tossWords;

    const getStartedWords = ["Get Started", "get satrted", "Get started", "get Started"];

    const test = ["test", "Test"];

    
    
    // Check if the message
    if (wordIncludes(greets, received_message)) {
      // Create the payload for a basic text message
      response = greetReplies[0];

      callSendAPI(sender_psid, response);  
    }



    else if (wordIncludes(positive, received_message)) {
      response = {
        "text": `${randomPicker(loveReply)}`
      }

      callSendAPI(sender_psid, response);  
    }

    else if (wordIncludes(toss, received_message)) {
      response = {
        "text": `${randomPicker(tossReplies)}`
      }

      callSendAPI(sender_psid, response);  
    }

    else if (getStartedWords.some(word => received_message.text.toLowerCase().includes(word))) {
      response = getStartedMsg[0];

      callSendAPI(sender_psid, response);  
    }

    /*
    else if (test.includes(received_message.text)) {
      // Create the payload for a basic text message
      return response = testReply[0];
    }
    */


    else if (wordIncludes(negative, received_message)) {
      // Create the payload for a basic text message
      response = {
        "text": `${randomPicker(sadReply)}`
      }

      callSendAPI(sender_psid, response);  
    }


    //academic
    else if (notes.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, notesFlow);
    }

    else if (quiz.some(word => received_message.text.toLowerCase().includes(word))) { 
      magicFunc(sender_psid, quizFlow);
    }

    else if (level1.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, level_1_notes);
    }

    else if (level2.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, level_2_notes);
    }

    else if (level3.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, level_3_notes);
    }

    else if (level4.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, level_4_notes);
    }

    else if (bothChem.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, bothChem_flow);
    }
    else if (bothPhy.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, bothPhy_flow);
    }
    else if (bothMath.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, bothMath_flow);
    }

    //academic -> bce
    else if (bce.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, bce_flow);
    }

     //academic -> fd2
     else if (fd2.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, fd2_flow);
    }

    //academic -> weaving prep
    else if (weavPrep.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, weavPrep_flow);
    }

    //academic -> wpp
    else if (wpp.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, wpp_flow);
    }

     //academic -> fdce
     else if (fdce.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, fdce_flow);
    }

    //academic -> feee
    else if (feee.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, eee_flow);
    }

    //academic -> sss1
    else if (sss1.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, sss1_flow);
    }

    //academic -> sss2
    else if (sss2.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, sss2_flow);
    }

    //academic -> ym1
    else if (ym1.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, ym1_flow);
    }

    //academic -> mmtf
    else if (mmtf.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, mmtf_flow);
    }

    //academic -> ctca
    else if (ctca.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, ctca_flow);
    }

     //academic -> am1
     else if (am1.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, am1_flow);
    }

    //academic -> stat
    else if (stat.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, stat_flow);
    }

    //academic -> fyt
    else if (fyt.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, fyt_flow);
    }

    //academic -> ttqc
    else if (ttqc.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, ttqc_flow);
    }

    //academic -> marketing
    else if (marketing.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, marketing_flow);
    }

    //academic -> iae
    else if (iae.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, iae_flow);
    }

    //academic -> fme
    else if (fme.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, fme_flow);
    }

    //academic -> tp
    else if (tp.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, tp_flow);
    }

    //academic -> bs
    else if (bs.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, bs_flow);
    }

    //academic -> bil
    else if (bil.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, bil_flow);
    }
     //academic -> fm1
     else if (fm1.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, fm1_flow);
    }

     //academic -> epd
     else if (epd.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, epd_flow);
    }

     //academic -> ppc
     else if (epd.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, epd_flow);
    }

    //academic -> ppc
    else if (ppc.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, ppc_flow);
    }

     //academic -> tam
     else if (tam.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, tam_flow);
    }

     //academic -> hrm
     else if (hrm.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, hrm_flow);
    }

    //academic -> ir
    else if (ir.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, ir_flow);
    }

    //academic -> iee
    else if (iee.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, iee_flow);
    }

    //academic -> cp
    else if (cp.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, cp_flow);
    }

     //academic -> bfs
    else if (bfs.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, bfs_flow);
    }

     //academic -> fmg
     else if (fmg.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, fmg_flow);
    }

    //academic -> tmm
    else if (tmm.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, tmm_flow);
    }

     //academic -> tpm
     else if (tpm.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, tpm_flow);
    }

     //academic -> chem1
     else if (chem1.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, chem1_flow);
    }

    //academic -> chem2
    else if (chem2.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, chem2_flow);
    }

     //academic -> phy1
     else if (phy1.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, phy1_flow);
    }

    //academic -> phy2
    else if (phy2.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, phy2_flow);
    }

    //academic -> math1
    else if (math1.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, math1_flow);
    }

    //academic -> ntf
    else if (ntf.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, ntf_flow);
    }

    //academic -> em
    else if (em.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, em_flow);
    }

    //academic -> pse
    else if (pse.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, pse_flow);
    }


    else if (lab_report.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, labFlow);
    }

    else if (result.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, resultFlow);
    }

    else if (routine.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, routineFlow);
    }

    else if (syllabus.some(word => received_message.text.toLowerCase().includes(word))) {
      magicFunc(sender_psid, syllabusFlow);
    }

    //academic -> math2
    else if (math2.includes(received_message.text.toLowerCase())) {
      magicFunc(sender_psid, math2_flow);
    }






    //emoji
    else if (loveMoji.some(word => received_message.text.includes(word))) {
      // Create the payload for a basic text message
      response = {
        "text": `${loveReply[Math.floor(Math.random() * loveReply.length)]}`
      }
      callSendAPI(sender_psid, response);  
    }

    
    

    //default reply
    else if (received_message.text) {
      response = defaultReply[0];

      callSendAPI(sender_psid, response);  
    }
    
    // Sends the response message
    //callSendAPI(sender_psid, response);    
  }



// Handles messaging_postbacks events(button response)
let handlePostback = async (sender_psid, received_postback) => {

  let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === 'GET_STARTED') {
      //getting username
      let username = await chatBotService.getFacebookUserInfo(sender_psid);

      console.log(username);
      response = getStartedMsg[0];
      callSendAPI(sender_psid, response);
    } 

    else if (payload === 'level_1') {
      magicFunc(sender_psid, level_1_notes);
    } 

    else if (payload === 'level_2') {
      magicFunc(sender_psid, level_2_notes);
  } 
    else if (payload === 'level_3') {
      magicFunc(sender_psid, level_3_notes);
    }
    else if (payload === 'level_4') {
      magicFunc(sender_psid, level_4_notes);
    }

    //subject-> bce
    else if (payload === 'bce_flow') {
      magicFunc(sender_psid, bce_flow);
    }

    else if (payload === 'all_sheets_bce_flow') {
      magicFunc(sender_psid, bce_allsheets);
    }

    else if (payload === 'part_a_bce_flow') {
      magicFunc(sender_psid, bce_part_a);
    }

    else if (payload === 'part_b_bce_flow') {
      magicFunc(sender_psid, bce_part_b);
    }

    else if (payload === 'full_ab_bce_flow') {
      magicFunc(sender_psid, full_part_bce);
    }


    else if (payload === 'letter_bce_flow') {
      magicFunc(sender_psid, bce_letter);
    }


    else if (payload === 'communi_bce_flow') {
      magicFunc(sender_psid, bce_comm);
    }

    else if (payload === 'lang_func_bce_flow') {
      magicFunc(sender_psid, bce_lang_func);
    }

    else if (payload === 'intro_bce_flow') {
      magicFunc(sender_psid, bce_intro);
    }

    else if (payload === 'bce_ques_flow') {
      magicFunc(sender_psid, bce_questions);
    }

    else if (payload === 'report_bce_flow') {
      magicFunc(sender_psid, bce_report);
    }


    else if (payload === 'read_write_bce_flow') {
      magicFunc(sender_psid, bce_read_writing);
    }

    //subject-> cp
    else if (payload === 'cp_flow') {
      magicFunc(sender_psid, cp_flow);
    }

    else if (payload === 'books_cp_flow') {
      magicFunc(sender_psid, cp_books);
    }

    else if (payload === 'ques_cp_flow') {
      magicFunc(sender_psid, cp_ques);
    }

    else if (payload === 'condition_cp_flow') {
      magicFunc(sender_psid, cp_condition);
    }

    else if (payload === 'fundamental_cp_flow') {
      magicFunc(sender_psid, cp_fundamental);
    }

    else if (payload === 'loop_cp_flow') {
      magicFunc(sender_psid, cp_loops);
    }

    else if (payload === 'array_cp_flow') {
      magicFunc(sender_psid, cp_array);
    }


    else if (payload === 'function_cp_flow') {
      magicFunc(sender_psid, cp_function);
    }


    else if (payload === 'string_cp_flow') {
      magicFunc(sender_psid, cp_string);
    }

    else if (payload === 'suggestion_cp_flow') {
      magicFunc(sender_psid, cp_suggestion);
    }


    //subject-> chem1
    else if (payload === 'che1_flow') {
      magicFunc(sender_psid, chem1_flow);
    }

    else if (payload === 'chem1_books_flow') {
      magicFunc(sender_psid, chem1_books);
    }

    else if (payload === 'chem1_ques_flow') {
      magicFunc(sender_psid, chem1_ques);
    }

    else if (payload === 'chem1_periodic_flow') {
      magicFunc(sender_psid, chem1_period);
    }

    else if (payload === 'chem1_dilute_flow') {
      magicFunc(sender_psid, chem1_dilute);
    }

    else if (payload === 'chem1_complx_flow') {
      magicFunc(sender_psid, chem1_complex);
    }

    else if (payload === 'chem1_bond_flow') {
      magicFunc(sender_psid, chem1_bond);
    }

    else if (payload === 'chem1_equi_flow') {
      magicFunc(sender_psid, chem1_equilibrium);
    }

    else if (payload === 'chem1_photo_flow') {
      magicFunc(sender_psid, chem1_photo);
    }

    else if (payload === 'chem1_analy_flow') {
      magicFunc(sender_psid, chem1_analy);
    }

    else if (payload === 'chem1_coll_flow') {
      magicFunc(sender_psid, chem1_colloid);
    }

    else if (payload === 'chem1_acid_base_flow') {
      magicFunc(sender_psid, chem1_acid_base);
    }

    else if (payload === 'chem1_kinetics_flow') {
      magicFunc(sender_psid, chem1_kinetic);
    }

    //subject-> phy1
    else if (payload === 'phy1_flow') {
      magicFunc(sender_psid, phy1_flow);
    }

    else if (payload === 'phy1_books_flow') {
      magicFunc(sender_psid, phy1_books);
    }

    else if (payload === 'phy1_ques_flow') {
      magicFunc(sender_psid, phy1_ques);
    }

    else if (payload === 'phy1_circular_flow') {
      magicFunc(sender_psid, phy1_circular);
    }

    else if (payload === 'phy1_hydro_flow') {
      magicFunc(sender_psid, phy1_hydro);
    }

    else if (payload === 'phy1_diffraction_flow') {
      magicFunc(sender_psid, phy1_diffraction);
    }

    else if (payload === 'phy1_interfer_flow') {
      magicFunc(sender_psid, phy1_interferrence);
    }

    else if (payload === 'phy1_polar_flow') {
      magicFunc(sender_psid, phy1_polar);
    }

    else if (payload === 'phy1_elas_flow') {
      magicFunc(sender_psid, phy1_elasticity);
    }

    else if (payload === 'phy1_visco_flow') {
      magicFunc(sender_psid, phy1_viscosity);
    }

    else if (payload === 'phy1_surface_flow') {
      magicFunc(sender_psid, phy1_surface);
    }

    //subject-> math1
    else if (payload === 'math1_flow') {
      magicFunc(sender_psid, math1_flow);
    }

    else if (payload === 'math1_books_flow') {
      magicFunc(sender_psid, math1_books);
    }

    else if (payload === 'math1_ques_flow') {
      magicFunc(sender_psid, math1_question);
    }

    else if (payload === 'math1_solve18_flow') {
      magicFunc(sender_psid, math1_solve);
    }

    else if (payload === 'math1_diff_solve_flow') {
      magicFunc(sender_psid, math1_solve_diff);

    }

    else if (payload === 'math1_coord_solve_flow') {
      magicFunc(sender_psid, math1_solve_coord);
    }

    else if (payload === 'math1_integreation_solve_flow') {
      magicFunc(sender_psid, math1_solve_integre);
    }

    
    else if (payload === 'math1_linear_solve_flow') {
      magicFunc(sender_psid, math1_solve_linear);
    }

    else if (payload === 'math1_conv_div_flow') {
      magicFunc(sender_psid, math1_convergence);
    }

    else if (payload === 'math1_exapnsion_flow') {
      magicFunc(sender_psid, math1_expansion);
    }

    else if (payload === 'math1_diff_flow') {
      magicFunc(sender_psid, math1_differntitation);
    }

    else if (payload === 'math1_integre_flow') {
      magicFunc(sender_psid, math1_integration);
    }

    else if (payload === 'math1_extreme_flow') {
      magicFunc(sender_psid, math1_extrema);
    }

    else if (payload === 'math1_conics_flow') {
      magicFunc(sender_psid, math1_conics);
    }

    else if (payload === 'math1_vector_flow') {
      magicFunc(sender_psid, math1_vector);
    }

    else if (payload === 'math1_matrix_flow') {
      magicFunc(sender_psid, math1_matrix);
    }

    else if (payload === 'math1_co_ord_flow') {
      magicFunc(sender_psid, math1_coOrd);
    }

    else if (payload === 'math1_linear_flow') {
      magicFunc(sender_psid, math1_linear);
    }

    else if (payload === 'math1_change_axes_flow') {
      magicFunc(sender_psid, math1_axes);
    }

    //quizflow
    else if (payload === 'quiz_flow') {
      magicFunc(sender_psid, quizFlow);
    }


    //subject-> ntf
    else if (payload === 'ntf_flow') {
      magicFunc(sender_psid, ntf_flow);
    }

    else if (payload === 'ntf_books_flow') {
      magicFunc(sender_psid, ntf_books);
    }

    else if (payload === 'ntf_hnotes_flow') {
      magicFunc(sender_psid, ntf_hand_notes);
    }

    else if (payload === 'ntf_ques_flow') {
      magicFunc(sender_psid, ntf_question);
    }

    else if (payload === 'ntf_suggestion_flow') {
      magicFunc(sender_psid, ntf_suggestion);
    }

    else if (payload === 'ntf_intro_flow') {
      magicFunc(sender_psid, ntf_intro);
    }

    else if (payload === 'ntf_cotton_flow') {
      magicFunc(sender_psid, ntf_cotton);
    }

    else if (payload === 'ntf_cotton_hand_flow') {
      magicFunc(sender_psid, ntf_cotton_handNote);
    }

    else if (payload === 'ntf_slides_flow') {
      magicFunc(sender_psid, ntf_cotton_slide);
    }

    else if (payload === 'ntf_videos_flow') {
      magicFunc(sender_psid, ntf_cotton_video);
    }

    else if (payload === 'ntf_flax_flow') {
      magicFunc(sender_psid, ntf_flax);
    }

    else if (payload === 'ntf_wool_flow') {
      magicFunc(sender_psid, ntf_wool);
    }

    else if (payload === 'ntf_wool_hand_flow') {
      magicFunc(sender_psid, ntf_wool_handNote);
    }

    else if (payload === 'ntf_wool_slides_flow') {
      magicFunc(sender_psid, ntf_wool_slides);
    }

    else if (payload === 'ntf_wool_videos_flow') {
      magicFunc(sender_psid, ntf_wool_videos);
    }

    else if (payload === 'ntf_jute_flow') {
      magicFunc(sender_psid, ntf_jute);
    }

    else if (payload === 'ntf_silk_flow') {
      magicFunc(sender_psid, ntf_silk);
    }

    else if (payload === 'ntf_sisal_flow') {
      magicFunc(sender_psid, ntf_sisal);
    }

    else if (payload === 'ntf_hemp_flow') {
      magicFunc(sender_psid, ntf_hemp);
    }

    else if (payload === 'ntf_palf_flow') {
      magicFunc(sender_psid, ntf_palf);
    }

    else if (payload === 'ntf_kapok_flow') {
      magicFunc(sender_psid, ntf_kapok);
    }

    else if (payload === 'ntf_asbestos_flow') {
      magicFunc(sender_psid, ntf_asbestos);
    }

    else if (payload === 'ntf_other_fib_flow') {
      magicFunc(sender_psid, ntf_other_fibre);
    }

    //subject-> em
    else if (payload === 'em_flow') {
      magicFunc(sender_psid, em_flow);
    }

    else if (payload === 'em_books_flow') {
      magicFunc(sender_psid, em_books);
    }

    else if (payload === 'em_ques_flow') {
      magicFunc(sender_psid, em_question);
    }

    else if (payload === 'em_math_flow') {
      magicFunc(sender_psid, em_math);
    }

    else if (payload === 'em_blast_flow') {
      magicFunc(sender_psid, em_blastFur);
    }

    else if (payload === 'em_heat_flow') {
      magicFunc(sender_psid, em_heatTreat);
    }

    else if (payload === 'em_wrought_flow') {
      magicFunc(sender_psid, em_wrought);
    }

    else if (payload === 'em_crystal_flow') {
      magicFunc(sender_psid, em_crystal);
    }

    else if (payload === 'em_iron_ceramic_flow') {
      magicFunc(sender_psid, em_iron);
    }

    else if (payload === 'em_glass_flow') {
      magicFunc(sender_psid, em_glass);
    }

    else if (payload === 'em_ceramic_flow') {
      magicFunc(sender_psid, em_ceramic);
    }

    else if (payload === 'em_corrosion_flow') {
      magicFunc(sender_psid, em_corrosion);
    }

    else if (payload === 'em_alloy_flow') {
      magicFunc(sender_psid, em_alloy);
    }

    else if (payload === 'em_composites_flow') {
      magicFunc(sender_psid, em_composites);
    }

    //subject-> bfs
    else if (payload === 'bfs_flow') {
      magicFunc(sender_psid, bfs_flow);
    }

    else if (payload === 'bfs_lec3_flow') {
      magicFunc(sender_psid, bfs_lec3);
    }

    //subject-> pse
    else if (payload === 'pse_flow') {
      magicFunc(sender_psid, pse_flow);
    }

    else if (payload === 'pse_books_flow') {
      magicFunc(sender_psid, pse_books);
    }

    else if (payload === 'pse_ques_flow') {
      magicFunc(sender_psid, pse_questions);
    }

    else if (payload === 'pse_handnotes_flow') {
      magicFunc(sender_psid, pse_handnotes);
    }

    else if (payload === 'pse_intro_flow') {
      magicFunc(sender_psid, pse_intro);
    }

    else if (payload === 'pse_physical_struc_flow') {
      magicFunc(sender_psid, pse_physical);
    }

    else if (payload === 'pse_chemical_struc_flow') {
      magicFunc(sender_psid, pse_chemical);
    }

    else if (payload === 'pse_molWei_flow') {
      magicFunc(sender_psid, pse_moleWeight);
    }

    else if (payload === 'pse_step_growth_flow') {
      magicFunc(sender_psid, pse_step);
    }

    else if (payload === 'pse_chain_growth_flow') {
      magicFunc(sender_psid, pse_chain);
    }

    else if (payload === 'pse_morpho_flow') {
      magicFunc(sender_psid, pse_morpho);
    }

    else if (payload === 'pse_thermal_flow') {
      magicFunc(sender_psid, pse_thermal);
    }

    else if (payload === 'pse_degrad_flow') {
      magicFunc(sender_psid, pse_degrad);
    }

    else if (payload === 'pse_polymer_tec_flow') {
      magicFunc(sender_psid, pse_polyTech);
    }

    else if (payload === 'pse_application_flow') {
      magicFunc(sender_psid, pse_application);
    }

    else if (payload === 'tpm_flow') {
      magicFunc(sender_psid, tpm_flow);
    }

    else if (payload === 'tpm_ques_flow') {
      magicFunc(sender_psid, tpm_ques);
    }

    else if (payload === 'tpm_wov_fab_wet_flow') {
      magicFunc(sender_psid, tpm_fabWet);
    }

    else if (payload === 'tpm_wov_fab_manu_flow') {
      magicFunc(sender_psid, tpm_fabManu);
    }


     //subject-> fmg
    else if (payload === 'fmg_flow') {
      magicFunc(sender_psid, fmg_flow);
    }

     //subject-> tmm
     else if (payload === 'tmm_flow') {
      magicFunc(sender_psid, tmm_flow);
    }

    else if (payload === 'tmm_quess_flow') {
      magicFunc(sender_psid, tmm_questions);
    }

    //subject-> iae
    else if (payload === 'iae_flow') {
      magicFunc(sender_psid, iae_flow);
    }

    else if (payload === 'iae_books_flow') {
      magicFunc(sender_psid, iae_books);
    }

    else if (payload === 'iae_ques_flow') {
      magicFunc(sender_psid, iae_question);
    }

    else if (payload === 'iae_intro_flow') {
      magicFunc(sender_psid, iae_intro);
    }

    else if (payload === 'iae_full_slide_flow') {
      magicFunc(sender_psid, iae_fullSlide);
    }

    else if (payload === 'iae_diff_woven_flow') {
      magicFunc(sender_psid, iae_diffWov);
    }

    else if (payload === 'iae_brands_flow') {
      magicFunc(sender_psid, iae_brands);
    }

    else if (payload === 'iae_quota_flow') {
      magicFunc(sender_psid, iae_quota);
    }

    else if (payload === 'iae_cam_flow') {
      magicFunc(sender_psid, iae_cam);
    }

    else if (payload === 'iae_shirt_flow') {
      magicFunc(sender_psid, iae_shirt);
    }

    //subject-> iae
    else if (payload === 'iee_flow') {
      magicFunc(sender_psid, iee_flow);
    }

    else if (payload === 'iee_books_flow') {
      magicFunc(sender_psid, iee_books);
    }

    else if (payload === 'iee_sheets_flow') {
      magicFunc(sender_psid, iee_sheets);
    }

    else if (payload === 'iee_handnotes_flow') {
      magicFunc(sender_psid, iee_notes);
    }

    else if (payload === 'iee_man_env_flow') {
      magicFunc(sender_psid, iee_manEnv);
    }

    else if (payload === 'iee_soil_flow') {
      magicFunc(sender_psid, iee_soil);
    }

    else if (payload === 'iee_env_issue_flow') {
      magicFunc(sender_psid, iee_envIssues);
    }

    else if (payload === 'iee_nature_env_flow') {
      magicFunc(sender_psid, iee_natureEnv);
    }

    else if (payload === 'iee_spf_upf_flow') {
      magicFunc(sender_psid, iee_spf);
    }

    else if (payload === 'math2_flow') {
      magicFunc(sender_psid, math2_flow);
    }

    else if (payload === 'math2_books_flow') {
      magicFunc(sender_psid, math2_books);
    }

    else if (payload === 'math2_ques_flow') {
      magicFunc(sender_psid, math2_question);
    }

    else if (payload === 'math2_suggestion_flow') {
      magicFunc(sender_psid, math2_suggestion);
    }

    else if (payload === 'math2_moivre_flow') {
      magicFunc(sender_psid, math2_moivre);
    }

    else if (payload === 'math2_homo_flow') {
      magicFunc(sender_psid, math2_homo);
    }

    else if (payload === 'math2_exact_flow') {
      magicFunc(sender_psid, math2_exact);
    }

    else if (payload === 'math2_lde_flow') {
      magicFunc(sender_psid, math2_lde);
    }

    else if (payload === 'math2_red_homo_flow') {
      magicFunc(sender_psid, math2_redhomo);
    }

    else if (payload === 'math2_dif_eqn_flow') {
      magicFunc(sender_psid, math2_diffeqn);
    }

    else if (payload === 'math2_diffeqn_note_flow') {
      magicFunc(sender_psid, math2_diffeqn_note);
    }

    else if (payload === 'math2_diffeqn_book_flow') {
      magicFunc(sender_psid, math2_diffeqn_book);
    }

    else if (payload === 'math2_linear_eqn_flow') {
      magicFunc(sender_psid, math2_linEqn);
    }

    else if (payload === 'math2_residue_flow') {
      magicFunc(sender_psid, math2_residue);
    }

    else if (payload === 'math2_line_int_flow') {
      magicFunc(sender_psid, math2_lineInt);
    }

    else if (payload === 'math2_method_var_flow') {
      magicFunc(sender_psid, math2_methodVar);
    }

    else if (payload === 'math2_analy_func_flow') {
      magicFunc(sender_psid, math2_analy);
    }

    else if (payload === 'math2_vector_flow') {
      magicFunc(sender_psid, math2_vector);
    }

    else if (payload === 'math2_ode_flow') {
      magicFunc(sender_psid, math2_ode);
    }

    else if (payload === 'math2_separation_flow') {
      magicFunc(sender_psid, math2_sepaVar);
    }

    else if (payload === 'math2_laplace_flow') {
      magicFunc(sender_psid, math2_laplace);
    }

    else if (payload === 'math2_cx_num_flow') {
      magicFunc(sender_psid, math2_cxNum);
    }


     //subject-> chem2
     else if (payload === 'che2_flow') {
      magicFunc(sender_psid, chem2_flow);
    }

    else if (payload === 'chem2_books_flow') {
      magicFunc(sender_psid, chem2_books);
    }

    else if (payload === 'chem2_ques_flow') {
      magicFunc(sender_psid, chem2_question);
    }

    else if (payload === 'chem2_org_meta_flow') {
      magicFunc(sender_psid, chem2_orgMetalic);
    }

    else if (payload === 'chem2_carbonyl_flow') {
      magicFunc(sender_psid, chem2_carbonyl);
    }

    else if (payload === 'chem2_org_reac_flow') {
      magicFunc(sender_psid, chem2_orgReac);
    }

    else if (payload === 'chem2_alc_phe_flow') {
      magicFunc(sender_psid, chem2_AlcPhenol);
    }

    else if (payload === 'chem2_amino_flow') {
      magicFunc(sender_psid, chem2_AminoAcid);
    }

    else if (payload === 'chem2_carbo_flow') {
      magicFunc(sender_psid, chem2_carbohydrates);
    }

    else if (payload === 'chem2_color_dye_flow') {
      magicFunc(sender_psid, chem2_color_dye);
    }

    else if (payload === 'chem2_carboxylic_flow') {
      magicFunc(sender_psid, chem2_carboxylic);
    }


    else if (payload === 'chem2_amine_flow') {
      magicFunc(sender_psid, chem2_amine);
    }

    else if (payload === 'chem2_solubulity_flow') {
      magicFunc(sender_psid, chem2_solubulity);
    }


    //subject-> phy2
    else if (payload === 'phy2_flow') {
      magicFunc(sender_psid, phy2_flow);
    }

    else if (payload === 'phy2_books_flow') {
      magicFunc(sender_psid, phy2_books);
    }

    else if (payload === 'phy2_ques_flow') {
      magicFunc(sender_psid, phy2_question);
    }

    else if (payload === 'phy2_kinetic_flow') {
      magicFunc(sender_psid, phy2_Kinetic);
    }

    else if (payload === 'phy2_electricity_flow') {
      magicFunc(sender_psid, phy2_Elctricity);
    }

    else if (payload === 'phy2_electric_notes_flow') {
      magicFunc(sender_psid, phy2_Elctricity_notes);
    }

    else if (payload === 'phy2_electric_slides_flow') {
      magicFunc(sender_psid, phy2_Elctricity_slides);
    }

    else if (payload === 'phy2_thermodynamics_flow') {
      magicFunc(sender_psid, phy2_Thermo);
    }

    else if (payload === 'phy2_radiation_flow') {
      magicFunc(sender_psid, phy2_Radiation);
    }


    else if (payload === 'phy2_magnet_flow') {
      magicFunc(sender_psid, phy2_magnet);
    }

    else if (payload === 'phy2_modern_flow') {
      magicFunc(sender_psid, phy2_modern);
    }

    else if (payload === 'phy2_entropy_flow') {
      magicFunc(sender_psid, phy2_entropy);
    }

    //routine
    else if (payload === 'online_2_1') {
      magicFunc(sender_psid, routine_online_2_1);
    }
    else if (payload === 'online_3_1') {
      magicFunc(sender_psid, routine_online_3_1);
    }
    else if (payload === 'routine_level_1') {
      magicFunc(sender_psid, routine_level1);
    }
    else if (payload === 'routine_level_2') {
      magicFunc(sender_psid, routine_level2);
    }
    else if (payload === 'routine_level_3') {
      magicFunc(sender_psid, routine_level3);
    }
    else if (payload === 'routine_level_4') {
      magicFunc(sender_psid, routine_level4);
    }
    else if (payload === 'l1t1Routine_flow') {
      magicFunc(sender_psid, routine_l1t1);
    }
    else if (payload === 'l1t2Routine_flow') {
      magicFunc(sender_psid, routine_l1t2);
    }
    else if (payload === 'l2t1Routine_flow') {
      magicFunc(sender_psid, routine_l2t1);
    }
    else if (payload === 'l2t2Routine_flow') {
      magicFunc(sender_psid, routine_l2t2);
    }
    else if (payload === 'l3t1Routine_flow') {
      magicFunc(sender_psid, routine_l3t1);
    }
    else if (payload === 'l3t2Routine_flow') {
      magicFunc(sender_psid, routine_l3t2);
    }
    else if (payload === 'l4t1Routine_flow') {
      magicFunc(sender_psid, routine_l4t1);
    }
    else if (payload === 'l4t2Routine_flow') {
      magicFunc(sender_psid, routine_l4t2);
    }

    //results
    else if (payload === 'result_academic') {
      magicFunc(sender_psid, result_Academic);
    }
    else if (payload === 'academic_res_2019') {
      magicFunc(sender_psid, result_Academic_2019);
    }
    else if (payload === 'academic_res_2018') {
      magicFunc(sender_psid, result_Academic_2018);
    }
    else if (payload === 'result_admission') {
      magicFunc(sender_psid, result_Admission);
    }
    else if (payload === 'result_retake') {
      magicFunc(sender_psid, result_Retake);
    }
    else if (payload === 'retake_res_2019') {
      magicFunc(sender_psid, result_Retake_2019);
    }
    else if (payload === 'retake_res_2018') {
      magicFunc(sender_psid, result_Retake_2018);
    }
    else if (payload === 'result_affli') {
      magicFunc(sender_psid, result_Affli);
    }
    else if (payload === 'affli_res_2020') {
      magicFunc(sender_psid, result_Affli_2020);
    }
    else if (payload === 'affli_res_2019') {
      magicFunc(sender_psid, result_Affli_2019);
    }

    //epd
    else if (payload === 'epd_flow') {
      magicFunc(sender_psid, epd_flow);
    }

    //ir
    else if (payload === 'ir_flow') {
      magicFunc(sender_psid, ir_flow);
    }
    else if (payload === 'ir_ir_flow') {
      magicFunc(sender_psid, ir_ir_flow);
    }

    //tam
    else if (payload === 'tam_flow') {
      magicFunc(sender_psid, tam_flow);
    }
    else if (payload === 'tam_intro_merch_flow') {
      magicFunc(sender_psid, tam_intro_merch);
    }

    //ppc
    else if (payload === 'ppc_flow') {
      magicFunc(sender_psid, ppc_flow);
    }

    //hrm
    else if (payload === 'hrm_flow') {
      magicFunc(sender_psid, hrm_flow);
    }

    //bs
    else if (payload === 'bs_flow') {
      magicFunc(sender_psid, bs_flow);
    }
    
     //bil
     else if (payload === 'bil_flow') {
      magicFunc(sender_psid, bil_flow);
    }
    else if (payload === 'bil_labor_law_flow') {
      magicFunc(sender_psid, bil_laborlaw);
    }

    //fm1
    else if (payload === 'fm1_flow') {
      magicFunc(sender_psid, fm1_flow);
    }
    else if (payload === 'fm1_hnotes_flow') {
      magicFunc(sender_psid, fm1_notes);
    }
    else if (payload === 'fm1_books_flow') {
      magicFunc(sender_psid, fm1_books);
    }
    else if (payload === 'fm1_sugg_flow') {
      magicFunc(sender_psid, fm1_sugg);
    }
    else if (payload === 'fm1_ques_flow') {
      magicFunc(sender_psid, fm1_question);
    }
    else if (payload === 'fm1_loom_flow') {
      magicFunc(sender_psid, fm1_loom);
    }
    else if (payload === 'fm1_motion_weav_flow') {
      magicFunc(sender_psid, fm1_motionWeav);
    }
    else if (payload === 'fm1_intro_fm_flow') {
      magicFunc(sender_psid, fm1_intro);
    }
    else if (payload === 'fm1_shedding_flow') {
      magicFunc(sender_psid, fm1_shedding);
    }
    else if (payload === 'fm1_weaving_flow') {
      magicFunc(sender_psid, fm1_weaving);
    }
    else if (payload === 'fm1_sizing_flow') {
      magicFunc(sender_psid, fm1_sizing);
    }
    else if (payload === 'fm1_winding_flow') {
      magicFunc(sender_psid, fm1_winding);
    }
    else if (payload === 'fm1_dobby_flow') {
      magicFunc(sender_psid, fm1_dobby);
    }
    else if (payload === 'fm1_warping_flow') {
      magicFunc(sender_psid, fm1_warping);
    }

    //mmtf
    else if (payload === 'mmtf_flow') {
      magicFunc(sender_psid, mmtf_flow);
    }
    else if (payload === 'mmtf_mmtf_books_flowflow') {
      magicFunc(sender_psid, mmtf_books);
    }
    else if (payload === 'mmtf_hnotes_flow') {
      magicFunc(sender_psid, mmtf_notes);
    }
    else if (payload === 'mmtf_sugg_flow') {
      magicFunc(sender_psid, mmtf_suggestion);
    }
    else if (payload === 'mmtf_intro_flow') {
      magicFunc(sender_psid, mmtf_intro);
    }
    else if (payload === 'mmtf_rayon_flow') {
      magicFunc(sender_psid, mmtf_rayon);
    }
    else if (payload === 'mmtf_spinning_sys_flow') {
      magicFunc(sender_psid, mmtf_spin_sys);
    }
    else if (payload === 'mmtf_high_perf_flow') {
      magicFunc(sender_psid, mmtf_highperf);
    }
    else if (payload === 'mmtf_polyamaide_flow') {
      magicFunc(sender_psid, mmtf_polyamide);
    }
    else if (payload === 'mmtf_modal_flow') {
      magicFunc(sender_psid, mmtf_modal);
    }
    else if (payload === 'mmtf_elastomer_flow') {
      magicFunc(sender_psid, mmtf_elastomer);
    }
    else if (payload === 'mmtf_polyolefin_flow') {
      magicFunc(sender_psid, mmtf_polyolefin);
    }
    else if (payload === 'mmtf_carbon_fibre_flow') {
      magicFunc(sender_psid, mmtf_carbonFib);
    }
    else if (payload === 'mmtf_acetate_flow') {
      magicFunc(sender_psid, mmtf_acetate);
    }
    else if (payload === 'mmtf_bio_fibre_flow') {
      magicFunc(sender_psid, mmtf_biofib);
    }
    else if (payload === 'mmtf_polyester_flow') {
      magicFunc(sender_psid, mmtf_polyester);
    }
    else if (payload === 'mmtf_acrylic_flow') {
      magicFunc(sender_psid, mmtf_acrylic);
    }
    else if (payload === 'mmtf_vectran_flow') {
      magicFunc(sender_psid, mmtf_vectran);
    }
    else if (payload === 'mmtf_regen_protein_fibre_flow') {
      magicFunc(sender_psid, mmtf_regenFib);
    }
    else if (payload === 'mmtf_glassfib_flow') {
      magicFunc(sender_psid, mmtf_glassfib);
    }
    else if (payload === 'mmtf_lyocell_flow') {
      magicFunc(sender_psid, mmtf_lyocell);
    }
    else if (payload === 'mmtf_nylon_flow') {
      magicFunc(sender_psid, mmtf_nylon);
    }

    //ttqc
    else if (payload === 'ttqc_flow') {
      magicFunc(sender_psid, ttqc_flow);
    }
    else if (payload === 'ttqc_books_flow') {
      magicFunc(sender_psid, ttqc_books);
    }
    else if (payload === 'ttqc_hnotes_flow') {
      magicFunc(sender_psid, ttqc_notes);
    }
    else if (payload === 'ttqc_count_flow') {
      magicFunc(sender_psid, ttqc_count);
    }
    else if (payload === 'ttqc_crimp_flow') {
      magicFunc(sender_psid, ttqc_crimp);
    }
    else if (payload === 'ttqc_twist_flow') {
      magicFunc(sender_psid, ttqc_twist);
    }
    else if (payload === 'ttqc_intro_flow') {
      magicFunc(sender_psid, ttqc_intro);
    }
    else if (payload === 'ttqc_mositure_flow') {
      magicFunc(sender_psid, ttqc_moisture);
    }
    else if (payload === 'ttqc_neps_flow') {
      magicFunc(sender_psid, ttqc_neps);
    }
    else if (payload === 'ttqc_sampling_flow') {
      magicFunc(sender_psid, ttqc_sampling);
    }
    else if (payload === 'ttqc_fibre_prop_flow') {
      magicFunc(sender_psid, ttqc_fibre_prop);
    }
    else if (payload === 'ttqc_hvi_flow') {
      magicFunc(sender_psid, ttqc_hvi);
    }
    else if (payload === 'ttqc_afis_flow') {
      magicFunc(sender_psid, ttqc_afis);
    }

    //stat
    else if (payload === 'stat_flow') {
      magicFunc(sender_psid, stat_flow);
    }
    else if (payload === 'stat_books_flow') {
      magicFunc(sender_psid, stat_books);
    }
    else if (payload === 'stat_hnotes_flow') {
      magicFunc(sender_psid, stat_notes);
    }
    else if (payload === 'stat_probab_flow') {
      magicFunc(sender_psid, stat_probab);
    }
    else if (payload === 'stat_intro_flow') {
      magicFunc(sender_psid, stat_intro);
    }
    else if (payload === 'stat_central_tend_flow') {
      magicFunc(sender_psid, stat_central_tend);
    }
    else if (payload === 'stat_cv_sd_flow') {
      magicFunc(sender_psid, stat_cv);
    }
    else if (payload === 'stat_moments_flow') {
      magicFunc(sender_psid, stat_moments);
    }
    else if (payload === 'stat_shapes_flow') {
      magicFunc(sender_psid, stat_shape);
    }
    else if (payload === 'stat_design_exp_flow') {
      magicFunc(sender_psid, stat_design);
    }
    else if (payload === 'stat_normal_distri_flow') {
      magicFunc(sender_psid, stat_normal);
    }
    else if (payload === 'stat_binomial_distri_flow') {
      magicFunc(sender_psid, stat_binomial);
    }
    else if (payload === 'stat_poission_flow') {
      magicFunc(sender_psid, stat_poission);
    }
    else if (payload === 'stat_regression_flow') {
      magicFunc(sender_psid, stat_regression);
    }

    //feee
    else if (payload === 'eee_flow') {
      magicFunc(sender_psid, eee_flow);
    }
    else if (payload === 'eee_books_flow') {
      magicFunc(sender_psid, eee_books);
    }
    else if (payload === 'eee_hnotes_flow') {
      magicFunc(sender_psid, eee_notes);
    }
    else if (payload === 'eee_ques_flow') {
      magicFunc(sender_psid, eee_ques);
    }
    else if (payload === 'eee_ch1_flow') {
      magicFunc(sender_psid, eee_ch1);
    }
    else if (payload === 'eee_ch2_flow') {
      magicFunc(sender_psid, eee_ch2);
    }
    else if (payload === 'eee_ch3_flow') {
      magicFunc(sender_psid, eee_ch3);
    }
    else if (payload === 'eee_ch4_flow') {
      magicFunc(sender_psid, eee_ch4);
    }
    else if (payload === 'eee_ch5_flow') {
      magicFunc(sender_psid, eee_ch5);
    }
    else if (payload === 'eee_ch8_flow') {
      magicFunc(sender_psid, eee_ch8);
    }
    else if (payload === 'eee_wye_delta_flow') {
      magicFunc(sender_psid, eee_wye);
    }
    else if (payload === 'eee_rms_flow') {
      magicFunc(sender_psid, eee_rms);
    }
    else if (payload === 'eee_circuit_analy_flow') {
      magicFunc(sender_psid, eee_circuit);
    }

    //am1
    else if (payload === 'am1_flow') {
      magicFunc(sender_psid, am1_flow);
    }
    else if (payload === 'am1_books_flow') {
      magicFunc(sender_psid, am1_books);
    }
    else if (payload === 'am1_hnotes_flow') {
      magicFunc(sender_psid, am1_notes);
    }
    else if (payload === 'am1_ques_flow') {
      magicFunc(sender_psid, am1_question);
    }
    else if (payload === 'am1_intro_flow') {
      magicFunc(sender_psid, am1_intro);
    }
    else if (payload === 'am1_structure_tex_flow') {
      magicFunc(sender_psid, am1_strucTex);
    }
    else if (payload === 'am1_sizing_sys_flow') {
      magicFunc(sender_psid, am1_sizing);
    }
    else if (payload === 'am1_seam_stitch_flow') {
      magicFunc(sender_psid, am1_seam);
    }
    else if (payload === 'am1_trim_acces_flow') {
      magicFunc(sender_psid, am1_trims);
    }
    else if (payload === 'am1_interlining_flow') {
      magicFunc(sender_psid, am1_interlining);
    }
    else if (payload === 'am1_pattern_flow') {
      magicFunc(sender_psid, am1_pattern);
    }
    else if (payload === 'am1_marker_flow') {
      magicFunc(sender_psid, am1_marker);
    }
    else if (payload === 'am1_spreading_flow') {
      magicFunc(sender_psid, am1_spreading);
    }
    else if (payload === 'am1_fabric_cut_flow') {
      magicFunc(sender_psid, am1_fabricCut);
    }
    else if (payload === 'am1_fabricInspection_flow') {
      magicFunc(sender_psid, am1_fabricInspection);
    }

     //marketing
     else if (payload === 'marketing_flow') {
      magicFunc(sender_psid, marketing_flow);
    }
    else if (payload === 'marketing_books_flow') {
      magicFunc(sender_psid, marketing_books);
    }
    else if (payload === 'marketing_notes_flow') {
      magicFunc(sender_psid, marketing_notes);
    }
    else if (payload === 'marketing_ques_flow') {
      magicFunc(sender_psid, marketing_ques);
    }
    else if (payload === 'marketing_suggestion_flow') {
      magicFunc(sender_psid, marketing_sugg);
    }
    else if (payload === 'marketing_intro_flow') {
      magicFunc(sender_psid, marketing_intro);
    }
    else if (payload === 'marketing_func_flow') {
      magicFunc(sender_psid, marketing_function);
    }
    else if (payload === 'marketing_field_flow') {
      magicFunc(sender_psid, marketing_field);
    }
    else if (payload === 'marketing_concept_flow') {
      magicFunc(sender_psid, marketing_concept);
    }
    else if (payload === 'marketing_market_orientation_flow') {
      magicFunc(sender_psid, marketing_orientation);
    }
    else if (payload === 'marketing_micro_env_flow') {
      magicFunc(sender_psid, marketing_micro);
    }
    else if (payload === 'marketing_macro_env_flow') {
      magicFunc(sender_psid, marketing_macro);
    }
    else if (payload === 'marketing_market_segment_flow') {
      magicFunc(sender_psid, marketing_segment);
    }
    else if (payload === 'marketing_market_targeting_flow') {
      magicFunc(sender_psid, marketing_target);
    }
    else if (payload === 'marketing_diff_pos_flow') {
      magicFunc(sender_psid, marketing_diffPoss);
    }
    else if (payload === 'marketing_channel_distri_flow') {
      magicFunc(sender_psid, marketing_channelDist);
    }
    else if (payload === 'marketing_retailing_flow') {
      magicFunc(sender_psid, marketing_retail);
    }
    else if (payload === 'marketing_price_sys_flow') {
      magicFunc(sender_psid, marketing_priceSys);
    }
    else if (payload === 'marketing_consumer_buyer_flow') {
      magicFunc(sender_psid, marketing_consumer_buyer);
    }
    else if (payload === 'marketing_branding_pack_flow') {
      magicFunc(sender_psid, marketing_branding);
    }
    else if (payload === 'marketing_new_product_flow') {
      magicFunc(sender_psid, marketing_newProd);
    }
    else if (payload === 'marketing_advertising_flow') {
      magicFunc(sender_psid, marketing_advert);
    }
    else if (payload === 'marketing_competitive_flow') {
      magicFunc(sender_psid, marketing_compStrat);
    }
    else if (payload === 'marketing_major_pricing_flow') {
      magicFunc(sender_psid, marketing_priceStrat);
    }

     //fyt
     else if (payload === 'fyt_flow') {
      magicFunc(sender_psid, fyt_flow);
    }
    else if (payload === 'fyt_books_flow') {
      magicFunc(sender_psid, fyt_books);
    }
    else if (payload === 'fyt_hnotes_flow') {
      magicFunc(sender_psid, fyt_notes);
    }
    else if (payload === 'fyt_sugg_flow') {
      magicFunc(sender_psid, fyt_sugg);
    }
    else if (payload === 'fyt_yarnNum_flow') {
      magicFunc(sender_psid, fyt_number);
    }
    else if (payload === 'fyt_yarnTwist_flow') {
      magicFunc(sender_psid, fyt_twist);
    }
    else if (payload === 'fyt_evennessTester_flow') {
      magicFunc(sender_psid, fyt_evenness);
    }
    else if (payload === 'fyt_yarnCounting_flow') {
      magicFunc(sender_psid, fyt_count);
    }
    else if (payload === 'fyt_afis_flow') {
      magicFunc(sender_psid, fyt_afis);
    }
    else if (payload === 'fyt_iso_flow') {
      magicFunc(sender_psid, fyt_iso);
    }
    else if (payload === 'fyt_capaOptical_flow') {
      magicFunc(sender_psid, fyt_capaOp);
    }


    //ctca
    else if (payload === 'ctca_flow') {
      magicFunc(sender_psid, ctca_flow);
    }
    else if (payload === 'ctca_books_flow') {
      magicFunc(sender_psid, ctca_books);
    }
    else if (payload === 'ctca_sheets_flow') {
      magicFunc(sender_psid, ctca_sheets);
    }
    else if (payload === 'ctca_thickAge_flow') {
      magicFunc(sender_psid, ctca_thickAgents);
    }
    else if (payload === 'ctca_water_flow') {
      magicFunc(sender_psid, ctca_water);
    }
    else if (payload === 'ctca_surfactants_flow') {
      magicFunc(sender_psid, ctca_surfact);
    }
    else if (payload === 'ctca_bleach_flow') {
      magicFunc(sender_psid, ctca_bleach);
    }
    else if (payload === 'ctca_solutions_flow') {
      magicFunc(sender_psid, ctca_solutions);
    }
    else if (payload === 'ctca_colloid_flow') {
      magicFunc(sender_psid, ctca_colloid);
    }

    //fme
    else if (payload === 'fme_flow') {
      magicFunc(sender_psid, fme_flow);
    }
    else if (payload === 'fme_books_flow') {
      magicFunc(sender_psid, fme_books);
    }
    else if (payload === 'fme_notes_flow') {
      magicFunc(sender_psid, fme_notes);
    }
    else if (payload === 'fme_ques_flow') {
      magicFunc(sender_psid, fme_ques);
    }
    else if (payload === 'fme_sugg_flow') {
      magicFunc(sender_psid, fme_sugg);
    }
    else if (payload === 'fme_boiler_flow') {
      magicFunc(sender_psid, fme_boiler);
    }
    else if (payload === 'fme_powerRefre_flow') {
      magicFunc(sender_psid, fme_powerRefre);
    }
    else if (payload === 'fme_steam_flow') {
      magicFunc(sender_psid, fme_steamTurb);
    }
    else if (payload === 'fme_thermalEng_flow') {
      magicFunc(sender_psid, fme_thermalEng);
    }
    else if (payload === 'fme_fluidMecha_flow') {
      magicFunc(sender_psid, fme_fluidMecha);
    }
    else if (payload === 'fme_energyProcess_flow') {
      magicFunc(sender_psid, fme_energyProc);
    }
    else if (payload === 'fme_solid_flow') {
      magicFunc(sender_psid, fme_solid);
    }
    else if (payload === 'fme_gearTrain_flow') {
      magicFunc(sender_psid, fme_gearTrain);
    }
    else if (payload === 'fme_pumpCompressor_flow') {
      magicFunc(sender_psid, fme_pumpCompressor);
    }
    else if (payload === 'fme_stressStrain_flow') {
      magicFunc(sender_psid, fme_stress);
    }
    else if (payload === 'fme_enginePetrol_flow') {
      magicFunc(sender_psid, fme_enginePetrol);
    }
    else if (payload === 'fme_engineCombus_flow') {
      magicFunc(sender_psid, fme_engineCombus);
    }
    else if (payload === 'fme_beam_flow') {
      magicFunc(sender_psid, fme_beam);
    }
    else if (payload === 'fme_belt_flow') {
      magicFunc(sender_psid, fme_belt);
    }
    else if (payload === 'fme_centroid_flow') {
      magicFunc(sender_psid, fme_centroid);
    }
    else if (payload === 'fme_momentInnertia_flow') {
      magicFunc(sender_psid, fme_momentofInnertia);
    }
    else if (payload === 'fme_cloumn_flow') {
      magicFunc(sender_psid, fme_column);
    }

    //sss1
    else if (payload === 'sss1_flow') {
      magicFunc(sender_psid, sss1_flow);
    }
    else if (payload === 'sss1_books_flow') {
      magicFunc(sender_psid, sss1_books);
    }
    else if (payload === 'sss1_blowRoom_flow') {
      magicFunc(sender_psid, sss1_blowRoom);
    }
    else if (payload === 'sss1_drawFrame_flow') {
      magicFunc(sender_psid, sss1_DrawFrame);
    }
    else if (payload === 'sss1_carding_flow') {
      magicFunc(sender_psid, sss1_Carding);
    }
    else if (payload === 'sss1_intro_flow') {
      magicFunc(sender_psid, sss1_intro);
    }
    else if (payload === 'sss1_introFibre_flow') {
      magicFunc(sender_psid, sss1_introFib);
    }

    //sss2
    else if (payload === 'sss2_flow') {
      magicFunc(sender_psid, sss2_flow);
    }
    else if (payload === 'sss2_notes_flow') {
      magicFunc(sender_psid, sss2_notes);
    }
    else if (payload === 'sss2_ringFrame_flow') {
      magicFunc(sender_psid, sss2_ringFrame);
    }


    //ym1
    else if (payload === 'ym1_flow') {
      magicFunc(sender_psid, ym1_flow);
    }
    else if (payload === 'ym1_intro_flow') {
      magicFunc(sender_psid, ym1_intro);
    }
    else if (payload === 'ym1_indeterminer_flow') {
      magicFunc(sender_psid, ym1_indeter);
    }
    else if (payload === 'ym1_blowroom_flow') {
      magicFunc(sender_psid, ym1_blowroom);
    }
    else if (payload === 'ym1_mixing_blend_flow') {
      magicFunc(sender_psid, ym1_mixBlend);
    }
    else if (payload === 'ym1_fibreProp_flow') {
      magicFunc(sender_psid, ym1_fibreProp);
    }
    else if (payload === 'ym1_yarnCondi_flow') {
      magicFunc(sender_psid, ym1_yarnCondi);
    }
    else if (payload === 'ym1_comber_flow') {
      magicFunc(sender_psid, ym1_comber);
    }
    else if (payload === 'ym1_drawFrame_flow') {
      magicFunc(sender_psid, ym1_drawFrame);
    }
    else if (payload === 'ym1_winding_flow') {
      magicFunc(sender_psid, ym1_winding);
    }
    else if (payload === 'ym1_lapFormer_flow') {
      magicFunc(sender_psid, ym1_lapFormer);
    }
    else if (payload === 'ym1_carding_flow') {
      magicFunc(sender_psid, ym1_carding);
    }
    else if (payload === 'ym1_ringFrame_flow') {
      magicFunc(sender_psid, ym1_ringFrame);
    }
    else if (payload === 'ym1_speedFrame_flow') {
      magicFunc(sender_psid, ym1_speedFrame);
    }

     //fdce
    else if (payload === 'fdce_flow') {
      magicFunc(sender_psid, fdce_flow);
    }
    else if (payload === 'fdce_dyesPigments_flow') {
      magicFunc(sender_psid, fdce_DyesPig);
    }
    else if (payload === 'fdce_chromatography_flow') {
      magicFunc(sender_psid, fdce_Chroamto);
    }
    else if (payload === 'fdce_polarity_flow') {
      magicFunc(sender_psid, fdce_Polarity);
    }
    else if (payload === 'fdce_sepaPurifi_flow') {
      magicFunc(sender_psid, fdce_SepaPuri);
    }
    else if (payload === 'fdce_balancingChem_flow') {
      magicFunc(sender_psid, fdce_BalanceChem);
    }
    else if (payload === 'fdce_filtration_flow') {
      magicFunc(sender_psid, fdce_filtrationMethod);
    }


     //tp
    else if (payload === 'tp_flow') {
      magicFunc(sender_psid, tp_flow);
    }
    else if (payload === 'tp_books_flow') {
      magicFunc(sender_psid, tp_books);
    }
    else if (payload === 'tp_notes_flow') {
      magicFunc(sender_psid, tp_notes);
    }
    else if (payload === 'tp_sugg_flow') {
      magicFunc(sender_psid, tp_sugg);
    }
    else if (payload === 'tp_ques_flow') {
      magicFunc(sender_psid, tp_questions);
    }
    else if (payload === 'tp_swelling_flow') {
      magicFunc(sender_psid, tp_swelling);
    }
    else if (payload === 'tp_friction_flow') {
      magicFunc(sender_psid, tp_friction);
    }
    else if (payload === 'tp_yarnJamming_flow') {
      magicFunc(sender_psid, tp_yarnJamming);
    }
    else if (payload === 'tp_optical_flow') {
      magicFunc(sender_psid, tp_Optical);
    }
    else if (payload === 'tp_fibreMig_flow') {
      magicFunc(sender_psid, tp_fibreMig);
    }
    else if (payload === 'tp_thermalProp_flow') {
      magicFunc(sender_psid, tp_tehrmalProp);
    }
    else if (payload === 'tp_fibredraw_flow') {
      magicFunc(sender_psid, tp_fibreDraw);
    }
    else if (payload === 'tp_x_ray_flow') {
      magicFunc(sender_psid, tp_xray);
    }
    else if (payload === 'tp_yarnStructure_flow') {
      magicFunc(sender_psid, tp_yarnStructure);
    }
    else if (payload === 'tp_fabgemometry_flow') {
      magicFunc(sender_psid, tp_fabricGeometry);
    }
    else if (payload === 'tp_tensile_flow') {
      magicFunc(sender_psid, tp_tensileProp);
    }


      //wpp
      else if (payload === 'wpp_flow') {
        magicFunc(sender_psid, wpp_flow);
      }
      else if (payload === 'wpp_quess_flow') {
        magicFunc(sender_psid, wpp_ques);
      }
      else if (payload === 'wpp_pretreatment_flow') {
        magicFunc(sender_psid, wpp_pretreatment);
      }
      else if (payload === 'wpp_singeing_flow') {
        magicFunc(sender_psid, wpp_singeing);
      }
      else if (payload === 'wpp_desizing_flow') {
        magicFunc(sender_psid, wpp_desizing);
      }

       //fd2
       else if (payload === 'fd2_flow') {
        magicFunc(sender_psid, fd2_flow);
      }


       //weav prep
       else if (payload === 'weav_prep_flow') {
        magicFunc(sender_psid, weavPrep_flow);
      }
      else if (payload === 'weav_books_flow') {
        magicFunc(sender_psid, weavPrep_books);
      }
    

  

    









    //syllabus
    //45
    else if (payload === 'syllabus_45') {
      magicFunc(sender_psid, syllabus_45);
    }
    else if (payload === 'syllabus_ae45_flow') {
      magicFunc(sender_psid, syllabus_45_ae);
    }
    else if (payload === 'syllabus_fe45_flow') {
      magicFunc(sender_psid, syllabus_45_fe);
    }
    else if (payload === 'syllabus_ipe45_flow') {
      magicFunc(sender_psid, syllabus_45_ipe);
    }
    else if (payload === 'syllabus_tem45_flow') {
      magicFunc(sender_psid, syllabus_45_tem);
    }
    else if (payload === 'syllabus_tfd45_flow') {
      magicFunc(sender_psid, syllabus_45_tfd);
    }
    else if (payload === 'syllabus_ye45_flow') {
      magicFunc(sender_psid, syllabus_45_ye);
    }
    else if (payload === 'syllabus_tmdm45_flow') {
      magicFunc(sender_psid, syllabus_45_tmdm);
    }
    else if (payload === 'syllabus_wpe45_flow') {
      magicFunc(sender_psid, syllabus_45_wpe);
    }
    else if (payload === 'syllabus_dce45_flow') {
      magicFunc(sender_psid, syllabus_45_dce);
    }
    else if (payload === 'syllabus_ese45_flow') {
      magicFunc(sender_psid, syllabus_45_ese);
    }
    //46
    else if (payload === 'syllabus_46') {
      magicFunc(sender_psid, notAvailable);
    }



}

//magic func
let magicFunc = (sender_psid ,flow) => {
  let i = 0;

  for(i = 0; i < flow.length; i++){

    response = flow[i];
    callSendAPI(sender_psid, response);
  }
}

//wordDetectorFunctions
//word includes
let wordIncludes = (keywordArray, received_message) => {
  return keywordArray.some(word => received_message.text.toLowerCase().includes(word));
}

//word is
let wordIs = (keywordArray, received_message) => {
  return keywordArray.includes(received_message.text.toLowerCase());
}

//randomPicker Function
let randomPicker = (replyArray) => {
  return replyArray[Math.floor(Math.random() * replyArray.length)];
}






// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
    // Construct the message body
    let request_body = {
      "recipient": {
        "id": sender_psid
      },
      "message": response
    }
  
    // Send the HTTP request to the Messenger Platform
    request({
      "uri": "https://graph.facebook.com/v7.0/me/messages",
      "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
      "method": "POST",
      "json": request_body
    }, (err, res, body) => {
      if (!err) {
        console.log('message sent!')
      } else {
        console.error("Unable to send message:" + err);
      }
    }); 
}









module.exports = {
    testMsg: testMsg,
    getWebhook: getWebhook,
    postWebhook: postWebhook
}