const db = require('../models/players');

function showAll(req, res, next) {
  db.allPlayers(req.params.id)
    .then((players) => {
      res.locals.players = players;
      next();
    })
    .catch(next);
}

function showOne(req, res, next) {
  db.onePlayer(req.params.id)
    .then((player) => {
      res.locals.data = player;
      next();
    })
    .catch(next);
}

function createPlayer(req, res, next) {
  db.createPlayer(req.body)
    .then(() => {
      res.locals.redirect = `/teams/${req.body.id}/players`;
      next();
    })
    .catch(next);
}

function updatePlayer(req, res, next) {
  db.updatePlayer(req.body)
    .then(() => {
      res.locals.redirect = `/teams/${req.params.id}/players`;
      next();
    })
    .catch(next);
}

function deletePlayer(req, res, next) {
  db.deletePlayer(req.params.id)
    .then(() => {
      res.locals.redirect = `/teams/${req.query.team_id}/players`;
      next();
    })
    .catch(next);
}
module.exports = {
  showAll,
  showOne,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
