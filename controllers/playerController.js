const db = require('../models/players');

function showAll(req, res, next) {
  db.allPlayers(req.params.id)
    .then((players) => {
      res.locals.players = players;
      next();
    });
}

function showOne(req, res, next) {
  db.onePlayer(req.params.id)
    .then((player) => {
      res.locals.data = player;
      next();
    });
}

function createPlayer(req, res) {
  db.createPlayer(req.body)
    .then(() => {
      res.redirect(`/teams/${req.body.id}/players`);
    });
}

function updatePlayer(req, res) {
  db.updatePlayer(req.body)
    .then(() => {
      res.redirect(`/teams/${req.params.id}/players`);
    });
}

function deletePlayer(req, res) {
  db.deletePlayer(req.params.id)
    .then(() => {
      res.redirect(`/teams/${req.query.team_id}/players`);
    });
}
module.exports = {
  showAll,
  showOne,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
