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

module.exports = {
    showAll
}