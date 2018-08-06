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
  .get(teamController.showAll, teamViewController.showAll, show404)
  .post(teamController.createTeam, show404)
  .put(teamController.updateTeam, show404);

Router.route('/players')
  .delete(playerController.deletePlayer, show404);

// Only for AJAX
Router.post('/teams/validate', teamController.validateTeam);

Router.route('/teams/:id/players');


Router.get('/:team/edit', teamController.showOne, teamViewController.updateTeam);
Router.get('/:id/:team/players', playerController.showAll, playerViewController.showAll);
Router.get('/players/:id/edit', playerController.showOne, playerViewController.updatePlayer);
Router.get('/teams/new', teamViewController.createTeam);
Router.get('/:name/:id/new', playerViewController.createPlayer);

Router.put('/:id/players', playerController.updatePlayer);

Router.post('/:id/:team/new', playerController.createPlayer);

Router.delete('/teams/:id/delete', teamController.deleteTeam);
Router.delete('/player/:name/:id/delete', playerController.deletePlayer);

Router.use(show404);
Router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = Router;
