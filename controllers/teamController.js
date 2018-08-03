const db = require('../models/teams');

function showAll(req, res, next) {
    db.teamIndex()
    .then(teams => {
        res.locals.teams = teams;
        next();
    })
    .catch(e => next(e));
}

function showOne(req, res, next) {
    db.oneTeam(req.params.team)
    .then(team => {
        res.locals.team = team;
        next();
    })
    .catch(e => next(e));
}

function createTeam(req, res, next) {
    db.createTeam(req.body.name)
    .then(team => {
        res.redirect('/teams');
    })
    .catch(e => next(e));
}

function updateTeam(req, res, next) {
    db.updateTeam(req.body)
    .then(info => {
        res.redirect('/teams');
    })
    .catch(e => next(e));
}

function deleteTeam(req,res, next) {
    db.deleteTeam(req.params.id)
    .then(info => {
        res.redirect('/teams');
    })
}

module.exports = {
    showAll,
    showOne,
    createTeam,
    updateTeam,
    deleteTeam
}