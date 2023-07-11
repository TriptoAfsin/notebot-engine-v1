let textBlockGen = require("../../../genrators/textBlockGen");
const imgBlockGen = require("../../../genrators/imgBlockGen");
const webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
const payloadBtnBlockGen = require("../../../genrators/payloadBtnGen");
const cardCarouselGen = require("simple-messenger-blocks/cardCarouselGen");
const singleCardGen = require("simple-messenger-blocks/singleCardGen");

let depressed = [
  cardCarouselGen([
    singleCardGen(
      "https://api.admin.webmanza.com/d9d440d3-31bc-11ed-9717-00155d212c06/uploads/24_1686466076987-3528606282767179447289558416346903763156788njpg.jpeg",
      "Napkin Ring",
      "Elegant Napkin Ring at ৳200",
      "https://candidhomebd.com/product/napkin-ring-zzahch",
      [
        webBtnBlockGen(
          "View Product",
          "https://candidhomebd.com/product/napkin-ring-zzahch"
        ),
        webBtnBlockGen("Buy Product", "https://candidhomebd.com/checkout"),
      ]
    ),
    singleCardGen(
      "https://api.admin.webmanza.com/d9d440d3-31bc-11ed-9717-00155d212c06/uploads/24_1686291205646-34836912910114397998467144463192584878691294njpg.jpeg",
      "Fusion series Cover",
      "Fusion series Cover at ৳350",
      "https://candidhomebd.com/product/fusion-series-cover-chy240g",
      [
        webBtnBlockGen(
          "View Product",
          "https://candidhomebd.com/product/fusion-series-cover-chy240g"
        ),
        webBtnBlockGen("Buy Product", "https://candidhomebd.com/checkout"),
      ]
    ),
    singleCardGen(
      "https://api.admin.webmanza.com/d9d440d3-31bc-11ed-9717-00155d212c06/uploads/24_1686319184468-34836975434613753208447473655228616210115544njpg.jpeg",
      "Cushion Cover rectangle combo",
      "Cushion Cover rectangle combo at ৳380",
      "https://candidhomebd.com/product/cushion-cover-rectangle-combo",
      [
        webBtnBlockGen(
          "View Product",
          "https://candidhomebd.com/product/cushion-cover-rectangle-combo"
        ),
        webBtnBlockGen("Buy Product", "https://candidhomebd.com/checkout"),
      ]
    ),
  ]),
];

module.exports = depressed;
