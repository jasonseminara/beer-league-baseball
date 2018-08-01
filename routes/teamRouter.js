const express = require('express');
const teamController = require('../controllers/teamController');

const teamRouter = express.Router();

const show404 = (err, req, res, next) => {
    console.log(err),
    res.sendStatus(404);
};

teamRouter.get('/', teamController.showAll, show404);
teamRouter.post('/', teamController.createTeam, show404);

teamRouter.get('/:name', teamController.showOne, show404);

module.exports = teamRouter;

