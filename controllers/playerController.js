const db = require('../models/players');

function showAll(req, res, next) {
    db.allPlayers(req.params.name)
    .then(players => {
        res.json(players);
    })
}

function showOne(req, res, next) {
    db.onePlayer(req.params.name)
    .then(player => {
        res.json(player);
    })
}

module.exports = {
    showAll,
    showOne
}