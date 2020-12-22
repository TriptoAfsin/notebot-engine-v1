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



const quiz_words = require('./keywords/academic_words/quizWords');
const labWords = require('./keywords/academic_words/labWords');

const routineWords = require('./keywords/academic_words/routineWords');
const resultWords = require('./keywords/academic_words/resultWords');
const syllabusWords = require('./keywords/academic_words/syllabusWords');

//default reply
const defaultReply = require('./keywords/replies/defaultReply');
const getStartedMsg = require('./flows/botReplies/welcome/getStarted');

const testReply = require('./keywords/replies/testReply');


//reply words
const loveMojiReplies = require('./keywords/replies/lovemojiReply');
const sadStuffReply = require('./keywords/replies/sadReplies');
const greetReplies = require('./keywords/replies/greetingsReply');


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













const labFlow = require('./flows/botReplies/labFlow');
const routineFlow = require('./flows/botReplies/routineFlow');
const resultFlow = require('./flows/botReplies/resultFlow');
const syllabusFlow = require('./flows/botReplies/syllabusFlow');
const phy2_electric_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy2/topics/electric/phy2Electric");





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
    let response2;
    let response3;
    let response4;
    let response5;
    let response6;
    let response7;
    let response8;
    let response9;
    let response10;
    
    
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

    const getStartedWords = ["Get Started", "get satrted", "Get started", "get Started"];

    const test = ["test", "Test"];

    
    
    // Check if the message
    if (greets.some(word => received_message.text.toLowerCase().includes(word))) {
      // Create the payload for a basic text message
      response = greetReplies[0];

      callSendAPI(sender_psid, response);  
    }



    else if (positive.some(word => received_message.text.toLowerCase().includes(word))) {
      // Create the payload for a basic text message
      response = {
        "text": `${loveReply[Math.floor(Math.random() * loveReply.length)]}`
      }

      callSendAPI(sender_psid, response);  
    }

    else if (getStartedWords.some(word => received_message.text.toLowerCase().includes(word))) {
      // Create the payload for a basic text message
      response = getStartedMsg[0];

      callSendAPI(sender_psid, response);  
    }

    /*
    else if (test.includes(received_message.text)) {
      // Create the payload for a basic text message
      return response = testReply[0];
    }
    */


    else if (negative.some(word => received_message.text.toLowerCase().includes(word))) {
      // Create the payload for a basic text message
      response = {
        "text": `${sadReply[Math.floor(Math.random() * sadReply.length)]}`
      }

      callSendAPI(sender_psid, response);  
    }


    //academic
    else if (notes.some(word => received_message.text.toLowerCase().includes(word))) {

      
      let i = 0;

      for(i = 0; i < notesFlow.length; i++){

        response = notesFlow[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (quiz.some(word => received_message.text.toLowerCase().includes(word))) {

      
      let i = 0;

      for(i = 0; i < quizFlow.length; i++){

        response = quizFlow[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (level1.some(word => received_message.text.toLowerCase().includes(word))) {

      
      let i = 0;

      for(i = 0; i < level_1_notes.length; i++){

        response = level_1_notes[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (level2.some(word => received_message.text.toLowerCase().includes(word))) {

      
      let i = 0;

      for(i = 0; i < level_2_notes.length; i++){

        response = level_2_notes[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (level3.some(word => received_message.text.toLowerCase().includes(word))) {

      
      let i = 0;

      for(i = 0; i < level_3_notes.length; i++){

        response = level_3_notes[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (level4.some(word => received_message.text.toLowerCase().includes(word))) {

      let i = 0;

      for(i = 0; i < level_4_notes.length; i++){

        response = level_4_notes[i];
        callSendAPI(sender_psid, response);
      }
    }

    //academic -> bce
    else if (bce.some(word => received_message.text.toLowerCase().includes(word))) {

      let i = 0;

      for(i = 0; i < bce_flow.length; i++){

        response = bce_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

    //academic -> iae
    else if (iae.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < iae_flow.length; i++){

        response = iae_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

    //academic -> iee
    else if (iee.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < iee_flow.length; i++){

        response = iee_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

    //academic -> cp
    else if (cp.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < cp_flow.length; i++){

        response = cp_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

     //academic -> bfs
    else if (bfs.includes(received_message.text.toLowerCase())) {
      response = bfs_flow[0];
    }

     //academic -> fmg
     else if (fmg.includes(received_message.text.toLowerCase())) {
      response = fmg_flow[0];

      callSendAPI(sender_psid, response);  
    }

    //academic -> tmm
    else if (tmm.includes(received_message.text.toLowerCase())) {
      response = tmm_flow[0];

      callSendAPI(sender_psid, response);  
    }

     //academic -> tpm
     else if (tpm.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < tpm_flow.length; i++){

        response = tpm_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

     //academic -> chem1
     else if (chem1.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < chem1_flow.length; i++){

        response = chem1_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

    //academic -> chem2
    else if (chem2.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < chem2_flow.length; i++){

        response = chem2_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

     //academic -> phy1
     else if (phy1.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < phy1_flow.length; i++){

        response = phy1_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

    //academic -> phy2
    else if (phy2.includes(received_message.text.toLowerCase())) {


      let i = 0;

      for(i = 0; i < phy2_flow.length; i++){

        response = phy2_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

    //academic -> math1
    else if (math1.includes(received_message.text.toLowerCase())) {
      let i = 0;

      for(i = 0; i < math1_flow.length; i++){

        response = math1_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

    //academic -> ntf
    else if (ntf.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < ntf_flow.length; i++){

        response = ntf_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

    //academic -> em
    else if (em.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < em_flow.length; i++){

        response = em_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

    //academic -> pse
    else if (pse.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < pse_flow.length; i++){

        response = pse_flow[i];
        callSendAPI(sender_psid, response);
      }
    }


    else if (lab_report.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < labFlow.length; i++){

        response = labFlow[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (result.some(word => received_message.text.toLowerCase().includes(word))) {

      let i = 0;

      for(i = 0; i < resultFlow.length; i++){

        response = resultFlow[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (routine.some(word => received_message.text.toLowerCase().includes(word))) {


      let i = 0;

      for(i = 0; i < routineFlow.length; i++){

        response = routineFlow[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (syllabus.some(word => received_message.text.toLowerCase().includes(word))) {
      response = syllabusFlow[0];

      callSendAPI(sender_psid, response);  
    }

    //academic -> math2
    else if (math2.includes(received_message.text.toLowerCase())) {

      let i = 0;

      for(i = 0; i < math2_flow.length; i++){

        response = math2_flow[i];
        callSendAPI(sender_psid, response);
      }
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
  let response2;
  let response3;
  let response4;
  let response5;
  let response6;
  let response7;
  let response8;
  let response9;
  let response10;

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
        response = level_1_notes[0];
        response2 = level_1_notes[1];
        response3 = level_1_notes[2];
        response4 = level_1_notes[3];
        response5 = level_1_notes[4];
        response6 = level_1_notes[5];
        response7 = level_1_notes[6];


        callSendAPI(sender_psid, response);
        callSendAPI2(sender_psid, response2);
        callSendAPI3(sender_psid, response3);
        callSendAPI4(sender_psid, response4);
        callSendAPI5(sender_psid, response5);
        callSendAPI6(sender_psid, response6);
        callSendAPI7(sender_psid, response7);
    } 

    else if (payload === 'level_2') {
      response = level_2_notes[0];
      response2 = level_2_notes[1];
      response3 = level_2_notes[2];
      response4 = level_2_notes[3];
      response5 = level_2_notes[4];
      response6 = level_2_notes[5];
      response7 = level_2_notes[6];
      response8 = level_2_notes[7];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      callSendAPI7(sender_psid, response7);
      callSendAPI8(sender_psid, response8);
  } 
    else if (payload === 'level_3') {
      response = level_3_notes[0];
      response2 = level_3_notes[1];
      response3 = level_3_notes[2];
      response4 = level_3_notes[3];
      response5 = level_3_notes[4];
      response6 = level_3_notes[5];
      response7 = level_3_notes[6];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      callSendAPI7(sender_psid, response7);
    }
    else if (payload === 'level_4') {
      response = level_4_notes[0];
      response2 = level_4_notes[1];
      response3 = level_4_notes[2];
      response4 = level_4_notes[3];
      


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    //subject-> bce
    else if (payload === 'bce_flow') {
      response = bce_flow[0];
      response2 = bce_flow[1];
      response3 = bce_flow[2];
      response4 = bce_flow[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'all_sheets_bce_flow') {
      response = bce_allsheets[0];
      response2 = bce_allsheets[1];
     

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      
    }

    else if (payload === 'part_a_bce_flow') {
      response = bce_part_a[0];
      response2 = bce_part_a[1];
     

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'part_b_bce_flow') {
      response = bce_part_b[0];
      response2 = bce_part_b[1];
      response3 = bce_part_b[2];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }
    else if (payload === 'full_ab_bce_flow') {
      response = full_part_bce[0];
      response2 = full_part_bce[1];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'letter_bce_flow') {
      response = bce_letter[0];
      response2 = bce_letter[1];
      response3 = bce_letter[2];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }
    else if (payload === 'communi_bce_flow') {
      response = bce_comm[0];
      response2 = bce_comm[1];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'lang_func_bce_flow') {
      response = bce_lang_func[0];
      response2 = bce_lang_func[1];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'intro_bce_flow') {
      response = bce_intro[0];

      callSendAPI(sender_psid, response);
    }
    else if (payload === 'bce_ques_flow') {
      response = bce_questions[0];

      callSendAPI(sender_psid, response);
    }
    else if (payload === 'report_bce_flow') {
      response = bce_report[0];

      callSendAPI(sender_psid, response);
    }
    else if (payload === 'read_write_bce_flow') {
      response = bce_read_writing[0];

      callSendAPI(sender_psid, response);
    }

    //subject-> cp
    else if (payload === 'cp_flow') {
      response = cp_flow[0];
      response2 = cp_flow[1];
      response3 = cp_flow[2];
      response4 = cp_flow[3];
      response5 = cp_flow[4];
      response6 = cp_flow[5];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'books_cp_flow') {
      response = cp_books[0];
      response2 = cp_books[1];
      response3 = cp_books[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }
    else if (payload === 'ques_cp_flow') {
      response = cp_ques[0];
      response2 = cp_ques[1];
      response3 = cp_ques[2];
      response4 = cp_ques[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'condition_cp_flow') {
      response = cp_condition[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'fundamental_cp_flow') {
      response = cp_fundamental[0];
     
      callSendAPI(sender_psid, response);
    }
    else if (payload === 'loop_cp_flow') {
      response = cp_loops[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'array_cp_flow') {
      response = cp_array[0];
      response2 = cp_array[1];
     
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'function_cp_flow') {
      response = cp_function[0];
      response2 = cp_function[1];
     
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'string_cp_flow') {
      response = cp_string[0];
      response2 = cp_string[1];
     
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'suggestion_cp_flow') {
      response = cp_suggestion[1];
      callSendAPI(sender_psid, response);
    }


    //subject-> chem1
    else if (payload === 'che1_flow') {
      response = chem1_flow[0];
      response2 = chem1_flow[1];
      response3 = chem1_flow[2];
      response4 = chem1_flow[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'chem1_books_flow') {
      response = chem1_books[0];
      response2 = chem1_books[1];
      response3 = chem1_books[2];
      response4 = chem1_books[3];
      response5 = chem1_books[4];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'chem1_ques_flow') {
      response = chem1_ques[0];
      response2 = chem1_ques[1];
      response3 = chem1_ques[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'chem1_periodic_flow') {
      response = chem1_period[0];
      response2 = chem1_period[1];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'chem1_dilute_flow') {
      response = chem1_dilute[0];
      response2 = chem1_dilute[1];
      response3 = chem1_dilute[2];
      response4 = chem1_dilute[3];
      response5 = chem1_dilute[4];
      response6 = chem1_dilute[5];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'chem1_complx_flow') {
      response = chem1_complex[0];
      response2 = chem1_complex[1];
      response3 = chem1_complex[2];
      response4 = chem1_complex[3];
      response5 = chem1_complex[4];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      
    }

    else if (payload === 'chem1_bond_flow') {
      response = chem1_bond[0];
      response2 = chem1_bond[1];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'chem1_equi_flow') {
      response = chem1_equilibrium[0];
      response2 = chem1_equilibrium[1];
      response3 = chem1_equilibrium[2];
      response4 = chem1_equilibrium[3];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'chem1_photo_flow') {
      response = chem1_photo[0];
      response2 = chem1_photo[1];
      response3 = chem1_photo[2];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'chem1_analy_flow') {
      response = chem1_analy[0];
      response2 = chem1_analy[1];
      response3 = chem1_analy[2];
      response4 = chem1_analy[3];
      response5 = chem1_analy[4];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'chem1_coll_flow') {
      response = chem1_colloid[0];
      response2 = chem1_colloid[1];
      response3 = chem1_colloid[2];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'chem1_acid_base_flow') {
      response = chem1_acid_base[0];
      response2 = chem1_acid_base[1];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'chem1_kinetics_flow') {
      response = chem1_kinetic[0];
      response2 = chem1_kinetic[1];
      response3 = chem1_kinetic[2];
      response4 = chem1_kinetic[3];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    //subject-> phy1
    else if (payload === 'phy1_flow') {
      response = phy1_flow[0];
      response2 = phy1_flow[1];
      response3 = phy1_flow[2];
      response4 = phy1_flow[3];
      response5 = phy1_flow[4];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'phy1_books_flow') {
      response = phy1_books[0];
      response2 = phy1_books[1];
      response3 = phy1_books[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'phy1_ques_flow') {
      response = phy1_ques[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'phy1_circular_flow') {
      response = phy1_circular[0];
      response2 = phy1_circular[1];
      response3 = phy1_circular[2];
      response4 = phy1_circular[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'phy1_hydro_flow') {
      response = phy1_hydro[0];
      response2 = phy1_hydro[1];
      response3 = phy1_hydro[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'phy1_diffraction_flow') {
      response = phy1_diffraction[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'phy1_interfer_flow') {
      response = phy1_interferrence[0];
      response2 = phy1_interferrence[1];
      response3 = phy1_interferrence[2];
      response4 = phy1_interferrence[3];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'phy1_polar_flow') {
      response = phy1_polar[0];
      response2 = phy1_polar[1];
      response3 = phy1_polar[2];
      response4 = phy1_polar[3];
      response5 = phy1_polar[4];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'phy1_elas_flow') {
      response = phy1_elasticity[0];
      response2 = phy1_elasticity[1];
      response3 = phy1_elasticity[2];
      response4 = phy1_elasticity[3];
      response5 = phy1_elasticity[4];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'phy1_visco_flow') {
      response = phy1_viscosity[0];
      response2 = phy1_viscosity[1];
      
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'phy1_surface_flow') {
      response = phy1_surface[0];
      response2 = phy1_surface[1];
      response3 = phy1_surface[2];
      response4 = phy1_surface[3];
      response5 = phy1_surface[4];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    //subject-> math1
    else if (payload === 'math1_flow') {
      response = math1_flow[0];
      response2 = math1_flow[1];
      response3 = math1_flow[2];
      response4 = math1_flow[3];
      response5 = math1_flow[4];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'math1_books_flow') {
      response = math1_books[0];
      response2 = math1_books[1];
      response3 = math1_books[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'math1_ques_flow') {
      response = math1_question[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math1_solve18_flow') {
      response = math1_solve[0];
      response2 = math1_solve[1];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math1_diff_solve_flow') {
      response = math1_solve_diff[0];
      response2 = math1_solve_diff[1];
      response3 = math1_solve_diff[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'math1_coord_solve_flow') {
      response = math1_solve_coord[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math1_integreation_solve_flow') {
      response = math1_solve_integre[0];

      callSendAPI(sender_psid, response);
    }

    
    else if (payload === 'math1_linear_solve_flow') {
      response = math1_solve_linear[0];
      response2 = math1_solve_linear[1];
      response3 = math1_solve_linear[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'math1_conv_div_flow') {
      response = math1_convergence[0];
      response2 = math1_convergence[1];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math1_exapnsion_flow') {
      response = math1_expansion[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math1_diff_flow') {
      response = math1_differntitation[0];
      response2 = math1_differntitation[1];
      response3 = math1_differntitation[2];
      response4 = math1_differntitation[3];
      response5 = math1_differntitation[4];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'math1_integre_flow') {
      response = math1_integration[0];
      response2 = math1_integration[1];
      response3 = math1_integration[2];
      response4 = math1_integration[3];
      
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'math1_extreme_flow') {
      response = math1_extrema[0];
      response2 = math1_extrema[1];
      
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math1_conics_flow') {
      response = math1_conics[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math1_vector_flow') {
      response = math1_vector[0];
      response2 = math1_vector[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math1_matrix_flow') {
      response = math1_matrix[0];
      response2 = math1_matrix[1];
      response3 = math1_matrix[2];
    
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'math1_co_ord_flow') {
      response = math1_coOrd[0];
      response2 = math1_coOrd[1];
      response3 = math1_coOrd[2];
      response4 = math1_coOrd[3];
      response5 = math1_coOrd[4];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'math1_linear_flow') {
      response = math1_linear[0];
      response2 = math1_linear[1];
    
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math1_change_axes_flow') {
      response = math1_axes[0];
      response2 = math1_axes[1];
    
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    //quizflow
    else if (payload === 'quiz_flow') {
      response = quizFlow[0];
      response2 = quizFlow[1];
      response3 = quizFlow[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }


    //subject-> ntf
    else if (payload === 'ntf_flow') {
      response = ntf_flow[0];
      response2 = ntf_flow[1];
      response3 = ntf_flow[2];
      response4 = ntf_flow[3];
      response5 = ntf_flow[4];
      response6 = ntf_flow[5];
      response7 = ntf_flow[6];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      callSendAPI7(sender_psid, response7);
    }

    else if (payload === 'ntf_books_flow') {
      response = ntf_books[0];
      response2 = ntf_books[1];
      response3 = ntf_books[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'ntf_hnotes_flow') {
      response = ntf_hand_notes[0];
      response2 = ntf_hand_notes[1];
      response3 = ntf_hand_notes[2];
      response4 = ntf_hand_notes[3];
      response5 = ntf_hand_notes[4];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'ntf_ques_flow') {
      response = ntf_question[0];
      response2 = ntf_question[1];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'ntf_suggestion_flow') {
      response = ntf_suggestion[0];
      response2 = ntf_suggestion[1];
      response3 = ntf_suggestion[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'ntf_intro_flow') {
      response = ntf_intro[0];
      response2 = ntf_intro[1];
      response3 = ntf_intro[2];
      response4 = ntf_intro[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'ntf_cotton_flow') {
      response = ntf_cotton[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'ntf_cotton_hand_flow') {
      response = ntf_cotton_handNote[0];
      response2 = ntf_cotton_handNote[1];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'ntf_slides_flow') {
      response = ntf_cotton_slide[0];
      response2 = ntf_cotton_slide[1];
      response3 = ntf_cotton_slide[2];
      response4 = ntf_cotton_slide[3];
      response5 = ntf_cotton_slide[4];
      response6 = ntf_cotton_slide[5];
      response7 = ntf_cotton_slide[6];
      response8 = ntf_cotton_slide[7];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      callSendAPI7(sender_psid, response7);
      callSendAPI8(sender_psid, response8);
    }

    else if (payload === 'ntf_videos_flow') {
      response = ntf_cotton_video[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'ntf_flax_flow') {
      response = ntf_flax[0];
      response2 = ntf_flax[1];
      response3 = ntf_flax[2];
      response4 = ntf_flax[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'ntf_wool_flow') {
      response = ntf_wool[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'ntf_wool_hand_flow') {
      response = ntf_wool_handNote[0];
      response2 = ntf_wool_handNote[1];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'ntf_wool_slides_flow') {
      response = ntf_wool_slides[0];
      response2 = ntf_wool_slides[1];
      response3 = ntf_wool_slides[2];
      response4 = ntf_wool_slides[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'ntf_wool_videos_flow') {
      response = ntf_wool_videos[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'ntf_jute_flow') {
      response = ntf_jute[0];
      response2 = ntf_jute[1];
      response3 = ntf_jute[2];
      response4 = ntf_jute[3];
      response5 = ntf_jute[4];
      response6 = ntf_jute[5];



      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'ntf_silk_flow') {
      response = ntf_silk[0];
      response2 = ntf_silk[1];
      response3 = ntf_silk[2];
      response4 = ntf_silk[3];
      response5 = ntf_silk[4];
      response6 = ntf_silk[5];



      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'ntf_sisal_flow') {
      response = ntf_sisal[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'ntf_hemp_flow') {
      response = ntf_hemp[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'ntf_palf_flow') {
      response = ntf_palf[0];
      response2 = ntf_palf[1];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'ntf_kapok_flow') {
      response = ntf_kapok[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'ntf_asbestos_flow') {
      response = ntf_asbestos[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'ntf_other_fib_flow') {
      response = ntf_other_fibre[0];
      response2 = ntf_other_fibre[1];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    //subject-> ntf
    else if (payload === 'em_flow') {
      response = em_flow[0];
      response2 = em_flow[1];
      response3 = em_flow[2];
      response4 = em_flow[3];
      response5 = em_flow[4];
      response6 = em_flow[5];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'em_books_flow') {
      response = em_books[0];
      response2 = em_books[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'em_ques_flow') {
      response = em_question[0];
      response2 = em_question[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'em_math_flow') {
      response = em_math[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'em_blast_flow') {
      response = em_blastFur[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'em_heat_flow') {
      response = em_heatTreat[0];
      response2 = em_heatTreat[1];
      response3 = em_heatTreat[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'em_wrought_flow') {
      response = em_wrought[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'em_crystal_flow') {
      response = em_crystal[0];
      response2 = em_crystal[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'em_iron_ceramic_flow') {
      response = em_iron[0];
      response2 = em_iron[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'em_glass_flow') {
      response = em_glass[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'em_ceramic_flow') {
      response = em_ceramic[0];
      response2 = em_ceramic[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'em_corrosion_flow') {
      response = em_corrosion[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'em_alloy_flow') {
      response = em_alloy[0];
      response2 = em_alloy[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'em_composites_flow') {
      response = em_composites[0];
      
      callSendAPI(sender_psid, response);
    }

    //subject-> ntf
    else if (payload === 'bfs_flow') {
      response = bfs_flow[0];
     
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'bfs_lec3_flow') {
      response = bfs_lec3[0];
     
      
      callSendAPI(sender_psid, response);
    }

    //subject-> pse
    else if (payload === 'pse_flow') {
      response = pse_flow[0];
      response2 = pse_flow[1];
      response3 = pse_flow[2];
      response4 = pse_flow[3];
      response5 = pse_flow[4];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'pse_books_flow') {
      response = pse_books[0];
      response2 = pse_books[1];
      response3 = pse_books[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'pse_ques_flow') {
      response = pse_questions[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'pse_handnotes_flow') {
      response = pse_handnotes[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'pse_intro_flow') {
      response = pse_intro[0];
      response2 = pse_intro[1];
      response3 = pse_intro[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'pse_physical_struc_flow') {
      response = pse_physical[0];
      response2 = pse_physical[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'pse_chemical_struc_flow') {
      response = pse_chemical[0];
      response2 = pse_chemical[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'pse_molWei_flow') {
      response = pse_moleWeight[0];
      response2 = pse_moleWeight[1];
      response3 = pse_moleWeight[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'pse_step_growth_flow') {
      response = pse_step[0];
      response2 = pse_step[1];
      response3 = pse_step[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'pse_chain_growth_flow') {
      response = pse_chain[0];
      response2 = pse_chain[1];
      response3 = pse_chain[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'pse_morpho_flow') {
      response = pse_morpho[0];
      response2 = pse_morpho[1];
      response3 = pse_morpho[2];
      response4 = pse_morpho[3];
      response5 = pse_morpho[4];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'pse_thermal_flow') {
      response = pse_thermal[0];
      response2 = pse_thermal[1];
      response3 = pse_thermal[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'pse_degrad_flow') {
      response = pse_degrad[0];
      response2 = pse_degrad[1];
      response3 = pse_degrad[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'pse_polymer_tec_flow') {
      response = pse_polyTech[0];
      response2 = pse_polyTech[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'pse_application_flow') {
      response = pse_application[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'tpm_flow') {
      response = tpm_flow[0];
      response2 = tpm_flow[1];
      response3 = tpm_flow[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'tpm_ques_flow') {
      response = tpm_ques[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'tpm_wov_fab_wet_flow') {
      response = tpm_fabWet[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'tpm_wov_fab_manu_flow') {
      response = tpm_fabManu[0];
      
      callSendAPI(sender_psid, response);
    }


     //subject-> fmg
    else if (payload === 'fmg_flow') {
      response = fmg_flow[0];
      
      callSendAPI(sender_psid, response);
    }

     //subject-> tmm
     else if (payload === 'tmm_flow') {
      response = tmm_flow[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'tmm_quess_flow') {
      response = tmm_questions[0];
      
      callSendAPI(sender_psid, response);
    }

    //subject-> iae
    else if (payload === 'iae_flow') {
      response = iae_flow[0];
      response2 = iae_flow[1];
      response3 = iae_flow[2];
      response4 = iae_flow[3];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'iae_books_flow') {
      response = iae_books[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iae_ques_flow') {
      response = iae_question[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iae_intro_flow') {
      response = iae_intro[0];
      response2 = iae_intro[1];
      response3 = iae_intro[2];
      response4 = iae_intro[3];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'iae_full_slide_flow') {
      response = iae_fullSlide[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iae_diff_woven_flow') {
      response = iae_diffWov[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iae_brands_flow') {
      response = iae_brands[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iae_quota_flow') {
      response = iae_quota[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iae_cam_flow') {
      response = iae_cam[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iae_shirt_flow') {
      response = iae_shirt[0];
      
      callSendAPI(sender_psid, response);
    }

    //subject-> iae
    else if (payload === 'iee_flow') {
      response = iee_flow[0];
      response2 = iee_flow[1];
      response3 = iee_flow[2];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'iee_books_flow') {
      response = iee_books[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iee_sheets_flow') {
      response = iee_sheets[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iee_handnotes_flow') {
      response = iee_notes[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iee_man_env_flow') {
      response = iee_manEnv[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iee_soil_flow') {
      response = iee_soil[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iee_env_issue_flow') {
      response = iee_envIssues[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iee_nature_env_flow') {
      response = iee_natureEnv[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'iee_spf_upf_flow') {
      response = iee_spf[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math2_flow') {
      response = math2_flow[0];
      response2 = math2_flow[1];
      response3 = math2_flow[2];
      response4 = math2_flow[3];
      response5 = math2_flow[4];
      response6 = math2_flow[5];
      response7 = math2_flow[6];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      callSendAPI7(sender_psid, response7);
    }

    else if (payload === 'math2_books_flow') {
      response = math2_books[0];
      response2 = math2_books[1];
      response3 = math2_books[2];
      response4 = math2_books[3];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'math2_ques_flow') {
      response = math2_question[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math2_suggestion_flow') {
      response = math2_suggestion[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math2_moivre_flow') {
      response = math2_moivre[0];
      response2 = math2_moivre[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math2_homo_flow') {
      response = math2_homo[0];
      response2 = math2_homo[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math2_exact_flow') {
      response = math2_exact[0];
      response2 = math2_exact[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math2_lde_flow') {
      response = math2_lde[0];
      response2 = math2_lde[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math2_red_homo_flow') {
      response = math2_redhomo[0];
      response2 = math2_redhomo[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math2_dif_eqn_flow') {
      response = math2_diffeqn[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math2_diffeqn_note_flow') {
      response = math2_diffeqn_note[0];
      response2 = math2_diffeqn_note[1];
      response3 = math2_diffeqn_note[2];
      response4 = math2_diffeqn_note[3];
      response5 = math2_diffeqn_note[4];
      response6 = math2_diffeqn_note[5];
      
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'math2_diffeqn_book_flow') {
      response = math2_diffeqn_book[0];
      response2 = math2_diffeqn_book[1];
      response3 = math2_diffeqn_book[2];
      response4 = math2_diffeqn_book[3];
      response5 = math2_diffeqn_book[4];
      
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'math2_linear_eqn_flow') {
      response = math2_linEqn[0];
      response2 = math2_linEqn[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math2_residue_flow') {
      response = math2_residue[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math2_line_int_flow') {
      response = math2_lineInt[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math2_method_var_flow') {
      response = math2_methodVar[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math2_analy_func_flow') {
      response = math2_analy[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math2_vector_flow') {
      response = math2_vector[0];
      response2 = math2_vector[1];
      response3 = math2_vector[2];
      response4 = math2_vector[3];
      
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'math2_ode_flow') {
      response = math2_ode[0];
      response2 = math2_ode[1];
      response3 = math2_ode[2];
      
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'math2_separation_flow') {
      response = math2_sepaVar[0];
      response2 = math2_sepaVar[1];
      
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math2_laplace_flow') {
      response = math2_laplace[0];
      response2 = math2_laplace[1];
      response3 = math2_laplace[2];
      response4 = math2_laplace[3];
      response5 = math2_laplace[4];
      response6 = math2_laplace[5];
      
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'math2_cx_num_flow') {
      response = math2_cxNum[0];
      response2 = math2_cxNum[1];
      
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }


     //subject-> chem2
     else if (payload === 'che2_flow') {
      response = chem2_flow[0];
      response2 = chem2_flow[1];
      response3 = chem2_flow[2];
      response4 = chem2_flow[3];
      response5 = chem2_flow[4];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'chem2_books_flow') {
      response = chem2_books[0];
      response2 = chem2_books[1];
      response3 = chem2_books[2];
      response4 = chem2_books[3];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'chem2_ques_flow') {
      response = chem2_question[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'chem2_org_meta_flow') {
      response = chem2_orgMetalic[0];
      response2 = chem2_orgMetalic[1];
      response3 = chem2_orgMetalic[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'chem2_carbonyl_flow') {
      response = chem2_carbonyl[0];
      response2 = chem2_carbonyl[1];
      response3 = chem2_carbonyl[2];
      response4 = chem2_carbonyl[3];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'chem2_org_reac_flow') {
      response = chem2_orgReac[0];
      response2 = chem2_orgReac[1];
      response3 = chem2_orgReac[2];
      response4 = chem2_orgReac[3];
      response5 = chem2_orgReac[4];
      response6 = chem2_orgReac[5];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'chem2_alc_phe_flow') {
      response = chem2_AlcPhenol[0];
      response2 = chem2_AlcPhenol[1];
      response3 = chem2_AlcPhenol[2];
      response4 = chem2_AlcPhenol[3];
      response5 = chem2_AlcPhenol[4];
      response6 = chem2_AlcPhenol[5];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'chem2_amino_flow') {
      response = chem2_AminoAcid[0];
      response2 = chem2_AminoAcid[1];
      response3 = chem2_AminoAcid[2];
      response4 = chem2_AminoAcid[3];
      response5 = chem2_AminoAcid[4];
      response6 = chem2_AminoAcid[5];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'chem2_carbo_flow') {
      response = chem2_carbohydrates[0];
      response2 = chem2_carbohydrates[1];
      response3 = chem2_carbohydrates[2];
      response4 = chem2_carbohydrates[3];
      response5 = chem2_carbohydrates[4];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'chem2_color_dye_flow') {
      response = chem2_color_dye[0];
      response2 = chem2_color_dye[1];
      response3 = chem2_color_dye[2];
      response4 = chem2_color_dye[3];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'chem2_carboxylic_flow') {
      response = chem2_carboxylic[0];
      response2 = chem2_carboxylic[1];
      response3 = chem2_carboxylic[2];
      response4 = chem2_carboxylic[3];
      response5 = chem2_carboxylic[4];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }


    else if (payload === 'chem2_amine_flow') {
      response = chem2_amine[0];
      response2 = chem2_amine[1];
      response3 = chem2_amine[2];
      response4 = chem2_amine[3];
     
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'chem2_solubulity_flow') {
      response = chem2_solubulity[0];
     
      callSendAPI(sender_psid, response);
    }


    //subject-> phy2
    else if (payload === 'phy2_flow') {

      let i = 0;

      for(i = 0; i < phy2_flow.length; i++){

        response = phy2_flow[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (payload === 'phy2_books_flow') {

      let i = 0;

      for(i = 0; i < phy2_books.length; i++){

        response = phy2_books[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (payload === 'phy2_ques_flow') {
      response = phy2_question[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'phy2_kinetic_flow') {

      let i = 0;

      for(i = 0; i < phy2_Kinetic.length; i++){

        response = phy2_Kinetic[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (payload === 'phy2_electricity_flow') {
      response = phy2_Elctricity[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'phy2_electric_notes_flow') {

      let i = 0;

      for(i = 0; i < phy2_Elctricity_notes.length; i++){

        response = phy2_Elctricity_notes[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (payload === 'phy2_electric_slides_flow') {

      let i = 0;

      for(i = 0; i < phy2_Elctricity_slides.length; i++){

        response = phy2_Elctricity_slides[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (payload === 'phy2_thermodynamics_flow') {

      let i = 0;

      for(i = 0; i < phy2_Thermo.length; i++){

        response = phy2_Thermo[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (payload === 'phy2_radiation_flow') {

      let i = 0;

      for(i = 0; i < phy2_Radiation.length; i++){

        response = phy2_Radiation[i];
        callSendAPI(sender_psid, response);
      }
    }


    else if (payload === 'phy2_magnet_flow') {

      let i = 0;

      for(i = 0; i < phy2_magnet.length; i++){

        response = phy2_magnet[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (payload === 'phy2_modern_flow') {

      let i = 0;

      for(i = 0; i < phy2_modern.length; i++){

        response = phy2_modern[i];
        callSendAPI(sender_psid, response);
      }
    }

    else if (payload === 'phy2_entropy_flow') {

      let i = 0;

      for(i = 0; i < phy2_entropy.length; i++){

        response = phy2_entropy[i];
        callSendAPI(sender_psid, response);
      }
    }



    

    






    
    
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

// Sends response messages via the Send API2
function callSendAPI2(sender_psid, response2) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response2
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

// Sends response messages via the Send API3
function callSendAPI3(sender_psid, response3) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response3
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

// Sends response messages via the Send API4
function callSendAPI4(sender_psid, response4) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response4
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

// Sends response messages via the Send API5
function callSendAPI5(sender_psid, response5) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response5
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


// Sends response messages via the Send API6
function callSendAPI6(sender_psid, response6) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response6
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


// Sends response messages via the Send API7
function callSendAPI7(sender_psid, response7) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response7
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


// Sends response messages via the Send API8
function callSendAPI8(sender_psid, response8) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response8
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


// Sends response messages via the Send API9
function callSendAPI9(sender_psid, response9) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response9
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

// Sends response messages via the Send API10
function callSendAPI10(sender_psid, response10) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response10
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