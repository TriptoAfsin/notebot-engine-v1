const express = require('express');
const chatbotController = require('../controllers/chatbotController');

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", chatbotController.testMsg);

    router.get("/webhook", chatbotController.getWebhook);

    router.post("/webhook", chatbotController.postWebhook);

    return app.use("/", router);

}

module.exports = initWebRoutes;