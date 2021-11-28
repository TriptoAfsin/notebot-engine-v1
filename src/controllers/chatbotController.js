require("dotenv").config();
const axios = require('axios');

//libs - generators
const imgBlockGen = require('simple-messenger-blocks/imgBlockGen');
const webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
const textBlockGen = require('simple-messenger-blocks/textBlockGen');
const payloadBtnBlockGen = require('simple-messenger-blocks/payloadBtnGen');
const groupedBtnBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
const cardGenerator = require('simple-messenger-blocks/cardGenerator');

//libs - utility functions
const wordIs = require('./libs/wordDetectors/wordIs');
const wordIncludes = require('./libs/wordDetectors/wordIncludes');
const wordIncludesWhole = require('./libs/wordDetectors/wordIncludesWhole');

//analytics
let handleAnalytics =  async(subName) => {
  //console.log(`${process.env.analyticsServerUrl}/notes/${subName}?adminKey=${process.env.analyticsAuthKey}`)
  if(process.env.collectAnalytics === "true"){
      try{
          const result = await axios.get(`${process.env.analyticsServerUrl}/notes/${subName}?adminKey=${process.env.analyticsAuthKey}`,
          console.log(`🟢 Analytics was handled successfully`)
   );
      }catch(err){
          //console.log(err)
          console.log(`🔴 Error occurred while handling analytics(${subName})`)
      }
  }
  else{
      console.log(`🟠 Analytics is disabled`)
  }
}

let handleMissedWordPosting = async missedWord => {
  try {
    const result = await axios
      .post(`${process.env.analyticsServerUrl}/missed/`, {
        word: missedWord,
      })
      .then(function (response) {
        console.log(`🟢 Missed word posting was handled successfully`);
      })
      .catch(function (err) {
        console.log(`🔴 Error occurred while handling missed word posting`);
      });
  } catch (err) {
    //console.log(err)
    console.log(`🔴 Error occurred while handling missed word posting`);
  }
};


let postNewUserCount = async () => {
  try {
    axios
      .post(`${process.env.analyticsServerUrl}/users`)
      .then(function (response) {
        // handle success
        console.log(`🟢 New user info posting was successful`);
      })
      .catch(function (error) {
        // handle error
        console.log(`🔴 Error occured while posting new user info`);
      });
  } catch (err) {
    console.log(`🔴 Error occured while posting new user info`);
  }
};

//libs - emoji
const emojiIs = require('./libs/wordDetectors/emojiIs');

//libs - payload detector
const payloadIncludes = require('./libs/wordDetectors/payloadIncludes')



const request = require('request');

//services
const chatBotService = require('../services/chatBotService');


//prevCustomer
const prevUserFlow = require('./flows/botReplies/prevCustomerReply');

//bothSubj Words
const bothYMWords = require('./keywords/academic_words/subjects/bothYM');
const bothAMWords = require('./keywords/academic_words/subjects/bothAM');
const bothAPWords = require('./keywords/academic_words/subjects/bothAP');
const bothWPWords = require('./keywords/academic_words/subjects/bothWP');

//bothSubj flows
const bothWPFlow = require('./flows/botReplies/note_levels/level_2/bothWPFlow');
const bothAMFlow = require('./flows/botReplies/note_levels/level_2/bothAMFlow');
const bothAPFlow = require('./flows/botReplies/note_levels/level_2/bothAPFlow');
const bothYMFlow = require('./flows/botReplies/note_levels/level_2/bothYMFlow');


//BooksQues
const booksQues = require('./keywords/academic_words/booksQuestionWords');

const booksQuesFlow = require('./flows/botReplies/note_levels/booksQuesFlow');


//ProblemIssue Words
const problemWords = require('./keywords/problemIssueWords');

const problemReply = require('./keywords/replies/problemReply');


//keywords
const positiveKeywords = require('./keywords/positiveKeywords');
const negativeKeywords = require('./keywords/negativeKeywords');

//emojis
const loveMojis = require('./keywords/loveMoji.js');
const animalMojis = require('./keywords/animalMoji');
const flirtMojis = require('./keywords/flirtMoji');

//name
const nameWords = require('./keywords/yorNameWords.js');
const nameReply = require('./keywords/replies/yourNameReplies');

//flirt
const flirtWords = require('./keywords/flirtWords');
const flirtReply = require('./keywords/replies/flirtReply');

//gfbf
const gfBfWords = require('./keywords/gfBfWords');
const gfBfReply = require('./keywords/replies/gfBfReplies');


//swear words
const swearWords = require('./keywords/swearWords');
const swearReply = require('./keywords/replies/swearReply');

//greet
const greetWords = require('./keywords/greetWords');
const hiWords = require('./keywords/onlyHiWord');

//yes
const yesWords = require('./keywords/yesTypeWords');
const yesReplies = require('./keywords/replies/yesTypeReply');

//okaywords
const okayWords = require('./keywords/okayWords');
const onlyOkay = require('./keywords/onlyok');
const okayReplies = require('./keywords/replies/okayReply');

//no
const noWords = require('./keywords/noTypeWords');
const noReplies = require('./keywords/replies/noTypeReply');

//bhai
const bhaiWords = require('./keywords/bhaiBonWords');
const bhaiReplies = require('./keywords/replies/bhaiReply');

//hot
const hotWords = require('./keywords/hotWords');
const hotReplies = require('./keywords/replies/hotReplies');

//cold
const coldWords = require('./keywords/coldWords');
const coldReplies = require('./keywords/replies/coldReply');

//sameToYou
const sameWords = require('./keywords/sameToYouWords');
const sameReplies = require('./keywords/replies/sameToYouReply');

//sadMoji
const sadMojis = require('./keywords/sadMoji');
const sadMojiReplies = require('./keywords/replies/sadMojiReply');

//slightly angry moji
const slightAngryMoji = require('./keywords/slightAngryEmoji');

//doingWhat
const doingWords = require('./keywords/doingWhatWords');
const doingReplies = require('./keywords/replies/doingReply');

//boyGirl
const boyGirlWords = require('./keywords/boyGirlWords');
const boyGirlReplies = require('./keywords/replies/boyGirlReply');

//bujho
const bujhoWords = require('./keywords/bujhoWords');
const bujhoReplies = require('./keywords/replies/bujhoReply');

//can Do
const canDoWords = require('./keywords/canDoWords');
const canDoReplies = require('./keywords/replies/canDoReply');

//food
const foodWords = require('./keywords/foodWords');
const khawaWords = require('./keywords/khawaWords');
const foodReplies = require('./keywords/replies/foodReplies');

//treat
const treatWords = require('./keywords/treatWords');
const treatReplies = require('./keywords/replies/treatReply');

//laugh
const laughWords = require('./keywords/laughWords');
const laughReplies = require('./keywords/replies/laughReply');

//mair
const mairWords = require('./keywords/mairWords');
const mairReplies = require('./keywords/replies/mairReply');

//shala
const shalaWords = require('./keywords/shalaWords');
const shalaReplies = require('./keywords/replies/shalaReplies');

//sleep
const sleepWords = require('./keywords/sleepWords');
const sleepReplies = require('./keywords/replies/sleepReply');

//smoking
const smokingWords = require('./keywords/smokingWords');
const smokingReplies = require('./keywords/replies/smokingReply');

//why
const whyWords = require('./keywords/whyWords');
const whyReplies = require('./keywords/replies/whyReply');

//when
const whenWords = require('./keywords/whenWords');
const whenReplies = require('./keywords/replies/whenReply');

//seniorJunior
const seniorJuniorWords = require('./keywords/seniorJuniorWords');
const seniorJuniorReplies = require('./keywords/replies/seniorJuniorReply');

//submit
const submitWords = require('./keywords/submitWords');
const submitReplies = require('./keywords/replies/submissionReply');

//life
const lifeWords = require('./keywords/lifeWords');
const lifeReplies = require('./keywords/replies/lifeReply');

//linkWords
const linkWords = require('./keywords/linkWords');
const linkReplies = require('./keywords/replies/linkReplies');

//drug
const drugWords = require('./keywords/drugWords');
const drugReplies = require('./keywords/replies/drugReply');

//love
const loveWords = require('./keywords/loveWords');
const loveReplies = require('./keywords/replies/loveWordsReply');

//happy
const happyWords = require('./keywords/happyWords');
const happyReplies = require('./keywords/replies/happyReplies');

//chill
const chillWords = require('./keywords/chillWords');
const chillReplies = require('./keywords/replies/chillReply');

//Home
const homeWords = require('./keywords/homeWords');
const homeReplies = require('./keywords/replies/homeReplies');

//How are u
const howAreYouWords = require('./keywords/howAreUWords');
const howAreYouReplies = require('./keywords/replies/howAreYouReplies');

//bye
const byeWords = require('./keywords/byeWords');
const byeReplies = require('./keywords/replies/byeReply');

//senti
const sentiWords = require('./keywords/sentiWords');
const sentiReplies = require('./keywords/replies/sentiReply');

//fool
const foolWords = require('./keywords/foolWords');
const foolReplies = require('./keywords/replies/foolReply');

//ahoh
const ahOhWords = require('./keywords/ahOhWords');
const ahOhReplies = require('./keywords/replies/ahOhReply');

//gg
const ggWord = require('./keywords/ggWord');
const ggReply = require('./keywords/replies/ggReply');

//thanks
const thanksWords = require('./keywords/thanksWords');
const thanksReplies = require('./keywords/replies/thanksReply');

//sorry
const sorryWords = require('./keywords/sorryWords');
const sorryReplies = require('./keywords/replies/sorryReply');

//songs
const songWords = require('./keywords/songWords');
const songFlow = require('./flows/botReplies/entertainFlows/songsFlow');

//depressed
const depressedWords = require('./keywords/depressedWords');
const depressedFlow = require('./flows/botReplies/entertainFlows/depressedFlow');



//help
const helpWords = require('./keywords/helpWords');

//phone
const phoneWords = require('./keywords/phoneWords');

//creator
const creatorWords = require('./keywords/creatorWords');
const creatorFlow = require('./keywords/replies/creatorReply');

//tripto
const triptoWords = require('./keywords/triptoWords');
const triptoReplies = require('./keywords/replies/triptoReply');


//jokes
const jokeWords = require('./keywords/jokeWords');
const jokeFlow = require('./flows/botReplies/entertainFlows/jokesFlow');

//quote
const motivateWords = require('./keywords/motivateWords');
const quotesFlow = require('./flows/botReplies/entertainFlows/quotesFlow');

//date
const dateWords = require('./keywords/dateWords');

//corona
const coronaWords = require('./keywords/coronaWords');

//notice words
const noticeWords = require('./keywords/noticeWords');


//reply words
const loveMojiReplies = require('./keywords/replies/lovemojiReply');
const sadStuffReply = require('./keywords/replies/sadReplies');
const greetReplies = require('./keywords/replies/greetingsReply');


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
//academic -> om
const om_words = require('./keywords/academic_words/subjects/omWords');
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
//academic -> fh
const fh_words = require('./keywords/academic_words/subjects/fhWords');
//academic -> acfd
const acfd_words = require('./keywords/academic_words/subjects/acfdWords');
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
//academic -> acm
const acm_words = require('./keywords/academic_words/subjects/acmWords');
//academic -> im
const im_words = require('./keywords/academic_words/subjects/imWords');
//academic -> ecb
const ecb_words = require('./keywords/academic_words/subjects/ecbWords');


//both subjs
const bothChem_words = require('./keywords/academic_words/subjects/bothChem');
const bothPhy_words = require('./keywords/academic_words/subjects/bothPhysics');
const bothMath_words = require('./keywords/academic_words/subjects/bothMath');

const quiz_words = require('./keywords/academic_words/quizWords');
const labWords = require('./keywords/academic_words/labWords');
const onlylabWord = require('./keywords/academic_words/onlyLabWord');

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

//useful tools words
const usefullToolsWords = require('./keywords/usefulToolsWords');
const usefullToolsFlow = require('./flows/botReplies/usefulFlow');


//donation words
const donationWords = require('./keywords/donationWords');
const donationFlow = require('./flows/botReplies/donation/donationFlow');
const donation_bKash = require('./flows/botReplies/donation/bkashDonation');
const donation_nagad = require('./flows/botReplies/donation/nagadDonation');
const donation_surecash = require('./flows/botReplies/donation/surecashDonation');


//attachment reply
const attachmentReply = require('./keywords/replies/attachmentReply');

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



//academic flows -> ecb
const ecb_flow = require('./flows/botReplies/note_levels/level_1/level_1_subs/ecb/ecb_flow');
const ecb_flow_Notes = require('./flows/botReplies/note_levels/level_1/level_1_subs/ecb/topics/ecbHandNote');
const ecb_flow_Intro = require('./flows/botReplies/note_levels/level_1/level_1_subs/ecb/topics/ecbIntro');


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
const em_plastic = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emPlastic");
const em_phaseDiag = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emPhaseDiag");
const em_atomic_struct = require("./flows/botReplies/note_levels/level_1/level_1_subs/em/topics/emAtomicStruct");

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
const pse_FiberForming = require("./flows/botReplies/note_levels/level_1/level_1_subs/pse/topics/pseFiberForming");

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
const fm1_dobby = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Dobby");
const fm1_winding = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Winding");
const fm1_warping = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Warping");
const fm1_Tappet = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Tappet");
const fm1_Picking = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Picking");
const fm1_Beatup = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Beatup");
const fm1_Selvedge = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Selvedge");
const fm1_Takeup = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Takeup");
const fm1_Letoff = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Letoff");
const fm1_Denim = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Denim");
const fm1_StopMotion = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1StopMotion");
const fm1_Jacquard = require("./flows/botReplies/note_levels/level_2/level_2_subs/fm1/topics/fm1Jacquard");


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

//fh
const fh_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/fh_flow");
const fh_ArtDes = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhArtDes");
const fh_Roman = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhRoman");
const fh_Eliza = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhEliza");
const fh_Georgian = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhGeorgi");
const fh_Greek = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhGreek");
const fh_Egypt = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhEgypt");
const fh_Renaiss = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhRenais");
const fh_Silk = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhSilk");
const fh_JeansHis = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhJeansHis");
const fh_Muslin = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhMuslin");
const fh_Handloom = require("./flows/botReplies/note_levels/level_1/level_1_subs/fh/topics/fhHandloom");



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
const wpp_Impurities = require("./flows/botReplies/note_levels/level_2/level_2_subs/wpp/topics/wppImpurities");
const wpp_BioScouring = require("./flows/botReplies/note_levels/level_2/level_2_subs/wpp/topics/wppBioScouring");


//fd2
const fd2_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/fd2/fd2_flow");


//weav_prep
const weavPrep_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/weaving_prep/weaving_prep_flow");
const weavPrep_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/weaving_prep/topics/weavBooks");

//ap-i
const ap1_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/ap1_flow");
const ap1_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/topics/ap1Books");
const ap1_Ques = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/topics/ap1Ques");
const ap1_Sizing = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/topics/ap1Sizing");
const ap1_Trimming = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/topics/ap1Trim");
const ap1_Interling = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/topics/ap1Interlining");
const ap1_fabricCutting = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/topics/ap1FabricCut");
const ap1_patternMaking = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/topics/ap1PatternMaking");
const ap1_fabricSpreading = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/topics/ap1FabricSpreading");
const ap1_markerMaking = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/topics/ap1MarkerMaking");
const ap1_sewingThread = require("./flows/botReplies/note_levels/level_2/level_2_subs/ap1/topics/ap1SewingTherad");


//wp1
const wp1_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/wp1_flow");
const wp1_books = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Books");
const wp1_notes = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Notes");
const wp1_ques = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Questions");
const wp1_introWP = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Intro");
const wp1_water = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Water");
const wp1_introDye = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1IntroDye");
const wp1_generalConcepts = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1GeneralConcepts");
const wp1_colorFastness = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1ColorFastness");
const wp1_stripping = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Stripping");
const wp1_singeing = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Singeing");
const wp1_scouring = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Scouring");
const wp1_pigment = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Pigment");
const wp1_TexFinish = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1TexFinishing");
const wp1_vatDyes = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1VatDye");
const wp1_desizing = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Desizing");
const wp1_basicDye = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1BasicDye");
const wp1_acidDye = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1AcidDye");
const wp1_bleaching = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1Bleaching");
const wp1_disperse = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1DisperseDye");
const wp1_kierBoiler = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1KierBoiler");
const wp1_dyeingFault = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1DyeingFault");
const wp1_reactiveDye = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1ReactiveDye");
const wp1_directDye = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1DirectDye");
const wp1_jiggerMachine = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1JiggerMachine");
const wp1_colorTest = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1ColorTest");
const wp1_folding = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1FoldingTest");
const wp1_washingMc = require("./flows/botReplies/note_levels/level_2/level_2_subs/wp1/topics/wp1WashingMachine");


//mp
const mp_flow = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/mp_flow");
const mp_defects = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpDefects");
const mp_lathe = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpLathe");
const mp_milling = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpMilling");
const mp_welding = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpWelding");
const mp_hotCold = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mphotCold");
const mp_ceramics = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpCeramics");
const mp_plastic = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpPlastic");
const mp_slideways = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpSlideways");
const mp_shaperMc = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpShapermc");
const mp_edm = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpEDM");
const mp_nonConv = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpNonConv");
const mp_machineEconomics = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpMCEconomics");
const mp_casting = require("./flows/botReplies/note_levels/level_2/level_2_subs/mp/topics/mpCasting");





//level3
//PD
const pd_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/pd/pd_flow");
const pd_intro = require("./flows/botReplies/note_levels/level_3/level_3_subs/pd/topics/pdIntro");
const pd_understandingCustomer = require("./flows/botReplies/note_levels/level_3/level_3_subs/pd/topics/pdUnderstandingCustomer");
const pd_planDesign = require("./flows/botReplies/note_levels/level_3/level_3_subs/pd/topics/pdPlanningDesign");
const pd_qualityFunc = require("./flows/botReplies/note_levels/level_3/level_3_subs/pd/topics/pdQualityFunc");
const pd_DesAssembly = require("./flows/botReplies/note_levels/level_3/level_3_subs/pd/topics/pdDesAssembly");

//academic flows -> acfd
const acfd_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/acfd/acfd_flow");


//ace
const ace_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/ace_flow");
const ace_introControlSys = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceIntroControlSys");
const ace_modleingFreq = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceModleingFreq");
const ace_timeResponse = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceTimeResponse");
const ace_Sensors = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceSensors");
const ace_NumberSys = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceNumberSysPLC");
const ace_Books = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceBooks");
const ace_transferFunc = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceTransferFunc");
const ace_logicgate = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceLogicGates");
const ace_hydraulics = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceHydraulics");
const ace_Pneumatics = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/acePneumatic");
const ace_IntroRobot = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceIntroRobot");
const ace_JointLinks = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceJoints");
const ace_Actuator = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceActuator");
const ace_Grips = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceGrips");
const ace_StructElements = require("./flows/botReplies/note_levels/level_3/level_3_subs/ace/topics/aceStructElements");

//acm
const acm_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/acm/acm_flow");
const acm_books = require("./flows/botReplies/note_levels/level_3/level_3_subs/acm/topics/acmBooks");
const acm_introCost = require("./flows/botReplies/note_levels/level_3/level_3_subs/acm/topics/acmIntroCost");
const acm_InterestedUsers = require("./flows/botReplies/note_levels/level_3/level_3_subs/acm/topics/acmInterestedUsers");
const acm_accountingAction = require("./flows/botReplies/note_levels/level_3/level_3_subs/acm/topics/acmAccountingAction");
const acm_recordingProcess = require("./flows/botReplies/note_levels/level_3/level_3_subs/acm/topics/acmRecordingProcess");
const acm_CostBehav = require("./flows/botReplies/note_levels/level_3/level_3_subs/acm/topics/acmCostBehav");
const acm_accMerchendizing = require("./flows/botReplies/note_levels/level_3/level_3_subs/acm/topics/acmAccForMerchendizing");
const acm_costAccountingSys = require("./flows/botReplies/note_levels/level_3/level_3_subs/acm/topics/acmCostAccountingSys");
const acm_costingTech = require("./flows/botReplies/note_levels/level_3/level_3_subs/acm/topics/acmCostingTechn");

//om
const om_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/om/om_flow");
const om_ch1 = require("./flows/botReplies/note_levels/level_3/level_3_subs/om/topics/ch1OmFlow");
const om_ch2 = require("./flows/botReplies/note_levels/level_3/level_3_subs/om/topics/ch2OMFlow");
const om_ch3 = require("./flows/botReplies/note_levels/level_3/level_3_subs/om/topics/ch3OMFlow");




//mic
const mic_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/mic_flow");
const mic_books = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micBooks");
const mic_Ch1 = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micCh1");
const mic_Ch2 = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micCh2");
const mic_Ch4 = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micCh4");
const mic_Ch5 = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micCH5");
const mic_LimitFit = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micLimitFits");
const mic_NonDestruc = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micNonDestructiveTesting");
const mic_SurfaceFinish = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micSurfaceFinish");
const mic_ThreadMeas = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micThreadMeas");
const mic_AngularMeas = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micAngularMeas");
const mic_LinearMeas = require("./flows/botReplies/note_levels/level_3/level_3_subs/mic/topics/micLinearMeas");


//fsd
const fsd_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/fsd/fsd_flow");
const fsd_intro = require("./flows/botReplies/note_levels/level_3/level_3_subs/fsd/topics/fsdIntro");
const fsd_plainWeave = require("./flows/botReplies/note_levels/level_3/level_3_subs/fsd/topics/fsdPlainWeave");
const fsd_TwillWeave = require("./flows/botReplies/note_levels/level_3/level_3_subs/fsd/topics/fsdTwill");
const fsd_books = require("./flows/botReplies/note_levels/level_3/level_3_subs/fsd/topics/fsdBooks");
const fsd_Fancy = require("./flows/botReplies/note_levels/level_3/level_3_subs/fsd/topics/fsdFancy");
const fsd_colorWeave = require("./flows/botReplies/note_levels/level_3/level_3_subs/fsd/topics/fsdColorWeave");

//tqm
const tqm_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/tqm/tqm_flow");
const tqm_totalQm = require("./flows/botReplies/note_levels/level_3/level_3_subs/tqm/topics/tqmTotalQm");
const tqm_continuosImprove = require("./flows/botReplies/note_levels/level_3/level_3_subs/tqm/topics/tqmContinuousImprove");
const tqm_qualityRelia = require("./flows/botReplies/note_levels/level_3/level_3_subs/tqm/topics/tqmQualityReliability");
const tqm_QualityStd = require("./flows/botReplies/note_levels/level_3/level_3_subs/tqm/topics/tqmQualityStd");
const tqm_Intro = require("./flows/botReplies/note_levels/level_3/level_3_subs/tqm/topics/tqmIntro");
const tqm_ControlManage = require("./flows/botReplies/note_levels/level_3/level_3_subs/tqm/topics/tqmControlManage");
const tqm_ManageAppro = require("./flows/botReplies/note_levels/level_3/level_3_subs/tqm/topics/tqmManageAppro");
const tqm_QcTools = require("./flows/botReplies/note_levels/level_3/level_3_subs/tqm/topics/tqmQcTools");

//ttm
const ttm_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/ttm/ttm_flow");

//pcs
const pcs_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/pcs/pcs_flow");
const pcs_books = require("./flows/botReplies/note_levels/level_3/level_3_subs/pcs/topics/pcsBooks");


//lss
const lss_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/lss/lss_flow");
const lss_drawFrame = require("./flows/botReplies/note_levels/level_3/level_3_subs/lss/topics/lssDrawframe");
const lss_Spreader = require("./flows/botReplies/note_levels/level_3/level_3_subs/lss/topics/lssSpreader");


//im
const im_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/im_flow");
const im_lecture = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/lecture/imLecture");
const im_lectureMaeen = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/lecture/lectureSirs/imMaeen");
const im_lectureMunir = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/lecture/lectureSirs/imMunir");
const im_lec1 = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imLec1");
const im_lec2 = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imLec2");
const im_lec3 = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imLec3");
const im_lec4 = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imLec4");
const im_market = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imMarket");
const im_marketMix = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imMarketMix");
const im_projectFeasa = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imProjectFeasa");
const im_natureScope = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imNatureScope");
const im_ManageFunc = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imMangeFunc");
const im_IndusManage = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imIndusMange");
const im_TechManage = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imTechMange");
const im_ProdManage = require("./flows/botReplies/note_levels/level_3/level_3_subs/im/topics/imProdMange");


//tcp
const tcp_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/tcp/tcp_flow");
const tcp_kpc = require("./flows/botReplies/note_levels/level_3/level_3_subs/tcp/topics/tcpKpc");


//am2
const am2_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/am2/am2_flow");
const am2_books = require("./flows/botReplies/note_levels/level_3/level_3_subs/am2/topics/am2Books");
const am2_classLec = require("./flows/botReplies/note_levels/level_3/level_3_subs/am2/topics/am2ClassLecture");
const am2_lineBalancing = require("./flows/botReplies/note_levels/level_3/level_3_subs/am2/topics/am2LineBalancing");
const am2_excel = require("./flows/botReplies/note_levels/level_3/level_3_subs/am2/topics/am2CostingExcel");


//economics
const econo_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/econo/econo_flow");
const econo_Books = require("./flows/botReplies/note_levels/level_3/level_3_subs/econo/topics/econoBooks");
const econo_ClassLec = require("./flows/botReplies/note_levels/level_3/level_3_subs/econo/topics/econoClassLec");


//ym2
const ym2_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/ym2/ym2_flow");
const ym2_books = require("./flows/botReplies/note_levels/level_3/level_3_subs/ym2/topics/ym2Books");
const ym2_ClassLec = require("./flows/botReplies/note_levels/level_3/level_3_subs/ym2/topics/ym2ClassLec");
const ym2_Notes = require("./flows/botReplies/note_levels/level_3/level_3_subs/ym2/topics/ym2Notes");
const ym2_rotor = require("./flows/botReplies/note_levels/level_3/level_3_subs/ym2/topics/ym2Rotor");
const ym2_Spinning = require("./flows/botReplies/note_levels/level_3/level_3_subs/ym2/topics/ym2Spinning");
const ym2_specialYarns = require("./flows/botReplies/note_levels/level_3/level_3_subs/ym2/topics/ym2SpecialYarns");
const ym2_IntroSpin = require("./flows/botReplies/note_levels/level_3/level_3_subs/ym2/topics/ym2IntroSpin");


//fm2
const fm2_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/fm2/fm2_flow");
const fm2_Books = require("./flows/botReplies/note_levels/level_3/level_3_subs/fm2/topics/fm2Books");
const fm2_ClassLec = require("./flows/botReplies/note_levels/level_3/level_3_subs/fm2/topics/fm2ClassLec");
const fm2_Notes = require("./flows/botReplies/note_levels/level_3/level_3_subs/fm2/topics/fm2Notes");
const fm2_BasicWarp = require("./flows/botReplies/note_levels/level_3/level_3_subs/fm2/topics/fm2BasicWarp");
const fm2_Misc = require("./flows/botReplies/note_levels/level_3/level_3_subs/fm2/topics/fm2Misc");


//knit1
const knit1_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/knit1/knit_flow");
const knit1_Lec = require("./flows/botReplies/note_levels/level_3/level_3_subs/knit1/topics/knitLec");


//ap2
const ap2_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/ap2/ap2_flow");
const ap2_folding = require("./flows/botReplies/note_levels/level_3/level_3_subs/ap2/topics/ap2FoldingPackage");
const ap2_Stitch = require("./flows/botReplies/note_levels/level_3/level_3_subs/ap2/topics/ap2Stitch");
const ap2_LockStitch = require("./flows/botReplies/note_levels/level_3/level_3_subs/ap2/topics/ap2LockStitch");
const ap2_Pressing = require("./flows/botReplies/note_levels/level_3/level_3_subs/ap2/topics/ap2Pressing");
const ap2_InspectionQuality = require("./flows/botReplies/note_levels/level_3/level_3_subs/ap2/topics/ap2InspectionQuality");


//wp2
const wp2_flow = require("./flows/botReplies/note_levels/level_3/level_3_subs/wp2/wp2_flow");
const wp2_books = require("./flows/botReplies/note_levels/level_3/level_3_subs/wp2/topics/wp2Books");
const wp2_classLec = require("./flows/botReplies/note_levels/level_3/level_3_subs/wp2/topics/wp2ClassLec");
















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


//lab
const labFlow = require('./flows/botReplies/labFlow');
const labFlow_level1 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_flow');
const labFlow_level2 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_flow');
const labFlow_level3 = require('./flows/botReplies/lab_levels/level_3/level_3_lab_flow');

//lab->che1
const labFlow_che1 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_1/che1LabFlow');
const labFlow_che1_procedure = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_1/che1_lab_topics/che1labProcedure');
const labFlow_che1_acidRad = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_1/che1_lab_topics/che1labAcidRad');
const labFlow_che1_basicRad = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_1/che1_lab_topics/che1labBasicRad');
const labFlow_che1_Mohr = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_1/che1_lab_topics/che1labMohr');
const labFlow_che1_WetTest = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_1/che1_lab_topics/che1labWet');
const labFlow_che1_Titration = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_1/che1_lab_topics/che1labTitration');

//lab->che1
const labFlow_che2 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2LabFlow');
const labFlow_che2_physicalProp = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabPhysicalProp');
const labFlow_che2_lassigne1 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabLassaigne1');
const labFlow_che2_lassigne2 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabLassaigne2');
const labFlow_che2_solubillityTest = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabSolubility');
const labFlow_che2_alcoholIdentify = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabAlcoholidentity');
const labFlow_che2_H2O2 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabStrengthH2O2');
const labFlow_che2_Fe2 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabAmountFe2');
const labFlow_che2_carbonylIdentify = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabCarbonyl');
const labFlow_che2_nIdentity = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabNidentity');
const labFlow_che2_Na2Co3 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabAmountNa2Co3');
const labFlow_che2_Carboxylic = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2_lab_topics/che2LabCarboxylic');




//lab->phy1
const labFlow_phy1 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1LabFlow');
const labFlow_phy1_m1 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1_lab_topics/phy1LabM1');
const labFlow_phy1_m2 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1_lab_topics/phy1LabM2');
const labFlow_phy1_m3 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1_lab_topics/phy1LabM3');
const labFlow_phy1_m4 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1_lab_topics/phy1LabM4');
const labFlow_phy1_m5 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1_lab_topics/phy1LabM5');
const labFlow_phy1_m6 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1_lab_topics/phy1LabM6');
const labFlow_phy1_o1 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1_lab_topics/phy1LabO1');
const labFlow_phy1_o2 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1_lab_topics/phy1LabO2');
const labFlow_phy1_o3 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1_lab_topics/phy1LabO3');
const labFlow_phy1_o4 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1_lab_topics/phy1LabO4');

//lab->phy2
const labFlow_phy2 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_flow');
const labFlow_phy2_e1 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabE1');
const labFlow_phy2_e2 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabE2');
const labFlow_phy2_e3 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabE3');
const labFlow_phy2_e4 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabE4');
const labFlow_phy2_e5 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabE5');
const labFlow_phy2_e6 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabE6');
const labFlow_phy2_e7 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabE7');
const labFlow_phy2_e8 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabE8');
const labFlow_phy2_m1 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabM1');
const labFlow_phy2_h1 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabH1');
const labFlow_phy2_h2 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabH2');
const labFlow_phy2_h3 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_topics/phy2LabH3');




//lab->bce
const labFlow_bce = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/bce/bceLabFlow');
const labFlow_bceReading = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/bce/bce_lab_topics/bceLabRead');
const labFlow_bceLsiteing = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/bce/bce_lab_topics/bceLabListen');
const labFlow_bceLabSheet = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/bce/bce_lab_topics/bceLabSheet');

//lab->ed
const labFlow_ed = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/ed/edLabFlow');

//lab->cp
const labFlow_cp = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/cp/cpLabFlow');
const labFlow_cp_intro = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/cp/cp_lab_topics/cpLabIntro');
const labFlow_cp_Conditional = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/cp/cp_lab_topics/cpLabCondition');
const labFlow_cp_Arithmetic = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/cp/cp_lab_topics/cpLabArithmetic');
const labFlow_cp_sumofSeries = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/cp/cp_lab_topics/cpLabSumSeries');
const labFlow_cp_Array = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/cp/cp_lab_topics/cpLabArray');
const labFlow_cp_RecursionFactorial = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/cp/cp_lab_topics/cpLabRecursionFacto');
const labFlow_cp_Fibonacchi = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/cp/cp_lab_topics/cpLabRecursionFibo');
const labFlow_cp_ch_1_3 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/cp/cp_lab_topics/cpLabCh1_3');


//lab-> ap1
const labFlow_ap1 = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/ap_1/ap1LabFlow');
const labFlow_ap1_interline = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/ap_1/ap1_lab_topics/ap1labInterlining');
const labFlow_ap1_stdBody = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/ap_1/ap1_lab_topics/ap1LabStdBody');
const labFlow_ap1_continuousFusing = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/ap_1/ap1_lab_topics/ap1LabContinuousFusing');
const labFlow_ap1_straightKnife = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/ap_1/ap1_lab_topics/ap1LabStraightKnife');


//lab-> msp
const labFlow_msp = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/mspLabFlow');
const labFlow_msp_layout = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabLayout');
const labFlow_msp_handTools = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabHandTools');
const labFlow_msp_GrindingMc = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabGrindingMC');
const labFlow_msp_LatheMc = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabLathe');
const labFlow_msp_SqKey = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabsqKey');
const labFlow_msp_mathcingParts = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabMatchingParts');
const labFlow_msp_MillingMC = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabMilling');
const labFlow_msp_DrillingMc = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabDrilling');
const labFlow_msp_Shaper = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabShaper');
const labFlow_msp_Welding = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabWelding');
const labFlow_msp_IntroLight = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabIntroLight');
const labFlow_msp_ArcWeld = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabArcWelding');
const labFlow_msp_manuAsm = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabManuAssm');
const labFlow_msp_quiz = require('./flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/msp_lab_topics/mspLabmspQuiz');


//lab-> am1
const labFlow_am1 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/am_1/am1LabFlow');
const labFlow_am1_layOut = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/am_1/am1_lab_topics/am1LabLayout');
const labFlow_am1_StdBody = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/am_1/am1_lab_topics/am1LabStdBody');
const labFlow_am1_AllReport = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/am_1/am1_lab_topics/am1LabReportAll');



//lab-> wp1
const labFlow_wp1 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1LabFlow');
const labFlow_wp1_1 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab1Layout');
const labFlow_wp1_2 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab2AlkScour');
const labFlow_wp1_3 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab3CombCot');
const labFlow_wp1_4 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab4CombJute');
const labFlow_wp1_5 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab5Direct');
const labFlow_wp1_6 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab6Reactive');
const labFlow_wp1_7 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab7Disperse');
const labFlow_wp1_8 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab8Acid');
const labFlow_wp1_9 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab9Basic');
const labFlow_wp1_10 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab10Vat');
const labFlow_wp1_11 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab11Rubbing');
const labFlow_wp1_12 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1_lab_topics/wp1Lab12PigmentCot');


//lab-> sss1
const labFlow_sss1 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/sss_1/sss1LabFlow');
const labFlow_sss1_layout = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/sss_1/sss1_lab_topics/sss1LabLayout');


//lab-> sss2
const labFlow_sss2 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/sss_2/sss2LabFlow');


//lab-> fe204
const labFlow_fe204 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fe_204_wpp/fe_wppLabFlow');


//lab-> ap1_2
const labFlow_ap1_2 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ap_1/ap1LabFlow');


//lab-> pm1
const labFlow_pm1 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/pm_1/pm1LabFlow');


//lab-> wpe202
const labFlow_wpe202 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/wpe_202/wpe202LabFlow');


//lab-> ym1
const labFlow_ym1 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1LabFlow');
const labFlow_ym1_layout = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1_lab_topics/ym1LabLayout');
const labFlow_ym1_principle = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1_lab_topics/ym1LabPrincipleSSS');
const labFlow_ym1_baleOpener = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1_lab_topics/ym1LabBaleOpener');
const labFlow_ym1_Porcupine = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1_lab_topics/ym1LabPorcupine');
const labFlow_ym1_RingFrame = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1_lab_topics/ym1LabRingFrame');
const labFlow_ym1_Simplex = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1_lab_topics/ym1LabSimplex');
const labFlow_ym1_Comber = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1_lab_topics/ym1LabComber');
const labFlow_ym1_Drawframe = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1_lab_topics/ym1LabDrawFrame');
const labFlow_ym1_Carding = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1_lab_topics/ym1LabCarding');


//lab-> fm1
const labFlow_fm1 = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1LabFlow');
const labFlow_fm1_layout = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1_lab_topics/fm1LabLayout');
const labFlow_fm1_Tappet = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1_lab_topics/fm1LabTappet');
const labFlow_fm1_Looming = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1_lab_topics/fm1LabLooming');
const labFlow_fm1_Package = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1_lab_topics/fm1LabPackagae');
const labFlow_fm1_CheeseWind = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1_lab_topics/fm1LabCheese');
const labFlow_fm1_HighSpeedWarp = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1_lab_topics/fm1LabHighSpeed');
const labFlow_fm1_SectionalWarp = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1_lab_topics/fm1LabSectionalWarping');
const labFlow_fm1_6_ConvSizing = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1_lab_topics/fm1LabConvSizing');
const labFlow_fm1_Dobby = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1_lab_topics/fm1LabDobby');
const labFlow_fm1_Sizing = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1_lab_topics/fm1LabSizing');


//lab-> ttqc
const labFlow_ttqc = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqcLabFlow');
const labFlow_ttqc_atmos = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabAtmos');
const labFlow_ttqc_fibreFineness = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabFibFine');
const labFlow_ttqc_effectiveLength = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabEffectiveLength');
const labFlow_ttqc_FibreLengthIden = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabFibreLength');
const labFlow_ttqc_CountSliCsp = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabSliCsp');
const labFlow_ttqc_tpiCount = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabTpiCount');
const labFlow_ttqc_CspTpi = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabCspTpi');
const labFlow_ttqc_Thick = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabThick');
const labFlow_ttqc_FibreFineMaturity = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabFibreFineMaturity');
const labFlow_ttqc_SliverRoving = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabSliverRoving');
const labFlow_ttqc_bundleStrength = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqc_lab_topics/ttqcLabBundleStrength');


//lab-> mp
const labFlow_mp = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/mp/mpLabFlow');
const labFlow_mp_Lathe = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/mp/mp_lab_topics/mpLathe');
const labFlow_mp_CncMilling = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/mp/mp_lab_topics/mpCncMill');
const labFlow_mp_Milling = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/mp/mp_lab_topics/mpMilling');
const labFlow_mp_ChipsTemp = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/mp/mp_lab_topics/mpChipsTemp');
const labFlow_mp_JackScrew = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/mp/mp_lab_topics/mpJackScrew');
const labFlow_mp_InjectionMoulding = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/mp/mp_lab_topics/mpInjectionMold');
const labFlow_mp_sandMolding = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/mp/mp_lab_topics/mpSandMold');


//lab-> fme
const labFlow_fme = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fmeLabFlow');
const labFlow_fme_AirComp = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fme_lab_topics/fmeLabAirComp');
const labFlow_fme_steamTurbine = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fme_lab_topics/fmeLabSteamTurbine');
const labFlow_fme_PetrolDisel = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fme_lab_topics/fmeLabPetrolDisel');
const labFlow_fme_Boiler = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fme_lab_topics/fmeLabBoiler');
const labFlow_fme_BoilerMounting = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fme_lab_topics/fmeLabBoilerMounting');
const labFlow_fme_ReciPump = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fme_lab_topics/fmeLabReciPump');
const labFlow_fme_CentriPump = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fme_lab_topics/fmeLabCentriPump');
const labFlow_fme_DiselEngine = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fme_lab_topics/fmeLabDiselEng');
const labFlow_fme_ICEngine = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fme_lab_topics/fmeLabICEng');


//lab-> feee
const labFlow_feee = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feeeLabFlow');
const labFlow_feee_Multimetre = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabMultimetre');
const labFlow_feee_Ohms = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabOhmsLaw');
const labFlow_feee_Kirchoff = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeelabKirchoffs');
const labFlow_feee_RC = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabRCCkt');
const labFlow_feee_RL = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabRLCkt');
const labFlow_feee_RLC = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabRLCCkt');
const labFlow_feee_carbonResistor = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabCarbonResis');
const labFlow_feee_FanRegulator = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabFanRegulator');
const labFlow_feee_WiringTubelight = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabWiringTubelight');
const labFlow_feee_FullBridge = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabFullBridge');
const labFlow_feee_Fuse = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabFuseSwitch');
const labFlow_feee_Oscillo = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabOscillosc');
const labFlow_feee_wireGauge = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLabWireGauge');
const labFlow_feee_2WayLightSwitch = require('./flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feee_lab_topics/feeeLab2waySwitch');


//lab level 3
//lab-> textile coloration
const labFlow_texColor = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/textile_coloration_1/texColorLabFlow');


//lab-> fsd
const labFlow_fsd = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/fsd/fsdLabFlow');


//lab-> lss
const labFlow_lss = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/lss/lssLabFlow');


//lab-> wp2
const labFlow_wp2 = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/wp_2/wp2LabFlow');


//lab-> am2
const labFlow_am2 = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/am_2/am2LabFlow');


//lab-> appareel washing
const labFlow_apparelWashing = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/apparel_washing/apparelWashingLabFlow');

//lab-> pm2
const labFlow_pm2 = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/pm2/pm2LabFlow');


//lab-> ym2
const labFlow_ym2 = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/ym_2/ym2LabFlow');

//lab-> ap2
const labFlow_ap2 = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/ap_2/ap2LabFlow');


//lab-> fm2
const labFlow_fm2 = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/fm_2/fm2LabFlow');
const labFlow_fm2_1 = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/fm_2/fm2_lab_topics/fm2Lab1Layout');
const labFlow_fm2_4 = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/fm_2/fm2_lab_topics/fm2Lab4HandSocks');
const labFlow_fm2_5 = require('./flows/botReplies/lab_levels/level_3/level_3_lab_subs/fm_2/fm2_lab_topics/fm2Lab5SingleJersey');



//help flow
const help_flow = require('./flows/helpFlow');
const ttm_words = require("./keywords/academic_words/subjects/ttmWords");








const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;





let testMsg = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let serverStatus = {
    isServerRunning: true,
    url: req.protocol + '://' + req.get('host') + req.originalUrl,
    paths: [
      "/profile",
      "/homepage"
    ],
    botStatus: true,
    msg: "All serveices are running as expected",
  }
  //return res.status(200).send(`Hello from notebot engine v1 ✔✔\n here are some routes - \n/profile\n/homepage`)
  return res.status(200).json(serverStatus);
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
    body.entry.forEach(function (entry) {
      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);

      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log('🧑 Sender PSID: ' + sender_psid);

      //getting userInfo
      //getUserInfo(sender_psid)

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message && !webhook_event.message.is_echo) {
        handleMessage(sender_psid, webhook_event.message);
      }
      //for postbacks
      else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }
      //for reactions
      else if (webhook_event.reaction) {
        handleReaction(sender_psid, webhook_event.reaction);
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

//get user info function 
/*
function getUserInfo(sender_psid){
  axios.get(`https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`).then(resp => {
      console.log(resp)
    }).cath(
      function(error){
        if(error.response){
          console.log(error.response.data);
          console.log(error.response.status);
        }
        else if (error.request) {
          console.log(error.request);
        }
        else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    );
}
*/


//handles reaction
function handleReaction(sender_psid, received_reaction) {

  let reactionEmoji = require('./keywords/reactionEmoji')
  let reactionEmojiReply = require('./keywords/replies/reactionReply')

  console.log(`🔴 Received Reaction: ${received_reaction.emoji}`)

  if (emojiIs(reactionEmoji.love, received_reaction)) {
    response = textBlockGen(`${randomPicker(reactionEmojiReply.love)}`);
    callSendAPI(sender_psid, response);
  }

  else if (emojiIs(reactionEmoji.sad, received_reaction)) {
    response = textBlockGen(`${randomPicker(reactionEmojiReply.sad)}`);
    callSendAPI(sender_psid, response);
  }

  else if (emojiIs(reactionEmoji.haha, received_reaction)) {
    response = textBlockGen(`${randomPicker(reactionEmojiReply.haha)}`);
    callSendAPI(sender_psid, response);
  }

  else if (emojiIs(reactionEmoji.angry, received_reaction)) {
    response = textBlockGen(`${randomPicker(reactionEmojiReply.angry)}`);
    callSendAPI(sender_psid, response);
  }

  else if (emojiIs(reactionEmoji.like, received_reaction)) {
    response = textBlockGen(`${randomPicker(reactionEmojiReply.like)}`);
    callSendAPI(sender_psid, response);
  }

  else if (emojiIs(reactionEmoji.dislike, received_reaction)) {
    response = textBlockGen(`${randomPicker(reactionEmojiReply.dislike)}`);
    callSendAPI(sender_psid, response);
  }

  else if (emojiIs(reactionEmoji.wow, received_reaction)) {
    response = textBlockGen(`${randomPicker(reactionEmojiReply.wow)}`);
    callSendAPI(sender_psid, response);
  }


  //default
  else {
    response = textBlockGen(`${randomPicker(reactionEmojiReply.misc)}`);
    callSendAPI(sender_psid, response);
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
  const ap1 = ap1_words;
  const ap2 = ap2_words;
  const wp1 = wp1_words;
  const wp2 = wp2_words;
  const mp = mp_words;
  const pd = pd_words;
  const ace = ace_words;
  const acm = acm_words;
  const mic = mic_words;
  const fsd = fsd_words;
  const tqm = tqm_words;
  const pcs = pcs_words;
  const lss = lss_words;
  const im = im_words;
  const tcp = tcp_words;
  const am2 = am2_words;
  const economics = econo_words;
  const ym2 = ym2_words;
  const fm2 = fm2_words;
  const knit1 = knit1_words;




  const bothChem = bothChem_words;
  const bothMath = bothMath_words;
  const bothPhy = bothPhy_words;


  const quiz = quiz_words;
  const lab_report = labWords;
  const result = resultWords;
  const routine = routineWords;
  const syllabus = syllabusWords;


  //emojis
  const loveMoji = loveMojis;
  const loveReply = loveMojiReplies;
  const animalMoji = animalMojis;
  const flirtMoji = flirtMojis;

  //name
  const yourName = nameWords;

  //tripto
  const tripto = triptoWords;

  //flirt
  const flirtWord = flirtWords;

  //swear
  const swearWord = swearWords;

  //help
  const help = helpWords;

  //creator
  const creator = creatorWords;

  //date
  const dateInfo = dateWords;

  //corona
  const corona = coronaWords;




  const greetReply = greetReplies;


  const sadReply = sadStuffReply;
  const positive = positiveKeywords;
  const negative = negativeKeywords;
  const toss = tossWords;

  const getStartedWords = ["Get Started", "get satrted", "Get started", "get Started"];

  const test = ["test", "Test"];


  if (!received_message.text) {
    if (received_message.attachments) {
      if (received_message.attachments[0].type === "image") {
        console.log(`🟡 Image Found`)
        response = textBlockGen(`${randomPicker(attachmentReply.imageReply)}`);
        callSendAPI(sender_psid, response);
      }
      else if (received_message.attachments[0].type === "audio") {
        console.log(`🟡 Voice Found`)
        response = textBlockGen(`${randomPicker(attachmentReply.audioReply)}`);
        callSendAPI(sender_psid, response);
      }
      console.log(`🟡 Attachment found !`)
    }
    else {
      response = defaultReply[0];
      callSendAPI(sender_psid, response);
    }
    console.log(received_message)
  }

  else if (wordIncludesWhole(greets, received_message)) {
    response = greetReplies[0];
    callSendAPI(sender_psid, response);
  }

  /*
  else if (wordIs(hiWords, received_message)) {
    response = greetReplies[0];
    callSendAPI(sender_psid, response);
  }
  */

  //bhai
  else if (wordIncludes(bhaiWords, received_message)) {
    response = textBlockGen(`${randomPicker(bhaiReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //hot
  else if (wordIncludes(hotWords, received_message)) {
    response = textBlockGen(`${randomPicker(hotReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //cold
  else if (wordIncludes(coldWords, received_message)) {
    response = textBlockGen(`${randomPicker(coldReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //okay
  else if (wordIncludes(okayWords, received_message)) {
    response = textBlockGen(`${randomPicker(okayReplies)}`);
    callSendAPI(sender_psid, response);
  }

  else if (wordIs(onlyOkay, received_message)) {
    response = textBlockGen(`${randomPicker(okayReplies)}`);
    callSendAPI(sender_psid, response);
  }





  else if (wordIncludes(positive, received_message)) {
    response = textBlockGen(`${randomPicker(loveReply)}`);
    callSendAPI(sender_psid, response);
  }

  else if (wordIncludes(animalMoji, received_message)) {
    response = textBlockGen(`${randomPicker(animalMoji)}`);
    callSendAPI(sender_psid, response);
  }

  //flirt
  else if (wordIncludes(flirtMoji, received_message)) {
    response = textBlockGen(`${randomPicker(flirtReply)}`);
    callSendAPI(sender_psid, response);
  }

  else if (wordIncludes(flirtWord, received_message)) {
    response = textBlockGen(`${randomPicker(flirtReply)}`);
    callSendAPI(sender_psid, response);
  }

  //swears
  else if (wordIncludes(swearWord, received_message)) {
    response = textBlockGen(`${randomPicker(swearReply)}`);
    callSendAPI(sender_psid, response);
  }

  //senti
  else if (wordIncludes(sentiWords, received_message)) {
    response = textBlockGen(`${randomPicker(sentiReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //gg
  else if (wordIs(ggWord, received_message)) {
    response = textBlockGen(`${randomPicker(ggReply)}`);
    callSendAPI(sender_psid, response);
  }

  //your name
  else if (wordIncludes(yourName, received_message)) {
    response = textBlockGen(`${randomPicker(nameReply)}`);
    callSendAPI(sender_psid, response);
  }

  //tripto
  else if (wordIncludes(tripto, received_message)) {
    response = textBlockGen(`${randomPicker(triptoReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //boy girl
  else if (wordIncludes(boyGirlWords, received_message)) {
    response = textBlockGen(`${randomPicker(boyGirlReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //bujho
  else if (wordIncludes(bujhoWords, received_message)) {
    response = textBlockGen(`${randomPicker(bujhoReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //food
  else if (wordIncludes(foodWords, received_message) || wordIncludes(khawaWords, received_message)) {
    response = textBlockGen(`${randomPicker(foodReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //treat
  else if (wordIncludes(treatWords, received_message)) {
    response = textBlockGen(`${randomPicker(treatReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //laugh
  else if (wordIncludes(laughWords, received_message)) {
    response = textBlockGen(`${randomPicker(laughReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //mair
  else if (wordIncludes(mairWords, received_message)) {
    response = textBlockGen(`${randomPicker(mairReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //shala
  else if (wordIncludes(shalaWords, received_message)) {
    response = textBlockGen(`${randomPicker(shalaReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //sleep
  else if (wordIncludes(sleepWords, received_message)) {
    response = textBlockGen(`${randomPicker(sleepReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //smoking
  else if (wordIncludes(smokingWords, received_message)) {
    response = textBlockGen(`${randomPicker(smokingReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //why
  else if (wordIncludes(whyWords, received_message)) {
    response = textBlockGen(`${randomPicker(whyReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //life
  else if (wordIncludes(lifeWords, received_message)) {
    response = textBlockGen(`${randomPicker(lifeReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //link
  else if (wordIncludes(linkWords, received_message)) {
    response = textBlockGen(`${randomPicker(linkReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //drug
  else if (wordIncludes(drugWords, received_message)) {
    response = textBlockGen(`${randomPicker(drugReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //happy
  else if (wordIncludes(happyWords, received_message)) {
    response = textBlockGen(`${randomPicker(happyReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //when
  else if (wordIncludes(whenWords, received_message)) {
    response = textBlockGen(`${randomPicker(whenReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //seniorJunior
  else if (wordIncludes(seniorJuniorWords, received_message)) {
    response = textBlockGen(`${randomPicker(seniorJuniorReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //submission
  else if (wordIncludes(submitWords, received_message)) {
    response = textBlockGen(`${randomPicker(submitReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //date
  else if (wordIncludes(dateInfo, received_message)) {
    axios.get('https://worldtimeapi.org/api/timezone/Asia/Dhaka').then(resp => {
      response = textBlockGen(`${resp.data.datetime}\nN.B: It's the time of Dhaka, Bangladesh`);
      callSendAPI(sender_psid, response);
    });
  }



  //corona
  else if (wordIncludes(corona, received_message)) {
    let loadingResponse = textBlockGen("🟡 Please wait, looking for latest updates ...");
    callSendAPI(sender_psid, loadingResponse);
    axios.get('https://corona.lmao.ninja/v3/covid-19/countries/bangladesh').then(resp => {
      //console.log(`⚫ Total Cases: ${resp.data.cases}\n🔴 Total Deaths: ${resp.data.deaths}\n\n🔵 New Cases Today: ${resp.data.todayCases}\n🟠 Deaths Today: ${resp.data.todayDeaths}\n🟢 Recovered Today: ${resp.data.todayRecovered}`);
      response = textBlockGen(`⚫ Total Cases: ${resp.data.cases}\n🔴 Total Deaths: ${resp.data.deaths}\n\n🔵 New Cases Today: ${resp.data.todayCases}\n🟠 Deaths Today: ${resp.data.todayDeaths}\n🟢 Recovered Today: ${resp.data.todayRecovered}`)
      callSendAPI(sender_psid, response);
    });
  }

  //🔴 Notice doesn't work in cPanel
  //notice
  else if (wordIncludes(noticeWords, received_message)) {
    let loadingResponse = textBlockGen("🟡 Please wait, looking for latest notices ...");
    let erroResponse = textBlockGen("❌ Failed to retrieve latest notices 😓\n\nTry again later by sending 'Notice'");
    callSendAPI(sender_psid, loadingResponse);
    let Feed = require('rss-to-json');
    const rssUrl = "https://www.butex.edu.bd/feed";
    //empty array to hold json responses
    let topRss = [];
    let topRssAmount = 5

    try {
      // Promise
      Feed.load(rssUrl).then(rss => {
        for (let i = 0; i < topRssAmount; i++) {
          //pushing json objects to the array
          topRss.push(rss.items[i])
        }
        //initializing an empty array to hold blocks
        let response = [];
        for (let i = 0; i < topRssAmount; i++) {
          let myDate = new Date(topRss[i].published);
          response.push(
            groupedBtnBlockGen(
              `🟣 Date: ${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()}\n\n${topRss[i].title} -`,
              [
                webBtnBlockGen("Visit 🌎", `${topRss[i].link}`)
              ]
            )
          )
        }
        //callling magic function to send an array of blocks
        magicFunc(sender_psid, response)
      }).catch(err => callSendAPI(sender_psid, erroResponse));
    } catch (err) {
      callSendAPI(sender_psid, erroResponse)
      console.error("🟥 Function Error Occured In Notice Checking")
    }
  }


  //help
  else if (wordIncludes(help, received_message)) {
    response = help_flow[0];
    callSendAPI(sender_psid, response);
  }


  //can DO
  else if (wordIncludes(canDoWords, received_message)) {
    response = canDoReplies[0];
    callSendAPI(sender_psid, response);
  }

  //phone
  else if (wordIncludes(phoneWords, received_message)) {
    response = groupedBtnBlockGen(
      `🔰BUTEX PhoneBook - `,
      [
        webBtnBlockGen(`🌍 Visit Here`, `https://triptoafsin.github.io/BUTEX-PhoneBook/`)
      ]
    )
    callSendAPI(sender_psid, response);
  }


  //creator 
  else if (wordIncludes(creator, received_message)) {
    magicFunc(sender_psid, creatorFlow);
  }

  //jokes
  else if (wordIncludes(jokeWords, received_message)) {
    response = randomPicker(jokeFlow);
    callSendAPI(sender_psid, response);
  }

  //motivate
  else if (wordIncludes(motivateWords, received_message)) {
    response = randomPicker(quotesFlow);
    callSendAPI(sender_psid, response);
  }

  //love
  else if (wordIncludes(loveWords, received_message)) {
    response = textBlockGen(`${randomPicker(loveReplies)}`);
    callSendAPI(sender_psid, response);
  }


  //yes
  else if (wordIncludes(yesWords, received_message)) {
    response = textBlockGen(`${randomPicker(yesReplies)}`);
    callSendAPI(sender_psid, response);
  }

  //no
  else if (wordIs(noWords, received_message)) {
    response = textBlockGen(`${randomPicker(noReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //sameToYou
  else if (wordIncludes(sameWords, received_message)) {
    response = textBlockGen(`${randomPicker(sameReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //sadMoji
  else if (wordIncludes(sadMojis, received_message)) {
    response = textBlockGen(`${randomPicker(sadMojiReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //bye
  else if (wordIncludes(byeWords, received_message)) {
    response = textBlockGen(`${randomPicker(byeReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //thanks
  else if (wordIncludes(thanksWords, received_message)) {
    response = textBlockGen(`${randomPicker(thanksReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //sorry
  else if (wordIncludes(sorryWords, received_message)) {
    response = textBlockGen(`${randomPicker(sorryReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //home
  else if (wordIncludes(homeWords, received_message)) {
    response = textBlockGen(`${randomPicker(homeReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //doing
  else if (wordIncludes(doingWords, received_message)) {
    response = textBlockGen(`${randomPicker(doingReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //chill
  else if (wordIncludes(chillWords, received_message)) {
    response = textBlockGen(`${randomPicker(chillReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //fool
  else if (wordIncludes(foolWords, received_message)) {
    response = textBlockGen(`${randomPicker(foodReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //ahOh
  else if (wordIncludes(ahOhWords, received_message)) {
    response = textBlockGen(`${randomPicker(ahOhReplies)}`)
    callSendAPI(sender_psid, response);
  }

  //slightly angry 
  else if (wordIncludes(slightAngryMoji, received_message)) {
    response = textBlockGen(`${randomPicker(ahOhReplies)}`)
    callSendAPI(sender_psid, response);
  }


  //how are you
  else if (wordIncludes(howAreYouWords, received_message)) {
    response = textBlockGen(`${randomPicker(howAreYouReplies)}`)
    callSendAPI(sender_psid, response);
  }


  //gfBf
  else if (wordIncludes(gfBfWords, received_message)) {
    response = textBlockGen(`${randomPicker(gfBfReply)}`)
    callSendAPI(sender_psid, response);
  }

  //problemIssues(Download)
  else if (wordIncludes(problemWords, received_message)) {
    response = textBlockGen(`${randomPicker(problemReply)}`)
    callSendAPI(sender_psid, response);
  }










  //toss
  else if (wordIncludes(toss, received_message)) {
    response = {
      text: `${randomPicker(tossReplies)}`,
    };

    callSendAPI(sender_psid, response);
  } 

  else if (wordIncludes(getStartedWords, received_message)) {

    try{
      postNewUserCount()
    }catch(err){
      console.log(`🔴 Error occurred while posting new user info`);
    }

    response = getStartedMsg[0];

    callSendAPI(sender_psid, response);
  } else if (wordIncludes(negative, received_message)) {
    // Create the payload for a basic text message
    response = {
      text: `${randomPicker(sadReply)}`,
    };

    callSendAPI(sender_psid, response);
  }

  //usefulTools
  else if (wordIncludes(usefullToolsWords, received_message)) {
    magicFunc(sender_psid, usefullToolsFlow);
  }

  //donation
  else if (wordIncludes(donationWords, received_message)) {
    magicFunc(sender_psid, donationFlow);
  }

  //songs
  else if (wordIncludes(songWords, received_message)) {
    magicFunc(sender_psid, songFlow);
  }

  //depressed
  else if (wordIncludes(depressedWords, received_message)) {
    magicFunc(sender_psid, depressedFlow);
  }

  //academic
  else if (wordIncludes(notes, received_message)) {
    magicFunc(sender_psid, notesFlow);
  } else if (wordIncludes(quiz, received_message)) {
    magicFunc(sender_psid, quizFlow);
  }

  //booksQues
  else if (wordIncludes(booksQues, received_message)) {
    magicFunc(sender_psid, booksQuesFlow);
  }

  //bothSubj
  //bothYM
  else if (wordIs(bothYMWords, received_message)) {
    magicFunc(sender_psid, bothYMFlow);
  }

  //bothWP
  else if (wordIs(bothWPWords, received_message)) {
    magicFunc(sender_psid, bothWPFlow);
  }

  //bothAM
  else if (wordIs(bothAMWords, received_message)) {
    magicFunc(sender_psid, bothAMFlow);
  }

  //bothAP
  else if (wordIs(bothAPWords, received_message)) {
    magicFunc(sender_psid, bothAPFlow);
  } else if (wordIncludes(level1, received_message)) {
    magicFunc(sender_psid, level_1_notes);
  } else if (wordIncludes(level2, received_message)) {
    magicFunc(sender_psid, level_2_notes);
  } else if (wordIncludes(level3, received_message)) {
    magicFunc(sender_psid, level_3_notes);
  } else if (wordIncludes(level4, received_message)) {
    magicFunc(sender_psid, level_4_notes);
  } else if (wordIs(bothChem, received_message)) {
    magicFunc(sender_psid, bothChem_flow);
  } else if (wordIs(bothPhy, received_message)) {
    magicFunc(sender_psid, bothPhy_flow);
  } else if (wordIs(bothMath, received_message)) {
    magicFunc(sender_psid, bothMath_flow);
  }

  //academic -> bce
  else if (wordIncludes(bce, received_message)) {
    //analytics
    try {
      handleAnalytics("bce");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, bce_flow);
  }

  //academic -> economics
  else if (wordIncludes(economics, received_message)) {
    //analytics
    try {
      handleAnalytics("econo");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, econo_flow);
  }

  //academic -> fd2
  else if (wordIncludes(fd2, received_message)) {
    magicFunc(sender_psid, fd2_flow);
  }

  //academic -> tqm
  else if (wordIncludes(tqm, received_message)) {
    //analytics
    try {
      handleAnalytics("tqm");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, tqm_flow);
  }

  //academic -> ttm
  else if (wordIncludes(ttm_words, received_message)) {
    magicFunc(sender_psid, ttm_flow);
  }

  //academic -> knit1
  else if (wordIncludes(knit1, received_message)) {
    magicFunc(sender_psid, knit1_flow);
  }

  //academic -> weaving prep
  else if (wordIncludes(weavPrep, received_message)) {
    magicFunc(sender_psid, weavPrep_flow);
  }

  //academic -> ap1
  else if (wordIncludes(ap1, received_message)) {
    magicFunc(sender_psid, ap1_flow);
  }

  //academic -> ap2
  else if (wordIncludes(ap2, received_message)) {
    magicFunc(sender_psid, ap2_flow);
  }

  //academic -> mp
  else if (wordIncludes(mp, received_message)) {
    magicFunc(sender_psid, mp_flow);
  }

  //academic -> wpp
  else if (wordIncludes(wpp, received_message)) {
    //analytics
    try {
      handleAnalytics("wpp");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, wpp_flow);
  }

  //academic -> tcp
  else if (wordIncludes(tcp, received_message)) {
    magicFunc(sender_psid, tcp_flow);
  }

  //academic -> fdce
  else if (wordIncludes(fdce, received_message)) {
    magicFunc(sender_psid, fdce_flow);
  }

  //academic -> feee
  else if (wordIncludes(feee, received_message)) {
    //analytics
    try {
      handleAnalytics("feee");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, eee_flow);
  }

  //academic -> fsd
  else if (wordIncludes(fsd, received_message)) {
    //analytics
    try {
      handleAnalytics("fsd");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, fsd_flow);
  }

  //academic -> WP1
  else if (wordIncludes(wp1, received_message)) {
    //analytics
    try {
      handleAnalytics("wp1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, wp1_flow);
  }

  //academic -> WP2
  else if (wordIncludes(wp2, received_message)) {
    //analytics
    try {
      handleAnalytics("wp2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, wp2_flow);
  }

  //academic -> sss1
  else if (wordIncludes(sss1, received_message)) {
    //analytics
    try {
      handleAnalytics("sss1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, sss1_flow);
  }

  //academic -> sss2
  else if (wordIncludes(sss2, received_message)) {
    //analytics
    try {
      handleAnalytics("sss2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, sss2_flow);
  }

  //academic -> ym1
  else if (wordIncludes(ym1, received_message)) {
    //analytics
    try {
      handleAnalytics("ym1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, ym1_flow);
  }

  //academic -> ym2
  else if (wordIncludes(ym2, received_message)) {
    //analytics
    try {
      handleAnalytics("ym2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, ym2_flow);
  }

  //academic -> mmtf
  else if (wordIncludes(mmtf, received_message)) {
    //analytics
    try {
      handleAnalytics("mmtf");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, mmtf_flow);
  }

  //academic -> ctca
  else if (wordIncludes(ctca, received_message)) {
    magicFunc(sender_psid, ctca_flow);
  }

  //academic -> pcs
  else if (wordIncludes(pcs, received_message)) {
    magicFunc(sender_psid, pcs_flow);
  }

  //academic -> lss
  else if (wordIncludes(lss, received_message)) {
    magicFunc(sender_psid, lss_flow);
  }

  //academic -> am1
  else if (wordIncludes(am1, received_message)) {
    //analytics
    try {
      handleAnalytics("am1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, am1_flow);
  }

  //academic -> am2
  else if (wordIncludes(am2, received_message)) {
    //analytics
    try {
      handleAnalytics("am2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, am2_flow);
  }

  //academic -> stat
  else if (wordIncludes(stat, received_message)) {
    //analytics
    try {
      handleAnalytics("stat");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, stat_flow);
  }

  //academic -> fyt
  else if (wordIncludes(fyt, received_message)) {
    magicFunc(sender_psid, fyt_flow);
  }

  //academic -> ttqc
  else if (wordIncludes(ttqc, received_message)) {
    //analytics
    try {
      handleAnalytics("ttqc");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, ttqc_flow);
  }

  //academic -> fh
  else if (wordIs(fh_words, received_message)) {
    magicFunc(sender_psid, fh_flow);
  }

  //academic -> marketing
  else if (wordIs(marketing, received_message)) {
    //analytics
    try {
      handleAnalytics("market");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, marketing_flow);
  }

  //academic -> iae
  else if (wordIs(iae, received_message)) {
    magicFunc(sender_psid, iae_flow);
  }

  //academic -> im
  else if (wordIs(im, received_message)) {
    magicFunc(sender_psid, im_flow);
  }

  //academic -> fme
  else if (wordIs(fme, received_message)) {
    magicFunc(sender_psid, fme_flow);
  }

  //academic -> pd
  else if (wordIs(pd, received_message)) {
    magicFunc(sender_psid, pd_flow);
  }

  //academic -> ace
  else if (wordIs(ace, received_message)) {
    //analytics
    try {
      handleAnalytics("ace");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, ace_flow);
  }

  //academic -> mic
  else if (wordIs(mic, received_message)) {
    //analytics
    try {
      handleAnalytics("mic");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, mic_flow);
  }

  //academic -> acm
  else if (wordIs(acm, received_message)) {
    //analytics
    try {
      handleAnalytics("acm");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, acm_flow);
  }

  //academic -> om
  else if (wordIs(om_words, received_message)) {
    magicFunc(sender_psid, om_flow);
  }

  //academic -> tp
  else if (wordIs(tp, received_message)) {
    //analytics
    try {
      handleAnalytics("tp");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, tp_flow);
  }

  //academic -> bs
  else if (wordIs(bs, received_message)) {
    magicFunc(sender_psid, bs_flow);
  }

  //academic -> bil
  else if (wordIs(bil, received_message)) {
    magicFunc(sender_psid, bil_flow);
  }

  //academic -> fm1
  else if (wordIncludes(fm1, received_message)) {
    //analytics
    try {
      handleAnalytics("fm1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, fm1_flow);
  }

  //academic -> fm2
  else if (wordIncludes(fm2, received_message)) {
    //analytics
    try {
      handleAnalytics("fm2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, fm2_flow);
  }

  //academic -> epd
  else if (wordIs(epd, received_message)) {
    magicFunc(sender_psid, epd_flow);
  }

  //academic -> ppc
  else if (wordIncludes(ppc, received_message)) {
    magicFunc(sender_psid, ppc_flow);
  }

  //academic -> tam
  else if (wordIs(tam, received_message)) {
    magicFunc(sender_psid, tam_flow);
  }

  //academic -> hrm
  else if (wordIs(hrm, received_message)) {
    magicFunc(sender_psid, hrm_flow);
  }

  //academic -> ir
  else if (wordIs(ir, received_message)) {
    magicFunc(sender_psid, ir_flow);
  }

  //academic -> iee
  else if (wordIs(iee, received_message)) {
    magicFunc(sender_psid, iee_flow);
  }

  //academic -> cp
  else if (wordIs(cp, received_message)) {
    //analytics
    try {
      handleAnalytics("cp");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, cp_flow);
  }

  //academic -> bfs
  else if (wordIs(bfs, received_message)) {
    magicFunc(sender_psid, bfs_flow);
  }

  //academic -> fmg
  else if (wordIncludes(fmg, received_message)) {
    magicFunc(sender_psid, fmg_flow);
  }

  //academic -> tmm
  else if (wordIncludes(tmm, received_message)) {
    magicFunc(sender_psid, tmm_flow);
  }

  //academic -> tpm
  else if (wordIncludes(tpm, received_message)) {
    magicFunc(sender_psid, tpm_flow);
  }

  //academic -> chem1
  else if (wordIncludes(chem1, received_message)) {
    //analytics
    try {
      handleAnalytics("chem1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, chem1_flow);
  }

  //academic -> chem2
  else if (wordIncludes(chem2, received_message)) {
    //analytics
    try {
      handleAnalytics("chem2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, chem2_flow);
  }

  //academic -> phy1
  else if (wordIncludes(phy1, received_message)) {
    //analytics
    try {
      handleAnalytics("phy1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, phy1_flow);
  }

  //academic -> phy2
  else if (wordIncludes(phy2, received_message)) {
    //analytics
    try {
      handleAnalytics("phy2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, phy2_flow);
  }

  //academic -> ecb
  else if (wordIncludes(ecb_words, received_message)) {
    magicFunc(sender_psid, ecb_flow);
  }

  //academic -> math1
  else if (wordIncludes(math1, received_message)) {
    //analytics
    try {
      handleAnalytics("math1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, math1_flow);
  }

  //academic -> math2
  else if (wordIncludes(math2, received_message)) {
    //analytics
    try {
      handleAnalytics("math1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, math2_flow);
  }

  //academic -> ntf
  else if (wordIncludes(ntf, received_message)) {
    //analytics
    try {
      handleAnalytics("ntf");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, ntf_flow);
  }

  //academic -> em
  else if (wordIs(em, received_message)) {
    //analytics
    try {
      handleAnalytics("em");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, em_flow);
  }

  //academic -> pse
  else if (wordIncludes(pse, received_message)) {
    //analytics
    try {
      handleAnalytics("pse");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, pse_flow);
  }

  //academic -> acfd
  else if (wordIncludes(acfd_words, received_message)) {
    magicFunc(sender_psid, acfd_flow);
  } else if (wordIncludes(lab_report, received_message)) {
    magicFunc(sender_psid, labFlow);
  } else if (wordIs(onlylabWord, received_message)) {
    magicFunc(sender_psid, labFlow);
  } else if (wordIncludes(result, received_message)) {
    magicFunc(sender_psid, resultFlow);
  } else if (wordIncludes(routine, received_message)) {
    magicFunc(sender_psid, routineFlow);
  } else if (wordIncludes(syllabus, received_message)) {
    magicFunc(sender_psid, syllabusFlow);
  }

  //emoji
  else if (wordIncludes(loveMoji, received_message)) {
    // Create the payload for a basic text message
    response = {
      text: `${randomPicker(loveReply)}`,
    };
    callSendAPI(sender_psid, response);
  }

  //default reply
  else if (received_message.text) {
    try {
      if(received_message.text.length >= 2){
        handleMissedWordPosting(received_message.text);
      }
    } catch (err) {
      console.log(`🔴 Error occurred while handling missed word posting(pre)`);
    }

    response = defaultReply[Math.floor(Math.random() * defaultReply.length)];
    callSendAPI(sender_psid, response);
  }
}













/*--------------------------------------------------------*/

// Handles messaging_postbacks events(button response)
let handlePostback = async (sender_psid, received_postback) => {

  let response;

  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === 'GET_STARTED') {
    //getting username
    let username = await chatBotService.getFacebookUserInfo(sender_psid);

    try{
      postNewUserCount()
    }catch(err){
      console.log(`🔴 Error occurred while posting new user info`);
    }

    console.log(`Username: ${username}`);
    response = getStartedMsg[0];
    callSendAPI(sender_psid, response);
  }

  // Previous button detection
  //sample prev payload: ACT::052c22a603140979cbe8a3f3f32fc159
  else if (payloadIncludes(['act::'], payload)) {
    console.log("🟢 Prev customer detected");
    magicFunc(sender_psid, prevUserFlow);
  }


  else if (payload === 'notes_flow') {
    magicFunc(sender_psid, notesFlow);
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

    //analytics
    try {
      handleAnalytics("bce");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

  //subject-> fh
  else if (payload === 'fh_flow') {
    magicFunc(sender_psid, fh_flow);
  }

  else if (payload === 'fh_art_des_flow') {
    magicFunc(sender_psid, fh_ArtDes);
  }

  else if (payload === 'fh_roman_flow') {
    magicFunc(sender_psid, fh_Roman);
  }

  else if (payload === 'fh_elizabethian_flow') {
    magicFunc(sender_psid, fh_Eliza);
  }

  else if (payload === 'fh_georigian_flow') {
    magicFunc(sender_psid, fh_Georgian);
  }

  else if (payload === 'fh_greek_flow') {
    magicFunc(sender_psid, fh_Greek);
  }

  else if (payload === 'fh_egyptian_flow') {
    magicFunc(sender_psid, fh_Egypt);
  }

  else if (payload === 'fh_renaissance_flow') {
    magicFunc(sender_psid, fh_Renaiss);
  }

  else if (payload === 'fh_silk_flow') {
    magicFunc(sender_psid, fh_Silk);
  }

  else if (payload === 'fh_jeans_his_flow') {
    magicFunc(sender_psid, fh_JeansHis);
  }

  else if (payload === 'fh_muslin_flow') {
    magicFunc(sender_psid, fh_Muslin);
  }

  else if (payload === 'fh_handloom_flow') {
    magicFunc(sender_psid, fh_Handloom);
  }

  //subject-> acfd
  else if (payload === 'acfd_flow') {
    magicFunc(sender_psid, acfd_flow);
  }

  //subject-> cp
  else if (payload === 'cp_flow') {

    //analytics
    try {
      handleAnalytics("cp");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("chem1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("phy1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("math1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("ntf");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("em");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

  else if (payload === 'em_plastic_flow') {
    magicFunc(sender_psid, em_plastic);
  }

  else if (payload === 'em_phaseDiag_flow') {
    magicFunc(sender_psid, em_phaseDiag);
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

  else if (payload === 'em_atomic_struct_flow') {
    magicFunc(sender_psid, em_atomic_struct);
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

    //analytics
    try {
      handleAnalytics("pse");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

  else if (payload === 'pse_fiberForming_flow') {
    magicFunc(sender_psid, pse_FiberForming);
  }



  //tpm
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

  //subject-> ecb
  else if (payload === 'ecb_flow') {
    magicFunc(sender_psid, ecb_flow);
  }

  else if (payload === 'ecb_handNote_flow') {
    magicFunc(sender_psid, ecb_flow_Notes);
  }

  else if (payload === 'ecb_intro_flow') {
    magicFunc(sender_psid, ecb_flow_Intro);
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

    //analytics
    try {
      handleAnalytics("math2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("chem2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("phy2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("fm1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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
  else if (payload === 'fm1_tappet_flow') {
    magicFunc(sender_psid, fm1_Tappet);
  }
  else if (payload === 'fm1_picking_flow') {
    magicFunc(sender_psid, fm1_Picking);
  }
  else if (payload === 'fm1_beatup_flow') {
    magicFunc(sender_psid, fm1_Beatup);
  }
  else if (payload === 'fm1_selvedgeFaults_flow') {
    magicFunc(sender_psid, fm1_Selvedge);
  }
  else if (payload === 'fm1_takeup_flow') {
    magicFunc(sender_psid, fm1_Takeup);
  }
  else if (payload === 'fm1_letOff_flow') {
    magicFunc(sender_psid, fm1_Letoff);
  }
  else if (payload === 'fm1_denim_flow') {
    magicFunc(sender_psid, fm1_Denim);
  }
  else if (payload === 'fm1_stopMotion_flow') {
    magicFunc(sender_psid, fm1_StopMotion);
  }
  else if (payload === 'fm1_jacquard_flow') {
    magicFunc(sender_psid, fm1_Jacquard);
  }

  //mmtf
  else if (payload === 'mmtf_flow') {

    //analytics
    try {
      handleAnalytics("mmtf");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, mmtf_flow);
  }
  else if (payload === 'mmtf_books_flow') {
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

    //analytics
    try {
      handleAnalytics("ttqc");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("stat");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("feee");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("am1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("market");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("sss1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("sss2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("ym1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("tp");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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

    //analytics
    try {
      handleAnalytics("wpp");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

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
  else if (payload === 'wpp_impurities_flow') {
    magicFunc(sender_psid, wpp_Impurities);
  }
  else if (payload === 'wpp_bioScouring') {
    magicFunc(sender_psid, wpp_BioScouring);
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


  //ap1
  else if (payload === 'ap1_flow') {
    magicFunc(sender_psid, ap1_flow);
  }
  else if (payload === 'ap1_books_flow') {
    magicFunc(sender_psid, ap1_books);
  }
  else if (payload === 'ap1_ques_flow') {
    magicFunc(sender_psid, ap1_Ques);
  }
  else if (payload === 'ap1_sizing_flow') {
    magicFunc(sender_psid, ap1_Sizing);
  }
  else if (payload === 'ap1_trimmimg_flow') {
    magicFunc(sender_psid, ap1_Trimming);
  }
  else if (payload === 'ap1_interlining_flow') {
    magicFunc(sender_psid, ap1_Interling);
  }
  else if (payload === 'ap1_fabricCut_flow') {
    magicFunc(sender_psid, ap1_fabricCutting);
  }
  else if (payload === 'ap1_patternMaking_flow') {
    magicFunc(sender_psid, ap1_patternMaking);
  }
  else if (payload === 'ap1_fabricSpreading_flow') {
    magicFunc(sender_psid, ap1_fabricSpreading);
  }
  else if (payload === 'ap1_markerMaking_flow') {
    magicFunc(sender_psid, ap1_markerMaking);
  }
  else if (payload === 'ap1_sewingTherad_flow') {
    magicFunc(sender_psid, ap1_sewingThread);
  }


  //wp1
  else if (payload === 'wp1_flow') {

    //analytics
    try {
      handleAnalytics("wp1");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, wp1_flow);
  }
  else if (payload === 'wp1_books_flow') {
    magicFunc(sender_psid, wp1_books);
  }
  else if (payload === 'wp1_notes_flow') {
    magicFunc(sender_psid, wp1_notes);
  }
  else if (payload === 'wp1_ques_flow') {
    magicFunc(sender_psid, wp1_ques);
  }
  else if (payload === 'wp1_intro_flow') {
    magicFunc(sender_psid, wp1_introWP);
  }
  else if (payload === 'wp1_water_flow') {
    magicFunc(sender_psid, wp1_water);
  }
  else if (payload === 'wp1_introDye_flow') {
    magicFunc(sender_psid, wp1_introDye);
  }
  else if (payload === 'wp1_generalConcepts_flow') {
    magicFunc(sender_psid, wp1_generalConcepts);
  }
  else if (payload === 'wp1_colorFastness_flow') {
    magicFunc(sender_psid, wp1_colorFastness);
  }
  else if (payload === 'wp1_stripping_flow') {
    magicFunc(sender_psid, wp1_stripping);
  }
  else if (payload === 'wp1_singeing_flow') {
    magicFunc(sender_psid, wp1_singeing);
  }
  else if (payload === 'wp1_scouring_flow') {
    magicFunc(sender_psid, wp1_scouring);
  }
  else if (payload === 'wp1_pigment_flow') {
    magicFunc(sender_psid, wp1_pigment);
  }
  else if (payload === 'wp1_textileFinishing_flow') {
    magicFunc(sender_psid, wp1_TexFinish);
  }
  else if (payload === 'wp1_vatDyes_flow') {
    magicFunc(sender_psid, wp1_vatDyes);
  }
  else if (payload === 'wp1_desizing_flow') {
    magicFunc(sender_psid, wp1_desizing);
  }
  else if (payload === 'wp1_basicDye_flow') {
    magicFunc(sender_psid, wp1_basicDye);
  }
  else if (payload === 'wp1_acidDye_flow') {
    magicFunc(sender_psid, wp1_acidDye);
  }
  else if (payload === 'wp1_bleaching_flow') {
    magicFunc(sender_psid, wp1_bleaching);
  }
  else if (payload === 'wp1_disperseDye_flow') {
    magicFunc(sender_psid, wp1_disperse);
  }
  else if (payload === 'wp1_kierBoiler_flow') {
    magicFunc(sender_psid, wp1_kierBoiler);
  }
  else if (payload === 'wp1_dyeingFault_flow') {
    magicFunc(sender_psid, wp1_dyeingFault);
  }
  else if (payload === 'wp1_reactiveDye_flow') {
    magicFunc(sender_psid, wp1_reactiveDye);
  }
  else if (payload === 'wp1_directDye_flow') {
    magicFunc(sender_psid, wp1_directDye);
  }
  else if (payload === 'wp1_jiggerMachine_flow') {
    magicFunc(sender_psid, wp1_jiggerMachine);
  }
  else if (payload === 'wp1_colorTest_flow') {
    magicFunc(sender_psid, wp1_colorTest);
  }
  else if (payload === 'wp1_foldingTest_flow') {
    magicFunc(sender_psid, wp1_folding);
  }
  else if (payload === 'wp1_washingMachine_flow') {
    magicFunc(sender_psid, wp1_washingMc);
  }


  //mp
  else if (payload === 'mp_flow') {
    magicFunc(sender_psid, mp_flow);
  }
  else if (payload === 'mp_defects_flow') {
    magicFunc(sender_psid, mp_defects);
  }
  else if (payload === 'mp_latheMc_flow') {
    magicFunc(sender_psid, mp_lathe);
  }
  else if (payload === 'mp_millingMc_flow') {
    magicFunc(sender_psid, mp_milling);
  }
  else if (payload === 'mp_castingVideo_flow') {
    magicFunc(sender_psid, mp_casting);
  }
  else if (payload === 'mp_welding_flow') {
    magicFunc(sender_psid, mp_welding);
  }
  else if (payload === 'mp_hotCold_flow') {
    magicFunc(sender_psid, mp_hotCold);
  }
  else if (payload === 'mp_ceramics_flow') {
    magicFunc(sender_psid, mp_ceramics);
  }
  else if (payload === 'mp_plastic_flow') {
    magicFunc(sender_psid, mp_plastic);
  }
  else if (payload === 'mp_slideways_flow') {
    magicFunc(sender_psid, mp_slideways);
  }
  else if (payload === 'mp_shaperMc_flow') {
    magicFunc(sender_psid, mp_shaperMc);
  }
  else if (payload === 'mp_edm_flow') {
    magicFunc(sender_psid, mp_edm);
  }
  else if (payload === 'mp_non_conventional_flow') {
    magicFunc(sender_psid, mp_nonConv);
  }
  else if (payload === 'mp_mcEconomics_flow') {
    magicFunc(sender_psid, mp_machineEconomics);
  }
  else if (payload === 'mp_casting_flow') {
    magicFunc(sender_psid, mp_casting);
  }


  //pd
  else if (payload === 'pd_flow') {
    magicFunc(sender_psid, pd_flow);
  }
  else if (payload === 'pd_intro_flow') {
    magicFunc(sender_psid, pd_intro);
  }
  else if (payload === 'pd_understandingCustomer_flow') {
    magicFunc(sender_psid, pd_understandingCustomer);
  }
  else if (payload === 'pd_planningDesign_flow') {
    magicFunc(sender_psid, pd_planDesign);
  }
  else if (payload === 'pd_qualityFunc_flow') {
    magicFunc(sender_psid, pd_qualityFunc);
  }
  else if (payload === 'pd_designAssembly_flow') {
    magicFunc(sender_psid, pd_DesAssembly);
  }


  //ace
  else if (payload === 'ace_flow') {

    //analytics
    try {
      handleAnalytics("ace");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, ace_flow);
  }
  else if (payload === 'ace_introSys_flow') {
    magicFunc(sender_psid, ace_introControlSys);
  }
  else if (payload === 'ace_modleingFreq_flow') {
    magicFunc(sender_psid, ace_modleingFreq);
  }
  else if (payload === 'ace_timeResponse_flow') {
    magicFunc(sender_psid, ace_timeResponse);
  }
  else if (payload === 'ace_sensors_flow') {
    magicFunc(sender_psid, ace_Sensors);
  }
  else if (payload === 'ace_numberSys_flow') {
    magicFunc(sender_psid, ace_NumberSys);
  }
  else if (payload === 'ace_books_flow') {
    magicFunc(sender_psid, ace_Books);
  }
  else if (payload === 'ace_transferFunc_flow') {
    magicFunc(sender_psid, ace_transferFunc);
  }
  else if (payload === 'ace_logicGate_flow') {
    magicFunc(sender_psid, ace_logicgate);
  }
  else if (payload === 'ace_hydraulics_flow') {
    magicFunc(sender_psid, ace_hydraulics);
  }
  else if (payload === 'ace_pneumatics_flow') {
    magicFunc(sender_psid, ace_Pneumatics);
  }
  else if (payload === 'ace_introRobot_flow') {
    magicFunc(sender_psid, ace_IntroRobot);
  }
  else if (payload === 'ace_Joint_flow') {
    magicFunc(sender_psid, ace_JointLinks);
  }
  else if (payload === 'ace_Actuator_flow') {
    magicFunc(sender_psid, ace_Actuator);
  }
  else if (payload === 'ace_Grips_flow') {
    magicFunc(sender_psid, ace_Grips);
  }
  else if (payload === 'ace_StructElements_flow') {
    magicFunc(sender_psid, ace_StructElements);
  }

  //acm
  else if (payload === 'acm_flow') {

    //analytics
    try {
      handleAnalytics("acm");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, acm_flow);
  }
  else if (payload === 'acm_book_flow') {
    magicFunc(sender_psid, acm_books);
  }
  else if (payload === 'acm_introCostManage_flow') {
    magicFunc(sender_psid, acm_introCost);
  }
  else if (payload === 'acm_interestedUsers_flow') {
    magicFunc(sender_psid, acm_InterestedUsers);
  }
  else if (payload === 'acm_accountingAction_flow') {
    magicFunc(sender_psid, acm_accountingAction);
  }
  else if (payload === 'acm_recordingProcess_flow') {
    magicFunc(sender_psid, acm_recordingProcess);
  }
  else if (payload === 'acm_CostBehav_flow') {
    magicFunc(sender_psid, acm_CostBehav);
  }
  else if (payload === 'acm_accMerchendizing_flow') {
    magicFunc(sender_psid, acm_accMerchendizing);
  }
  else if (payload === 'acm_costAccSys_flow') {
    magicFunc(sender_psid, acm_costAccountingSys);
  }
  else if (payload === 'acm_costTech_flow') {
    magicFunc(sender_psid, acm_costingTech);
  }

  //om
  else if (payload === 'om_flow') {
    magicFunc(sender_psid, om_flow);
  }
  else if (payload === 'om_ch1_flow') {
    magicFunc(sender_psid, om_ch1);
  }
  else if (payload === 'om_ch2_flow') {
    magicFunc(sender_psid, om_ch2);
  }
  else if (payload === 'om_ch3_flow') {
    magicFunc(sender_psid, om_ch3);
  }


  //mic
  else if (payload === 'mic_flow') {

    //analytics
    try {
      handleAnalytics("mic");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, mic_flow);
  }
  else if (payload === 'mic_book_flow') {
    magicFunc(sender_psid, mic_books);
  }
  else if (payload === 'mic_ch1_flow') {
    magicFunc(sender_psid, mic_Ch1);
  }
  else if (payload === 'mic_ch2_flow') {
    magicFunc(sender_psid, mic_Ch2);
  }
  else if (payload === 'mic_ch4_flow') {
    magicFunc(sender_psid, mic_Ch4);
  }
  else if (payload === 'mic_ch5_flow') {
    magicFunc(sender_psid, mic_Ch5);
  }
  else if (payload === 'mic_limitsFitsGauge_flow') {
    magicFunc(sender_psid, mic_LimitFit);
  }
  else if (payload === 'mic_nonDestructive_flow') {
    magicFunc(sender_psid, mic_NonDestruc);
  }
  else if (payload === 'mic_surfaceFinish_flow') {
    magicFunc(sender_psid, mic_SurfaceFinish);
  }
  else if (payload === 'mic_threadMeasure_flow') {
    magicFunc(sender_psid, mic_ThreadMeas);
  }
  else if (payload === 'mic_angularMeas_flow') {
    magicFunc(sender_psid, mic_AngularMeas);
  }
  else if (payload === 'mic_LinearMeas_flow') {
    magicFunc(sender_psid, mic_LinearMeas);
  }


  //fsd
  else if (payload === 'fsd_flow') {

    //analytics
    try {
      handleAnalytics("fsd");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }


    magicFunc(sender_psid, fsd_flow);
  }
  else if (payload === 'fsd_intro_flow') {
    magicFunc(sender_psid, fsd_intro);
  }
  else if (payload === 'fsd_plainWeave_flow') {
    magicFunc(sender_psid, fsd_plainWeave);
  }
  else if (payload === 'fsd_twillWeave_flow') {
    magicFunc(sender_psid, fsd_TwillWeave);
  }
  else if (payload === 'fsd_books_flow') {
    magicFunc(sender_psid, fsd_books);
  }
  else if (payload === 'fsd_fancyWeave_flow') {
    magicFunc(sender_psid, fsd_Fancy);
  }
  else if (payload === 'fsd_colorWeave_flow') {
    magicFunc(sender_psid, fsd_colorWeave);
  }


  //tqm
  else if (payload === 'tqm_flow') {

    //analytics
    try {
      handleAnalytics("tqm");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, tqm_flow);
  }
  else if (payload === 'tqm_totalQm_flow') {
    magicFunc(sender_psid, tqm_totalQm);
  }
  else if (payload === 'tqm_qualityReliability_flow') {
    magicFunc(sender_psid, tqm_qualityRelia);
  }
  else if (payload === 'tqm_continuous_flow') {
    magicFunc(sender_psid, tqm_continuosImprove);
  }
  else if (payload === 'tqm_qualityStd_flow') {
    magicFunc(sender_psid, tqm_QualityStd);
  }
  else if (payload === 'tqm_intro_flow') {
    magicFunc(sender_psid, tqm_Intro);
  }
  else if (payload === 'tqm_control_flow') {
    magicFunc(sender_psid, tqm_ControlManage);
  }
  else if (payload === 'tqm_managementApproach_flow') {
    magicFunc(sender_psid, tqm_ManageAppro);
  }
  else if (payload === 'tqm_qcTools_flow') {
    magicFunc(sender_psid, tqm_QcTools);
  }


  //ttm
  else if (payload === 'ttm_flow') {
    magicFunc(sender_psid, ttm_flow);
  }


  //pcs
  else if (payload === 'pcs_flow') {
    magicFunc(sender_psid, pcs_flow);
  }
  else if (payload === 'pcs_books_flow') {
    magicFunc(sender_psid, pcs_books);
  }


  //lss
  else if (payload === 'lss_flow') {
    magicFunc(sender_psid, lss_flow);
  }
  else if (payload === 'lss_drawFrame_flow') {
    magicFunc(sender_psid, lss_drawFrame);
  }
  else if (payload === 'lss_spreader_flow') {
    magicFunc(sender_psid, lss_Spreader);
  }


  //im
  else if (payload === 'im_flow') {
    magicFunc(sender_psid, im_flow);
  }
  else if (payload === 'im_lecture_flow') {
    magicFunc(sender_psid, im_lecture);
  }
  else if (payload === 'im_munirSir_flow') {
    magicFunc(sender_psid, im_lectureMunir);
  }
  else if (payload === 'im_maeenSir_flow') {
    magicFunc(sender_psid, im_lectureMaeen);
  }
  else if (payload === 'im_lec1_flow') {
    magicFunc(sender_psid, im_lec1);
  }
  else if (payload === 'im_lec2_flow') {
    magicFunc(sender_psid, im_lec2);
  }
  else if (payload === 'im_lec3_flow') {
    magicFunc(sender_psid, im_lec3);
  }
  else if (payload === 'im_lec4_flow') {
    magicFunc(sender_psid, im_lec4);
  }
  else if (payload === 'im_market_flow') {
    magicFunc(sender_psid, im_market);
  }
  else if (payload === 'im_marketMix_flow') {
    magicFunc(sender_psid, im_marketMix);
  }
  else if (payload === 'im_projectFeasible_flow') {
    magicFunc(sender_psid, im_projectFeasa);
  }
  else if (payload === 'im_natureScope_flow') {
    magicFunc(sender_psid, im_natureScope);
  }
  else if (payload === 'im_managementFunc_flow') {
    magicFunc(sender_psid, im_ManageFunc);
  }
  else if (payload === 'im_indusManage_flow') {
    magicFunc(sender_psid, im_IndusManage);
  }
  else if (payload === 'im_techManage_flow') {
    magicFunc(sender_psid, im_TechManage);
  }
  else if (payload === 'im_prodMange_flow') {
    magicFunc(sender_psid, im_ProdManage);
  }

  //tcp
  else if (payload === 'tcp_flow') {
    magicFunc(sender_psid, tcp_flow);
  }
  else if (payload === 'tcp_kpc_flow') {
    magicFunc(sender_psid, tcp_kpc);
  }


  //am2
  else if (payload === 'am2_flow') {

    //analytics
    try {
      handleAnalytics("am2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, am2_flow);
  }
  else if (payload === 'am2_books_flow') {
    magicFunc(sender_psid, am2_books);
  }
  else if (payload === 'am2_classlec_flow') {
    magicFunc(sender_psid, am2_classLec);
  }
  else if (payload === 'am2_lineBalancing_flow') {
    magicFunc(sender_psid, am2_lineBalancing);
  }
  else if (payload === 'am2_costingExcel_flow') {
    magicFunc(sender_psid, am2_excel);
  }


  //economics
  else if (payload === 'econo_flow') {

    //analytics
    try {
      handleAnalytics("econo");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, econo_flow);
  }
  else if (payload === 'econo_books_flow') {
    magicFunc(sender_psid, econo_Books);
  }
  else if (payload === 'econo_classlec_flow') {
    magicFunc(sender_psid, econo_ClassLec);
  }


  //ym2
  else if (payload === 'ym2_flow') {

    //analytics
    try {
      handleAnalytics("ym2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, ym2_flow);
  }
  else if (payload === 'ym2_books_flow') {
    magicFunc(sender_psid, ym2_books);
  }
  else if (payload === 'ym2_classlec_flow') {
    magicFunc(sender_psid, ym2_ClassLec);
  }
  else if (payload === 'ym2_note_flow') {
    magicFunc(sender_psid, ym2_Notes);
  }
  else if (payload === 'ym2_rotor_flow') {
    magicFunc(sender_psid, ym2_rotor);
  }
  else if (payload === 'ym2_spinning_flow') {
    magicFunc(sender_psid, ym2_Spinning);
  }
  else if (payload === 'ym2_specialYarns_flow') {
    magicFunc(sender_psid, ym2_specialYarns);
  }
  else if (payload === 'ym2_introSpin_flow') {
    magicFunc(sender_psid, ym2_IntroSpin);
  }


  //fm2
  else if (payload === 'fm2_flow') {

    //analytics
    try {
      handleAnalytics("fm2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, fm2_flow);
  }
  else if (payload === 'fm2_books_flow') {
    magicFunc(sender_psid, fm2_Books);
  }
  else if (payload === 'fm2_classlec_flow') {
    magicFunc(sender_psid, fm2_ClassLec);
  }
  else if (payload === 'fm2_note_flow') {
    magicFunc(sender_psid, fm2_Notes);
  }
  else if (payload === 'fm2_basicWarp_flow') {
    magicFunc(sender_psid, fm2_BasicWarp);
  }
  else if (payload === 'fm2_misc_flow') {
    magicFunc(sender_psid, fm2_Misc);
  }


  //knit1
  else if (payload === 'kint1_flow') {
    magicFunc(sender_psid, knit1_flow);
  }
  else if (payload === 'knit_lecture_flow') {
    magicFunc(sender_psid, knit1_Lec);
  }


  //ap2
  else if (payload === 'ap2_flow') {
    magicFunc(sender_psid, ap2_flow);
  }
  else if (payload === 'ap2_folding_flow') {
    magicFunc(sender_psid, ap2_folding);
  }
  else if (payload === 'ap2_stitch_flow') {
    magicFunc(sender_psid, ap2_Stitch);
  }
  else if (payload === 'ap2_lockStitch_flow') {
    magicFunc(sender_psid, ap2_LockStitch);
  }
  else if (payload === 'ap2_pressingFinish_flow') {
    magicFunc(sender_psid, ap2_Pressing);
  }
  else if (payload === 'ap2_Inspection_flow') {
    magicFunc(sender_psid, ap2_InspectionQuality);
  }


  //wp2
  else if (payload === 'wp2_flow') {

    //analytics
    try {
      handleAnalytics("wp2");
    } catch (err) {
      console.log(`🔴 Error while handling analytics(pre)`);
    }

    magicFunc(sender_psid, wp2_flow);
  }
  else if (payload === 'wp2_books_flow') {
    magicFunc(sender_psid, wp2_books);
  }
  else if (payload === 'wp2_classlec_flow') {
    magicFunc(sender_psid, wp2_classLec);
  }














  //syllabus
  else if (payload === 'syllabus_flow') {
    magicFunc(sender_psid, syllabusFlow);
  }
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


  //lab report 
  else if (payload === 'reports_flow') {
    magicFunc(sender_psid, labFlow);
  }
  else if (payload === 'level_1_lab') {
    magicFunc(sender_psid, labFlow_level1);
  }
  else if (payload === 'level_2_lab') {
    magicFunc(sender_psid, labFlow_level2);
  }
  else if (payload === 'level_3_lab') {
    magicFunc(sender_psid, labFlow_level3);
  }

  //lab -> che1
  else if (payload === 'che1_lab_flow') {
    magicFunc(sender_psid, labFlow_che1);
  }
  else if (payload === 'che1_procedureSheet_flow') {
    magicFunc(sender_psid, labFlow_che1_procedure);
  }
  else if (payload === 'che1_acidRadical_flow') {
    magicFunc(sender_psid, labFlow_che1_acidRad);
  }
  else if (payload === 'che1_basicRadical_flow') {
    magicFunc(sender_psid, labFlow_che1_basicRad);
  }
  else if (payload === 'che1_mohrsSalt_flow') {
    magicFunc(sender_psid, labFlow_che1_Mohr);
  }
  else if (payload === 'che1_wetTest_flow') {
    magicFunc(sender_psid, labFlow_che1_WetTest);
  }
  else if (payload === 'che1_titration_flow') {
    magicFunc(sender_psid, labFlow_che1_Titration);
  }


  //lab -> phy1
  else if (payload === 'phy1_lab_flow') {
    magicFunc(sender_psid, labFlow_phy1);
  }
  else if (payload === 'phy1_m1_flow') {
    magicFunc(sender_psid, labFlow_phy1_m1);
  }
  else if (payload === 'phy1_m2_flow') {
    magicFunc(sender_psid, labFlow_phy1_m2);
  }
  else if (payload === 'phy1_m3_flow') {
    magicFunc(sender_psid, labFlow_phy1_m3);
  }
  else if (payload === 'phy1_m4_flow') {
    magicFunc(sender_psid, labFlow_phy1_m4);
  }
  else if (payload === 'phy1_m5_flow') {
    magicFunc(sender_psid, labFlow_phy1_m5);
  }
  else if (payload === 'phy1_m6_flow') {
    magicFunc(sender_psid, labFlow_phy1_m6);
  }
  else if (payload === 'phy1_o1_flow') {
    magicFunc(sender_psid, labFlow_phy1_o1);
  }
  else if (payload === 'phy1_o2_flow') {
    magicFunc(sender_psid, labFlow_phy1_o2);
  }
  else if (payload === 'phy1_o3_flow') {
    magicFunc(sender_psid, labFlow_phy1_o3);
  }
  else if (payload === 'phy1_o4_flow') {
    magicFunc(sender_psid, labFlow_phy1_o4);
  }


  //lab -> bce
  else if (payload === 'bce_lab_flow') {
    magicFunc(sender_psid, labFlow_bce);
  }
  else if (payload === 'bce_lab_read_flow') {
    magicFunc(sender_psid, labFlow_bceReading);
  }
  else if (payload === 'bce_lab_listen_flow') {
    magicFunc(sender_psid, labFlow_bceLsiteing);
  }
  else if (payload === 'bce_lab_sheet_flow') {
    magicFunc(sender_psid, labFlow_bceLabSheet);
  }


  //lab -> phy2
  else if (payload === 'phy2_lab_flow') {
    magicFunc(sender_psid, labFlow_phy2);
  }
  else if (payload === 'phy2_lab_e1_flow') {
    magicFunc(sender_psid, labFlow_phy2_e1);
  }
  else if (payload === 'phy2_lab_e2_flow') {
    magicFunc(sender_psid, labFlow_phy2_e2);
  }
  else if (payload === 'phy2_lab_e3_flow') {
    magicFunc(sender_psid, labFlow_phy2_e3);
  }
  else if (payload === 'phy2_lab_e4_flow') {
    magicFunc(sender_psid, labFlow_phy2_e4);
  }
  else if (payload === 'phy2_lab_e5_flow') {
    magicFunc(sender_psid, labFlow_phy2_e5);
  }
  else if (payload === 'phy2_lab_e6_flow') {
    magicFunc(sender_psid, labFlow_phy2_e6);
  }
  else if (payload === 'phy2_lab_e7_flow') {
    magicFunc(sender_psid, labFlow_phy2_e7);
  }
  else if (payload === 'phy2_lab_e8_flow') {
    magicFunc(sender_psid, labFlow_phy2_e8);
  }
  else if (payload === 'phy2_lab_m1_flow') {
    magicFunc(sender_psid, labFlow_phy2_m1);
  }
  else if (payload === 'phy2_lab_h1_flow') {
    magicFunc(sender_psid, labFlow_phy2_h1);
  }
  else if (payload === 'phy2_lab_h2_flow') {
    magicFunc(sender_psid, labFlow_phy2_h2);
  }
  else if (payload === 'phy2_lab_h3_flow') {
    magicFunc(sender_psid, labFlow_phy2_h3);
  }


  //lab -> che2
  else if (payload === 'che2_lab_flow') {
    magicFunc(sender_psid, labFlow_che2);
  }
  else if (payload === 'che2_lab_physicalProp_flow') {
    magicFunc(sender_psid, labFlow_che2_physicalProp);
  }
  else if (payload === 'che2_lab_lassaignesTest_flow') {
    magicFunc(sender_psid, labFlow_che2_lassigne1);
  }
  else if (payload === 'che2_lab_solubilityTest_flow') {
    magicFunc(sender_psid, labFlow_che2_solubillityTest);
  }
  else if (payload === 'che2_lab_alcoholIdentify_flow') {
    magicFunc(sender_psid, labFlow_che2_alcoholIdentify);
  }
  else if (payload === 'che2_lab_lassaignesTest2_flow') {
    magicFunc(sender_psid, labFlow_che2_lassigne2);
  }
  else if (payload === 'che2_lab_h2o2_flow') {
    magicFunc(sender_psid, labFlow_che2_H2O2);
  }
  else if (payload === 'che2_lab_amountofFe2_flow') {
    magicFunc(sender_psid, labFlow_che2_Fe2);
  }
  else if (payload === 'che2_lab_carbonylIdentify_flow') {
    magicFunc(sender_psid, labFlow_che2_carbonylIdentify);
  }
  else if (payload === 'che2_lab_Nidentity_flow') {
    magicFunc(sender_psid, labFlow_che2_nIdentity);
  }
  else if (payload === 'che2_lab_amountna2co3_flow') {
    magicFunc(sender_psid, labFlow_che2_Na2Co3);
  }
  else if (payload === 'che2_lab_carboxylicIdentity_flow') {
    magicFunc(sender_psid, labFlow_che2_Carboxylic);
  }


  //lab -> ed
  else if (payload === 'ed_lab_flow') {
    magicFunc(sender_psid, labFlow_ed);
  }

  //lab -> cp
  else if (payload === 'cp_lab_flow') {
    magicFunc(sender_psid, labFlow_cp);
  }
  else if (payload === 'cp_lab_intro') {
    magicFunc(sender_psid, labFlow_cp_intro);
  }
  else if (payload === 'cp_lab_condition') {
    magicFunc(sender_psid, labFlow_cp_Conditional);
  }
  else if (payload === 'cp_lab_arithmetic') {
    magicFunc(sender_psid, labFlow_cp_Arithmetic);
  }
  else if (payload === 'cp_lab_sumSeries') {
    magicFunc(sender_psid, labFlow_cp_sumofSeries);
  }
  else if (payload === 'cp_lab_array') {
    magicFunc(sender_psid, labFlow_cp_Array);
  }
  else if (payload === 'cp_lab_recursionFactorial') {
    magicFunc(sender_psid, labFlow_cp_RecursionFactorial);
  }
  else if (payload === 'cp_lab_recursionFibo') {
    magicFunc(sender_psid, labFlow_cp_Fibonacchi);
  }
  else if (payload === 'cp_lab_Chapter') {
    magicFunc(sender_psid, labFlow_cp_ch_1_3);
  }

  //lab -> ap1
  else if (payload === 'ap1_lab_flow') {
    magicFunc(sender_psid, labFlow_ap1);
  }
  else if (payload === 'ap1_lab_attachingInterline_flow') {
    magicFunc(sender_psid, labFlow_ap1_interline);
  }
  else if (payload === 'ap1_lab_standardBody_flow') {
    magicFunc(sender_psid, labFlow_ap1_stdBody);
  }
  else if (payload === 'ap1_lab_continuousFusing_flow') {
    magicFunc(sender_psid, labFlow_ap1_continuousFusing);
  }
  else if (payload === 'ap1_lab_straightKnife_flow') {
    magicFunc(sender_psid, labFlow_ap1_straightKnife);
  }

  //lab -> msp
  else if (payload === 'msp_lab_flow') {
    magicFunc(sender_psid, labFlow_msp);
  }
  else if (payload === 'msp_lab_layout_flow') {
    magicFunc(sender_psid, labFlow_msp_layout);
  }
  else if (payload === 'msp_lab_handTools_flow') {
    magicFunc(sender_psid, labFlow_msp_handTools);
  }
  else if (payload === 'msp_lab_grindingMC_flow') {
    magicFunc(sender_psid, labFlow_msp_GrindingMc);
  }
  else if (payload === 'msp_lab_lathe_flow') {
    magicFunc(sender_psid, labFlow_msp_LatheMc);
  }
  else if (payload === 'msp_lab_sqKey_flow') {
    magicFunc(sender_psid, labFlow_msp_SqKey);
  }
  else if (payload === 'msp_lab_matchingParts_flow') {
    magicFunc(sender_psid, labFlow_msp_mathcingParts);
  }
  else if (payload === 'msp_lab_milling_flow') {
    magicFunc(sender_psid, labFlow_msp_MillingMC);
  }
  else if (payload === 'msp_lab_drilling_flow') {
    magicFunc(sender_psid, labFlow_msp_DrillingMc);
  }
  else if (payload === 'msp_lab_shaper_flow') {
    magicFunc(sender_psid, labFlow_msp_Shaper);
  }
  else if (payload === 'msp_lab_welding_flow') {
    magicFunc(sender_psid, labFlow_msp_Welding);
  }
  else if (payload === 'msp_lab_introLight_flow') {
    magicFunc(sender_psid, labFlow_msp_IntroLight);
  }
  else if (payload === 'msp_lab_arcWelding_flow') {
    magicFunc(sender_psid, labFlow_msp_ArcWeld);
  }
  else if (payload === 'msp_lab_manuAssm_flow') {
    magicFunc(sender_psid, labFlow_msp_manuAsm);
  }
  else if (payload === 'msp_lab_mspQuiz_flow') {
    magicFunc(sender_psid, labFlow_msp_quiz);
  }


  //lab -> am1
  else if (payload === 'am1_lab_flow') {
    magicFunc(sender_psid, labFlow_am1);
  }
  else if (payload === 'am1_lab_layoutPlan_flow') {
    magicFunc(sender_psid, labFlow_am1_layOut);
  }
  else if (payload === 'am1_lab_standardBody_flow') {
    magicFunc(sender_psid, labFlow_am1_StdBody);
  }
  else if (payload === 'am1_lab_AllReport_flow') {
    magicFunc(sender_psid, labFlow_am1_AllReport);
  }

  //lab -> wp1
  else if (payload === 'wp1_lab_flow') {
    magicFunc(sender_psid, labFlow_wp1);
  }
  else if (payload === 'wp1_lab_layout_flow') {
    magicFunc(sender_psid, labFlow_wp1_1);
  }
  else if (payload === 'wp1_lab_alkScouring_flow') {
    magicFunc(sender_psid, labFlow_wp1_2);
  }
  else if (payload === 'wp1_lab_combinedScouringCotton_flow') {
    magicFunc(sender_psid, labFlow_wp1_3);
  }
  else if (payload === 'wp1_lab_combinedScouringJute_flow') {
    magicFunc(sender_psid, labFlow_wp1_4);
  }
  else if (payload === 'wp1_lab_directDye_flow') {
    magicFunc(sender_psid, labFlow_wp1_5);
  }
  else if (payload === 'wp1_lab_reactiveDye_flow') {
    magicFunc(sender_psid, labFlow_wp1_6);
  }
  else if (payload === 'wp1_lab_disperseDye_flow') {
    magicFunc(sender_psid, labFlow_wp1_7);
  }
  else if (payload === 'wp1_lab_acidDye_flow') {
    magicFunc(sender_psid, labFlow_wp1_8);
  }
  else if (payload === 'wp1_lab_basicDye_flow') {
    magicFunc(sender_psid, labFlow_wp1_9);
  }
  else if (payload === 'wp1_lab_vatDye_flow') {
    magicFunc(sender_psid, labFlow_wp1_10);
  }
  else if (payload === 'wp1_lab_rubbing_flow') {
    magicFunc(sender_psid, labFlow_wp1_11);
  }
  else if (payload === 'wp1_lab_pigmentCotton_flow') {
    magicFunc(sender_psid, labFlow_wp1_12);
  }


  //lab -> sss1
  else if (payload === 'sss1_lab_flow') {
    magicFunc(sender_psid, labFlow_sss1);
  }
  else if (payload === 'sss1_lab_layoutPlan_flow') {
    magicFunc(sender_psid, labFlow_sss1_layout);
  }

  //lab -> fe204
  else if (payload === 'fe_wpp_lab_flow') {
    magicFunc(sender_psid, labFlow_fe204);
  }

  //lab -> ap1_2
  else if (payload === 'ap1_lev2_lab_flow') {
    magicFunc(sender_psid, labFlow_ap1_2);
  }

  //lab -> pm1
  else if (payload === 'pm1_lab_flow') {
    magicFunc(sender_psid, labFlow_pm1);
  }


  //lab -> sss2
  else if (payload === 'sss2_lab_flow') {
    magicFunc(sender_psid, labFlow_sss2);
  }

  //lab -> wpe202
  else if (payload === 'wpe_wpp_lab_flow') {
    magicFunc(sender_psid, labFlow_wpe202);
  }


  //lab -> ym1
  else if (payload === 'ym1_lab_flow') {
    magicFunc(sender_psid, labFlow_ym1);
  }
  else if (payload === 'ym1_lab_layout_flow') {
    magicFunc(sender_psid, labFlow_ym1_layout);
  }
  else if (payload === 'ym1_lab_pricipleSSS_flow') {
    magicFunc(sender_psid, labFlow_ym1_principle);
  }
  else if (payload === 'ym1_lab_baleOpener_flow') {
    magicFunc(sender_psid, labFlow_ym1_baleOpener);
  }
  else if (payload === 'ym1_lab_porcupine_flow') {
    magicFunc(sender_psid, labFlow_ym1_Porcupine);
  }
  else if (payload === 'ym1_lab_ringFrame_flow') {
    magicFunc(sender_psid, labFlow_ym1_RingFrame);
  }
  else if (payload === 'ym1_lab_simplex_flow') {
    magicFunc(sender_psid, labFlow_ym1_Simplex);
  }
  else if (payload === 'ym1_lab_comber_flow') {
    magicFunc(sender_psid, labFlow_ym1_Comber);
  }
  else if (payload === 'ym1_lab_drawFrame_flow') {
    magicFunc(sender_psid, labFlow_ym1_Drawframe);
  }
  else if (payload === 'ym1_lab_carding_flow') {
    magicFunc(sender_psid, labFlow_ym1_Carding);
  }


  //lab -> fm1
  else if (payload === 'fm1_lab_flow') {
    magicFunc(sender_psid, labFlow_fm1);
  }
  else if (payload === 'fm1_lab_layout_flow') {
    magicFunc(sender_psid, labFlow_fm1_layout);
  }
  else if (payload === 'fm1_lab_tappetShedding_flow') {
    magicFunc(sender_psid, labFlow_fm1_Tappet);
  }
  else if (payload === 'fm1_lab_looming_flow') {
    magicFunc(sender_psid, labFlow_fm1_Looming);
  }
  else if (payload === 'fm1_lab_package_flow') {
    magicFunc(sender_psid, labFlow_fm1_Package);
  }
  else if (payload === 'fm1_lab_cheesWinding_flow') {
    magicFunc(sender_psid, labFlow_fm1_CheeseWind);
  }
  else if (payload === 'fm1_lab_highSpeedWarp_flow') {
    magicFunc(sender_psid, labFlow_fm1_HighSpeedWarp);
  }
  else if (payload === 'fm1_lab_sectionalWarping_flow') {
    magicFunc(sender_psid, labFlow_fm1_SectionalWarp);
  }
  else if (payload === 'fm1_lab_conventionalSizing_flow') {
    magicFunc(sender_psid, labFlow_fm1_6_ConvSizing);
  }
  else if (payload === 'fm1_lab_dobby_flow') {
    magicFunc(sender_psid, labFlow_fm1_Dobby);
  }
  else if (payload === 'fm1_lab_sizing_flow') {
    magicFunc(sender_psid, labFlow_fm1_Sizing);
  }


  //lab -> ttqc
  else if (payload === 'ttqc_lab_flow') {
    magicFunc(sender_psid, labFlow_ttqc);
  }
  else if (payload === 'ttqc_lab_atmosphere_flow') {
    magicFunc(sender_psid, labFlow_ttqc_atmos);
  }
  else if (payload === 'ttqc_lab_fiberFineness_flow') {
    magicFunc(sender_psid, labFlow_ttqc_fibreFineness);
  }
  else if (payload === 'ttqc_lab_effectiveLength_flow') {
    magicFunc(sender_psid, labFlow_ttqc_effectiveLength);
  }
  else if (payload === 'ttqc_lab_fibreLength_flow') {
    magicFunc(sender_psid, labFlow_ttqc_FibreLengthIden);
  }
  else if (payload === 'ttqc_lab_count_csp_flow') {
    magicFunc(sender_psid, labFlow_ttqc_CountSliCsp);
  }
  else if (payload === 'ttqc_lab_tpiCount_flow') {
    magicFunc(sender_psid, labFlow_ttqc_tpiCount);
  }
  else if (payload === 'ttqc_lab_csp_tpi_flow') {
    magicFunc(sender_psid, labFlow_ttqc_CspTpi);
  }
  else if (payload === 'ttqc_lab_thickCrimp_flow') {
    magicFunc(sender_psid, labFlow_ttqc_Thick);
  }
  else if (payload === 'ttqc_lab_fibreFineMaturity_flow') {
    magicFunc(sender_psid, labFlow_ttqc_FibreFineMaturity);
  }
  else if (payload === 'ttqc_lab_sliverRoving_flow') {
    magicFunc(sender_psid, labFlow_ttqc_SliverRoving);
  }
  else if (payload === 'ttqc_lab_bundleStrength_flow') {
    magicFunc(sender_psid, labFlow_ttqc_bundleStrength);
  }


  //lab -> mp
  else if (payload === 'mp_lab_flow') {
    magicFunc(sender_psid, labFlow_mp);
  }
  else if (payload === 'mp_lab_lathe_flow') {
    magicFunc(sender_psid, labFlow_mp_Lathe);
  }
  else if (payload === 'mp_lab_milling_flow') {
    magicFunc(sender_psid, labFlow_mp_Milling);
  }
  else if (payload === 'mp_lab_cncMill_flow') {
    magicFunc(sender_psid, labFlow_mp_CncMilling);
  }
  else if (payload === 'mp_lab_chipsTemp_flow') {
    magicFunc(sender_psid, labFlow_mp_ChipsTemp);
  }
  else if (payload === 'mp_lab_jackScrew_flow') {
    magicFunc(sender_psid, labFlow_mp_JackScrew);
  }
  else if (payload === 'mp_lab_injectionMoulding_flow') {
    magicFunc(sender_psid, labFlow_mp_InjectionMoulding);
  }
  else if (payload === 'mp_lab_sandMold_flow') {
    magicFunc(sender_psid, labFlow_mp_sandMolding);
  }


  //lab -> fme
  else if (payload === 'fme_lab_flow') {
    magicFunc(sender_psid, labFlow_fme);
  }
  else if (payload === 'fme_lab_airCompressor_flow') {
    magicFunc(sender_psid, labFlow_fme_AirComp);
  }
  else if (payload === 'fme_lab_steamTurbine_flow') {
    magicFunc(sender_psid, labFlow_fme_steamTurbine);
  }
  else if (payload === 'fme_lab_petrolDisel_flow') {
    magicFunc(sender_psid, labFlow_fme_PetrolDisel);
  }
  else if (payload === 'fme_lab_boiler_flow') {
    magicFunc(sender_psid, labFlow_fme_Boiler);
  }
  else if (payload === 'fme_lab_boilerMOunting_flow') {
    magicFunc(sender_psid, labFlow_fme_BoilerMounting);
  }
  else if (payload === 'fme_lab_reciPump_flow') {
    magicFunc(sender_psid, labFlow_fme_ReciPump);
  }
  else if (payload === 'fme_lab_centriPump_flow') {
    magicFunc(sender_psid, labFlow_fme_CentriPump);
  }
  else if (payload === 'fme_lab_diselEng_flow') {
    magicFunc(sender_psid, labFlow_fme_DiselEngine);
  }
  else if (payload === 'fme_lab_icEngine_flow') {
    magicFunc(sender_psid, labFlow_fme_ICEngine);
  }


  //lab -> feee
  else if (payload === 'feee_lab_flow') {
    magicFunc(sender_psid, labFlow_feee);
  }
  else if (payload === 'feee_lab_multiMetre_flow') {
    magicFunc(sender_psid, labFlow_feee_Multimetre);
  }
  else if (payload === 'feee_lab_ohmslaw_flow') {
    magicFunc(sender_psid, labFlow_feee_Ohms);
  }
  else if (payload === 'feee_lab_kirchoffsLaw_flow') {
    magicFunc(sender_psid, labFlow_feee_Kirchoff);
  }
  else if (payload === 'feee_lab_rcCirct_flow') {
    magicFunc(sender_psid, labFlow_feee_RC);
  }
  else if (payload === 'feee_lab_rlCirct_flow') {
    magicFunc(sender_psid, labFlow_feee_RL);
  }
  else if (payload === 'feee_lab_rlcCirct_flow') {
    magicFunc(sender_psid, labFlow_feee_RLC);
  }
  else if (payload === 'feee_lab_carbonResistor_flow') {
    magicFunc(sender_psid, labFlow_feee_carbonResistor);
  }
  else if (payload === 'feee_lab_fanRegulator_flow') {
    magicFunc(sender_psid, labFlow_feee_FanRegulator);
  }
  else if (payload === 'feee_lab_wiringTubelight_flow') {
    magicFunc(sender_psid, labFlow_feee_WiringTubelight);
  }
  else if (payload === 'feee_lab_fullBridgeRect_flow') {
    magicFunc(sender_psid, labFlow_feee_FullBridge);
  }
  else if (payload === 'feee_lab_fuseSwitch_flow') {
    magicFunc(sender_psid, labFlow_feee_Fuse);
  }
  else if (payload === 'feee_lab_Oscillosc_flow') {
    magicFunc(sender_psid, labFlow_feee_Oscillo);
  }
  else if (payload === 'feee_lab_wireGauge_flow') {
    magicFunc(sender_psid, labFlow_feee_wireGauge);
  }
  else if (payload === 'feee_lab_2waySwitch_flow') {
    magicFunc(sender_psid, labFlow_feee_2WayLightSwitch);
  }


  //lab -> tex color
  else if (payload === 'texColor_lab_flow') {
    magicFunc(sender_psid, labFlow_texColor);
  }

  //lab -> fsd
  else if (payload === 'fsd_lab_flow') {
    magicFunc(sender_psid, labFlow_fsd);
  }


  //lab -> lss
  else if (payload === 'lss_lab_flow') {
    magicFunc(sender_psid, labFlow_lss);
  }

  //lab -> wp2
  else if (payload === 'wp2_lab_flow') {
    magicFunc(sender_psid, labFlow_wp2);
  }

  //lab -> am2
  else if (payload === 'am2_lab_flow') {
    magicFunc(sender_psid, labFlow_am2);
  }

  //lab -> apparel washing
  else if (payload === 'apprelWashing_lab_flow') {
    magicFunc(sender_psid, labFlow_apparelWashing);
  }

  //lab -> pm2
  else if (payload === 'pm2LabFlow') {
    magicFunc(sender_psid, labFlow_pm2);
  }

  //lab -> ym2
  else if (payload === 'ym2_lab_flow') {
    magicFunc(sender_psid, labFlow_ym2);
  }

  //lab -> ap2
  else if (payload === 'ap2_lab_flow') {
    magicFunc(sender_psid, labFlow_ap2);
  }


  //lab -> fm2
  else if (payload === 'fm2_lab_flow') {
    magicFunc(sender_psid, labFlow_fm2);
  }
  else if (payload === 'fm2_lab_1_flow') {
    magicFunc(sender_psid, labFlow_fm2_1);
  }
  else if (payload === 'fm2_lab_4_flow') {
    magicFunc(sender_psid, labFlow_fm2_4);
  }
  else if (payload === 'fm2_lab_5_flow') {
    magicFunc(sender_psid, labFlow_fm2_5);
  }

  //quotes
  else if (payload === 'another_quote_flow') {
    response = randomPicker(quotesFlow);
    callSendAPI(sender_psid, response);
  }

  //jokes
  else if (payload === 'another_joke_flow') {
    response = randomPicker(jokeFlow);
    callSendAPI(sender_psid, response);
  }

  //songs
  else if (payload === 'another_song_flow') {
    magicFunc(sender_psid, songFlow);
  }

  //donation
  else if (payload === 'donation_payload') {
    magicFunc(sender_psid, donationFlow);
  }
  else if (payload === 'bkash_donation') {
    magicFunc(sender_psid, donation_bKash);
  }
  else if (payload === 'nagad_donation') {
    magicFunc(sender_psid, donation_nagad);
  }
  else if (payload === 'surecash_donation') {
    magicFunc(sender_psid, donation_surecash);
  }


  //help
  else if (payload === 'help_payload') {
    magicFunc(sender_psid, help_flow);
  }
}


//magic func
let magicFunc = async (sender_psid, flow) => {
  let i = 0;
  for (i = 0; i < flow.length; i++) {
    response = flow[i];
    await callSendAPI(sender_psid, response);
  }
}

//wordDetectorFunctions
//word includes
/*
let wordIncludes = (keywordArray, received_message) => {
  return keywordArray.some(word => received_message.text.toLowerCase().includes(word)); //received_message is an object
}
*/

/*
let emojiIs = (keywordArray, received_reaction) => {
  return keywordArray.some(emoji => received_reaction.emoji.includes(emoji)); //received_message is an object
}
*/

/*
//payload include
let payloadIncludes = (keywordArray, payload) => {
  return keywordArray.some(word => payload.toLowerCase().includes(word));  //payload is a string
}
*/

/*
//word is
let wordIs = (keywordArray, received_message) => {
  return keywordArray.includes(received_message.text.toLowerCase());
}
*/

//randomPicker Function
let randomPicker = (replyArray) => {
  return replyArray[Math.floor(Math.random() * replyArray.length)];
}






// Sends response messages via the Send API
let  callSendAPI = (sender_psid, response) => {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v12.0/me/messages",
    "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('🟢 Message sent!')
    } else {
      console.error(`🔴 Unable to send message: ${err}`);
    }
  });
}









module.exports = {
  testMsg: testMsg,
  getWebhook: getWebhook,
  postWebhook: postWebhook
}