const { db } = require('../config/connection');

// Calculations for avg,obp,slg and ops done directly in SQL
function allPlayers(id) {
  return db.query(`
    SELECT *,teams.tname, players.name, players.id,
    round(coalesce((b1+b2+b3+hr)/nullif(ab,0),0)::decimal,3) ba,
    (b1+b2+b3+hr) hits,
    round(coalesce((b1+b2+b3+hr+walks+hbp)/nullif((ab+walks+hbp),0),0)::decimal,3) obp,
    round(coalesce((b1+(b2*2)+(b3*3)+(hr*4))/nullif(ab,0),0)::decimal,3) slg,
    (round(coalesce((b1+b2+b3+hr+walks+hbp)/nullif((ab+walks+hbp),0),0)::decimal,3))+(round(coalesce((b1+(b2*2)+(b3*3)+(hr*4))/nullif(ab,0),0)::decimal,3)) ops,
    FLOOR(ip/3) ips,
    ip % 3 outs,
    round(coalesce((9*er)/nullif((ip/3),0),0)::decimal,2) era
    FROM players
    JOIN teams 
    ON teams.id = players.team_id
    WHERE teams.id = $1
    ORDER BY players.name
    `, id);
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
    VALUES ($/name/, $/id/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    Returning *
    `, player);
}

function updatePlayer(info) {
  return db.one(`
    UPDATE players
    SET name = $/name/, ab = ab+$/ab/, walks = walks+$/bb/, b1 = b1+$/b1/, hr = hr+$/hr/,rbi = rbi+$/rbi/, 
    hbp = hbp+$/hbp/, ip = ip+$/ip/, er = er+$/er/, b2 = b2+$/b2/, b3 = b3+$/b3/
    WHERE id = $/id/
    RETURNING *
    `, info);
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
