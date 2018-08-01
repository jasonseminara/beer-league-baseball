DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS teams;

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    wins FLOAT,
    losses FLOAT 
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    team_id INT REFERENCES teams(id),
    ab INT,
    walks INT,
    "1bs" INT,
    "2bs" INT,
    "3bs" INT,
    rbi INT,
    hbp INT,
    hr INT,
    ip FLOAT,
    er INT
)