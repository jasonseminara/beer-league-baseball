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
  .post(teamController.createTeam, teamViewController.handleRedirect)
  .put(teamController.updateTeam, teamViewController.handleRedirect);

Router.get('/teams/:id/edit', teamController.showOne, teamViewController.updateTeam);
Router.delete('/teams/:id/delete', teamController.deleteTeam, teamViewController.handleRedirect);
Router.get('/teams/new', teamViewController.createTeam);

// Only for AJAX, used for validation
Router.post('/teams/validate', teamController.validateTeam);

// Show all players on specific team
Router.get('/teams/:id/players', playerController.showAll, playerViewController.showAll);

// Routes to create a new player
Router.route('/teams/:id/newplayer')
  .get(playerViewController.createPlayer)
  .post(playerController.createPlayer, playerViewController.handleCreateRedirect);

// Routes to edit an existing player
Router.route('/players/:id/edit')
  .get(playerController.showOne, playerViewController.updatePlayer)
  .put(playerController.updatePlayer, playerViewController.handleUpdateRedirect);

// Routes to delete a player
Router.delete('/players/:id/delete', playerController.deletePlayer, playerViewController.handleDeleteRedirect);

Router.use(show404);
Router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = Router;
