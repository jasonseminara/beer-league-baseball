DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS teams;

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    tname VARCHAR(255) UNIQUE,
    wins FLOAT,
    losses FLOAT 
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    team_id INT REFERENCES teams(id),
    ab SMALLINT,
    walks SMALLINT,
    b1 SMALLINT,
    b2 SMALLINT,
    b3 SMALLINT,
    hr SMALLINT,
    rbi SMALLINT,
    hbp SMALLINT,
    ip SMALLINT,
    er SMALLINT
)