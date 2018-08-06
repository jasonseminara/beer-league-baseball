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

Router.route('/players')
.delete(playerController.deletePlayer, show404);

//Only for AJAX
Router.post('/teams/validate', teamController.validateTeam);


Router.get('/:team/update', teamController.showOne, teamViewController.updateTeam,show404);
Router.get('/:id/:team/players', playerController.showAll, playerViewController.showAll,show404);
Router.get('/players/:id/update',playerController.showOne, playerViewController.updatePlayer,show404);
Router.get('/teams/create', teamViewController.createTeam, show404);
Router.get('/:name/:id/create', playerViewController.createPlayer,show404);

Router.put('/:id/players',playerController.updatePlayer, show404);

Router.post('/:id/:team/create', playerController.createPlayer, show404);

Router.delete('/teams/:id/delete',teamController.deleteTeam, show404);
Router.delete('/player/:name/:id/delete', playerController.deletePlayer, show404);


module.exports = Router;