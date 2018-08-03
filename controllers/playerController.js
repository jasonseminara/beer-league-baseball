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
        debugger
        res.redirect(`/${req.body.id}/${req.body.tname}/players`);
    })
}

function updatePlayer(req, res, next) {
    debugger
    db.updatePlayer(req.body)
    .then(data => {
        res.redirect(`/${req.params.id}/${req.body.team}/players`);
    })
}

function deletePlayer(req, res, next) {
    debugger
    db.deletePlayer(req.params.id)
    .then(data => {
        res.redirect(`/${req.params.id}/${req.params.name}/players`);
    })
}
module.exports = {
    showAll,
    showOne,
    createPlayer,
    updatePlayer,
    deletePlayer
}