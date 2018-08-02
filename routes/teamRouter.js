const express = require('express');
const teamController = require('../controllers/teamController');
const teamViewController = require('../controllers/teamViewController');
const playerController = require('../controllers/playerController');

const Router = express.Router();

const show404 = (err, req, res, next) => {
    console.log(err),
    res.sendStatus(404);
};

Router.get('/',(req, res) => res.redirect('/teams'));
Router.get('/teams', teamController.showAll, teamViewController.showAll, show404);
Router.post('/teams', teamController.createTeam, show404);
Router.put('/teams', teamController.updateTeam, show404 );

Router.get('/:name/players', playerController.showAll);

Router.get('/player/:name', playerController.showOne);
Router.get('/teams/:name', teamController.showOne, show404);

module.exports = Router;

