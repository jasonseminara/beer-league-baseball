const { db } = require('../config/connection');

function teamIndex() {
    return db.many(`
    SELECT * 
    FROM teams
    ORDER BY wins DESC
    `);
}

function oneTeam(name) {
    return db.one(`
    SELECT *
    FROM teams
    WHERE name = $1
    `, name)
}

function createTeam(team) {
    return db.one(`
    INSERT INTO teams (tname, wins, losses)
    VALUES ('${team}', 0, 0)
    RETURNING *
    `);
}

function updateTeam(info) {
    return db.one(`
    UPDATE teams
    SET tname = $/name/ , wins = $/wins/, losses = $/losses/
    WHERE id = $/id/
    RETURNING *
    `, info)
}

function teamIndexCalculation() {

}

module.exports = {
    teamIndex,
    oneTeam,
    createTeam,
    updateTeam,
    teamIndexCalculation,
};