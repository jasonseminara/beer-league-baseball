const db = require('../models/teams');

function showAll(req, res, next) {
  db.teamIndex()
    .then((teams) => {
      res.locals.teams = teams;
      next();
    })
    .catch(next);
}

function showOne(req, res, next) {
  db.oneTeam(req.params.id)
    .then((team) => {
      res.locals.team = team;
      next();
    })
    .catch(next);
}

function validateTeam(req, res) {
  db.validateName(req.body.name)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}

function createTeam(req, res, next) {
  db.createTeam(req.body.name)
    .then(() => {
      res.redirect('/teams');
    })
    .catch(next);
}

function updateTeam(req, res, next) {
  db.updateTeam(req.body)
    .then(() => {
      res.redirect('/teams');
    })
    .catch(next);
}

function deleteTeam(req, res) {
  db.deleteTeam(req.params.id)
    .then(() => {
      res.redirect('/teams');
    });
}

module.exports = {
  showAll,
  showOne,
  validateTeam,
  createTeam,
  updateTeam,
  deleteTeam,
};
