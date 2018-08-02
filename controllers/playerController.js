const db = require('../models/players');

function showAll(req, res, next) {
    db.allPlayers(req.params.team)
    .then(players => {
        console.log(players);
        res.locals.players = players;
        next();
    })
}

function showOne(req, res, next) {
    debugger
    db.onePlayer(req.params.id)
    .then(player => {
        console.log(player);
        res.locals.data = player;
        next();
    })
}

function createPlayer(req, res, next) {
    db.createPlayer(req.body)
    .then(player => {
        res.redirect(`/teams`);
    })
}

function updatePlayer(req, res, next) {
    db.updatePlayer(req.body)
    .then(data => {
        res.redirect('/teams');
    })
}

function deletePlayer(req, res, next) {
    db.deletePlayer(req.body.id)
    .then(data => {
        res.redirect('/teams');
    })
}
module.exports = {
    showAll,
    showOne,
    createPlayer,
    updatePlayer,
    deletePlayer
}