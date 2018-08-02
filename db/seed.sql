DELETE FROM teams;
DELETE FROM players;

INSERT INTO teams (tname, wins, losses) VALUES 
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

INSERT INTO players (name, team_id, ab, walks, b1, b2, b3, hr, rbi, hbp, ip, er)
VALUES 
(
    'Aaron Judge',
    1,
    11,
    3,
    0,
    2, 
    1, 
    1, 
    4, 
    0, 
    0, 
    0
),
(
    'Didi Gregorius',
    1,
    0,
    0,
    0,
    0, 
    0, 
    0, 
    0, 
    0, 
    0, 
    0
),
(
    'Noah Syndergaard',
    2, 
    0,
    0,
    0,
    0, 
    0, 
    0, 
    0, 
    0, 
    0, 
    0
)

