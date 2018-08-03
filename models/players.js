const { db } = require('../config/connection');

function allPlayers(team) {
    return db.query(`
    SELECT *,teams.tname, players.name, players.id
    FROM players
    JOIN teams 
    ON teams.id = players.team_id
    WHERE teams.tname = $1
    ORDER BY players.name
    `, team)
}

function onePlayer(id) {
    return db.one(`
    SELECT *, players.id
    FROM players
    JOIN teams
    ON teams.id = players.team_id
    WHERE players.id = $1
    `, id)
}

function createPlayer(player) {
    return db.one(`
    INSERT INTO players (name, team_id, ab, walks, b1, b2, b3, hr, rbi, hbp, ip, er)
    VALUES ('${player.name}', ${player.id}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    Returning *
    `)
}


function updatePlayer(info) {
    return db.one(`
    UPDATE players
    SET name = '${info.name}', ab = ab+${info.ab}, walks = walks+${info.bb}, b1 = b1+${info.b1}, hr = hr+${info.hr},rbi = rbi+${info.rbi}, hbp = hbp+${info.hbp}, ip = ip+${info.ip}, er = er+${info.er},
    b2 = b2+${info.b2}, b3 = b3+${info.b3}
    WHERE id = ${info.id}
    RETURNING *
    `)
}

function deletePlayer(id) {
    return db.none(`
    DELETE FROM players
    WHERE id = $1
    `, id)
}

module.exports = {
    allPlayers,
    onePlayer,
    createPlayer,
    updatePlayer,
    deletePlayer
}