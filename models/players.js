const { db } = require('../config/connection');

function allPlayers(team) {
    return db.many(`
    SELECT players.name
    FROM players
    JOIN teams 
    ON teams.id = players.team_id
    WHERE teams.name = $1
    `, team)
}

function onePlayer(player) {
    return db.one(`
    SELECT *
    FROM players
    WHERE name = $1
    `, player)
}

module.exports = {
    allPlayers,
    onePlayer
}