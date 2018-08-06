const express = require('express');
const teamController = require('../controllers/teamController');
const teamViewController = require('../controllers/teamViewController');
const playerController = require('../controllers/playerController');
const playerViewController = require('../controllers/playerViewController');

const Router = express.Router();

const show404 = (err, req, res, next) => {
  console.log(err);
  res.sendStatus(404);
};

Router.get('/', (req, res) => res.redirect('/teams'));

Router.route('/teams')
  .get(teamController.showAll, teamViewController.showAll)
  .post(teamController.createTeam)
  .put(teamController.updateTeam);

Router.get('/teams/:id/edit', teamController.showOne, teamViewController.updateTeam);
Router.delete('/teams/:id/delete', teamController.deleteTeam);
Router.get('/teams/new', teamViewController.createTeam);
// Only for AJAX
Router.post('/teams/validate', teamController.validateTeam);

// Show all players on specific team
Router.get('/teams/:id/players', playerController.showAll, playerViewController.showAll);

Router.route('/teams/:id/newplayer')
  .get(playerViewController.createPlayer)
  .post(playerController.createPlayer);

Router.route('/players/:id/edit')
  .get(playerController.showOne, playerViewController.updatePlayer)
  .put(playerController.updatePlayer);

Router.delete('/players/:id/delete', playerController.deletePlayer);

Router.use(show404);
Router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = Router;
