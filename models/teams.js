const { db } = require('../config/connection');

function teamIndex() {
    return db.many(`
    SELECT *, 
    round(coalesce(wins/nullif(wins+losses,0),0)::decimal,3) pct
    FROM teams
    ORDER BY pct DESC;
    `);
}

function oneTeam(name) {
    return db.one(`
    SELECT *
    FROM teams
    WHERE tname = $1
    `, name)
}

function validateName(name) {
    return db.none(`
    SELECT *
    FROM teams 
    WHERE tname = $1
    `, name)
}

function createTeam(team) {
    return db.one(`
    INSERT INTO teams (tname, wins, losses)
    VALUES ($1, 0, 0)
    RETURNING *
    `,team);
}

function updateTeam(info) {
    return db.one(`
    UPDATE teams
    SET tname = $/name/ , wins = wins+${info.wins}, losses = losses+${info.losses}
    WHERE id = $/id/
    RETURNING *
    `, info)
}

function deleteTeam(id) {
    return db.none(`
    DELETE FROM teams
    WHERE id = $1
`, id)
}

module.exports = {
    teamIndex,
    oneTeam,
    validateName,
    createTeam,
    updateTeam,
    deleteTeam
};