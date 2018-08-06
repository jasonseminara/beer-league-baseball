const db = require('../models/players');

function showAll(req, res, next) {
  db.allPlayers(req.params.team)
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
      res.redirect(`/${req.body.id}/${req.body.tname}/players`);
    });
}

function updatePlayer(req, res) {
  db.updatePlayer(req.body)
    .then(() => {
      res.redirect(`/${req.params.id}/${req.body.team}/players`);
    });
}

function deletePlayer(req, res) {
  db.deletePlayer(req.params.id)
    .then(() => {
      res.redirect(`/${req.params.id}/${req.params.name}/players`);
    });
}
module.exports = {
  showAll,
  showOne,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
