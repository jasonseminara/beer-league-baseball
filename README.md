# Beer League Baseball

![screen shot 2018-08-06 at 6 05 00 pm](https://user-images.githubusercontent.com/30534934/43743327-4e32b1ba-99a3-11e8-953b-af8009f973a0.png)

This web application is for amateur baseball leagues to keep track of their team standings and player statistics.

### Overview

This application was built using the express framework in node.js. I used PG-Promise to query the database and EJS to render the web pages. The styling is done with the Bulma CSS framework.

I wanted to store all the raw stats in the database and then calculate all the averages using those numbers. All the calculations are done in SQL and then displayed from my EJS. Here is the function using PG-Promise to pull all the calculations from the database. 

```
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
```
You can create, edit and delete teams. When a teams record is updated, the Winning Percentage is automatically calculated and displayed in the table.

When you select a team all the players on that team are displayed. You can then update the stats for the player and the new stats and averages will be updated in the table.

### Technologies Used

To create this web app some external technologies and packages were used. I used npm packages Express, Morgan, EJS, Body-Parser, Method-Override, PG-Promise, ES-Lint and Nodemon. I used the Bulma CSS framework to style my pages and set up the tables. The code is written in accordance with the AirBnb style guide.

My instructor Jason Seminara helped me with the SQL queries and the code to validate a team name and make sure it's not a duplicate.

### User Stories

As the commissioner of a baseball league I would like to be able to  create, update and delete if necessary teams and players throughout the season.

As the relative of somebody playing in a baseball league I would like to be able to see the league standings and statistics of all the players.

### Wireframe
![20180731_174218](https://user-images.githubusercontent.com/30534934/43743083-6df40572-99a2-11e8-9a36-112bd76e3d0d.jpg)

### ERD

![20180731_172534](https://user-images.githubusercontent.com/30534934/43743107-82892364-99a2-11e8-8608-4c7989d26f7e.jpg)

### Future Plans

I plan to add Authentication in the future so you will need to log in and have admin permissions to edit a team or player.
