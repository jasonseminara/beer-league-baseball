const db = require('../models/teams');

function showAll(req, res, next) {
    db.teamIndex()
    .then(teams => {
        res.json(teams);
        res.locals.teams = teams;
        next();
    })
    .catch(e => next(e));
}

function showOne(req, res, next) {
    db.oneTeam(req.params.name)
    .then(team => {
        res.json(team);
        res.locals.team = team;
        next();
    })
    .catch(e => next(e));
}

function createTeam(req, res, next) {
    db.createTeam(req.body.name)
    .then(team => {
        res.json(team);
    })
    .catch(e => next(e));
}

module.exports = {
    showAll,
    showOne,
    createTeam
}