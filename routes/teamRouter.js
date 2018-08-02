const express = require('express');
const teamController = require('../controllers/teamController');
const teamViewController = require('../controllers/teamViewController');
const playerController = require('../controllers/playerController');
const playerViewController = require('../controllers/playerViewController');

const Router = express.Router();

const show404 = (err, req, res, next) => {
    console.log(err),
    res.sendStatus(404);
};

Router.get('/',(req, res) => res.redirect('/teams'));

Router.route('/teams')
.get(teamController.showAll, teamViewController.showAll, show404)
.post(teamController.createTeam, show404)
.put(teamController.updateTeam, show404 );

Router.get('/:team/players', playerController.showAll, playerViewController.showAll);
Router.get('/players/:id/update',playerController.showOne, playerViewController.updatePlayer);
Router.post('/players', playerController.createPlayer);
Router.put('/players', playerController.updatePlayer);
Router.delete('/players', playerController.deletePlayer);

//Router.get('/player/:name', playerController.showOne); (Never need to only see one player, only to populate edit form)
//Router.get('/team/:name', teamController.showOne, show404); (dont need to see one team, only to populate edit form)

module.exports = Router;