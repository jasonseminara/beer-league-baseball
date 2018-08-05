DELETE FROM teams;
DELETE FROM players;

INSERT INTO teams (tname, wins, losses) VALUES 
(
    'Yankees',
    68,
    41
),
(
    'Red Sox',
    78,
    34
),
(
    'Rays',
    56,
    56
),
(
    'Blue Jays',
    51,
    60
),
(
    'Orioles',
    34,
    78
);

INSERT INTO players (name, team_id, ab, walks, b1, b2, b3, hr, rbi, hbp, ip, er)
VALUES 
(
    'Aaron Judge',
    1,
    236,
    26,
    26,
    16, 
    2, 
    28, 
    58, 
    1, 
    8, 
    2
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
    'J.D. Martinez',
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

