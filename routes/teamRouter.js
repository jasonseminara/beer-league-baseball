const express = require('express');
const teamController = require('../controllers/teamController');

const teamRouter = express.Router();

teamRouter.get('/', teamController.showAll);

module.exports = teamRouter;

