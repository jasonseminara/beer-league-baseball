DELETE FROM teams;
DELETE FROM players;

INSERT INTO teams (name, wins, losses) VALUES 
(
    'Yankees',
    68,
    38
),
(
    'Mets',
    44,
    61
);

INSERT INTO players (name, team_id) VALUES
(
    'Aaron Judge',
    1
),
(
    'Didi Gregorius',
    1
),
(
    'Noah Syndergaard',
    2
)

