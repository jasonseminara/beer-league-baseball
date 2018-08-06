const { db } = require('../config/connection');

// Calculations for avg,obp,slg and ops done directly in SQL
function allPlayers(team) {
  return db.query(`
    SELECT *,teams.tname, players.name, players.id,
    round(coalesce((b1+b2+b3+hr)/nullif(ab,0),0)::decimal,3) ba,
    (b1+b2+b3+hr) hits,
    round(coalesce((b1+b2+b3+hr+walks+hbp)/nullif((ab+walks+hbp),0),0)::decimal,3) obp,
    round(coalesce((b1+(b2*2)+(b3*3)+(hr*4))/nullif(ab,0),0)::decimal,3) slg,
    (round(coalesce((b1+b2+b3+hr+walks+hbp)/nullif((ab+walks+hbp),0),0)::decimal,3))+(round(coalesce((b1+(b2*2)+(b3*3)+(hr*4))/nullif(ab,0),0)::decimal,3)) ops,
    round(coalesce((9*er)/nullif((ip/3),0),0)::decimal,2) era
    FROM players
    JOIN teams 
    ON teams.id = players.team_id
    WHERE teams.tname = $1
    ORDER BY players.name
    `, team);
}
function onePlayer(id) {
  return db.one(`
    SELECT *, players.id
    FROM players
    JOIN teams
    ON teams.id = players.team_id
    WHERE players.id = $1
    `, id);
}

function createPlayer(player) {
  return db.one(`
    INSERT INTO players (name, team_id, ab, walks, b1, b2, b3, hr, rbi, hbp, ip, er)
    VALUES ('${player.name}', ${player.id}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    Returning *
    `);
}

function updatePlayer(info) {
  return db.one(`
    UPDATE players
    SET name = '${info.name}', ab = ab+${info.ab}, walks = walks+${info.bb}, b1 = b1+${info.b1}, hr = hr+${info.hr},rbi = rbi+${info.rbi}, hbp = hbp+${info.hbp}, ip = ip+${info.ip}, er = er+${info.er},
    b2 = b2+${info.b2}, b3 = b3+${info.b3}
    WHERE id = ${info.id}
    RETURNING *
    `);
}

function deletePlayer(id) {
  return db.none(`
    DELETE FROM players
    WHERE id = $1
    `, id);
}

module.exports = {
  allPlayers,
  onePlayer,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
